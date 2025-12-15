/**
 * Guestbook Count API Endpoint
 * 
 * Returns the current count of published guestbook entries
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const token = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                  import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    
    if (!token) {
      return new Response(JSON.stringify({ 
        success: false,
        error: 'Missing API token',
        count: 0
      }), { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
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

    const collectionId = '69383a09bbf502930bf620a3';

    // Get total count of LIVE items
    const response = await client.collections.items.listItemsLive(collectionId, {
      limit: 1,
      offset: 0
    });
    
    const count = response.pagination?.total || 0;

    return new Response(JSON.stringify({ 
      success: true,
      count,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (error: any) {
    console.error('Error fetching guestbook count:', error);
    
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message || 'Failed to fetch count',
      count: 0
    }), { 
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
};
