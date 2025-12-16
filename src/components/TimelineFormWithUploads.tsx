/**
 * Timeline Form Wrapper with Image Uploads
 * 
 * This component wraps the Webflow TimelineForm component and injects
 * ImageUpload components into the photo slots. The uploads happen via
 * our compression system, and the URLs are passed as hidden fields.
 */

import React, { useState } from 'react';
import { DevLinkProvider } from '../site-components/DevLinkProvider';
import { TimelineForm } from '../site-components/TimelineForm';
import { ImageUpload } from './ImageUpload';
import type { ImageData } from '../lib/images/types';

export function TimelineFormWithUploads() {
  const [photo1, setPhoto1] = useState<ImageData | null>(null);
  const [photo2, setPhoto2] = useState<ImageData | null>(null);

  // Photo 1 Upload Component (injected into slot)
  const Photo1UploadSlot = (
    <div className="form-input_image-upload" style={{ width: '100%' }}>
      <label className="input_label is-upload" style={{ marginBottom: '12px', display: 'block' }}>
        Photo 1
      </label>
      <ImageUpload
        label="Upload Photo 1"
        name="photo1"
        maxSizeMB={10}
        onUploadComplete={(imageData) => {
          console.log('✅ Photo 1 uploaded:', imageData);
          setPhoto1(imageData);
        }}
        onUploadError={(error) => {
          console.error('❌ Photo 1 upload failed:', error);
        }}
      />
      {/* Hidden fields to pass to form */}
      {photo1 && (
        <>
          <input type="hidden" name="photo1_url" value={photo1.url} />
          <input type="hidden" name="photo1_alt" value={photo1.alt || ''} />
          <input type="hidden" name="photo1_fileKey" value={photo1.fileKey} />
        </>
      )}
    </div>
  );

  // Photo 2 Upload Component (injected into slot)
  const Photo2UploadSlot = (
    <div className="form-input_image-upload" style={{ width: '100%' }}>
      <label className="input_label is-upload" style={{ marginBottom: '12px', display: 'block' }}>
        Photo 2
      </label>
      <ImageUpload
        label="Upload Photo 2"
        name="photo2"
        maxSizeMB={10}
        onUploadComplete={(imageData) => {
          console.log('✅ Photo 2 uploaded:', imageData);
          setPhoto2(imageData);
        }}
        onUploadError={(error) => {
          console.error('❌ Photo 2 upload failed:', error);
        }}
      />
      {/* Hidden fields to pass to form */}
      {photo2 && (
        <>
          <input type="hidden" name="photo2_url" value={photo2.url} />
          <input type="hidden" name="photo2_alt" value={photo2.alt || ''} />
          <input type="hidden" name="photo2_fileKey" value={photo2.fileKey} />
        </>
      )}
    </div>
  );

  return (
    <DevLinkProvider>
      <TimelineForm
        // Inject our upload components into the photo slots
        photo1UploadFIeldImageUploadSlot={Photo1UploadSlot}
        photo2UploadFIeldImageUploadSlot={Photo2UploadSlot}
        
        // Keep all other form fields visible and functional
        timelineDetailFieldFormInputVisibility={true}
        timelineNameLine1FormInputVisibility={true}
        tImelineNameLine2FormInputVisibility={true}
        locationFieldFormInputVisibility={true}
        timelineDateFieldFormInputVisibility={true}
        fullNameFieldFormInputVisibility={true}
        emailFieldFormInputVisibility={true}
        submitButtonSubmitButtonVisibility={true}
        
        // Collection ID (set from env var or hardcode)
        collectionIdFieldCollectionIdVariable={import.meta.env.PUBLIC_TIMELINE_COLLECTION_ID || ''}
      />
    </DevLinkProvider>
  );
}
