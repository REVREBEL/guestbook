# Timeline Form Image Upload - Visual Integration Guide

This guide shows you **exactly** what to do in your Webflow page to add image uploads.

## 🎯 Quick Start - The Correct Script URL

**Your app is deployed at:** `https://patricia-lanning.webflow.io/guestbook-form`

**The script URL to use is:**
```html
<script src="https://patricia-lanning.webflow.io/guestbook-form/timeline-form-embed.js"></script>
```

⚠️ **Important:** The script path includes your app's base path (`/guestbook-form`)

---

## 🎨 Step-by-Step Visual Guide

### Step 1: Locate Your Timeline Form

In Webflow Designer, find your Timeline form element:

```
┌─────────────────────────────────────┐
│  Timeline Form                      │
│  ┌───────────────────────────────┐ │
│  │ Name Field                    │ │
│  ├───────────────────────────────┤ │
│  │ Location Field                │ │
│  ├───────────────────────────────┤ │
│  │ Memory Field                  │ │
│  ├───────────────────────────────┤ │
│  │ Month/Year Field              │ │
│  ├───────────────────────────────┤ │
│  │ 👇 Add upload divs here       │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Step 2: Add Upload Container Divs

Add two empty `<div>` elements where you want the image upload fields:

```html
<!-- After your existing form fields -->

<!-- Photo 1 Upload Container -->
<div data-timeline-image-upload="photo1" 
     data-upload-label="Upload First Photo"
     data-max-size-mb="10">
</div>

<!-- Photo 2 Upload Container -->
<div data-timeline-image-upload="photo2" 
     data-upload-label="Upload Second Photo"
     data-max-size-mb="10">
</div>
```

**Where to add this:**
1. In Webflow Designer, click your form
2. Add an "Embed" element
3. Paste the div code above
4. Repeat for the second upload field

### Step 3: What The User Will See

When the page loads, each empty `<div>` transforms into this beautiful upload UI:

**Desktop (180px × 200px):**
```
┌────────────────────┐
│                    │
│        📷          │
│   Upload Photo     │
│                    │
└────────────────────┘
  👆 Click to select
```

**Mobile (100% width, maintains 200px height):**
```
┌─────────────────────────────┐
│                             │
│            📷               │
│      Upload Photo           │
│                             │
└─────────────────────────────┘
     👆 Tap to select
```

After selecting an image:

```
┌────────────────────┐
│ [Image Preview] ❌ │
│                    │
│ ▓▓▓▓▓▓▓░░░ 75%    │
│ Uploading...       │
└────────────────────┘
```

After upload completes:

```
┌────────────────────┐
│ [Image Preview] ❌ │
│                    │
│ ✓ Upload complete  │
└────────────────────┘
  👆 Click ❌ to remove
```

### Step 4: Configure Form Settings

In Webflow, set your form settings:

**Action**: `https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit`
**Method**: `POST`

```
Form Settings in Webflow:
┌──────────────────────────────────────┐
│ Action: [https://patricia-lanning.  │
│         webflow.io/guestbook-form/   │
│         api/timeline/submit       ]  │
│ Method: [POST ▼]                     │
│ Redirect: [Leave blank          ]   │
└──────────────────────────────────────┘
```

### Step 5: Add The Embed Script

In your Webflow page settings:

1. Open **Page Settings** (⚙️ icon)
2. Go to **Custom Code** tab
3. Scroll to **Before </body> tag** section
4. Paste this code:

```html
<script src="https://patricia-lanning.webflow.io/guestbook-form/timeline-form-embed.js"></script>
```

⚠️ **Critical:** The URL must include `/guestbook-form` (your app's base path)

```
Page Settings → Custom Code:
┌──────────────────────────────────────┐
│ 📄 Head Code                         │
│ ┌──────────────────────────────────┐ │
│ │ [Leave empty]                    │ │
│ └──────────────────────────────────┘ │
│                                      │
│ 📄 Before </body> tag               │
│ ┌──────────────────────────────────┐ │
│ │ <script src="https://patricia-   │ │
│ │ lanning.webflow.io/guestbook-    │ │
│ │ form/timeline-form-embed.js">    │ │
│ │ </script>                        │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

## 🎯 Complete Example

Here's what your complete form structure should look like:

```html
<!-- Your Timeline Form -->
<form action="https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" method="POST">
  
  <!-- Regular text input -->
  <input type="text" name="name" placeholder="Your Name" required>
  
  <!-- Regular text input -->
  <input type="text" name="location" placeholder="Location">
  
  <!-- Regular textarea -->
  <textarea name="memory" placeholder="Share your memory" required></textarea>
  
  <!-- Regular text input -->
  <input type="text" name="month-year" placeholder="Month & Year">
  
  <!-- 👇 ADD THESE UPLOAD CONTAINERS -->
  
  <!-- Photo 1 Upload (Embed Element) -->
  <div data-timeline-image-upload="photo1" 
       data-upload-label="Upload First Photo"
       data-max-size-mb="10"></div>
  
  <!-- Photo 2 Upload (Embed Element) -->
  <div data-timeline-image-upload="photo2" 
       data-upload-label="Upload Second Photo"
       data-max-size-mb="10"></div>
  
  <!-- Submit button -->
  <button type="submit">Submit Memory</button>
  
</form>

<!-- 👇 ADD THIS TO PAGE SETTINGS → CUSTOM CODE → BEFORE </BODY> TAG -->
<script src="https://patricia-lanning.webflow.io/guestbook-form/timeline-form-embed.js"></script>
```

## 🔄 What Happens Behind The Scenes

When a user uploads an image, the embed automatically creates these hidden fields:

```html
<!-- These are created automatically - DON'T add them manually -->
<input type="hidden" name="photo1_url" value="https://your-bucket.r2.dev/abc123.jpg">
<input type="hidden" name="photo1_fileKey" value="timeline/abc123.jpg">
<input type="hidden" name="photo1_alt" value="">

<input type="hidden" name="photo2_url" value="https://your-bucket.r2.dev/def456.jpg">
<input type="hidden" name="photo2_fileKey" value="timeline/def456.jpg">
<input type="hidden" name="photo2_alt" value="">
```

When the form is submitted, these hidden fields go to your API along with the other form data.

## 📱 Responsive Design

The upload component automatically adapts to different screen sizes:

### Desktop / Tablet
- **Width**: `180px` (fixed)
- **Height**: `200px` (fixed)
- **Max Width**: `180px`

### Mobile / Small Containers
- **Width**: `100%` (fluid, up to 180px max)
- **Height**: `200px` (fixed)
- **Never overflows**: Uses `max-width: 180px`

The component will **never** overflow its container - it respects the available width while maintaining the design proportions from your Webflow component.

## 🎨 Styling Options

### Option 1: Use Default Styles (Recommended)
The embed uses your Webflow component's CSS variables automatically:
- `--_colors---core-accent-color--accent-primary` - Border and progress bar (#C98769)
- `--_colors---core-accent-color--accent-secondary` - Hover border
- `--_colors---core-neutral-color--neutral-primary` - Background (#F5F1EB)
- `--_colors---core-color-tint--accent-primary-a10` - Active background
- `--_apps---typography--body-font` - Typography (Aileron)

### Option 2: Custom CSS
Add this to your Webflow custom CSS:

```css
/* Style the upload container */
[data-timeline-image-upload] {
  margin: 20px 0;
}

/* Override width if needed */
[data-timeline-image-upload] > div {
  max-width: 100% !important; /* Fill container */
  width: 100% !important;
}

/* Style the upload button */
[data-timeline-image-upload] label {
  border-color: #your-color !important;
  background-color: #your-background !important;
}

/* Style the preview image */
[data-timeline-image-upload] img {
  border-radius: 8px;
}
```

## 📐 Layout Examples

### Side-by-Side Uploads (Desktop)

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
  <div>
    <label>Photo 1</label>
    <div data-timeline-image-upload="photo1"></div>
  </div>
  
  <div>
    <label>Photo 2</label>
    <div data-timeline-image-upload="photo2"></div>
  </div>
</div>
```

### Stacked Uploads (Mobile-Friendly)

```html
<div style="display: flex; flex-direction: column; gap: 20px;">
  <div>
    <label>Photo 1</label>
    <div data-timeline-image-upload="photo1"></div>
  </div>
  
  <div>
    <label>Photo 2</label>
    <div data-timeline-image-upload="photo2"></div>
  </div>
</div>
```

### With Field Labels

```html
<div class="form-field">
  <label class="field-label">Upload a Memory Photo</label>
  <div class="field-description">
    Share a photo from this memory (max 10MB, auto-compressed)
  </div>
  <div data-timeline-image-upload="photo1" 
       data-upload-label="Choose Photo"
       data-max-size-mb="10"></div>
</div>
```

## ✅ Testing Checklist

After adding the code:

1. **Publish** your Webflow site
2. **Visit** the page in a browser
3. **Open** browser console (F12)
4. **Check** for these:
   - [ ] Upload containers render on page load
   - [ ] No JavaScript errors in console
   - [ ] Console shows: "🚀 Initializing Timeline Image Uploads..."
   - [ ] Console shows: "✅ Timeline Image Uploads initialized"
   - [ ] Upload box fits within container (no overflow)
   - [ ] Clicking upload area opens file picker
5. **Resize** browser window:
   - [ ] Component stays within bounds on mobile
   - [ ] Component looks good at all screen sizes
6. **Select** a test image:
   - [ ] Preview appears immediately
   - [ ] Progress bar shows during compression
   - [ ] Progress bar shows during upload
   - [ ] Upload completes successfully
7. **Inspect** the form (right-click → Inspect):
   - [ ] Hidden fields created with `photo1_url`, etc.
   - [ ] Values contain R2 URLs
8. **Submit** the form:
   - [ ] Form submits successfully
   - [ ] Check Webflow CMS for new item
   - [ ] Images appear in CMS item

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do This:
```html
<!-- Wrong: Missing /guestbook-form base path -->
<script src="https://patricia-lanning.webflow.io/timeline-form-embed.js"></script>

<!-- Wrong: Missing data attribute -->
<div class="upload-container"></div>

<!-- Wrong: Incorrect attribute name -->
<div data-image-upload="photo1"></div>

<!-- Wrong: Script in wrong place -->
<head>
  <script src="timeline-form-embed.js"></script>
</head>

<!-- Wrong: Fixed width that causes overflow -->
<div style="width: 180px;">
  <div data-timeline-image-upload="photo1"></div>
</div>
```

### ✅ Do This Instead:
```html
<!-- Correct: Includes /guestbook-form base path -->
<script src="https://patricia-lanning.webflow.io/guestbook-form/timeline-form-embed.js"></script>

<!-- Correct: Has data-timeline-image-upload attribute -->
<div data-timeline-image-upload="photo1"></div>

<!-- Correct: Script before closing body tag -->
<body>
  <!-- Your page content -->
  <script src="https://patricia-lanning.webflow.io/guestbook-form/timeline-form-embed.js"></script>
</body>

<!-- Correct: Flexible container -->
<div style="max-width: 180px; width: 100%;">
  <div data-timeline-image-upload="photo1"></div>
</div>
```

## 🔍 Debugging

If the upload UI doesn't appear, open browser console (F12) and check:

### 1. Script Loading
```javascript
// Check if script loaded
console.log('Script loaded:', typeof initTimelineImageUploads);
// Should show: "Script loaded: function"
```

### 2. Container Detection
```javascript
// Check if containers are found
console.log('Containers:', document.querySelectorAll('[data-timeline-image-upload]').length);
// Should show: "Containers: 2" (or however many you added)
```

### 3. Network Tab
- Look for `timeline-form-embed.js` in Network tab
- Status should be **200** (not 404)
- If 404: Check the URL includes `/guestbook-form`

### 4. Console Messages
You should see:
```
🚀 Initializing Timeline Image Uploads...
Found 2 upload containers
Initializing upload: photo1
Initializing upload: photo2
✅ Timeline Image Uploads initialized
```

If you don't see these messages:
- Script didn't load (check URL)
- Script loaded after containers were removed (check timing)

### 5. Overflow Issues
If the upload box overflows:
- Check parent container width
- Add `max-width: 180px` to parent
- Component has built-in responsive sizing

## 🎓 Advanced Tips

### Multiple Forms on Same Page
Each upload needs a unique ID:

```html
<!-- Form 1 -->
<form>
  <div data-timeline-image-upload="form1-photo1"></div>
</form>

<!-- Form 2 -->
<form>
  <div data-timeline-image-upload="form2-photo1"></div>
</form>
```

### Conditional Display
Hide/show uploads based on other form values:

```html
<div id="upload-section" style="display: none;">
  <div data-timeline-image-upload="photo1"></div>
</div>

<script>
  document.getElementById('has-photo').addEventListener('change', (e) => {
    document.getElementById('upload-section').style.display = 
      e.target.checked ? 'block' : 'none';
  });
</script>
```

### Custom Validation
Require at least one photo:

```html
<script>
  document.querySelector('form').addEventListener('submit', (e) => {
    const hasPhoto1 = document.querySelector('input[name="photo1_url"]')?.value;
    const hasPhoto2 = document.querySelector('input[name="photo2_url"]')?.value;
    
    if (!hasPhoto1 && !hasPhoto2) {
      e.preventDefault();
      alert('Please upload at least one photo');
    }
  });
</script>
```

## 📱 Mobile Experience

The embed is fully responsive and touch-optimized:

**Desktop:**
```
┌──────────────────┐
│                  │
│       📷         │
│  Upload Photo    │
│                  │
└──────────────────┘
```

**Mobile:**
```
┌─────────────────────┐
│                     │
│         📷          │
│    Upload Photo     │
│                     │
└─────────────────────┘
```

On mobile devices, tapping the upload area will open the device's photo picker.

## 🎉 You're Done!

Once you've completed all the steps:
1. Your upload containers will render on page load
2. They'll fit perfectly in their containers (no overflow)
3. Users can select and upload images
4. Images are automatically compressed
5. Form submission includes image URLs
6. Timeline CMS items are created with images

Need help? Check the troubleshooting section in `docs/timeline-form-webflow-integration.md`.
