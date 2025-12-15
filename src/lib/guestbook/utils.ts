/**
 * Guestbook Utility Functions
 * 
 * Helper functions for validation, data transformation, and code generation.
 */

import type { GuestbookFormValues, ValidationError, CreateCmsItemPayload, UpdateCmsItemPayload } from './types';

/**
 * Generate a random 10-digit alphanumeric code for the slug
 * Used as both URL identifier and edit authentication
 * 
 * @returns 10-character string (e.g., "a1b2c3d4e5")
 */
export function generateSlug(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generate a random 6-character alphanumeric code for edit authentication
 * Case-sensitive for better security
 * 
 * @returns 6-character string (e.g., "Xy9K2m")
 */
export function generateEditCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Fallback: Generate a URL-safe slug from text
 * Only used if user explicitly provides guestbook_name and wants text-based slug
 * 
 * @param text - Input text to convert
 * @returns URL-safe slug
 */
export function slugifyText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/-+/g, '-')        // Replace multiple hyphens with single
    .substring(0, 50);          // Limit length
}

/**
 * Parse boolean values from various input types
 * Handles checkboxes, strings, and boolean values
 * 
 * @param value - Input value to parse
 * @returns boolean value
 */
export function parseBoolean(value: any): boolean {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lower = value.toLowerCase();
    return lower === 'true' || lower === 'yes' || lower === '1';
  }
  return Boolean(value);
}

/**
 * Convert date to ISO 8601 string format for Webflow CMS
 * 
 * @param date - Date object, date string, or undefined
 * @returns ISO 8601 string or undefined
 */
export function formatDateForCms(date?: string | Date): string | undefined {
  if (!date) return undefined;
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) return undefined;
    return dateObj.toISOString();
  } catch {
    return undefined;
  }
}

/**
 * Validate required fields for guestbook submission
 * 
 * @param values - Form values to validate
 * @returns Array of validation errors (empty if valid)
 */
export function validateGuestbookForm(values: GuestbookFormValues): ValidationError[] {
  const errors: ValidationError[] = [];

  // Required: Collection ID
  if (!values.collectionId || values.collectionId.trim() === '') {
    errors.push({
      field: 'collectionId',
      message: 'Collection ID is required'
    });
  }

  // Required: Full Name
  if (!values.full_name || values.full_name.trim() === '') {
    errors.push({
      field: 'full_name',
      message: 'Full name is required'
    });
  }

  // Required: Email
  if (!values.email || values.email.trim() === '') {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  } else if (!isValidEmail(values.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }

  // Optional: Validate date_added if provided
  if (values.date_added) {
    const formatted = formatDateForCms(values.date_added);
    if (!formatted) {
      errors.push({
        field: 'date_added',
        message: 'Invalid date format'
      });
    }
  }

  return errors;
}

/**
 * Simple email validation
 * 
 * @param email - Email address to validate
 * @returns true if valid format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Transform form values into Create CMS Item payload
 * Handles field mapping, code generation, and data formatting
 * 
 * @param values - Form values from user input
 * @returns Payload ready for Webflow CMS API
 */
export function transformToCreatePayload(values: GuestbookFormValues): CreateCmsItemPayload {
  // Generate required codes if not provided
  const slug = values.slug && values.slug.trim() !== '' 
    ? values.slug 
    : generateSlug();
  
  const editCode = values.edit_code && values.edit_code.trim() !== ''
    ? values.edit_code
    : generateEditCode();

  // Use full_name for the required 'name' field
  const name = values.full_name.trim();

  // Set date_added to now if not provided
  const dateAdded = values.date_added 
    ? formatDateForCms(values.date_added)
    : new Date().toISOString();

  return {
    fieldData: {
      // Required top-level fields
      name: name,
      slug: slug,
      
      // Custom fields (note: form uses underscores, CMS uses hyphens)
      "first-name": name,                                    // Duplicate of name
      "email": values.email,
      "guestbook-id": values.guestbook_id,
      "photo": values.profile_image ? {
        url: typeof values.profile_image === 'string' 
          ? values.profile_image 
          : '', // File uploads need separate handling
        alt: `${name}'s photo`
      } : undefined,
      "guestbook-first-meeting": values.guestbook_first_meeting,
      "location": values.guestbook_location,
      "relationship": values.guestbook_relationship,
      "guestbook-message": values.guestbook_message,
      "date-added": dateAdded,
      "guestbook-edit-code": values.guestbook_edit_code,
      "active": parseBoolean(values.active ?? true),        // Default to true
      "edit-code": editCode,
    },
    isArchived: parseBoolean(values.archived ?? false),
    isDraft: parseBoolean(values.draft ?? false),
  };
}

/**
 * Transform form values into Update CMS Item payload
 * Only includes fields that should be updated
 * Preserves existing slug and edit-code if not provided
 * 
 * @param values - Form values from user input
 * @returns Payload ready for Webflow CMS API
 */
export function transformToUpdatePayload(values: GuestbookFormValues): UpdateCmsItemPayload {
  const name = values.full_name?.trim();

  return {
    fieldData: {
      // Only update fields that are provided
      ...(name && {
        name: name,
        "first-name": name,
      }),
      ...(values.slug && { slug: values.slug }),
      ...(values.email && { "email": values.email }),
      ...(values.guestbook_id && { "guestbook-id": values.guestbook_id }),
      ...(values.profile_image && {
        "photo": {
          url: typeof values.profile_image === 'string' 
            ? values.profile_image 
            : '',
          alt: name ? `${name}'s photo` : undefined
        }
      }),
      ...(values.guestbook_first_meeting && { 
        "guestbook-first-meeting": values.guestbook_first_meeting 
      }),
      ...(values.guestbook_location && { "location": values.guestbook_location }),
      ...(values.guestbook_relationship && { "relationship": values.guestbook_relationship }),
      ...(values.guestbook_message && { "guestbook-message": values.guestbook_message }),
      ...(values.date_added && { "date-added": formatDateForCms(values.date_added) }),
      ...(values.guestbook_edit_code && { "guestbook-edit-code": values.guestbook_edit_code }),
      ...(values.active !== undefined && { "active": parseBoolean(values.active) }),
      ...(values.edit_code && { "edit-code": values.edit_code }),
    },
    ...(values.archived !== undefined && { isArchived: parseBoolean(values.archived) }),
    ...(values.draft !== undefined && { isDraft: parseBoolean(values.draft) }),
  };
}

/**
 * Extract form values from FormData object
 * Used in API routes to parse submitted form data
 * 
 * @param formData - FormData from form submission
 * @returns Typed form values object
 */
export function extractFormValues(formData: FormData): GuestbookFormValues {
  return {
    // System fields
    guestbook_name: formData.get('guestbook_name') as string,
    slug: formData.get('slug') as string,
    collectionId: formData.get('Collection ID') as string || formData.get('collectionId') as string,
    localeId: formData.get('Locale ID') as string || formData.get('localeId') as string,
    itemId: formData.get('Item ID') as string || formData.get('itemId') as string,
    archived: parseBoolean(formData.get('Archived')),
    draft: parseBoolean(formData.get('Draft')),
    
    // Custom fields
    guestbook_id: formData.get('guestbook_id') as string,
    full_name: formData.get('full_name') as string,
    email: formData.get('email') as string,
    profile_image: formData.get('profile_image') as string,
    guestbook_first_meeting: formData.get('guestbook_first_meeting') as string,
    guestbook_location: formData.get('guestbook_location') as string,
    guestbook_relationship: formData.get('guestbook_relationship') as string,
    guestbook_message: formData.get('guestbook_message') as string,
    date_added: formData.get('date_added') as string,
    guestbook_edit_code: formData.get('guestbook_edit_code') as string,
    active: parseBoolean(formData.get('active')),
    edit_code: formData.get('edit_code') as string,
  };
}

/**
 * Format success message for user display
 * 
 * @param response - CMS API response
 * @param isUpdate - Whether this was an update operation
 * @returns User-friendly success message
 */
export function formatSuccessMessage(response: any, isUpdate: boolean): string {
  const action = isUpdate ? 'updated' : 'created';
  return `Guestbook entry ${action} successfully! Item ID: ${response.id}`;
}

/**
 * Format error message for user display
 * 
 * @param error - Error object or message
 * @returns User-friendly error message
 */
export function formatErrorMessage(error: any): string {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (error?.error) return error.error;
  return 'An unexpected error occurred. Please try again.';
}
