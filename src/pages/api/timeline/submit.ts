/**
 * Timeline Form Submission Endpoint
 * 
 * Receives POST from Webflow form and writes to CMS.
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
  
  return new Response(JSON.stringify({
    message: 'Timeline API is working! Use POST to submit data.',
    timestamp: new Date().toISOString(),
    config: {
      hasWriteToken,
      hasReadToken,
      hasCollectionId,
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

    const baseApiUrl = locals?.runtime?.env?.WEBFLOW_API_HOST || 
                       import.meta.env.WEBFLOW_API_HOST;
    
    console.log('🌐 API Base URL:', baseApiUrl || 'default (api.webflow.com)');
    
    const client = new WebflowClient({
      accessToken: token,
      ...(baseApiUrl && { baseUrl: baseApiUrl })
    });

    // Parse form data
    const formData = await request.formData();
    
    const formEntries = Object.fromEntries(formData.entries());
    console.log('📋 Form Data Received:', formEntries);
    console.log('📋 Form Data Keys:', Object.keys(formEntries));
    
    // Get collection ID from form or environment variable
    const collectionIdFromEnv = locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                                import.meta.env.TIMELINE_COLLECTION_ID;
    
    const collectionIdFromForm = formData.get('collectionId') as string;
    
    const collectionId = collectionIdFromForm || collectionIdFromEnv;
    
    console.log('📁 Collection ID Sources:', {
      fromEnv: collectionIdFromEnv || 'NOT SET',
      fromForm: collectionIdFromForm || 'NOT PROVIDED',
      finalValue: collectionId || 'MISSING'
    });
    
    if (!collectionId) {
      console.error('❌ Missing TIMELINE_COLLECTION_ID');
      console.error('❌ Please set TIMELINE_COLLECTION_ID environment variable in Webflow Cloud');
      return new Response(JSON.stringify({ 
        success: false,
        error: 'Missing collection ID - set TIMELINE_COLLECTION_ID in Webflow Cloud environment variables' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate collection ID format (should be 24 hex characters)
    if (!/^[0-9a-f]{24}$/i.test(collectionId)) {
      console.error('❌ Invalid collection ID format:', collectionId);
      console.error('❌ Expected 24 hex characters, got:', collectionId.length, 'characters');
      return new Response(JSON.stringify({ 
        success: false,
        error: `Invalid collection ID format: ${collectionId}` 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate slug from timeline name
    const timelineName = formData.get('timeline_name') as string || 
                        formData.get('event-name-main') as string ||
                        formData.get('name') as string || '';
    
    console.log('📝 Timeline Name:', timelineName);
    
    const slug = timelineName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 
      `timeline-${Date.now()}`;
    
    console.log('🔗 Generated Slug:', slug);

    // Generate 6-character alphanumeric edit code
    const editCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    console.log('🔐 Edit Code:', editCode);

    // Get the max event-number to increment it
    let nextEventNumber = 1;
    try {
      console.log('🔢 Fetching existing items to determine next event number...');
      const existingItems = await client.collections.items.listItemsLive(collectionId, {
        limit: 100,
        offset: 0
      });
      
      console.log('📊 Existing Items Count:', existingItems.items?.length || 0);
      
      if (existingItems.items && existingItems.items.length > 0) {
        const maxId = existingItems.items.reduce((max, item) => {
          const itemId = item.fieldData['event-number'] as number || 0;
          return Math.max(max, itemId);
        }, 0);
        nextEventNumber = maxId + 1;
      }
    } catch (error) {
      console.error('⚠️ Error getting max event-number, using 1:', error);
    }
    
    console.log('🔢 Next Event Number:', nextEventNumber);

    // Determine if event number is even or odd
    const isEven = nextEventNumber % 2 === 0;
    console.log('🔢 Is Even:', isEven);

    // Parse the timeline date using flexible date parser
    const monthYearInput = formData.get('month-year') as string || 
                          formData.get('timeline_date') as string || 
                          formData.get('date-added') as string || '';
    
    const timelineDate = parseDateOrDefault(monthYearInput);
    
    console.log('📅 Date Parsing:', { 
      input: monthYearInput, 
      output: timelineDate,
      formatted: new Date(timelineDate).toLocaleDateString()
    });

    // Get event type (if provided)
    const eventType = formData.get('timeline_type') as string || 
                     formData.get('event-type') as string ||
                     '';
    console.log('🏷️ Event Type:', eventType || 'none');

    // Get origin (default to 'webflow')
    const origin = formData.get('origin') as string || 'webflow';
    console.log('🌍 Origin:', origin);

    // Extract image data from hidden fields
    const photo1Url = formData.get('photo1_url') as string || '';
    const photo1Alt = formData.get('photo1_alt') as string || '';
    
    const photo2Url = formData.get('photo2_url') as string || '';
    const photo2Alt = formData.get('photo2_alt') as string || '';
    
    console.log('🖼️ Images:', {
      photo1: photo1Url ? `Yes (${photo1Url.substring(0, 50)}...)` : 'No',
      photo2: photo2Url ? `Yes (${photo2Url.substring(0, 50)}...)` : 'No'
    });

    // Build CMS field data - using the actual field names from the collection
    const fieldData: Record<string, any> = {
      // Required fields
      'name': timelineName, // timeline_name (required)
      'slug': slug, // slug (required)
      
      // Event identification
      'event-number': nextEventNumber, // timeline_id
      'even-number': isEven, // timeline_id_even_odd
      
      // Date fields
      'date': new Date().toISOString(), // date_added (when entry was created)
      'date-added': timelineDate, // timeline_date (actual event date)
      
      // Event details
      'event-name': formData.get('timeline_name_line_1') as string || '', // timeline_name_line_1
      'event-name-main': formData.get('timeline_name_line_2') as string || timelineName, // timeline_name_line_2
      'description': formData.get('memory') as string || formData.get('timeline_detail') as string || '', // timeline-detail
      'event-type': eventType, // timeline_type
      
      // Location - CORRECTED FIELD NAME
      'timeline-location': formData.get('location') as string || formData.get('timeline_location') as string || '', // timeline_location
      
      // User information
      'full-name': formData.get('name') as string || formData.get('full_name') as string || '', // full_name
      'email': formData.get('email') as string || '', // email
      'posted-by-user-name': formData.get('posted_by_name') as string || formData.get('name') as string || formData.get('full_name') as string || '', // posted_by_name
      
      // Image fields
      'photo-1': photo1Url ? {
        url: photo1Url,
        alt: photo1Alt || 'Timeline photo 1'
      } : undefined,
      'photo-2': photo2Url ? {
        url: photo2Url,
        alt: photo2Alt || 'Timeline photo 2'
      } : undefined,
      
      // Metadata
      'origin': origin, // origin (facebook or webflow)
      'edit-code': editCode, // edit-code (6-character code)
      'permalink': '', // timeline-permalink (can be populated later)
      
      // Status flags
      'synced': false, // timeline_sync
      'approved': false, // approved (needs manual approval)
      'active': true, // active
      '_archived': false,
      '_draft': false,
    };

    // Remove undefined fields
    Object.keys(fieldData).forEach(key => 
      fieldData[key] === undefined && delete fieldData[key]
    );

    console.log('📤 CMS Field Data:', JSON.stringify(fieldData, null, 2));

    console.log('🚀 Creating CMS item...');
    
    // Create item in CMS
    const response = await client.collections.items.createItem(
      collectionId,
      { fieldData }
    );

    console.log('✅ CMS item created:', response.id);
    console.log('📋 CMS Response:', JSON.stringify(response, null, 2));

    // Publish the item immediately so it appears in live queries
    if (response.id) {
      try {
        console.log('📢 Publishing item...');
        await client.collections.items.publishItem(collectionId, response.id);
        console.log('✅ Timeline item published successfully:', response.id);
      } catch (publishError) {
        console.error('⚠️ Error publishing timeline item:', publishError);
        // Continue anyway - item is created even if publish fails
      }
    }

    // Redirect back to timeline page with cache-busting timestamp
    const timestamp = Date.now();
    const redirectUrl = `https://patricia-lanning.webflow.io/timeline?success=true&id=${nextEventNumber}&editCode=${editCode}&t=${timestamp}`;
    
    console.log('🔄 Redirecting to:', redirectUrl);
    console.log('============================================');
    console.log('✅ Timeline Submission Complete');
    console.log('============================================\n');
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': redirectUrl
      }
    });

  } catch (error: any) {
    console.error('============================================');
    console.error('❌ Timeline form submission error');
    console.error('============================================');
    console.error('Error:', error);
    console.error('Error Message:', error.message);
    console.error('Error Stack:', error.stack);
    console.error('============================================\n');
    
    // Redirect to timeline page with error and cache-busting timestamp
    const timestamp = Date.now();
    const redirectUrl = `https://patricia-lanning.webflow.io/timeline?error=true&message=${encodeURIComponent(error.message || 'Unknown error')}&t=${timestamp}`;
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': redirectUrl
      }
    });
  }
};
