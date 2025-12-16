# Timeline Form Image Upload - Quick Start for Webflow

## 📋 What You Need

This solution allows you to add image upload functionality to your **static Webflow Timeline form** (not inside your Astro app).

## 🚀 How to Use on Your Webflow Page

### Step 1: Add Upload Containers

In your Webflow Timeline form, add empty `div` elements where you want image uploads:

```html
<div data-timeline-image-upload="photo1" 
     data-upload-label="Upload Photo 1"
     data-max-size-mb="10"></div>

<div data-timeline-image-upload="photo2" 
     data-upload-label="Upload Photo 2"
     data-max-size-mb="10"></div>
```

### Step 2: Add the Embed Script

In your Webflow page's **Before </body> tag** section:

```html
<script src="https://your-app-url.webflow.app/timeline-form-embed.js"></script>
```

### Step 3: Set Form Action

Point your form to the Timeline API endpoint:

```html
<form action="https://your-app-url.webflow.app/api/timeline/submit" method="POST">
  <!-- Your form fields -->
</form>
```

### Step 4: Deploy

1. Build the embed script:
   ```bash
   npm run build:timeline-embed
   ```

2. Deploy to Webflow Cloud (the script will be in `public/timeline-form-embed.js`)

## 🎯 How It Works

1. User selects an image → Preview shown
2. Image compressed automatically (if > 1MB) → Reduced to ~1MB
3. Image uploaded to R2 → Secure upload
4. Hidden fields created → `photo1_url`, `photo1_fileKey`, etc.
5. User submits form → API receives image URLs
6. CMS item created → Timeline entry saved with images

## 📦 What Gets Created

The embed automatically creates these hidden form fields:

- `photo1_url` - Public R2 URL for photo 1
- `photo1_fileKey` - Storage key for photo 1
- `photo1_alt` - Alt text (empty by default)
- `photo2_url` - Public R2 URL for photo 2
- `photo2_fileKey` - Storage key for photo 2
- `photo2_alt` - Alt text (empty by default)

## ✅ Features

- ✨ Beautiful upload UI with drag-and-drop feel
- 📊 Real-time compression & upload progress
- 🖼️ Instant image preview
- 🗑️ Remove and re-upload capability
- 🗜️ Automatic compression (reduces to ~1MB)
- 🔒 Secure - no API tokens exposed
- 📱 Fully responsive

## 🧪 Test It First

Visit your test page to see it in action:
- **Local**: http://localhost:4321/timeline-embed-test
- **Production**: https://your-app-url.webflow.app/timeline-embed-test

## 🎨 Customization

### Change Upload Labels

```html
<div data-timeline-image-upload="photo1" 
     data-upload-label="Your Custom Label"></div>
```

### Change Max File Size

```html
<div data-timeline-image-upload="photo1" 
     data-max-size-mb="15"></div>
```

### Style with CSS Variables

```css
:root {
  --primary: #C98769;
  --background: #F5F1EB;
  --foreground: #29708d;
  --border: rgba(55, 61, 54, 0.1);
}
```

## 🔧 Troubleshooting

### Upload containers not showing?
- Check browser console for errors
- Verify script URL is correct
- Check `data-timeline-image-upload` attribute is set

### Images not uploading?
- Verify R2 environment variables are set in Webflow Cloud
- Check browser network tab for failed requests
- Ensure CORS is configured on R2 bucket

### Form submission fails?
- Check form action URL points to your app
- Verify hidden fields are created (inspect Elements)
- Check Webflow Cloud logs for API errors

## 📚 Full Documentation

See `docs/timeline-form-webflow-integration.md` for complete documentation.

## 🆘 Need Help?

1. Test on `/timeline-embed-test` page first
2. Check browser console for errors
3. Verify all environment variables are set
4. Review Webflow Cloud deployment logs
