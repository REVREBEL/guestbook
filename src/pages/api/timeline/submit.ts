/**
 * Timeline Form Submission Endpoint
 * 
 * Complete Webflow Assets + CMS Workflow:
 * 1. Upload images to Webflow Assets API
 * 2. Get asset IDs back
 * 3. Create CMS item with asset references
 * 4. Publish item
 * 5. Redirect back to form page
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';
import { parseDateOrDefault } from '../../../lib/date-parser';
import crypto from 'crypto';

// Convert camelCase SDK keys to S3 expected format
function convertToS3FieldName(camelCase: string): string {
  const mapping: Record<string, string> = {
    'xAmzAlgorithm': 'X-Amz-Algorithm',
    'xAmzCredential': 'X-Amz-Credential',
    'xAmzDate': 'X-Amz-Date',
    'xAmzSignature': 'X-Amz-Signature',
    'successActionStatus': 'success_action_status',
    'contentType': 'Content-Type',
    'cacheControl': 'Cache-Control',
    'policy': 'Policy',
    'acl': 'acl',
    'bucket': 'bucket',
    'key': 'key'
  };
  return mapping[camelCase] || camelCase;
}

// Handle GET for debugging
export const GET: APIRoute = async ({ locals }) => {
  const hasWriteToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                           import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE);
  const hasReadToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                          import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN);
  const hasCollectionId = !!(locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                             import.meta.env.TIMELINE_COLLECTION_ID);
  const hasSiteId = !!(locals?.runtime?.env?.WEBFLOW_SITE_ID ||
                       import.meta.env.WEBFLOW_SITE_ID);
  
  return new Response(JSON.stringify({
    message: 'Timeline API is working! Use POST to submit data with file uploads.',
    timestamp: new Date().toISOString(),
    config: {
      hasWriteToken,
      hasReadToken,
      hasCollectionId,
      hasSiteId
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request, locals, url }) => {
  console.log('============================================');
  console.log('📥 Timeline Form Submission Received');
  console.log('============================================');
  console.log('Timestamp:', new Date().toISOString());
  
  try {
    // Get API credentials
    const writeToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                       import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE;
    
    const readToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                      import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    
    const token = writeToken || readToken;
    
    if (!token) {
      console.error('❌ Missing API token');
      return new Response(null, {
        status: 303,
        headers: {
          Location: `${url.pathname}?error=true&message=${encodeURIComponent('Missing API token')}`
        }
      });
    }

    const baseApiUrl = locals?.runtime?.env?.WEBFLOW_API_HOST || 
                       import.meta.env.WEBFLOW_API_HOST;
    
    const client = new WebflowClient({
      accessToken: token,
      ...(baseApiUrl && { baseUrl: baseApiUrl })
    });

    // Get Site ID for Assets API
    const siteId = locals?.runtime?.env?.WEBFLOW_SITE_ID ||
                  import.meta.env.WEBFLOW_SITE_ID;
    
    if (!siteId) {
      console.error('❌ Missing WEBFLOW_SITE_ID');
      return new Response(null, {
        status: 303,
        headers: {
          Location: `${url.pathname}?error=true&message=${encodeURIComponent('Missing site ID')}`
        }
      });
    }

    console.log('🌐 Site ID:', siteId);

    // Parse form data
    const formData = await request.formData();
    
    // Get collection ID
    const collectionId = locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                        import.meta.env.TIMELINE_COLLECTION_ID;
    
    if (!collectionId) {
      console.error('❌ Missing TIMELINE_COLLECTION_ID');
      return new Response(null, {
        status: 303,
        headers: {
          Location: `${url.pathname}?error=true&message=${encodeURIComponent('Missing collection ID')}`
        }
      });
    }

    // Extract timeline name
    const timelineLine1 = formData.get('timeline_name_line_1') as string || '';
    const timelineLine2 = formData.get('timeline_name_line_2') as string || '';
    const timelineName = timelineLine1 || timelineLine2 || 
                        formData.get('name') as string || 
                        'Untitled Event';
    
    const slug = (timelineName.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 
      `timeline-${Date.now()}`) + `-${Date.now().toString().slice(-6)}`;
    
    const editCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Get the max event-number
    let nextEventNumber = 1;
    try {
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
          if (batch.items.length < limit) break;
          offset += limit;
        } else {
          break;
        }
      }
      
      if (allItems.length > 0) {
        const maxId = allItems.reduce((max, item) => {
          const itemId = item.fieldData['event-number'] as number || 0;
          return Math.max(max, itemId);
        }, 0);
        nextEventNumber = maxId + 1;
      }
    } catch (error) {
      console.error('⚠️ Error getting max event-number:', error);
    }
    
    const isEven = nextEventNumber % 2 === 0;

    // Parse the timeline date
    const monthYearInput = formData.get('month-year') as string || 
                          formData.get('timeline_date') as string || 
                          formData.get('date-added') as string || '';
    
    const timelineDate = parseDateOrDefault(monthYearInput);

    // Get event type
    const eventType = formData.get('timeline_type') as string || 
                     formData.get('event-type') as string || '';

    // ==== UPLOAD IMAGES TO WEBFLOW ASSETS API ====
    console.log('\n🎨 Starting Webflow Asset Upload Process...');
    
    const uploadedAssets: Array<{ fileId: string; url: string; alt?: string } | null> = [null, null];
    const fileFields = ['fileToUpload1', 'fileToUpload2'];
    
    for (let i = 0; i < fileFields.length; i++) {
      const fieldName = fileFields[i];
      const file = formData.get(fieldName);
      
      if (file && file instanceof File && file.size > 0) {
        console.log(`\n📤 Processing ${fieldName}:`, {
          name: file.name,
          size: file.size,
          type: file.type
        });
        
        try {
          // Step 1: Calculate MD5 hash
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const hash = crypto.createHash('md5').update(buffer).digest('hex');
          
          console.log(`   🔒 MD5 Hash: ${hash}`);
          
          // Step 2: Create asset
          console.log(`   📝 Creating asset in Webflow...`);
          const assetResponse = await client.assets.create(siteId, {
            fileName: file.name,
            fileHash: hash
          });
          
          console.log(`   ✅ Asset created with ID: ${assetResponse.id}`);
          
          // Step 3: Upload file to S3
          console.log(`   ⬆️  Uploading file to S3...`);
          
          const uploadFormData = new FormData();
          
          // Add all upload details fields with correct S3 field names
          const details = assetResponse.uploadDetails;
          if (details) {
            const orderedFields = [
              'acl',
              'bucket',
              'xAmzAlgorithm',
              'xAmzCredential',
              'xAmzDate',
              'key',
              'policy',
              'xAmzSignature',
              'successActionStatus',
              'contentType',
              'cacheControl'
            ];
            
            orderedFields.forEach(camelKey => {
              if (details[camelKey] !== undefined && details[camelKey] !== null) {
                const s3FieldName = convertToS3FieldName(camelKey);
                uploadFormData.append(s3FieldName, String(details[camelKey]));
              }
            });
          }
          
          // Add the file last
          uploadFormData.append('file', new Blob([buffer]), file.name);
          
          const uploadResponse = await fetch(assetResponse.uploadUrl!, {
            method: 'POST',
            body: uploadFormData
          });
          
          if (!uploadResponse.ok) {
            const errorText = await uploadResponse.text();
            throw new Error(`S3 upload failed: ${uploadResponse.status} - ${errorText}`);
          }
          
          console.log(`   ✅ File uploaded successfully`);
          console.log(`   🔗 URL: ${assetResponse.hostedUrl}`);
          
          // Store the asset info
          uploadedAssets[i] = {
            fileId: assetResponse.id!,
            url: assetResponse.hostedUrl!,
            alt: file.name
          };
          
        } catch (uploadError: any) {
          console.error(`❌ Failed to upload ${fieldName}:`, uploadError);
          console.error('   Error:', uploadError.message);
        }
      }
    }

    console.log('\n🖼️ Final Asset Results:', {
      photo1: uploadedAssets[0] ? `${uploadedAssets[0].fileId}` : 'none',
      photo2: uploadedAssets[1] ? `${uploadedAssets[1].fileId}` : 'none'
    });

    // ==== CREATE CMS ITEM WITH ASSET REFERENCES ====
    console.log('\n📝 Creating CMS Item...');
    
    const fieldData: Record<string, any> = {
      // Required fields
      'name': timelineName,
      'slug': slug,
      
      // Event identification
      'event-number': nextEventNumber,
      'even-number': isEven,
      
      // Date fields
      'date': new Date().toISOString(),
      'date-added': timelineDate,
      
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
      
      // Images using Webflow Asset references
      ...(uploadedAssets[0] && {
        'photo-1': {
          fileId: uploadedAssets[0].fileId,
          url: uploadedAssets[0].url,
          alt: uploadedAssets[0].alt || 'Timeline photo 1'
        }
      }),
      ...(uploadedAssets[1] && {
        'photo-2': {
          fileId: uploadedAssets[1].fileId,
          url: uploadedAssets[1].url,
          alt: uploadedAssets[1].alt || 'Timeline photo 2'
        }
      }),
      
      // Metadata
      'origin': 'webflow',
      'edit-code': editCode,
      'permalink': '',
      
      // Status flags
      'synced': false,
      'approved': true,
      'active': true,
      '_archived': false,
      '_draft': false,
    };

    console.log('📤 CMS Field Data Summary:', {
      name: fieldData.name,
      slug: fieldData.slug,
      'event-number': fieldData['event-number'],
      'photo-1': fieldData['photo-1'] ? `fileId: ${fieldData['photo-1'].fileId}` : 'none',
      'photo-2': fieldData['photo-2'] ? `fileId: ${fieldData['photo-2'].fileId}` : 'none',
    });

    // Create item in CMS
    const response = await client.collections.items.createItem(
      collectionId,
      { fieldData }
    );

    console.log('✅ CMS item created with ID:', response.id);

    // Publish the item
    if (response.id) {
      try {
        console.log('📢 Publishing item to LIVE...');
        await client.collections.items.publishItem(collectionId, response.id);
        console.log('✅ Timeline item published successfully');
      } catch (publishError: any) {
        console.error('⚠️ Error publishing timeline item:', publishError.message);
      }
    }

    console.log('============================================');
    console.log('✅ Timeline Submission Complete');
    console.log('   ID:', response.id);
    console.log('   Event Number:', nextEventNumber);
    console.log('   Edit Code:', editCode);
    console.log('============================================\n');
    
    // Redirect back to the form page with success message
    return new Response(null, {
      status: 303,
      headers: {
        Location: `${url.pathname}?success=true&eventNumber=${nextEventNumber}`
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
    
    // Redirect back with error message
    return new Response(null, {
      status: 303,
      headers: {
        Location: `${url.pathname}?error=true&message=${encodeURIComponent(error.message || 'Unknown error')}`
      }
    });
  }
};
