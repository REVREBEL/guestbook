/**
 * API Route: Get/Update CMS Item
 * 
 * GET /api/cms/[collectionId]/[itemId] - Fetch a single item
 * PATCH /api/cms/[collectionId]/[itemId] - Update an item
 * 
 * Handles individual item operations in Webflow CMS.
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

interface UpdateItemRequest {
  fieldData: Record<string, any>;
  isArchived?: boolean;
  isDraft?: boolean;
  localeId?: string;
}

/**
 * GET - Fetch a single CMS item by ID
 */
export const GET: APIRoute = async ({ params, locals }) => {
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

    const { collectionId, itemId } = params;
    
    if (!collectionId || !itemId) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Collection ID and Item ID are required' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Fetch item from Webflow CMS
    const item = await client.collections.items.getItemLive(collectionId, itemId);

    return new Response(
      JSON.stringify({
        success: true,
        data: item,
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Error fetching CMS item:', error);

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
        error: error.message || 'Item not found',
      }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

/**
 * PATCH - Update an existing CMS item
 */
export const PATCH: APIRoute = async ({ params, request, locals }) => {
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

    const { collectionId, itemId } = params;
    
    if (!collectionId || !itemId) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Collection ID and Item ID are required' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const body = await request.json() as UpdateItemRequest;
    const { fieldData, isArchived, isDraft } = body;

    if (!fieldData) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Field data is required' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare payload for Webflow API
    const payload: any = {
      fieldData: fieldData,
    };

    // Add optional fields
    if (typeof isArchived === 'boolean') {
      payload.isArchived = isArchived;
    }
    if (typeof isDraft === 'boolean') {
      payload.isDraft = isDraft;
    }

    // Call Webflow API to update item
    const response = await client.collections.items.updateItem(
      collectionId,
      itemId,
      payload
    );

    return new Response(
      JSON.stringify({
        success: true,
        data: response,
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Error updating CMS item:', error);

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
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
