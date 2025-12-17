import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

export const POST: APIRoute = async ({ request, locals }) => {
  const timestamp = new Date().toISOString();
  
  console.log('============================================');
  console.log('🖼️ Attach Images to Timeline Item');
  console.log('============================================');
  console.log('Timestamp:', timestamp);
  
  try {
    const body = await request.json();
    const { itemId, images } = body;
    
    console.log('Item ID:', itemId);
    console.log('Images:', images);
    
    if (!itemId) {
      console.log('❌ Missing itemId');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing itemId' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    if (!images || Object.keys(images).length === 0) {
      console.log('⚠️ No images provided');
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'No images to attach' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Get Webflow tokens
    const writeToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    const baseUrl = locals?.runtime?.env?.WEBFLOW_API_HOST || import.meta.env.WEBFLOW_API_HOST;
    
    if (!writeToken) {
      console.log('❌ Missing WEBFLOW_CMS_SITE_API_TOKEN');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing API token' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const client = new WebflowClient({
      accessToken: writeToken,
      ...(baseUrl && { baseUrl })
    });
    
    // Get collection ID
    const collectionId = locals?.runtime?.env?.TIMELINE_COLLECTION_ID || import.meta.env.TIMELINE_COLLECTION_ID;
    
    if (!collectionId) {
      console.log('❌ Missing TIMELINE_COLLECTION_ID');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing collection ID' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log('Collection ID:', collectionId);
    
    // Build the fieldData update
    const fieldData: any = {};
    
    // Map photo1 and photo2 to CMS fields
    if (images.photo1) {
      fieldData['photo-1'] = {
        url: images.photo1.url,
        alt: images.photo1.alt || null
      };
      console.log('📸 photo-1:', images.photo1.url.substring(0, 50) + '...');
    }
    
    if (images.photo2) {
      fieldData['photo-2'] = {
        url: images.photo2.url,
        alt: images.photo2.alt || null
      };
      console.log('📸 photo-2:', images.photo2.url.substring(0, 50) + '...');
    }
    
    if (Object.keys(fieldData).length === 0) {
      console.log('⚠️ No valid photo fields to update');
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'No valid photo fields' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log('');
    console.log('📤 Updating CMS item...');
    console.log('Field Data:', JSON.stringify(fieldData, null, 2));
    
    // Update the item
    const updatedItem = await client.collections.items.updateItem(
      collectionId,
      itemId,
      {
        fieldData
      }
    );
    
    console.log('✅ Item updated successfully');
    console.log('Updated Item ID:', updatedItem.id);
    
    // Publish the item
    console.log('');
    console.log('📢 Publishing item...');
    
    try {
      await client.collections.items.publishItem(collectionId, itemId);
      console.log('✅ Item published successfully');
    } catch (publishError: any) {
      console.log('⚠️ Publishing failed (item still updated):', publishError.message);
    }
    
    console.log('');
    console.log('============================================');
    console.log('✅ Images Attached Successfully');
    console.log('============================================');
    
    return new Response(JSON.stringify({ 
      success: true,
      itemId: updatedItem.id,
      imagesAttached: Object.keys(fieldData)
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error: any) {
    console.log('');
    console.log('============================================');
    console.log('❌ Error attaching images');
    console.log('============================================');
    console.log('Error:', error);
    console.log('Error Message:', error.message);
    console.log('Error Stack:', error.stack);
    console.log('============================================');
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message || 'Unknown error',
      details: error.body || null
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
