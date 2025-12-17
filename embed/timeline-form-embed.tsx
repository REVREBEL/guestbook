/**
 * Timeline Form Image Upload Embed
 * 
 * This script adds image upload functionality to Webflow forms on static pages.
 * It finds image upload placeholders and replaces them with functional upload components.
 * 
 * Usage in Webflow:
 * 1. Add data-timeline-image-upload="photo1" to upload containers
 * 2. Add data-app-base-url="https://your-site.webflow.io/guestbook-form" to the script tag
 * 3. Images are automatically compressed and uploaded to R2
 * 4. After form submission, images are attached to the CMS item
 */

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import imageCompression from 'browser-image-compression';
import { MediaImagePlus, Check } from 'iconoir-react';

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
  formElement: HTMLFormElement;
}

// Storage key for images
const STORAGE_KEY = '__timeline_images__';

// Global store for image data
const imageStore: Record<string, ImageData> = {};

// Load images from sessionStorage on init
function loadImagesFromStorage() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      Object.assign(imageStore, data);
      (window as any).__imageData = imageStore;
      console.log('📦 Loaded images from storage:', Object.keys(data));
    }
  } catch (e) {
    console.error('Failed to load images from storage:', e);
  }
}

// Save images to sessionStorage
function saveImagesToStorage() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(imageStore));
    console.log('💾 Saved images to storage:', Object.keys(imageStore));
  } catch (e) {
    console.error('Failed to save images to storage:', e);
  }
}

function ImageUploadEmbed({ uploadId, label = 'Photo 1', maxSizeMB = 10, baseUrl, formElement }: ImageUploadEmbedProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<ImageData | null>(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Load existing image on mount
  useEffect(() => {
    if (imageStore[uploadId]) {
      setUploadedImage(imageStore[uploadId]);
      setUploadComplete(true);
      setPreview(imageStore[uploadId].url);
      console.log(`📷 [${uploadId}] Restored from storage`);
    }
  }, [uploadId]);

  useEffect(() => {
    if (uploadedImage && !uploadComplete) {
      console.log(`💾 [${uploadId}] Stored image data`);
      imageStore[uploadId] = uploadedImage;
      (window as any).__imageData = imageStore;
      saveImagesToStorage();
      setUploadComplete(true);
    }
  }, [uploadedImage, uploadId, uploadComplete]);

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
    setUploadComplete(false);

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
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', imageFile);

      const uploadUrl = `${baseUrl}/api/images/upload`;
      console.log(`📤 [${uploadId}] Upload URL:`, uploadUrl);

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
      console.log(`✅ [${uploadId}] Complete`);
    } catch (err: any) {
      console.error(`❌ [${uploadId}] Failed:`, err);
      setError(err.message || 'Upload failed');
      setPreview(null);
      setFile(null);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setFile(null);
    setPreview(null);
    setUploadedImage(null);
    setUploadComplete(false);
    setError(null);
    setProgress(0);

    delete imageStore[uploadId];
    (window as any).__imageData = imageStore;
    saveImagesToStorage();
    
    console.log(`✅ [${uploadId}] Removed`);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    minHeight: '180px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: uploadComplete
      ? '#C98769'  // Primary color when upload complete
      : isHovered 
        ? 'rgba(201, 135, 105, 0.1)' 
        : '#F5F1EB',
    transition: 'background-color 400ms ease',
    cursor: 'pointer',
    color: uploadComplete ? '#FFFFFF' : '#C98769',
    position: 'relative',
    overflow: 'hidden',
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
        <div style={containerStyle}>
          {/* Background Image */}
          <img
            src={preview}
            alt="Preview"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          
          {/* Upload Progress Overlay - fills from bottom to top */}
          {(compressing || uploading) && (
            <>
              {/* Progress fill */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: `${progress}%`,
                backgroundColor: 'rgba(201, 135, 105, 0.85)',
                transition: 'height 0.3s ease',
                zIndex: 1,
              }} />
              
              {/* Progress text */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F5F1EB',
                padding: '1rem',
                zIndex: 2,
              }}>
                <div style={{ 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: 600,
                  fontFamily: 'Aileron, Arial, sans-serif',
                }}>
                  {compressing ? 'Compressing...' : 'Uploading...'}
                </div>
                <div style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  fontFamily: 'Aileron, Arial, sans-serif',
                }}>
                  {Math.round(progress)}%
                </div>
              </div>
            </>
          )}
          
          {/* Upload Complete Overlay */}
          {uploadComplete && !compressing && !uploading && (
            <>
              {/* Success fill overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(201, 135, 105, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}>
                <Check
                  width={60}
                  height={60}
                  strokeWidth={2.5}
                  color="#FFFFFF"
                  style={{ marginBottom: '8px' }}
                />
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  fontFamily: 'Aileron, Arial, sans-serif',
                }}>
                  Upload Complete
                </div>
              </div>
              
              {/* Remove button */}
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
                  backgroundColor: 'rgba(41, 112, 141, 0.9)',
                  border: 'none',
                  color: '#F5F1EB',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s ease',
                  zIndex: 2,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(41, 112, 141, 1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(41, 112, 141, 0.9)';
                }}
              >
                ×
              </button>
            </>
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
          fontFamily: 'Aileron, Arial, sans-serif',
        }}>
          {error}
        </div>
      )}
    </>
  );
}

async function handleFormSubmissionWithImages(
  form: HTMLFormElement,
  baseUrl: string,
  originalAction: string
): Promise<boolean> {
  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log('📝 CUSTOM FORM SUBMISSION WITH IMAGES');
  console.log('═══════════════════════════════════════════');
  
  const imageData = (window as any).__imageData || {};
  const imageCount = Object.keys(imageData).length;
  
  console.log(`📷 Images uploaded: ${imageCount}`);
  if (imageCount === 0) {
    console.log('⚠️ NO IMAGES FOUND! Proceeding with normal form submission...');
    return false; // Allow normal submission
  }
  
  Object.keys(imageData).forEach(key => {
    console.log(`  ✅ ${key}:`, imageData[key].url.substring(0, 50) + '...');
  });
  
  // Create FormData from the form
  const formData = new FormData(form);
  
  console.log('📋 Form fields:');
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      console.log(`  ${key}:`, value.substring(0, 50) + (value.length > 50 ? '...' : ''));
    }
  }
  
  console.log('');
  console.log('📤 Submitting form to API...');
  console.log('📍 URL:', originalAction);
  
  try {
    const response = await fetch(originalAction, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.status}`);
    }
    
    // The API returns a redirect response
    const redirectUrl = response.url;
    console.log('✅ Form submitted successfully');
    console.log('🔗 Redirect URL:', redirectUrl);
    
    // Extract item ID from redirect URL
    const urlObj = new URL(redirectUrl);
    const itemId = urlObj.searchParams.get('id');
    
    if (!itemId) {
      console.error('❌ No item ID in redirect URL');
      console.log('═══════════════════════════════════════════');
      window.location.href = redirectUrl;
      return true;
    }
    
    console.log('🎯 Item ID:', itemId);
    console.log('');
    console.log('🖼️ Attaching images to CMS item...');
    
    const payload: any = {};
    Object.entries(imageData).forEach(([uploadId, data]: [string, any]) => {
      payload[uploadId] = {
        url: data.url,
        alt: data.alt || ''
      };
    });
    
    console.log('📦 Payload:', payload);
    
    const attachResponse = await fetch(`${baseUrl}/api/timeline/attach-images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemId,
        images: payload
      })
    });
    
    if (!attachResponse.ok) {
      const errorText = await attachResponse.text();
      console.error('❌ Image attachment failed:', errorText);
      throw new Error(`Image attachment failed: ${attachResponse.status}`);
    }
    
    const attachResult = await attachResponse.json();
    console.log('✅ Images attached successfully');
    console.log('Result:', attachResult);
    
    // Clear the storage after successful attachment
    sessionStorage.removeItem(STORAGE_KEY);
    console.log('🧹 Cleared image storage');
    
    console.log('═══════════════════════════════════════════');
    console.log('');
    
    // Redirect to success page
    console.log('🔄 Redirecting to:', redirectUrl);
    window.location.href = redirectUrl;
    
    return true;
  } catch (error) {
    console.error('❌ Form submission failed:', error);
    console.log('═══════════════════════════════════════════');
    console.log('');
    alert('Failed to submit form. Please try again.');
    return true;
  }
}

function initTimelineImageUploads() {
  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log('🚀 TIMELINE IMAGE UPLOADS - INITIALIZATION');
  console.log('═══════════════════════════════════════════');
  
  // Load any existing images from storage
  loadImagesFromStorage();
  
  // Find all possible script tags
  const scriptTags = document.querySelectorAll('script[src*="timeline-form-embed"]');
  console.log('📜 Script tags found:', scriptTags.length);
  
  let baseUrl = '';
  let scriptTag: Element | null = null;
  
  // Try to find the script tag with data-app-base-url attribute
  scriptTags.forEach(tag => {
    const url = tag.getAttribute('data-app-base-url');
    if (url) {
      baseUrl = url;
      scriptTag = tag;
    }
  });
  
  // If not found, try the first script tag
  if (!scriptTag && scriptTags.length > 0) {
    scriptTag = scriptTags[0];
  }
  
  if (scriptTag) {
    const attrs = Array.from(scriptTag.attributes).map(a => `${a.name}="${a.value}"`);
    console.log('📜 Script attributes:', attrs.join(', '));
  }
  
  console.log('🌐 Base URL from attribute:', baseUrl || '❌ NOT SET');
  
  if (!baseUrl) {
    console.error('');
    console.error('═══════════════════════════════════════════');
    console.error('❌ CRITICAL ERROR: Missing base URL!');
    console.error('═══════════════════════════════════════════');
    console.error('Add data-app-base-url="https://your-site.webflow.io/guestbook-form" to the script tag');
    console.error('═══════════════════════════════════════════');
    console.error('');
    return;
  }
  
  // Find all upload containers
  const uploadContainers = document.querySelectorAll('[data-timeline-image-upload]');
  console.log(`📦 Upload containers found: ${uploadContainers.length}`);
  
  if (uploadContainers.length === 0) {
    console.warn('');
    console.warn('═══════════════════════════════════════════');
    console.warn('⚠️ WARNING: No upload containers found!');
    console.warn('═══════════════════════════════════════════');
    console.warn('');
    return;
  }
  
  // Log details about each container
  uploadContainers.forEach((container, index) => {
    const uploadId = container.getAttribute('data-timeline-image-upload');
    const label = container.getAttribute('data-upload-label');
    const hasForm = !!container.closest('form');
    console.log(`  ${index + 1}. Container:`, {
      uploadId,
      label,
      hasForm,
    });
  });
  
  const formMap = new Map<HTMLFormElement, HTMLElement[]>();
  
  uploadContainers.forEach((container, index) => {
    const uploadId = container.getAttribute('data-timeline-image-upload');
    const label = container.getAttribute('data-upload-label') || 'Photo ' + (index + 1);
    const maxSize = parseInt(container.getAttribute('data-max-size-mb') || '10', 10);
    
    if (!uploadId) {
      console.error(`❌ Container ${index + 1} missing uploadId`);
      return;
    }

    const form = container.closest('form');
    if (!form) {
      console.error(`❌ Container ${index + 1} (${uploadId}) not inside a form`);
      return;
    }
    
    if (!formMap.has(form)) {
      formMap.set(form, []);
    }
    formMap.get(form)!.push(container as HTMLElement);

    console.log(`✅ Initializing: ${uploadId}`);
    
    // Clear existing content
    const htmlContainer = container as HTMLElement;
    console.log(`  🧹 Clearing container (had ${htmlContainer.children.length} children)`);
    htmlContainer.innerHTML = '';
    
    // Create React root
    console.log(`  ⚛️ Creating React root for ${uploadId}`);
    const root = createRoot(container);
    
    // Render component
    console.log(`  🎨 Rendering component for ${uploadId}`);
    root.render(
      <ImageUploadEmbed
        uploadId={uploadId}
        label={label}
        maxSizeMB={maxSize}
        baseUrl={baseUrl}
        formElement={form}
      />
    );
    
    console.log(`  ✅ Component rendered for ${uploadId}`);
  });
  
  // HIJACK form submission by replacing the action URL temporarily
  console.log('');
  console.log('🔒 Hijacking form actions...');
  
  formMap.forEach((containers, form) => {
    const originalAction = form.action;
    console.log(`  📝 Form:`, form.id || form.name || '(unnamed)');
    console.log(`  📍 Original action:`, originalAction);
    
    // Store original action
    (form as any).__originalAction = originalAction;
    
    // Replace form action with a fake URL that we can intercept
    const fakeAction = 'about:blank#image-upload-intercept';
    form.action = fakeAction;
    console.log(`  🔄 Replaced with:`, fakeAction);
    
    // Listen for form submit
    form.addEventListener('submit', async function(event) {
      console.log('🚨 FORM SUBMIT EVENT - CHECKING ACTION');
      console.log('   Current action:', form.action);
      
      // Check if this is our intercepted submission
      if (form.action.includes('image-upload-intercept')) {
        console.log('   ✅ This is our intercepted form!');
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        
        const handled = await handleFormSubmissionWithImages(form, baseUrl, originalAction);
        
        if (!handled) {
          // No images, restore original action and resubmit
          console.log('   🔄 No images, restoring action and resubmitting...');
          form.action = originalAction;
          form.submit();
        }
      } else {
        console.log('   ⚠️ Normal form submission (action was restored)');
      }
    }, true);
    
    console.log(`  ✅ Form action hijacked`);
  });
  
  console.log('');
  console.log('✅ Timeline Image Uploads initialized successfully');
  console.log('═══════════════════════════════════════════');
  console.log('');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineImageUploads);
} else {
  initTimelineImageUploads();
}

// Also expose for manual initialization
(window as any).initTimelineImageUploads = initTimelineImageUploads;
