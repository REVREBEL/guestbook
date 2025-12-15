import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const token = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                  import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    const collectionId = locals?.runtime?.env?.GUESTBOOK_COLLECTION_ID || 
                        import.meta.env.GUESTBOOK_COLLECTION_ID;
    
    // Debug logging
    console.log('Environment check:');
    console.log('- Token exists:', !!token);
    console.log('- Collection ID:', collectionId);
    console.log('- locals.runtime.env:', locals?.runtime?.env ? Object.keys(locals.runtime.env) : 'undefined');
    
    if (!token || !collectionId) {
      console.log('Missing token or collectionId');
      return new Response('0', { 
        status: 200,
        headers: { 
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }

    const baseUrl = locals?.runtime?.env?.WEBFLOW_API_HOST || 
                    import.meta.env.WEBFLOW_API_HOST;
    
    const client = new WebflowClient({
      accessToken: token,
      ...(baseUrl && { baseUrl })
    });

    console.log('Fetching count for collection:', collectionId);
    const response = await client.collections.items.listItemsLive(collectionId, { 
      limit: 1,
      offset: 0
    });
    
    const count = response.pagination?.total ?? 0;
    console.log('Count retrieved:', count);
    
    // Return just the count as plain text
    return new Response(count.toString(), {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error fetching count:', error);
    return new Response('0', {
      status: 200,
      headers: { 
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
};
