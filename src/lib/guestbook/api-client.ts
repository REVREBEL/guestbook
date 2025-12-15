/**
 * Guestbook CMS API Client
 * 
 * Client-side module for communicating with Webflow CMS via our API routes.
 * Never exposes API tokens to the client.
 */

import type { 
  GuestbookFormValues, 
  CmsItemResponse, 
  ApiResponse 
} from './types';
import { 
  validateGuestbookForm, 
  transformToCreatePayload, 
  transformToUpdatePayload 
} from './utils';
import { baseUrl } from '../base-url';

/**
 * Submit guestbook form data to create or update a CMS item
 * Routes to appropriate endpoint based on presence of itemId
 * 
 * @param values - Form values to submit
 * @returns Promise with CMS item response
 * @throws Error if submission fails
 */
export async function submitGuestbookForm(
  values: GuestbookFormValues
): Promise<CmsItemResponse> {
  // Client-side validation
  const validationErrors = validateGuestbookForm(values);
  if (validationErrors.length > 0) {
    throw new Error(
      `Validation failed: ${validationErrors.map(e => e.message).join(', ')}`
    );
  }

  // Determine if this is create or update
  const isUpdate = Boolean(values.itemId && values.itemId.trim() !== '');
  
  if (isUpdate) {
    return updateGuestbookItem(values);
  } else {
    return createGuestbookItem(values);
  }
}

/**
 * Create a new guestbook CMS item
 * 
 * @param values - Form values
 * @returns Promise with created item data
 */
async function createGuestbookItem(
  values: GuestbookFormValues
): Promise<CmsItemResponse> {
  const payload = transformToCreatePayload(values);
  
  // Use base URL for API route
  const url = `${baseUrl}/api/cms/${values.collectionId}/create`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      localeId: values.localeId, // Pass separately for API route
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ 
      error: 'Failed to create guestbook entry' 
    })) as { error?: string };
    throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  const result: ApiResponse<CmsItemResponse> = await response.json();
  
  if (!result.success || !result.data) {
    throw new Error(result.error || 'Failed to create guestbook entry');
  }

  return result.data;
}

/**
 * Update an existing guestbook CMS item
 * 
 * @param values - Form values including itemId
 * @returns Promise with updated item data
 */
async function updateGuestbookItem(
  values: GuestbookFormValues
): Promise<CmsItemResponse> {
  if (!values.itemId) {
    throw new Error('Item ID is required for updates');
  }

  const payload = transformToUpdatePayload(values);
  
  // Use base URL for API route
  const url = `${baseUrl}/api/cms/${values.collectionId}/${values.itemId}`;
  
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      localeId: values.localeId,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ 
      error: 'Failed to update guestbook entry' 
    })) as { error?: string };
    throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  const result: ApiResponse<CmsItemResponse> = await response.json();
  
  if (!result.success || !result.data) {
    throw new Error(result.error || 'Failed to update guestbook entry');
  }

  return result.data;
}

/**
 * Fetch a single guestbook item by ID
 * Useful for loading existing data into the form for editing
 * 
 * @param collectionId - CMS collection ID
 * @param itemId - CMS item ID
 * @returns Promise with item data
 */
export async function getGuestbookItem(
  collectionId: string,
  itemId: string
): Promise<CmsItemResponse> {
  // Use base URL for API route
  const url = `${baseUrl}/api/cms/${collectionId}/${itemId}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ 
      error: 'Failed to fetch guestbook entry' 
    })) as { error?: string };
    throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  const result: ApiResponse<CmsItemResponse> = await response.json();
  
  if (!result.success || !result.data) {
    throw new Error(result.error || 'Failed to fetch guestbook entry');
  }

  return result.data;
}

/**
 * List guestbook items from a collection
 * Supports pagination
 * 
 * @param collectionId - CMS collection ID
 * @param options - Query options (limit, offset)
 * @returns Promise with items array and pagination info
 */
export async function listGuestbookItems(
  collectionId: string,
  options?: { limit?: number; offset?: number }
): Promise<{ items: CmsItemResponse[]; pagination: any }> {
  const { limit = 20, offset = 0 } = options || {};
  
  // Use base URL for API route
  const url = `${baseUrl}/api/cms/${collectionId}?limit=${limit}&offset=${offset}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ 
      error: 'Failed to fetch guestbook entries' 
    })) as { error?: string };
    throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  const result = await response.json() as { items: CmsItemResponse[]; pagination: any };
  return result;
}
