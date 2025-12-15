/**
 * API Route: Create CMS Item
 * 
 * POST /api/cms/[collectionId]/create
 * 
 * Creates a new item in the specified Webflow CMS collection.
 * Handles authentication server-side to keep API tokens secure.
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

interface CreateItemRequest {
  fieldData: Record<string, any>;
  isArchived?: boolean;
  isDraft?: boolean;
  localeId?: string;
}

export const POST: APIRoute = async ({ params, request, locals }) => {
  try {
    // Get API token from environment (server-side only)
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

    // Get optional API host override
    const baseUrl = locals?.runtime?.env?.WEBFLOW_API_HOST 
      || import.meta.env.WEBFLOW_API_HOST;

    // Initialize Webflow client
    const client = new WebflowClient({
      accessToken: token,
      ...(baseUrl && { baseUrl })
    });

    // Get collection ID from URL params
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

    // Parse request body
    const body = await request.json() as CreateItemRequest;
    const { fieldData, isArchived, isDraft, localeId } = body;

    if (!fieldData) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Field data is required' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate required fields
    if (!fieldData.name || !fieldData.slug) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Name and slug are required fields',
          validationErrors: [
            ...(!fieldData.name ? [{ field: 'name', message: 'Name is required' }] : []),
            ...(!fieldData.slug ? [{ field: 'slug', message: 'Slug is required' }] : []),
          ]
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

    // Call Webflow API to create item
    let response;
    if (localeId) {
      // Note: localeId is passed as a separate parameter, not in the payload
      // The Webflow SDK may not support this - adjust if needed
      response = await client.collections.items.createItem(
        collectionId,
        payload
      );
    } else {
      // Create with default locale
      response = await client.collections.items.createItem(
        collectionId,
        payload
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        data: response,
      }),
      { 
        status: 201, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Error creating CMS item:', error);

    // Handle Webflow API errors
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
        { 
          status, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Handle other errors
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Internal server error',
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
};
