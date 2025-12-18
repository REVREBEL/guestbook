/**
 * Memory Journal Form Submission Endpoint
 * 
 * Complete Webflow Assets + CMS Workflow:
 * 1. Upload images to Webflow Assets API (profile-image, photo)
 * 2. Detect photo orientation and assign card size
 * 3. Get asset IDs back
 * 4. Create CMS item with asset references
 * 5. Publish item
 * 6. Redirect back to form page
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

/**
 * Detect image orientation from buffer
 * Returns: '1x1' (square), '1x2' (portrait), '2x1' (landscape)
 */
async function detectImageOrientation(buffer: Buffer): Promise<string> {
  try {
    // Read image dimensions from buffer
    // This is a simple implementation that works for JPEG and PNG
    let width = 0;
    let height = 0;
    
    // Check if JPEG (starts with FF D8)
    if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
      // JPEG - find SOF0 marker (FF C0)
      for (let i = 2; i < buffer.length - 8; i++) {
        if (buffer[i] === 0xFF && buffer[i + 1] === 0xC0) {
          height = buffer.readUInt16BE(i + 5);
          width = buffer.readUInt16BE(i + 7);
          break;
        }
      }
    }
    // Check if PNG (starts with 89 50 4E 47)
    else if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
      // PNG - IHDR chunk at byte 16
      width = buffer.readUInt32BE(16);
      height = buffer.readUInt32BE(20);
    }
    
    if (width === 0 || height === 0) {
      console.log('   ⚠️ Could not detect dimensions, defaulting to 1x1');
      return '1x1';
    }
    
    const aspectRatio = width / height;
    console.log(`   📐 Dimensions: ${width}x${height}, Aspect Ratio: ${aspectRatio.toFixed(2)}`);
    
    // Determine orientation with tolerance
    // Portrait: height > width (aspect ratio < 0.9)
    // Landscape: width > height (aspect ratio > 1.1)
    // Square: everything else
    
    if (aspectRatio < 0.9) {
      console.log('   📱 Detected: Portrait (1x2)');
      return '1x2';
    } else if (aspectRatio > 1.1) {
      console.log('   🖼️ Detected: Landscape (2x1)');
      return '2x1';
    } else {
      console.log('   ⬜ Detected: Square (1x1)');
      return '1x1';
    }
  } catch (error) {
    console.error('   ❌ Error detecting orientation:', error);
    return '1x1'; // Default to square
  }
}

/**
 * Get card size configuration based on orientation
 * Uses the actual option IDs from Webflow CMS
 */
function getCardSizeConfig(orientation: string) {
  switch (orientation) {
    case '1x2': // Portrait
      return {
        'memory-card-size': '9dfbeb13c30a7c8c40996b86a9b8591a', // ID for "1x2"
        '1x1': false,
        '1x2': true,
        '2x1': false,
        'css-columns': 1,
        'css-rows': 2
      };
    case '2x1': // Landscape
      return {
        'memory-card-size': '418938b7e9fde5527405832f988389da', // ID for "2x1"
        '1x1': false,
        '1x2': false,
        '2x1': true,
        'css-columns': 2,
        'css-rows': 1
      };
    default: // 1x1 Square (default)
      return {
        'memory-card-size': '375ee74ef6f5816b9380663364279dfe', // ID for "1x1"
        '1x1': true,
        '1x2': false,
        '2x1': false,
        'css-columns': 1,
        'css-rows': 1
      };
  }
}

// Handle GET for debugging
export const GET: APIRoute = async ({ locals }) => {
  const hasWriteToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                           import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE);
  const hasReadToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                          import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN);
  const hasCollectionId = !!(locals?.runtime?.env?.MEMORY_JOURNAL_COLLECTION_ID ||
                             import.meta.env.MEMORY_JOURNAL_COLLECTION_ID);
  const hasSiteId = !!(locals?.runtime?.env?.WEBFLOW_SITE_ID ||
                       import.meta.env.WEBFLOW_SITE_ID);
  
  const actualCollectionId = locals?.runtime?.env?.MEMORY_JOURNAL_COLLECTION_ID ||
                             import.meta.env.MEMORY_JOURNAL_COLLECTION_ID;
  
  console.log('============================================');
  console.log('🔍 Memory Journal API Debug Info');
  console.log('============================================');
  console.log('Collection ID:', actualCollectionId);
  console.log('Has Write Token:', hasWriteToken);
  console.log('Has Read Token:', hasReadToken);
  console.log('Has Site ID:', hasSiteId);
  console.log('============================================');
  
  return new Response(JSON.stringify({
    message: 'Memory Journal API is working! Use POST to submit data with file uploads.',
    timestamp: new Date().toISOString(),
    config: {
      hasWriteToken,
      hasReadToken,
      hasCollectionId,
      hasSiteId,
      collectionId: actualCollectionId // Show actual value for debugging
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request, locals, url }) => {
  console.log('============================================');
  console.log('📥 Memory Journal Form Submission Received');
  console.log('============================================');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Request URL:', url.toString());
  console.log('Request Method:', request.method);
  
  try {
    // Get API credentials
    const writeToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                       import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE;
    
    const readToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                      import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    
    const token = writeToken || readToken;
    
    console.log('🔑 Token Check:', {
      hasWriteToken: !!writeToken,
      hasReadToken: !!readToken,
      usingToken: writeToken ? 'write' : 'read'
    });
    
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
    
    console.log('🌍 API Base URL:', baseApiUrl || 'default');
    
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
    console.log('📝 Form Data Keys:', Array.from(formData.keys()));
    
    // Get collection ID
    const collectionId = locals?.runtime?.env?.MEMORY_JOURNAL_COLLECTION_ID ||
                        import.meta.env.MEMORY_JOURNAL_COLLECTION_ID;
    
    console.log('📚 Collection ID Details:', {
      value: collectionId,
      type: typeof collectionId,
      length: collectionId?.length,
      source: locals?.runtime?.env?.MEMORY_JOURNAL_COLLECTION_ID ? 'runtime' : 'import.meta.env'
    });
    
    if (!collectionId) {
      console.error('❌ Missing MEMORY_JOURNAL_COLLECTION_ID');
      return new Response(null, {
        status: 303,
        headers: {
          Location: `${url.pathname}?error=true&message=${encodeURIComponent('Missing collection ID')}`
        }
      });
    }

    // Extract memory name and user details
    const firstName = formData.get('first_name') as string || '';
    const lastName = formData.get('last_name') as string || '';
    const memoryDetail = formData.get('memory_detail') as string || formData.get('memory') as string || '';
    
    console.log('👤 User Info:', {
      firstName,
      lastName,
      memoryDetailLength: memoryDetail.length
    });
    
    // Create memory name from first line of detail or user name
    const memoryName = memoryDetail.split('\n')[0].substring(0, 50) || 
                      `${firstName} ${lastName}`.trim() ||
                      'Untitled Memory';
    
    const slug = (memoryName.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 
      `memory-${Date.now()}`) + `-${Date.now().toString().slice(-6)}`;
    
    const editCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    console.log('📝 Generated Values:', {
      memoryName,
      slug,
      editCode
    });

    // Get the max memory-id
    let nextMemoryId = 1;
    try {
      console.log('🔢 Fetching existing memory IDs...');
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
          console.log(`   📦 Fetched ${batch.items.length} items (offset: ${offset})`);
          if (batch.items.length < limit) break;
          offset += limit;
        } else {
          break;
        }
      }
      
      console.log(`   📊 Total items found: ${allItems.length}`);
      
      if (allItems.length > 0) {
        const maxId = allItems.reduce((max, item) => {
          const itemId = item.fieldData['memory-id'] as number || 0;
          return Math.max(max, itemId);
        }, 0);
        nextMemoryId = maxId + 1;
        console.log(`   🔢 Max existing ID: ${maxId}, Next ID: ${nextMemoryId}`);
      } else {
        console.log('   🔢 No existing items, starting with ID: 1');
      }
    } catch (error: any) {
      console.error('⚠️ Error getting max memory-id:', error.message);
    }

    // Parse the memory date
    const memoryDateInput = formData.get('memory_date') as string || 
                           formData.get('date') as string || '';
    
    const memoryDate = parseDateOrDefault(memoryDateInput);
    console.log('📅 Memory Date:', {
      input: memoryDateInput,
      parsed: memoryDate
    });

    // Get memory tags
    const tag1 = formData.get('memory_tag_1') as string || formData.get('tag1') as string || '';
    const tag2 = formData.get('memory_tag_2') as string || formData.get('tag2') as string || '';
    const tag3 = formData.get('memory_tag_3') as string || formData.get('tag3') as string || '';

    console.log('🏷️ Tags:', { tag1, tag2, tag3 });

    // ==== UPLOAD IMAGES TO WEBFLOW ASSETS API ====
    console.log('\n🎨 Starting Webflow Asset Upload Process...');
    
    const uploadedAssets: Array<{ fileId: string; url: string; alt?: string } | null> = [null, null];
    const fileFields = [
      { form: 'profile_image', label: 'Profile Image' },
      { form: 'photo', label: 'Memory Photo' }
    ];
    
    let detectedOrientation = '1x1'; // Default
    
    for (let i = 0; i < fileFields.length; i++) {
      const fieldName = fileFields[i].form;
      const file = formData.get(fieldName);
      
      if (file && file instanceof File && file.size > 0) {
        console.log(`\n📤 Processing ${fileFields[i].label}:`, {
          name: file.name,
          size: file.size,
          type: file.type
        });
        
        try {
          // Step 1: Calculate MD5 hash and detect orientation
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const hash = crypto.createHash('md5').update(buffer).digest('hex');
          
          console.log(`   🔒 MD5 Hash: ${hash}`);
          
          // Detect orientation for the main photo (index 1)
          if (i === 1) {
            detectedOrientation = await detectImageOrientation(buffer);
          }
          
          // Step 2: Create asset
          console.log(`   📝 Creating asset in Webflow...`);
          const assetResponse = await client.assets.create(siteId, {
            fileName: file.name,
            fileHash: hash
          });
          
          console.log(`   ✅ Asset created with ID: ${assetResponse.id}`);
          
          // Step 3: Upload file to S3
          console.log(`   ⬆️  Uploading file to S3...`);
          console.log(`   📍 Upload URL: ${assetResponse.uploadUrl}`);
          
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
            
            console.log(`   📋 S3 Form Fields:`);
            orderedFields.forEach(camelKey => {
              if (details[camelKey] !== undefined && details[camelKey] !== null) {
                const s3FieldName = convertToS3FieldName(camelKey);
                const value = String(details[camelKey]);
                uploadFormData.append(s3FieldName, value);
                console.log(`      ${s3FieldName}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}`);
              }
            });
          }
          
          // Add the file last
          uploadFormData.append('file', new Blob([buffer]), file.name);
          console.log(`   📎 File added to form data`);
          
          const uploadResponse = await fetch(assetResponse.uploadUrl!, {
            method: 'POST',
            body: uploadFormData
          });
          
          console.log(`   📡 S3 Response Status: ${uploadResponse.status}`);
          
          if (!uploadResponse.ok) {
            const errorText = await uploadResponse.text();
            console.error(`   ❌ S3 Error Response: ${errorText}`);
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
          console.error(`❌ Failed to upload ${fileFields[i].label}:`, uploadError);
          console.error('   Error:', uploadError.message);
          if (uploadError.stack) {
            console.error('   Stack:', uploadError.stack);
          }
        }
      } else {
        console.log(`\n⏭️  Skipping ${fileFields[i].label} (no file provided)`);
      }
    }

    console.log('\n🖼️ Final Asset Results:', {
      profileImage: uploadedAssets[0] ? `${uploadedAssets[0].fileId}` : 'none',
      photo: uploadedAssets[1] ? `${uploadedAssets[1].fileId}` : 'none',
      orientation: detectedOrientation
    });

    // Get card size configuration based on detected orientation
    const cardSizeConfig = getCardSizeConfig(detectedOrientation);
    console.log('\n🎴 Card Size Configuration:', cardSizeConfig);

    // ==== CREATE CMS ITEM WITH ASSET REFERENCES ====
    console.log('\n📝 Creating CMS Item...');
    console.log('📚 Collection ID:', collectionId);
    
    const fieldData: Record<string, any> = {
      // Required fields
      'name': memoryName,
      'slug': slug,
      
      // Memory identification
      'memory-id': nextMemoryId,
      
      // User information
      'first-name': firstName,
      'last-name': lastName,
      'email': formData.get('email') as string || '',
      
      // Profile image using Webflow Asset reference
      ...(uploadedAssets[0] && {
        'profile-image': {
          fileId: uploadedAssets[0].fileId,
          url: uploadedAssets[0].url,
          alt: uploadedAssets[0].alt || 'Profile image'
        }
      }),
      
      // Memory details
      'memory-detail': memoryDetail,
      'memory-date': memoryDate,
      'memory-location': formData.get('memory_location') as string || formData.get('location') as string || '',
      
      // Tags
      'memory-tag-1': tag1,
      'memory-tag-2': tag2,
      'memory-tag-3': tag3,
      
      // Main photo using Webflow Asset reference
      ...(uploadedAssets[1] && {
        'photo': {
          fileId: uploadedAssets[1].fileId,
          url: uploadedAssets[1].url,
          alt: uploadedAssets[1].alt || 'Memory photo'
        }
      }),
      'photo-added': !!uploadedAssets[1],
      
      // Video and link (optional)
      'video': formData.get('video') as string || '',
      'content-link': formData.get('content_link') as string || '',
      
      // Card size configuration based on photo orientation
      ...cardSizeConfig,
      
      // Metadata
      'edit-code': editCode,
      'active': true,
      
      // Status flags
      '_archived': false,
      '_draft': false,
    };

    console.log('📤 CMS Field Data Summary:', {
      name: fieldData.name,
      slug: fieldData.slug,
      'memory-id': fieldData['memory-id'],
      'memory-card-size': fieldData['memory-card-size'],
      '1x1': fieldData['1x1'],
      '1x2': fieldData['1x2'],
      '2x1': fieldData['2x1'],
      'css-columns': fieldData['css-columns'],
      'css-rows': fieldData['css-rows'],
      'profile-image': fieldData['profile-image'] ? `fileId: ${fieldData['profile-image'].fileId}` : 'none',
      'photo': fieldData['photo'] ? `fileId: ${fieldData['photo'].fileId}` : 'none',
    });

    console.log('\n📦 Full Field Data Object:', JSON.stringify(fieldData, null, 2));

    // Create item in CMS
    console.log('\n🔄 Calling createItem API...');
    console.log('   Collection ID:', collectionId);
    console.log('   Payload keys:', Object.keys({ fieldData }));
    
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
        console.log('✅ Memory item published successfully');
      } catch (publishError: any) {
        console.error('⚠️ Error publishing memory item:', publishError.message);
        if (publishError.body) {
          console.error('   Error Body:', JSON.stringify(publishError.body, null, 2));
        }
      }
    }

    console.log('============================================');
    console.log('✅ Memory Journal Submission Complete');
    console.log('   ID:', response.id);
    console.log('   Memory ID:', nextMemoryId);
    console.log('   Edit Code:', editCode);
    console.log('   Orientation:', detectedOrientation);
    console.log('============================================\n');
    
    // Redirect back to the form page with success message
    return new Response(null, {
      status: 303,
      headers: {
        Location: `${url.pathname}?success=true&memoryId=${nextMemoryId}`
      }
    });

  } catch (error: any) {
    console.error('============================================');
    console.error('❌ Memory Journal form submission error');
    console.error('============================================');
    console.error('Error:', error);
    console.error('Error Message:', error.message);
    console.error('Error Name:', error.name);
    console.error('Error Stack:', error.stack);
    
    // Try to get more details from the error
    if (error.body) {
      console.error('Error Body:', JSON.stringify(error.body, null, 2));
    }
    if (error.response) {
      console.error('Error Response:', JSON.stringify(error.response, null, 2));
    }
    if (error.status) {
      console.error('Error Status:', error.status);
    }
    if (error.statusText) {
      console.error('Error Status Text:', error.statusText);
    }
    
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
