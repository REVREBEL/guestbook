/**
 * Timeline Form Image Upload Embed
 * 
 * This script adds image upload functionality to Webflow forms on static pages.
 * It finds image upload placeholders and replaces them with functional upload components.
 * 
 * Usage in Webflow:
 * 1. Add data-timeline-image-upload="photo1" to upload containers
 * 2. Add data-app-base-url="/guestbook-form" to the script tag
 * 3. Images are automatically compressed and uploaded to R2
 * 4. Hidden fields are created with image URLs for form submission
 */

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import imageCompression from 'browser-image-compression';
import { MediaImagePlus } from 'iconoir-react';

interface ImageData {
  url: string;
  fileKey: string;
  alt?: string;
  filename?: string;
  fileSize?: number;
  mimeType?: string;
}

interface ImageUploadEmbedProps {
  uploadId: string;
  label?: string;
  maxSizeMB?: number;
  baseUrl: string;
}

function ImageUploadEmbed({ uploadId, label = 'Photo 1', maxSizeMB = 10, baseUrl }: ImageUploadEmbedProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<ImageData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (uploadedImage) {
      console.log(`💾 ${uploadId} upload persisted:`, uploadedImage.url.substring(0, 50) + '...');
    }
  }, [uploadedImage, uploadId]);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setError(`File size must be less than ${maxSizeMB}MB`);
      return;
    }

    setFile(selectedFile);
    setError(null);

    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);

    await compressAndUpload(selectedFile);
  };

  const compressImage = async (imageFile: File): Promise<File> => {
    const fileSizeMB = imageFile.size / (1024 * 1024);
    
    console.log(`📷 [${uploadId}] Original:`, `${fileSizeMB.toFixed(2)} MB`);

    if (fileSizeMB <= 1) {
      console.log(`✅ [${uploadId}] Skipping compression`);
      return imageFile;
    }

    setCompressing(true);
    console.log(`🔄 [${uploadId}] Compressing...`);

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: 'image/jpeg',
        onProgress: (progress: number) => {
          setProgress(progress / 2);
        }
      };

      const compressedFile = await imageCompression(imageFile, options);
      const compressedSizeMB = compressedFile.size / (1024 * 1024);

      console.log(`✅ [${uploadId}] Compressed:`, `${compressedSizeMB.toFixed(2)} MB`);

      setCompressing(false);
      return compressedFile;
    } catch (err) {
      console.error(`❌ [${uploadId}] Compression failed:`, err);
      setCompressing(false);
      throw err;
    }
  };

  const uploadToR2 = async (imageFile: File): Promise<ImageData> => {
    console.log(`📤 [${uploadId}] Uploading to R2...`);
    console.log(`🌐 [${uploadId}] Base URL:`, baseUrl);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', imageFile);

      const uploadUrl = `${baseUrl}/api/images/upload`;
      console.log(`📍 [${uploadId}] Full upload URL:`, uploadUrl);

      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ [${uploadId}] Upload failed:`, response.status, errorText);
        throw new Error(`Upload failed: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success || !result.data) {
        throw new Error('Invalid response');
      }

      console.log(`✅ [${uploadId}] Upload complete`);
      setProgress(100);
      setUploading(false);

      return result.data;
    } catch (err) {
      console.error(`❌ [${uploadId}] Upload error:`, err);
      setUploading(false);
      throw err;
    }
  };

  const compressAndUpload = async (imageFile: File) => {
    try {
      setProgress(0);
      
      const compressedFile = await compressImage(imageFile);
      
      setProgress(50);
      const imageData = await uploadToR2(compressedFile);
      
      setUploadedImage(imageData);
      
      createHiddenFields(imageData);
      
      console.log(`✅ [${uploadId}] Complete`);
      
    } catch (err: any) {
      console.error(`❌ [${uploadId}] Failed:`, err);
      setError(err.message || 'Upload failed');
      setPreview(null);
      setFile(null);
    }
  };

  const createHiddenFields = (imageData: ImageData) => {
    const uploadContainer = document.querySelector(`[data-timeline-image-upload="${uploadId}"]`);
    const form = uploadContainer?.closest('form');
    
    if (!form) {
      console.error(`❌ [${uploadId}] No form found`);
      return;
    }

    const existingFields = form.querySelectorAll(`input[name^="${uploadId}_"]`);
    existingFields.forEach(field => field.remove());

    const createHiddenField = (name: string, value: string) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      input.setAttribute('data-upload-id', uploadId);
      form.appendChild(input);
    };

    createHiddenField(`${uploadId}_url`, imageData.url);
    createHiddenField(`${uploadId}_alt`, imageData.alt || '');
    createHiddenField(`${uploadId}_fileKey`, imageData.fileKey);

    console.log(`✅ [${uploadId}] Hidden fields created`);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setFile(null);
    setPreview(null);
    setUploadedImage(null);
    setError(null);
    setProgress(0);

    const uploadContainer = document.querySelector(`[data-timeline-image-upload="${uploadId}"]`);
    const form = uploadContainer?.closest('form');
    if (form) {
      const fields = form.querySelectorAll(`input[name^="${uploadId}_"]`);
      fields.forEach(field => field.remove());
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    minHeight: '180px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: isHovered 
      ? 'rgba(201, 135, 105, 0.1)' 
      : '#F5F1EB',
    transition: 'background-color 400ms ease',
    cursor: 'pointer',
    color: '#C98769',
    position: 'relative',
  };

  return (
    <>
      {!preview ? (
        <div
          style={containerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
            id={`file-input-${uploadId}`}
          />
          <label
            htmlFor={`file-input-${uploadId}`}
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              padding: '2rem 1rem',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '16px',
                fontFamily: 'Aileron, Arial, sans-serif',
              }}
            >
              {label}
            </div>
            <MediaImagePlus
              width={65}
              height={65}
              strokeWidth={1.5}
              color="currentColor"
            />
          </label>
        </div>
      ) : (
        <div style={{
          ...containerStyle,
          padding: 0,
          overflow: 'hidden',
        }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '180px',
              objectFit: 'cover',
            }}
          />
          
          {(compressing || uploading) && (
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(41, 112, 141, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F5F1EB',
              padding: '1rem',
            }}>
              <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
                {compressing ? 'Compressing...' : 'Uploading...'}
              </div>
              <div style={{
                width: '80%',
                maxWidth: '140px',
                height: '8px',
                backgroundColor: 'rgba(245, 241, 235, 0.3)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${progress}%`,
                  height: '100%',
                  backgroundColor: '#C98769',
                  transition: 'width 0.3s ease',
                }} />
              </div>
              <div style={{ marginTop: '8px', fontSize: '12px' }}>
                {Math.round(progress)}%
              </div>
            </div>
          )}
          
          {uploadedImage && !compressing && !uploading && (
            <button
              type="button"
              onClick={handleRemove}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(41, 112, 141, 0.8)',
                border: 'none',
                color: '#F5F1EB',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                transition: 'background-color 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(41, 112, 141, 0.95)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(41, 112, 141, 0.8)';
              }}
            >
              ×
            </button>
          )}
        </div>
      )}
      
      {error && (
        <div style={{
          marginTop: '8px',
          padding: '8px 12px',
          backgroundColor: '#D9534F',
          color: '#FFFFFF',
          borderRadius: '4px',
          fontSize: '12px',
        }}>
          {error}
        </div>
      )}
    </>
  );
}

function initTimelineImageUploads() {
  console.log('🚀 Initializing Timeline Image Uploads...');
  
  // Get base URL from script tag
  const scriptTag = document.querySelector('script[src*="timeline-form-embed"]');
  const baseUrl = scriptTag?.getAttribute('data-app-base-url') || '';
  
  console.log('🌐 Base URL from script tag:', baseUrl);
  
  if (!baseUrl) {
    console.error('❌ ERROR: data-app-base-url not set on script tag!');
    console.error('Add data-app-base-url="/guestbook-form" to your script tag');
    return;
  }
  
  const uploadContainers = document.querySelectorAll('[data-timeline-image-upload]');
  console.log(`Found ${uploadContainers.length} upload containers`);
  
  uploadContainers.forEach((container) => {
    const uploadId = container.getAttribute('data-timeline-image-upload');
    const label = container.getAttribute('data-upload-label') || 'Photo 1';
    const maxSize = parseInt(container.getAttribute('data-max-size-mb') || '10', 10);
    
    if (!uploadId) return;

    console.log(`Initializing: ${uploadId}`);
    
    container.innerHTML = '';
    
    const root = createRoot(container);
    root.render(
      <ImageUploadEmbed
        uploadId={uploadId}
        label={label}
        maxSizeMB={maxSize}
        baseUrl={baseUrl}
      />
    );
  });
  
  console.log('✅ Timeline Image Uploads initialized');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineImageUploads);
} else {
  initTimelineImageUploads();
}

(window as any).initTimelineImageUploads = initTimelineImageUploads;
