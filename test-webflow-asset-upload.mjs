/**
 * Test Webflow Asset Upload & CMS Integration
 * 
 * This script:
 * 1. Downloads a test image
 * 2. Uploads it to Webflow Assets (Timeline folder)
 * 3. Updates an existing CMS item with the asset reference
 */

import { WebflowClient } from 'webflow-api';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    let value = match[2].trim();
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
});

const WRITE_TOKEN = env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE;
const SITE_ID = env.WEBFLOW_SITE_ID;
const COLLECTION_ID = env.TIMELINE_COLLECTION_ID;
const API_HOST = env.WEBFLOW_API_HOST;

console.log('\n===========================================');
console.log('🧪 Webflow Asset Upload Test');
console.log('===========================================\n');

console.log('📋 Configuration:');
console.log('   Site ID:', SITE_ID || '❌ MISSING');
console.log('   Collection ID:', COLLECTION_ID || '❌ MISSING');
console.log('   API Host:', API_HOST || 'default');
console.log('   Has Write Token:', !!WRITE_TOKEN);

if (!WRITE_TOKEN || !SITE_ID || !COLLECTION_ID) {
  console.error('\n❌ Missing required environment variables');
  process.exit(1);
}

const client = new WebflowClient({
  accessToken: WRITE_TOKEN,
  ...(API_HOST && { baseUrl: API_HOST })
});

async function downloadTestImage() {
  console.log('\n📥 Downloading test image...');
  const testImageUrl = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
  
  const response = await fetch(testImageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  const filename = 'test-timeline-image.jpg';
  const filepath = path.join(__dirname, filename);
  fs.writeFileSync(filepath, buffer);
  
  console.log(`   ✅ Downloaded: ${filename}`);
  console.log(`   📊 Size: ${(buffer.length / 1024).toFixed(2)} KB`);
  
  return { filepath, filename, buffer };
}

// Convert camelCase SDK keys to S3 expected format
function convertToS3FieldName(camelCase) {
  const mapping = {
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

async function uploadToWebflowAssets(filename, buffer) {
  console.log('\n🎨 Uploading to Webflow Assets...');
  
  // Step 1: Calculate MD5 hash
  console.log('🔒 Calculating MD5 hash...');
  const hash = crypto.createHash('md5').update(buffer).digest('hex');
  console.log(`   Hash: ${hash}`);
  
  // Step 2: Create asset
  console.log('📝 Creating asset in Webflow...');
  const assetData = {
    fileName: filename,
    fileHash: hash
  };
  
  const assetResponse = await client.assets.create(SITE_ID, assetData);
  
  console.log('   ✅ Asset created:');
  console.log('      ID:', assetResponse.id);
  console.log('      Upload URL:', assetResponse.uploadUrl);
  
  // Step 3: Upload to S3 using multipart/form-data
  console.log('\n⬆️  Uploading file to S3...');
  
  const uploadFormData = new FormData();
  
  // Add all upload details fields with CORRECT field names for S3
  const details = assetResponse.uploadDetails;
  
  if (details) {
    // S3 expects fields in a specific order
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
    
    console.log('   📝 Adding form fields:');
    orderedFields.forEach(camelKey => {
      if (details[camelKey] !== undefined && details[camelKey] !== null) {
        const s3FieldName = convertToS3FieldName(camelKey);
        const value = String(details[camelKey]);
        uploadFormData.append(s3FieldName, value);
        console.log(`      ✓ ${s3FieldName}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}`);
      }
    });
  }
  
  // Add file LAST
  const blob = new Blob([buffer], { type: 'image/jpeg' });
  uploadFormData.append('file', blob, filename);
  console.log(`      ✓ file: ${filename} (${buffer.length} bytes)`);
  
  console.log('\n   🚀 Posting to:', assetResponse.uploadUrl);
  
  const uploadResponse = await fetch(assetResponse.uploadUrl, {
    method: 'POST',
    body: uploadFormData
  });
  
  console.log('   📡 Response status:', uploadResponse.status);
  
  if (!uploadResponse.ok) {
    const errorText = await uploadResponse.text();
    console.error('   ❌ Response body:', errorText);
    throw new Error(`S3 upload failed: ${uploadResponse.status} - ${errorText}`);
  }
  
  const responseText = await uploadResponse.text();
  console.log('   ✅ Upload successful!');
  console.log('   📄 Response:', responseText.substring(0, 200));
  console.log(`   🔗 Hosted URL: ${assetResponse.hostedUrl}`);
  
  return {
    fileId: assetResponse.id,
    url: assetResponse.hostedUrl,
    alt: 'Test timeline image'
  };
}

async function getFirstTimelineItem() {
  console.log('\n🔍 Finding an existing CMS item to update...');
  
  const items = await client.collections.items.listItems(COLLECTION_ID, {
    limit: 1
  });
  
  if (!items.items || items.items.length === 0) {
    throw new Error('No items found in Timeline collection');
  }
  
  const item = items.items[0];
  console.log(`   ✅ Found item: ${item.fieldData.name}`);
  console.log(`   📝 ID: ${item.id}`);
  console.log(`   🔢 Event #: ${item.fieldData['event-number']}`);
  
  return item;
}

async function updateItemWithAsset(itemId, assetInfo) {
  console.log('\n📝 Updating CMS item with asset...');
  
  const updateData = {
    fieldData: {
      'photo-1': {
        fileId: assetInfo.fileId,
        url: assetInfo.url,
        alt: assetInfo.alt
      }
    }
  };
  
  console.log('   Asset reference:', {
    fileId: assetInfo.fileId,
    url: assetInfo.url.substring(0, 60) + '...'
  });
  
  const response = await client.collections.items.updateItem(
    COLLECTION_ID,
    itemId,
    updateData
  );
  
  console.log('   ✅ CMS item updated');
  
  // Try to publish
  try {
    console.log('📢 Publishing item...');
    await client.collections.items.publishItem(COLLECTION_ID, itemId);
    console.log('   ✅ Published to live');
  } catch (error) {
    console.log('   ⚠️ Publish error:', error.message);
  }
  
  return response;
}

async function main() {
  try {
    // Step 1: Download test image
    const { filepath, filename, buffer } = await downloadTestImage();
    
    // Step 2: Upload to Webflow Assets
    const assetInfo = await uploadToWebflowAssets(filename, buffer);
    
    // Step 3: Get existing item
    const item = await getFirstTimelineItem();
    
    // Step 4: Update item with asset
    await updateItemWithAsset(item.id, assetInfo);
    
    // Cleanup
    console.log('\n🧹 Cleaning up test file...');
    fs.unlinkSync(filepath);
    
    console.log('\n===========================================');
    console.log('✅ TEST COMPLETE - SUCCESS!');
    console.log('===========================================');
    console.log('\n💡 Check your Webflow site:');
    console.log('   1. Assets > should have test image');
    console.log(`   2. CMS > Timeline > "${item.fieldData.name}" (should have photo-1)`);
    console.log('   3. Live site (if published successfully)');
    console.log('\n===========================================\n');
    
  } catch (error) {
    console.error('\n===========================================');
    console.error('❌ TEST FAILED');
    console.error('===========================================');
    console.error('Error:', error.message);
    if (error.stack) {
      console.error('Stack:', error.stack);
    }
    console.error('===========================================\n');
    process.exit(1);
  }
}

main();
