# Timeline Form Image Upload - Webflow Integration Guide

This guide shows you how to add image upload functionality to your **static Webflow Timeline form**.

## Overview

The Timeline form image upload embed allows users to upload photos directly from your Webflow page, with:
- 📤 **Direct R2 uploads** from the browser
- 🗜️ **Automatic image compression** (reduces to ~1MB)
- 🎨 **Beautiful upload UI** with progress indicators
- 🔒 **Secure** - no API tokens exposed
- 📱 **Responsive** design

## Setup Steps

### 1. Add Upload Containers to Your Webflow Form

In your Webflow Timeline form, add empty `div` elements where you want the image upload fields:

```html
<!-- Photo 1 Upload -->
<div data-timeline-image-upload="photo1" 
     data-upload-label="Upload Photo 1"
     data-max-size-mb="10"></div>

<!-- Photo 2 Upload -->
<div data-timeline-image-upload="photo2" 
     data-upload-label="Upload Photo 2"
     data-max-size-mb="10"></div>
```

**Attributes:**
- `data-timeline-image-upload`: Unique ID for this upload field (e.g., "photo1", "photo2")
- `data-upload-label`: Label shown on the upload button (optional, defaults to "Upload Photo")
- `data-max-size-mb`: Maximum file size in MB before compression (optional, defaults to 10)

### 2. Add the Embed Script to Your Page

In your Webflow page settings, add this to the **Before </body> tag** custom code:

```html
<script src="https://your-app-url.webflow.app/timeline-form-embed.js"></script>
```

Replace `your-app-url.webflow.app` with your actual Webflow Cloud app URL.

### 3. Update Your Form Submission Endpoint

Your Timeline form should POST to:

```
https://your-app-url.webflow.app/api/timeline/submit
```

The embed automatically creates hidden fields for each uploaded image:
- `photo1_url` - The public R2 URL
- `photo1_fileKey` - The R2 storage key
- `photo1_alt` - Alt text (empty by default)
- `photo2_url` - The public R2 URL
- `photo2_fileKey` - The R2 storage key  
- `photo2_alt` - Alt text (empty by default)

### 4. Configure Environment Variables

In Webflow Cloud, set these environment variables:

```bash
# Required
TIMELINE_COLLECTION_ID=your_collection_id
R2_BUCKET_NAME=your_bucket_name
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_PUBLIC_URL=https://your-bucket.r2.dev

# Optional
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=your_write_token
```

## Complete Example

Here's a full example of how your Webflow form might look:

```html
<!-- Timeline Form -->
<form action="https://your-app-url.webflow.app/api/timeline/submit" method="POST">
  
  <!-- Regular form fields -->
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="text" name="location" placeholder="Location">
  <textarea name="memory" placeholder="Share your memory" required></textarea>
  <input type="text" name="month-year" placeholder="Month & Year">
  
  <!-- Image upload containers -->
  <div class="upload-container">
    <label>Photo 1</label>
    <div data-timeline-image-upload="photo1" 
         data-upload-label="Upload First Photo"
         data-max-size-mb="10"></div>
  </div>
  
  <div class="upload-container">
    <label>Photo 2</label>
    <div data-timeline-image-upload="photo2" 
         data-upload-label="Upload Second Photo"
         data-max-size-mb="10"></div>
  </div>
  
  <!-- Submit button -->
  <button type="submit">Submit Memory</button>
</form>

<!-- Add before closing body tag -->
<script src="https://your-app-url.webflow.app/timeline-form-embed.js"></script>
```

## How It Works

1. **User selects an image** → The embed shows a preview
2. **Image is compressed** → Files over 1MB are automatically compressed to ~1MB
3. **Image is uploaded to R2** → Secure upload directly to Cloudflare R2
4. **Hidden fields are created** → The embed adds hidden form fields with image URLs
5. **User submits form** → All data (including image URLs) goes to your API
6. **API creates CMS item** → Your Timeline API receives the image URLs and saves them

## Features

### Automatic Image Compression

- Images over 1MB are automatically compressed to ~1MB
- Original quality preserved as much as possible
- Progress indicator shows compression status
- Max width/height: 1920px
- Format: JPEG (for best compression)

### Upload Progress

- Real-time progress bar during compression and upload
- Visual feedback for both stages
- Error messages if upload fails

### Preview & Remove

- Immediate preview after file selection
- Remove button to cancel and choose a different image
- Re-upload capability

### Security

- All uploads go through your secure API endpoint
- R2 credentials never exposed to the browser
- Presigned URLs for secure uploads
- File type validation (images only)
- File size validation (configurable max size)

## Styling

The embed uses CSS custom properties for theming. Add these to your Webflow custom CSS:

```css
:root {
  --primary: #C98769;
  --background: #F5F1EB;
  --foreground: #29708d;
  --border: rgba(55, 61, 54, 0.1);
  --muted: #E6DCD4;
  --muted-foreground: rgba(55, 61, 54, 0.6);
  --destructive: #D9534F;
}
```

Or override specific styles:

```css
[data-timeline-image-upload] {
  /* Custom styles for upload container */
}

[data-timeline-image-upload] label {
  /* Custom styles for upload button */
  border-color: #your-color !important;
}
```

## Troubleshooting

### Upload containers not showing

1. Check browser console for errors
2. Verify the script is loaded: `console.log(window.initTimelineImageUploads)`
3. Ensure `data-timeline-image-upload` attribute is set correctly
4. Try manually initializing: `window.initTimelineImageUploads()`

### Images not uploading

1. Check browser console for network errors
2. Verify R2 environment variables are set in Webflow Cloud
3. Check R2 CORS settings allow your domain
4. Ensure the API endpoint URL is correct

### Form submission fails

1. Verify hidden fields are being created (check Elements panel)
2. Check that form action URL is correct
3. Ensure Timeline API endpoint is deployed
4. Check Webflow Cloud logs for errors

### Images too large

1. Increase `data-max-size-mb` attribute
2. The embed will compress images over 1MB automatically
3. Very large images (>20MB) may fail - ask users to resize first

## Advanced Usage

### Manual Initialization

If you need to initialize after the page loads (e.g., after dynamically adding forms):

```javascript
window.initTimelineImageUploads();
```

### Multiple Forms

The embed supports multiple forms on the same page. Just ensure each upload container has a unique `data-timeline-image-upload` ID.

### Custom Validation

Add your own validation before form submission:

```javascript
document.querySelector('form').addEventListener('submit', (e) => {
  const photo1 = document.querySelector('input[name="photo1_url"]');
  
  if (!photo1 || !photo1.value) {
    e.preventDefault();
    alert('Please upload at least one photo');
    return;
  }
  
  // Continue with submission
});
```

## Testing Checklist

- [ ] Upload containers render on page load
- [ ] File selection opens native file picker
- [ ] Preview shows after file selection
- [ ] Compression indicator shows for large files
- [ ] Upload progress bar displays
- [ ] Remove button clears the upload
- [ ] Hidden fields are created in the form
- [ ] Form submission includes image URLs
- [ ] CMS items are created with images
- [ ] Images are accessible via R2 public URL

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify all environment variables are set
3. Test the API endpoints directly (see API documentation)
4. Check Webflow Cloud deployment logs
5. Ensure R2 bucket is properly configured

## Related Documentation

- [Image Upload Implementation Guide](./image-compression-guide.md)
- [Cloudflare R2 Setup Guide](../WEBFLOW_CLOUD_R2_SETUP.md)
- [Timeline API Documentation](../TIMELINE_FORM_IMAGE_INTEGRATION.md)
