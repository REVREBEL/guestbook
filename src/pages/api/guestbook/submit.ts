/**
 * Guestbook Form Submission Endpoint
 * 
 * Receives POST from Webflow form and writes to CMS.
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

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
  try {
    // Get API credentials - use the WRITE token
    const writeToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                       import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE;
    
    const readToken = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                      import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    
    const token = writeToken || readToken;
    
    if (!token) {
      console.error('Missing API token');
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
    
    const client = new WebflowClient({
      accessToken: token,
      ...(baseApiUrl && { baseUrl: baseApiUrl })
    });

    // Parse form data
    const formData = await request.formData();
    
    const collectionId = formData.get('collectionId') as string || '69383a09bbf502930bf620a3';
    
    // Get the relationship field - could be from custom select or native select
    const relationship = formData.get('Select-Field') as string || 
                        formData.get('guestbook_relationship') as string ||
                        '';

    // Generate slug from name
    const fullName = formData.get('full_name') as string || '';
    const slug = fullName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 
      `entry-${Date.now()}`;

    // Generate 6-character alphanumeric edit code
    const editCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Get the max guestbook-id to increment it
    let nextGuestbookId = 1;
    try {
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
      }
    } catch (error) {
      console.error('Error getting max guestbook-id, using 1:', error);
    }

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
    };

    console.log('Submitting to CMS:', { collectionId, fieldData, nextGuestbookId, editCode });

    // Create item in CMS
    const response = await client.collections.items.createItem(
      collectionId,
      { fieldData }
    );

    console.log('CMS response:', response);

    // Publish the item immediately so it appears in live queries
    if (response.id) {
      try {
        await client.collections.items.publishItem(collectionId, response.id);
        console.log('Item published successfully:', response.id);
      } catch (publishError) {
        console.error('Error publishing item:', publishError);
        // Continue anyway - item is created even if publish fails
      }
    }

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
    console.error('Form submission error:', error);
    
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
