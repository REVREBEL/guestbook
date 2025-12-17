/**
 * Timeline Form Submission Endpoint
 * 
 * Receives POST from Webflow form with file uploads
 * 1. Uploads files to R2 using Webflow Cloud's automatic binding
 * 2. Creates CMS item with data + image URLs
 * 3. Publishes item
 * 4. Returns JSON response (no redirect - let Webflow form handle it)
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';
import { parseDateOrDefault } from '../../../lib/date-parser';

// Handle both GET and POST for debugging
export const GET: APIRoute = async ({ locals }) => {
  const hasWriteToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                           import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE);
  const hasReadToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                          import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN);
  const hasCollectionId = !!(locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                             import.meta.env.TIMELINE_COLLECTION_ID);
  const hasR2Bucket = !!locals?.runtime?.env?.R2_BUCKET;
  
  return new Response(JSON.stringify({
    message: 'Timeline API is working! Use POST to submit data with file uploads.',
    timestamp: new Date().toISOString(),
    config: {
      hasWriteToken,
      hasReadToken,
      hasCollectionId,
      hasR2Bucket,
      r2BucketBinding: hasR2Bucket ? 'CONNECTED' : 'NOT_CONNECTED',
      collectionId: locals?.runtime?.env?.TIMELINE_COLLECTION_ID || import.meta.env.TIMELINE_COLLECTION_ID || 'NOT SET'
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  console.log('============================================');
  console.log('📥 Timeline Form Submission Received');
  console.log('============================================');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Request URL:', request.url);
  console.log('Request Method:', request.method);
  console.log('Content-Type:', request.headers.get('content-type'));
  
  try {
    // Get API credentials - use the WRITE token
    const writeToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                       import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE;
    
    const readToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                      import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    
    const token = writeToken || readToken;
    
    console.log('🔑 Token Check:', {
      hasWriteToken: !!writeToken,
      hasReadToken: !!readToken,
      usingToken: writeToken ? 'write' : (readToken ? 'read' : 'none')
    });
    
    if (!token) {
      console.error('❌ Missing API token');
      return new Response(JSON.stringify({ 
        success: false,
        error: 'Missing API token' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get R2 bucket binding from Webflow Cloud
    const r2Bucket = locals?.runtime?.env?.R2_BUCKET;
    const hasR2 = !!r2Bucket;

    // Get public URL for R2 bucket
    const r2PublicDomain = locals?.runtime?.env?.R2_PUBLIC_DOMAIN || 
                          locals?.runtime?.env?.R2_PUBLIC_URL ||
                          `https://${locals?.runtime?.env?.CLOUDFLARE_ACCOUNT_ID || 'pub'}.r2.dev`;

    console.log('☁️ R2 Bucket:', {
      hasBinding: hasR2,
      bindingName: 'R2_BUCKET',
      publicDomain: r2PublicDomain,
      status: hasR2 ? 'CONNECTED' : 'NOT_AVAILABLE'
    });

    const baseApiUrl = locals?.runtime?.env?.WEBFLOW_API_HOST || 
                       import.meta.env.WEBFLOW_API_HOST;
    
    console.log('🌐 API Base URL:', baseApiUrl || 'default (api.webflow.com)');
    
    const client = new WebflowClient({
      accessToken: token,
      ...(baseApiUrl && { baseUrl: baseApiUrl })
    });

    // Parse form data
    const formData = await request.formData();
    
    // Log form data (but not files)
    const formEntries: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        formEntries[key] = { fileName: value.name, size: value.size, type: value.type };
      } else {
        formEntries[key] = value;
      }
    }
    console.log('📋 Form Data Received:', formEntries);
    console.log('📋 Form Data Keys:', Array.from(formData.keys()));
    
    // Get collection ID
    const collectionId = locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                        import.meta.env.TIMELINE_COLLECTION_ID;
    
    console.log('📁 Collection ID:', collectionId || 'MISSING');
    
    if (!collectionId) {
      throw new Error('Missing TIMELINE_COLLECTION_ID environment variable');
    }

    if (!/^[0-9a-f]{24}$/i.test(collectionId)) {
      throw new Error(`Invalid collection ID format: ${collectionId}`);
    }

    // Extract timeline name
    const timelineLine1 = formData.get('timeline_name_line_1') as string || '';
    const timelineLine2 = formData.get('timeline_name_line_2') as string || '';
    const timelineName = timelineLine1 || timelineLine2 || 
                        formData.get('name') as string || 
                        'Untitled Event';
    
    console.log('📝 Timeline Name:', timelineName);
    
    const slug = (timelineName.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 
      `timeline-${Date.now()}`) + `-${Date.now().toString().slice(-6)}`;
    
    console.log('🔗 Generated Slug:', slug);

    // Generate 6-character alphanumeric edit code
    const editCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    console.log('🔐 Edit Code:', editCode);

    // Get the max event-number (timeline_id) to increment it
    let nextEventNumber = 1;
    try {
      console.log('🔢 Fetching ALL items to find max timeline_id...');
      let allItems: any[] = [];
      let offset = 0;
      const limit = 100;
      
      while (true) {
        const batch = await client.collections.items.listItems(collectionId, {
          limit,
          offset
        });
        
        if (batch.items && batch.items.length > 0) {
          allItems = allItems.concat(batch.items);
          console.log(`   Fetched ${batch.items.length} items (offset ${offset})`);
          
          if (batch.items.length < limit) break;
          offset += limit;
        } else {
          break;
        }
      }
      
      console.log(`📊 Total Items Found: ${allItems.length}`);
      
      if (allItems.length > 0) {
        const maxId = allItems.reduce((max, item) => {
          const itemId = item.fieldData['event-number'] as number || 0;
          return Math.max(max, itemId);
        }, 0);
        nextEventNumber = maxId + 1;
        console.log(`   Current max timeline_id: ${maxId}`);
      }
    } catch (error) {
      console.error('⚠️ Error getting max event-number:', error);
      console.log('   Defaulting to 1');
    }
    
    console.log('🔢 Next Event Number (timeline_id):', nextEventNumber);

    // Determine if event number is even or odd
    const isEven = nextEventNumber % 2 === 0;
    console.log('🔢 Is Even (timeline_id_even_odd):', isEven);

    // Parse the timeline date
    const monthYearInput = formData.get('month-year') as string || 
                          formData.get('timeline_date') as string || 
                          formData.get('date-added') as string || '';
    
    const timelineDate = parseDateOrDefault(monthYearInput);
    
    console.log('📅 Date Parsing:', { 
      input: monthYearInput, 
      output: timelineDate,
      formatted: new Date(timelineDate).toLocaleDateString()
    });

    // Get event type
    const eventType = formData.get('timeline_type') as string || 
                     formData.get('event-type') as string || '';
    console.log('🏷️ Event Type:', eventType || 'none');

    // Process file uploads to R2 using Webflow Cloud binding
    const uploadedImages: Array<{ url: string; alt: string } | null> = [null, null];
    
    const fileFields = ['fileToUpload1', 'fileToUpload2'];
    
    if (hasR2) {
      for (let i = 0; i < fileFields.length; i++) {
        const fieldName = fileFields[i];
        const file = formData.get(fieldName);
        
        if (file && file instanceof File && file.size > 0) {
          console.log(`📤 Processing ${fieldName}:`, {
            name: file.name,
            size: file.size,
            type: file.type
          });
          
          try {
            // Generate unique key for R2 storage
            const timestamp = Date.now();
            const randomString = Math.random().toString(36).substring(2, 8);
            const fileExtension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
            const fileKey = `timeline-images/${timestamp}-${randomString}.${fileExtension}`;
            
            console.log(`   Uploading to R2: ${fileKey}`);
            
            // Convert file to buffer
            const arrayBuffer = await file.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);
            
            // Upload to R2 using Webflow Cloud binding
            await r2Bucket.put(fileKey, buffer, {
              httpMetadata: {
                contentType: file.type || 'image/jpeg',
              },
            });
            
            // Construct public URL using the R2 public domain
            const imageUrl = `${r2PublicDomain}/${fileKey}`;
            
            console.log(`   ✅ Uploaded to R2: ${fileKey}`);
            
            uploadedImages[i] = {
              url: imageUrl,
              alt: file.name
            };
          } catch (uploadError: any) {
            console.error(`❌ Failed to upload ${fieldName}:`, uploadError);
            console.error('   Error:', uploadError.message);
          }
        } else {
          console.log(`   No file for ${fieldName}`);
        }
      }
    } else {
      console.log('⚠️ R2 bucket not available - skipping image uploads');
      console.log('   Images will not be attached to the timeline entry');
    }

    console.log('🖼️ Images Uploaded:', {
      photo1: uploadedImages[0] ? uploadedImages[0].url.substring(0, 60) + '...' : 'none',
      photo2: uploadedImages[1] ? uploadedImages[1].url.substring(0, 60) + '...' : 'none'
    });

    // Build CMS field data
    const fieldData: Record<string, any> = {
      // Required fields
      'name': timelineName,
      'slug': slug,
      
      // Event identification
      'event-number': nextEventNumber, // timeline_id
      'even-number': isEven, // timeline_id_even_odd
      
      // Date fields
      'date': new Date().toISOString(), // date_added (when entry was created)
      'date-added': timelineDate, // timeline_date (actual event date)
      
      // Event details
      'event-name': timelineLine1,
      'event-name-main': timelineLine2 || timelineName,
      'description': formData.get('timeline_detail') as string || formData.get('memory') as string || '',
      'event-type': eventType,
      
      // Location
      'timeline-location': formData.get('timeline_location') as string || formData.get('location') as string || '',
      
      // User information
      'full-name': formData.get('full_name') as string || formData.get('name') as string || '',
      'email': formData.get('email') as string || '',
      'posted-by-user-name': formData.get('full_name') as string || formData.get('name') as string || '',
      
      // Images from R2
      ...(uploadedImages[0] && {
        'photo-1': {
          url: uploadedImages[0].url,
          alt: uploadedImages[0].alt || 'Timeline photo 1'
        }
      }),
      ...(uploadedImages[1] && {
        'photo-2': {
          url: uploadedImages[1].url,
          alt: uploadedImages[1].alt || 'Timeline photo 2'
        }
      }),
      
      // Metadata - SET AS REQUIRED
      'origin': 'webflow', // ALWAYS webflow
      'edit-code': editCode,
      'permalink': '',
      
      // Status flags - SET AS REQUIRED
      'synced': false,
      'approved': true, // SET TO TRUE as required
      'active': true, // SET TO TRUE as required
      '_archived': false,
      '_draft': false, // NOT draft - will be published
    };

    console.log('📤 CMS Field Data:', {
      name: fieldData.name,
      slug: fieldData.slug,
      'event-number (timeline_id)': fieldData['event-number'],
      'even-number (timeline_id_even_odd)': fieldData['even-number'],
      origin: fieldData.origin,
      approved: fieldData.approved,
      active: fieldData.active,
      hasPhoto1: !!fieldData['photo-1'],
      hasPhoto2: !!fieldData['photo-2'],
    });

    console.log('🚀 Creating CMS item...');
    
    // Create item in CMS
    const response = await client.collections.items.createItem(
      collectionId,
      { fieldData }
    );

    console.log('✅ CMS item created with ID:', response.id);
    console.log('📋 CMS Response Summary:', {
      id: response.id,
      slug: response.fieldData?.slug,
      isDraft: response.isDraft,
      hasPhoto1: !!(response.fieldData as any)?.['photo-1'],
      hasPhoto2: !!(response.fieldData as any)?.['photo-2'],
    });

    // Publish the item to make it live
    if (response.id) {
      try {
        console.log('📢 Publishing item to LIVE...');
        await client.collections.items.publishItem(collectionId, {
          itemIds: [response.id]
        });
        console.log('✅ Timeline item published successfully (now LIVE)');
      } catch (publishError: any) {
        console.error('⚠️ Error publishing timeline item:', publishError);
        console.error('   Error message:', publishError.message);
        // Continue - item is created even if publish fails
      }
    }

    console.log('============================================');
    console.log('✅ Timeline Submission Complete');
    console.log('============================================\n');
    
    // Return JSON response - let Webflow form handle redirect
    return new Response(JSON.stringify({
      success: true,
      data: {
        id: response.id,
        slug: response.fieldData?.slug,
        eventNumber: nextEventNumber,
        editCode: editCode,
        hasImages: {
          photo1: !!uploadedImages[0],
          photo2: !!uploadedImages[1]
        }
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('============================================');
    console.error('❌ Timeline form submission error');
    console.error('============================================');
    console.error('Error:', error);
    console.error('Error Message:', error.message);
    console.error('Error Stack:', error.stack);
    console.error('============================================\n');
    
    // Return JSON error - let Webflow form handle it
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Unknown error',
      details: error.stack
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
