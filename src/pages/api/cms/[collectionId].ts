/**
 * API Route: List CMS Items
 * 
 * GET /api/cms/[collectionId]?limit=20&offset=0
 * 
 * Lists live items from the specified Webflow CMS collection.
 * Supports pagination via query parameters.
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

export const GET: APIRoute = async ({ params, request, locals }) => {
  try {
    // Get API token from environment
    const token = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE 
      || import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE;
    
    if (!token) {
      console.error('Missing WEBFLOW_CMS_SITE_API_TOKEN_WRITE environment variable');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Server configuration error: Missing API token' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const baseUrl = locals?.runtime?.env?.WEBFLOW_API_HOST 
      || import.meta.env.WEBFLOW_API_HOST;

    const client = new WebflowClient({
      accessToken: token,
      ...(baseUrl && { baseUrl })
    });

    const { collectionId } = params;
    
    if (!collectionId) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Collection ID is required' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse pagination parameters from query string
    const url = new URL(request.url);
    const limit = Math.min(Number(url.searchParams.get('limit') ?? 20), 100);
    const offset = Number(url.searchParams.get('offset') ?? 0);

    // Fetch items from Webflow CMS (live items only)
    const response = await client.collections.items.listItemsLive(collectionId, {
      limit,
      offset,
    });

    return new Response(
      JSON.stringify(response),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Error listing CMS items:', error);

    if (error?.response) {
      const status = error.response.status || 500;
      const message = error.response.data?.message 
        || error.response.statusText 
        || 'Webflow API error';

      return new Response(
        JSON.stringify({
          success: false,
          error: message,
        }),
        { status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Internal server error',
      }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
