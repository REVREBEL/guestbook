/**
 * Image Upload Types
 * 
 * Type definitions for image upload functionality
 */

export interface UploadUrlRequest {
  fileName: string;
  fileType: string;
}

export interface UploadUrlResponse {
  success: boolean;
  uploadUrl?: string;
  fileKey?: string;
  publicUrl?: string;
  error?: string;
}

export interface ImageData {
  url: string;
  alt: string;
  fileKey: string;
}

export interface ImageUploadProps {
  /** Label for the upload button */
  label?: string;
  /** Accept attribute for file input */
  accept?: string;
  /** Maximum file size in MB */
  maxSizeMB?: number;
  /** Callback when upload completes */
  onUploadComplete?: (imageData: ImageData) => void;
  /** Callback when upload fails */
  onUploadError?: (error: string) => void;
  /** Initial image data (for edit mode) */
  initialImage?: ImageData;
  /** Name attribute for form submission */
  name?: string;
}
