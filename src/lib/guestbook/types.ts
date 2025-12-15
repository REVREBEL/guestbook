/**
 * Guestbook CMS Integration Types
 * 
 * This file defines all TypeScript interfaces for the Guestbook form integration
 * with Webflow CMS.
 */

/**
 * Form field values collected from the GuestbookForm component
 */
export interface GuestbookFormValues {
  // System/Meta Fields (Top-level)
  guestbook_name?: string;       // CMS Name field (will also map to full_name if empty)
  slug?: string;                 // Auto-generated 10-digit code if empty
  collectionId: string;          // Required: Target CMS collection
  localeId?: string;             // Optional: Locale for multi-language sites
  itemId?: string;               // If present = update, if empty = create
  archived?: boolean;            // Archive status
  draft?: boolean;               // Draft status
  
  // Custom Fields (fieldData)
  guestbook_id?: string;
  full_name: string;             // Required - mapped to both 'name' and 'first-name'
  email: string;                 // Required - for edit authentication
  profile_image?: string | File; // Image URL or file upload
  guestbook_first_meeting?: string;
  guestbook_location?: string;
  guestbook_relationship?: string;
  guestbook_message?: string;
  date_added?: string | Date;    // ISO 8601 date string or Date object
  guestbook_edit_code?: string;  // Legacy field
  active?: boolean;              // Defaults to true on create
  edit_code?: string;            // 6-char edit authentication code
}

/**
 * Payload sent to Webflow CMS API for creating an item
 * 
 * Documentation: https://developers.webflow.com/data/reference/cms/collections/items/create-item
 */
export interface CreateCmsItemPayload {
  // Top-level fields
  fieldData: {
    name: string;                // Required by Webflow
    slug: string;                // Required by Webflow - 10-digit code
    
    // Custom fields (using CMS field slugs with hyphens)
    "guestbook-id"?: string;
    "first-name": string;        // Duplicate of name for custom field
    "email"?: string;
    "photo"?: {
      url: string;
      alt?: string;
    };
    "guestbook-first-meeting"?: string;
    "location"?: string;
    "relationship"?: string;
    "guestbook-message"?: string;
    "date-added"?: string;       // ISO 8601 format
    "guestbook-edit-code"?: string;
    "active"?: boolean;
    "edit-code"?: string;        // 6-char code
  };
  
  // Optional: Set to true to publish immediately
  isArchived?: boolean;
  isDraft?: boolean;
}

/**
 * Payload sent to Webflow CMS API for updating an item
 * 
 * Similar to create but targets an existing item by ID
 */
export interface UpdateCmsItemPayload {
  fieldData: {
    name?: string;
    slug?: string;               // Keep existing if not provided
    
    // Custom fields - all optional on update
    "guestbook-id"?: string;
    "first-name"?: string;
    "email"?: string;
    "photo"?: {
      url: string;
      alt?: string;
    };
    "guestbook-first-meeting"?: string;
    "location"?: string;
    "relationship"?: string;
    "guestbook-message"?: string;
    "date-added"?: string;
    "guestbook-edit-code"?: string;
    "active"?: boolean;
    "edit-code"?: string;
  };
  
  isArchived?: boolean;
  isDraft?: boolean;
}

/**
 * Response from Webflow CMS API after successful create/update
 */
export interface CmsItemResponse {
  id: string;                    // CMS item ID
  cmsLocaleId: string;
  lastPublished: string | null;
  lastUpdated: string;
  createdOn: string;
  isArchived: boolean;
  isDraft: boolean;
  fieldData: {
    name: string;
    slug: string;
    [key: string]: any;          // Custom fields
  };
}

/**
 * Props for the GuestbookButton component wrapper
 */
export interface GuestbookButtonProps {
  buttonText?: string;           // Text displayed on the button
  buttonVariant?: string;        // Styling variant
  collectionId?: string;         // Override default collection ID
  localeId?: string;             // Locale ID for multi-language
  itemId?: string;               // If provided, opens in edit mode
  onSuccess?: (data: CmsItemResponse) => void;  // Callback on successful submission
  onError?: (error: Error) => void;             // Callback on error
}

/**
 * Props for the external embed mount function
 */
export interface EmbedMountProps {
  buttonText?: string;
  buttonVariant?: string;
  collectionId?: string;
  localeId?: string;
  onSuccess?: (data: CmsItemResponse) => void;
  onError?: (error: Error) => void;
}

/**
 * Configuration for the guestbook integration
 * Set via environment variables
 */
export interface GuestbookConfig {
  collectionId: string;          // GUESTBOOK_COLLECTION_ID
  apiToken: string;              // WEBFLOW_CMS_SITE_API_TOKEN_WRITE
  apiHost?: string;              // Optional: WEBFLOW_API_HOST
}

/**
 * Validation error structure
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * API response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  validationErrors?: ValidationError[];
}
