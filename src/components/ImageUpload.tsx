/**
 * Image Upload Component with Auto-Compression
 * 
 * Reusable component for uploading images to Cloudflare R2
 * Automatically compresses images > 1MB to prevent upload errors
 */

import { useState, useRef } from 'react';
import imageCompression from 'browser-image-compression';
import { uploadImage } from '../lib/images/api-client';
import type { ImageUploadProps, ImageData } from '../lib/images/types';

export function ImageUpload({
  label = 'Upload Image',
  accept = 'image/jpeg,image/jpg,image/png,image/gif,image/webp',
  maxSizeMB = 10,
  onUploadComplete,
  onUploadError,
  initialImage,
  name = 'image',
}: ImageUploadProps) {
  const [imageData, setImageData] = useState<ImageData | null>(initialImage || null);
  const [preview, setPreview] = useState<string | null>(initialImage?.url || null);
  const [uploading, setUploading] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const compressImage = async (file: File): Promise<File> => {
    const fileSizeMB = file.size / (1024 * 1024);
    
    // Skip compression for files already under 1MB
    if (fileSizeMB <= 1) {
      console.log('📷 Image already small enough, skipping compression:', {
        name: file.name,
        size: `${fileSizeMB.toFixed(2)} MB`,
        type: file.type,
      });
      return file;
    }

    console.log('📷 Original image:', {
      name: file.name,
      size: `${fileSizeMB.toFixed(2)} MB`,
      type: file.type,
    });

    setCompressing(true);

    try {
      const options = {
        maxSizeMB: 1, // Target 1MB
        maxWidthOrHeight: 1920, // Max dimension
        useWebWorker: true, // Use Web Worker for better performance
        fileType: 'image/jpeg', // Convert to JPEG for best compression
        initialQuality: 0.8, // Starting quality
      };

      console.log('🔄 Compressing image...');
      const compressedFile = await imageCompression(file, options);
      
      const compressedSizeMB = compressedFile.size / (1024 * 1024);
      const reduction = ((fileSizeMB - compressedSizeMB) / fileSizeMB * 100).toFixed(1);
      
      console.log('✅ Compressed image:', {
        name: compressedFile.name,
        size: `${compressedSizeMB.toFixed(2)} MB`,
        reduction: `${reduction}%`,
      });

      return compressedFile;
    } catch (error) {
      console.error('❌ Compression failed:', error);
      throw new Error('Failed to compress image');
    } finally {
      setCompressing(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset states
    setError(null);
    setProgress(0);

    // Validate file size (before compression)
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      const errorMsg = `File size must be less than ${maxSizeMB}MB`;
      setError(errorMsg);
      onUploadError?.(errorMsg);
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      const errorMsg = 'Please select an image file';
      setError(errorMsg);
      onUploadError?.(errorMsg);
      return;
    }

    // Show preview of original
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    try {
      // Compress image if needed
      const fileToUpload = await compressImage(file);

      // Upload compressed file
      setUploading(true);
      const result = await uploadImage(fileToUpload, (percent) => {
        setProgress(Math.round(percent));
      });

      if (result.success && result.imageData) {
        setImageData(result.imageData);
        onUploadComplete?.(result.imageData);
      } else {
        const errorMsg = result.error || 'Upload failed';
        setError(errorMsg);
        onUploadError?.(errorMsg);
        setPreview(null);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Upload failed';
      setError(errorMsg);
      onUploadError?.(errorMsg);
      setPreview(null);
    } finally {
      setUploading(false);
      setCompressing(false);
      setProgress(0);
    }
  };

  const handleRemove = () => {
    setImageData(null);
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isProcessing = uploading || compressing;

  return (
    <div style={{ width: '100%' }}>
      {/* Hidden input for form submission */}
      {imageData && (
        <>
          <input type="hidden" name={`${name}_url`} value={imageData.url} />
          <input type="hidden" name={`${name}_alt`} value={imageData.alt} />
          <input type="hidden" name={`${name}_fileKey`} value={imageData.fileKey} />
        </>
      )}

      {/* Preview or Upload Button */}
      {preview ? (
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              border: '2px solid var(--border)',
            }}
          />
          {!isProcessing && (
            <button
              type="button"
              onClick={handleRemove}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                backgroundColor: 'var(--destructive)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Remove image"
            >
              ×
            </button>
          )}
          {isProcessing && (
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '8px',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
              }}
            >
              <div style={{ fontSize: '14px', marginBottom: '4px' }}>
                {compressing && 'Compressing image...'}
                {uploading && `Uploading... ${progress}%`}
              </div>
              <div
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: compressing ? '50%' : `${progress}%`,
                    height: '100%',
                    backgroundColor: 'var(--primary)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            disabled={isProcessing}
            style={{ display: 'none' }}
            id={`file-input-${name}`}
          />
          <label
            htmlFor={`file-input-${name}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderRadius: '6px',
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              opacity: isProcessing ? 0.6 : 1,
              fontWeight: 600,
              border: 'none',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            {compressing ? 'Compressing...' : uploading ? 'Uploading...' : label}
          </label>
          <div style={{ marginTop: '8px', fontSize: '14px', color: 'var(--muted-foreground)' }}>
            Max size: {maxSizeMB}MB • Auto-compressed to ~1MB
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          style={{
            marginTop: '8px',
            padding: '12px',
            backgroundColor: 'var(--destructive)',
            color: 'white',
            borderRadius: '6px',
            fontSize: '14px',
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
