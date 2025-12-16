/**
 * Image Upload API Client (Webflow Cloud)
 * 
 * Client-side functions for uploading images via Webflow Cloud R2
 */

import { getClientBaseUrl } from '../base-url';

export interface UploadResponse {
  success: boolean;
  fileKey?: string;
  publicUrl?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  error?: string;
}

/**
 * Upload image directly to our API endpoint which writes to R2
 */
export async function uploadImage(
  file: File,
  onProgress?: (percent: number) => void
): Promise<{ success: boolean; imageData?: any; error?: string }> {
  try {
    const baseUrl = getClientBaseUrl();
    
    // Create FormData with the file
    const formData = new FormData();
    formData.append('file', file);

    // Upload using XMLHttpRequest for progress tracking
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      // Track upload progress
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable && onProgress) {
          const percent = (e.loaded / e.total) * 100;
          onProgress(percent);
        }
      });

      xhr.addEventListener('load', async () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response: UploadResponse = JSON.parse(xhr.responseText);
            
            if (response.success && response.publicUrl) {
              resolve({
                success: true,
                imageData: {
                  url: response.publicUrl,
                  alt: file.name.replace(/\.[^/.]+$/, ''), // Remove extension
                  fileKey: response.fileKey || '',
                },
              });
            } else {
              resolve({
                success: false,
                error: response.error || 'Upload failed',
              });
            }
          } catch (parseError) {
            reject(new Error('Failed to parse response'));
          }
        } else {
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            resolve({
              success: false,
              error: errorResponse.error || `Upload failed with status ${xhr.status}`,
            });
          } catch {
            resolve({
              success: false,
              error: `Upload failed with status ${xhr.status}`,
            });
          }
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Network error during upload'));
      });

      xhr.addEventListener('abort', () => {
        reject(new Error('Upload cancelled'));
      });

      // Send the request
      xhr.open('POST', `${baseUrl}/api/images/upload`);
      xhr.send(formData);
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return {
      success: false,
      error: error.message || 'Upload failed',
    };
  }
}
