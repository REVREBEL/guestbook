# Cloudflare R2 Image Upload Integration Guide

## 📋 Overview

This guide explains how to integrate automatic image compression and R2 upload into your **existing Webflow form components** without rewriting them.

### What This Does
- ✅ Uses your existing Webflow form design (no redesign needed)
- ✅ Injects our React `ImageUpload` components into form slots
- ✅ Automatically compresses images > 1MB
- ✅ Uploads to Cloudflare R2 via Webflow Cloud binding
- ✅ Passes image URLs as hidden fields to your form
- ✅ Submits everything to CMS in one request

### What You Keep
- ✅ All your Webflow form styling
- ✅ All your form validation
- ✅ All your form field names
- ✅ All your form success/error states

---

## 🎯 Architecture

```
User fills form
    ↓
User selects images → ImageUpload component
    ↓
Image > 1MB? → Compress to ~1MB
    ↓
Upload to R2 → Get public URL
    ↓
Set hidden fields in form (photo1_url, photo2_url)
    ↓
User clicks submit → Form submits with all data + image URLs
    ↓
API receives form data → Writes to CMS with image references
    ↓
Success! → User redirected with confirmation
```

---

## 📦 Components

### 1. `ImageUpload.tsx` (Reusable Component)
**Purpose**: Handle individual image uploads with compression

**Features**:
- Automatic compression for files > 1MB
- Progress indicators (compression + upload)
- Preview with remove button
- Console logging for debugging
- Error handling

**Props**:
```typescript
interface ImageUploadProps {
  label?: string;              // "Upload Photo 1"
  name?: string;               // "photo1"
  maxSizeMB?: number;          // 10 (before compression)
  onUploadComplete?: (data: ImageData) => void;
  onUploadError?: (error: string) => void;
}
```

### 2. `TimelineFormWithUploads.tsx` (Wrapper Component)
**Purpose**: Wrap your Webflow form and inject upload components

**What It Does**:
- Imports your Webflow `TimelineForm` component
- Wraps it with `DevLinkProvider` (required for Webflow components)
- Injects `ImageUpload` components into photo slots
- Manages image state (`photo1`, `photo2`)
- Creates hidden fields with image data

**Output**:
```html
<!-- Hidden fields added to form -->
<input type="hidden" name="photo1_url" value="https://...r2.dev/images/123.jpg" />
<input type="hidden" name="photo1_alt" value="Timeline photo 1" />
<input type="hidden" name="photo1_fileKey" value="images/123.jpg" />

<input type="hidden" name="photo2_url" value="https://...r2.dev/images/456.jpg" />
<input type="hidden" name="photo2_alt" value="Timeline photo 2" />
<input type="hidden" name="photo2_fileKey" value="images/456.jpg" />
```

---

## 🔧 Integration Steps

### Step 1: Identify Your Form Component

Find your Webflow form component. Example:
```
src/site-components/TimelineForm.jsx
src/site-components/GuestbookForm.jsx
src/site-components/MemoryForm.jsx
```

### Step 2: Identify Upload Slots

Look for props in your form component that accept custom content:
```jsx
photo1UploadFIeldImageUploadSlot
photo2UploadFIeldImageUploadSlot
uploadPhotoFieldImageUploadSlot
```

These are where we'll inject our `ImageUpload` components.

### Step 3: Create Wrapper Component

Create a new file: `src/components/[YourForm]WithUploads.tsx`

```typescript
import { useState } from 'react';
import { DevLinkProvider } from '../site-components/DevLinkProvider';
import { YourForm } from '../site-components/YourForm';
import { ImageUpload } from './ImageUpload';
import type { ImageData } from '../lib/images/types';

export function YourFormWithUploads() {
  const [photo, setPhoto] = useState<ImageData | null>(null);

  const PhotoUploadSlot = (
    <div className="form-input_image-upload">
      <label className="input_label is-upload">Upload Photo</label>
      <ImageUpload
        label="Upload Photo"
        name="photo"
        maxSizeMB={10}
        onUploadComplete={setPhoto}
        onUploadError={(err) => console.error(err)}
      />
      {photo && (
        <>
          <input type="hidden" name="photo_url" value={photo.url} />
          <input type="hidden" name="photo_alt" value={photo.alt || ''} />
          <input type="hidden" name="photo_fileKey" value={photo.fileKey} />
        </>
      )}
    </div>
  );

  return (
    <DevLinkProvider>
      <YourForm
        uploadPhotoFieldImageUploadSlot={PhotoUploadSlot}
        // ... other props
      />
    </DevLinkProvider>
  );
}
```

### Step 4: Update Your Page

Use the wrapper instead of the original component:

```astro
---
import { YourFormWithUploads } from '../components/YourFormWithUploads';
---

<YourFormWithUploads client:only="react" />
```

### Step 5: Update API Endpoint

Make sure your API extracts the hidden fields:

```typescript
const photo1Url = formData.get('photo1_url') as string || '';
const photo1Alt = formData.get('photo1_alt') as string || '';
const photo1FileKey = formData.get('photo1_fileKey') as string || '';

// Include in CMS payload
const fieldData = {
  'photo-1': photo1Url ? {
    url: photo1Url,
    alt: photo1Alt || 'Photo 1'
  } : undefined,
  // ... other fields
};
```

---

## 🎨 Styling

### Keep Your Webflow Styles

The `ImageUpload` component uses minimal inline styles and respects your CSS variables:

```typescript
// Uses your theme colors
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
border: '2px solid var(--border)'
```

### Custom Styling

To match your Webflow form exactly, wrap the `ImageUpload` in your Webflow-styled divs:

```jsx
const PhotoUploadSlot = (
  <div className="form_input-background is-timeline">
    <div className="form-input_image-upload">
      <label className="input_label is-upload">Photo 1</label>
      <div className="upload_inner-border">
        <ImageUpload
          label="Upload Photo"
          name="photo1"
          onUploadComplete={setPhoto1}
        />
      </div>
    </div>
    {/* Hidden fields */}
  </div>
);
```

---

## 📊 User Experience Flow

### 1. Initial State
```
[Form fields displayed normally]

Photo 1 Section:
┌─────────────────────┐
│  [Upload Photo 1]   │
│  Max size: 10MB •   │
│  Auto-compressed    │
│  to ~1MB            │
└─────────────────────┘
```

### 2. Compressing (Large Image)
```
┌─────────────────────┐
│  [Image Preview]    │
│  Compressing...     │
│  ████████░░░░ 50%  │
└─────────────────────┘
```

### 3. Uploading
```
┌─────────────────────┐
│  [Image Preview]    │
│  Uploading... 75%   │
│  ████████████░░ 75% │
└─────────────────────┘
```

### 4. Complete
```
┌─────────────────────┐
│  [Image Preview]    │
│          [X]        │
└─────────────────────┘

(Hidden fields now populated with URL)
```

### 5. Submit Form
```
All form data + image URLs → Submit → CMS → Success!
```

---

## 🧪 Testing

### Test Cases

#### 1. Small Image (< 1MB)
```bash
# Expected:
- No compression
- Fast upload
- Console: "Image already small enough, skipping compression"
```

#### 2. Medium Image (2-5MB)
```bash
# Expected:
- Compress to ~1MB
- 1-2 second compression
- Upload completes
- Console shows compression ratio
```

#### 3. Large Image (5-10MB)
```bash
# Expected:
- Compress to ~1MB
- 2-4 second compression
- Upload completes
- Console shows significant reduction
```

#### 4. Invalid File Type
```bash
# Expected:
- Error message: "Please select an image file"
- No upload attempt
```

#### 5. Network Error
```bash
# Expected:
- Error message: "Upload failed"
- Image preview removed
- User can retry
```

#### 6. Form Submission
```bash
# Expected:
- All form fields + image URLs submitted
- CMS item created with image references
- User redirected to success page
```

---

## 🔍 Debugging

### Console Logs to Watch

#### Compression Logs
```javascript
📷 Original image: { name: "photo.jpg", size: "5.23 MB", type: "image/jpeg" }
🔄 Compressing image...
✅ Compressed image: { size: "0.98 MB", reduction: "81.3%" }
```

#### Upload Logs
```javascript
✅ Photo 1 uploaded: {
  url: "https://...r2.dev/images/123.jpg",
  fileKey: "images/123.jpg",
  alt: ""
}
```

#### Form Submission Logs
```javascript
Submitting timeline to CMS: {
  collectionId: "abc123",
  hasPhoto1: true,
  hasPhoto2: false
}
```

### Common Issues

#### Issue: Images Not Compressing
**Check:**
- Browser console for errors
- `browser-image-compression` installed
- File is actually > 1MB

#### Issue: Upload Fails
**Check:**
- R2_BUCKET binding in `webflow.json`
- R2 bucket is accessible
- File size < 1.5MB after compression
- Network connection

#### Issue: Hidden Fields Not Populated
**Check:**
- `onUploadComplete` callback is set
- State is updating correctly
- Hidden fields are inside form element
- Field names match API expectations

#### Issue: CMS Item Missing Images
**Check:**
- Hidden field values in form submission
- API correctly extracting `photo_url` fields
- Field names match CMS collection schema
- Image URL format is correct

---

## 🚀 Deployment Checklist

### Environment Variables Required

#### In Webflow Cloud Settings:
```
TIMELINE_COLLECTION_ID=abc123xyz
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=your-write-token
R2_PUBLIC_DOMAIN=https://pub-xyz.r2.dev
```

#### In `webflow.json`:
```json
{
  "bindings": {
    "R2_BUCKET": {
      "type": "r2",
      "bucket_name": "your-bucket-name"
    }
  }
}
```

### Pre-Deployment Testing

- [ ] Test image compression (small, medium, large)
- [ ] Test upload to R2
- [ ] Test form submission with images
- [ ] Verify CMS item created
- [ ] Verify images display correctly
- [ ] Test on mobile devices
- [ ] Test on slow connections
- [ ] Test error scenarios

### Post-Deployment Monitoring

- [ ] Check R2 bucket for uploaded images
- [ ] Verify file sizes are ~1MB
- [ ] Check CMS for new items with image references
- [ ] Monitor error logs
- [ ] Track upload success rate
- [ ] Monitor compression performance

---

## 💡 Advanced Usage

### Multiple Image Uploads

```typescript
const [photos, setPhotos] = useState<ImageData[]>([]);

const addPhoto = (imageData: ImageData) => {
  setPhotos([...photos, imageData]);
};

{photos.map((photo, index) => (
  <input 
    key={index} 
    type="hidden" 
    name={`photo${index + 1}_url`} 
    value={photo.url} 
  />
))}
```

### Conditional Required Fields

```typescript
const [photo1, setPhoto1] = useState<ImageData | null>(null);
const [formError, setFormError] = useState('');

const handleSubmit = (e: FormEvent) => {
  if (!photo1) {
    e.preventDefault();
    setFormError('Please upload at least one photo');
    return;
  }
  // Allow form to submit
};
```

### Custom Image Validation

```typescript
<ImageUpload
  accept="image/jpeg,image/png"  // Only JPEG/PNG
  maxSizeMB={5}                   // Stricter limit
  onUploadComplete={(data) => {
    // Additional validation
    if (data.fileSize > 2 * 1024 * 1024) {
      alert('Image too large after compression');
      return;
    }
    setPhoto(data);
  }}
/>
```

---

## 📚 Related Documentation

- [Image Compression Guide](./image-compression-guide.md) - Compression details
- [Compression Quick Reference](./compression-quick-reference.md) - Quick lookup
- [R2 Setup Checklist](../WEBFLOW_CLOUD_R2_CHECKLIST.md) - R2 configuration

---

## ✅ Summary

This integration approach allows you to:

1. ✅ **Keep your Webflow form** - No redesign needed
2. ✅ **Add compression** - Automatic for files > 1MB
3. ✅ **Upload to R2** - Secure, scalable storage
4. ✅ **Submit to CMS** - All in one request
5. ✅ **Maintain styling** - Uses your Webflow CSS

### Key Benefits

- **Zero redesign** - Works with existing forms
- **Automatic compression** - Users don't notice
- **Seamless integration** - Feels like native Webflow
- **Production ready** - Error handling included
- **Easy to debug** - Comprehensive logging

---

**Ready to integrate?** Follow the steps above and you'll have image uploads with compression in under 10 minutes! 🎉
