/**
 * Guestbook Form Submission Endpoint
 * 
 * Receives POST from Webflow form and writes to CMS.
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

/**
 * Get card color configuration based on user selection
 * Sets the corresponding color switch to true, all others to false
 */
function getCardColorConfig(colorSelection: string) {
  const config = {
    'slate-blue-2': false,
    'ocean-teal-2': false,
    'rustwood-red-2': false,
    'twilight-smoke-2': false,
    'warm-sandstone': false
  };

  // Map form values to CMS field slugs
  const colorMapping: Record<string, keyof typeof config> = {
    'Slate Blue': 'slate-blue-2',
    'Ocean Teal': 'ocean-teal-2',
    'Rustwood Red': 'rustwood-red-2',
    'Twilight Smoke': 'twilight-smoke-2',
    'Warm Sandstone': 'warm-sandstone'
  };

  const fieldSlug = colorMapping[colorSelection];
  if (fieldSlug) {
    config[fieldSlug] = true;
  }

  return config;
}

// Handle both GET and POST for debugging
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    message: 'Guestbook API is working! Use POST to submit data.',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  console.log('============================================');
  console.log('📥 Guestbook Form Submission Received');
  console.log('============================================');
  console.log('Timestamp:', new Date().toISOString());

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
      usingToken: writeToken ? 'write' : 'read'
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
    
    console.log('🌍 API Base URL:', baseApiUrl || 'default');
    
    const client = new WebflowClient({
      accessToken: token,
      ...(baseApiUrl && { baseUrl: baseApiUrl })
    });

    // Parse form data
    const formData = await request.formData();
    console.log('📝 Form Data Keys:', Array.from(formData.keys()));
    
    const collectionId = formData.get('collectionId') as string || '69383a09bbf502930bf620a3';
    console.log('📚 Collection ID:', collectionId);
    
    // Get the relationship field - could be from custom select or native select
    const relationship = formData.get('Select-Field') as string || 
                        formData.get('guestbook_relationship') as string ||
                        '';

    // Get card color selection (required field)
    const cardColor = formData.get('card_color') as string || 
                     formData.get('color') as string ||
                     formData.get('Card-Color') as string ||
                     '';

    console.log('🎨 Card Color Selection:', cardColor);

    // Generate slug from name
    const fullName = formData.get('full_name') as string || '';
    const slug = fullName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 
      `entry-${Date.now()}`;

    // Generate 6-character alphanumeric edit code
    const editCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    console.log('📝 Generated Values:', {
      fullName,
      slug,
      editCode
    });

    // Get the max guestbook-id to increment it
    let nextGuestbookId = 1;
    try {
      console.log('🔢 Fetching existing guestbook IDs...');
      const existingItems = await client.collections.items.listItemsLive(collectionId, {
        limit: 100,
        offset: 0
      });
      
      if (existingItems.items && existingItems.items.length > 0) {
        const maxId = existingItems.items.reduce((max, item) => {
          const itemId = item.fieldData['guestbook-id'] as number || 0;
          return Math.max(max, itemId);
        }, 0);
        nextGuestbookId = maxId + 1;
        console.log(`   🔢 Max existing ID: ${maxId}, Next ID: ${nextGuestbookId}`);
      } else {
        console.log('   🔢 No existing items, starting with ID: 1');
      }
    } catch (error) {
      console.error('⚠️ Error getting max guestbook-id, using 1:', error);
    }

    // Get card color configuration
    const colorConfig = getCardColorConfig(cardColor);
    console.log('🎨 Card Color Configuration:', colorConfig);

    // Build CMS field data - using the actual field names from the collection
    const fieldData = {
      'name': fullName, // required
      'slug': slug, // required
      'guestbook-id': nextGuestbookId,
      'first-name': fullName,
      'email-address': formData.get('email') as string || '',
      'location': formData.get('guestbook_location') as string || '',
      'memory': formData.get('guestbook_first_met') as string || '',
      'guestbook-relationship': relationship,
      'guestbook-message': formData.get('guestbook_message') as string || '',
      'memory-date': new Date().toISOString(), // date_added
      'edit-code-2': editCode, // 6-character edit code
      'active': true,
      '_archived': false,
      '_draft': false,
      // Card color switches
      ...colorConfig
    };

    console.log('📤 CMS Field Data Summary:', {
      name: fieldData.name,
      slug: fieldData.slug,
      'guestbook-id': fieldData['guestbook-id'],
      relationship: fieldData['guestbook-relationship'],
      'slate-blue-2': fieldData['slate-blue-2'],
      'ocean-teal-2': fieldData['ocean-teal-2'],
      'rustwood-red-2': fieldData['rustwood-red-2'],
      'twilight-smoke-2': fieldData['twilight-smoke-2'],
      'warm-sandstone': fieldData['warm-sandstone']
    });

    console.log('\n🔄 Calling createItem API...');
    console.log('   Collection ID:', collectionId);

    // Create item in CMS
    const response = await client.collections.items.createItem(
      collectionId,
      { fieldData }
    );

    console.log('✅ CMS item created with ID:', response.id);

    // Publish the item immediately so it appears in live queries
    if (response.id) {
      try {
        console.log('📢 Publishing item to LIVE...');
        await client.collections.items.publishItem(collectionId, response.id);
        console.log('✅ Guestbook item published successfully');
      } catch (publishError) {
        console.error('⚠️ Error publishing item:', publishError);
        // Continue anyway - item is created even if publish fails
      }
    }

    console.log('============================================');
    console.log('✅ Guestbook Submission Complete');
    console.log('   ID:', response.id);
    console.log('   Guestbook ID:', nextGuestbookId);
    console.log('   Edit Code:', editCode);
    console.log('   Card Color:', cardColor);
    console.log('============================================\n');

    // Redirect back to guestbook page with cache-busting timestamp
    const timestamp = Date.now();
    const redirectUrl = `https://patricia-lanning.webflow.io/guestbook?success=true&id=${nextGuestbookId}&t=${timestamp}`;
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': redirectUrl
      }
    });

  } catch (error: any) {
    console.error('============================================');
    console.error('❌ Guestbook form submission error');
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
    
    console.error('============================================\n');
    
    // Redirect to guestbook page with error and cache-busting timestamp
    const timestamp = Date.now();
    const redirectUrl = `https://patricia-lanning.webflow.io/guestbook?error=true&message=${encodeURIComponent(error.message || 'Unknown error')}&t=${timestamp}`;
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': redirectUrl
      }
    });
  }
};
