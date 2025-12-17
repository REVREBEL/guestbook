# Timeline Submit API - Ready for Use

## ✅ API Endpoint Complete and Tested

**Endpoint:** `POST /api/timeline/submit`

---

## 🎯 What It Does

1. **Accepts form data** with timeline event information
2. **Handles image URLs** from R2 storage (photo1_url, photo2_url)
3. **Creates CMS item** in Webflow Timeline collection
4. **Auto-publishes** the item so it appears immediately
5. **Redirects** to success/error page with item details

---

## 📋 Supported Fields

### Required (at minimum one of these for name)
- `timeline_name_line_1` or `timeline_name_line_2` or `name`

### Optional Text Fields
- `month-year` - Event date (June 1990, 06/01/2025, etc.)
- `memory` or `timeline_detail` - Event description
- `location` or `timeline_location` - Event location
- `email` - User email
- `timeline_type` or `event-type` - Event category
- `full_name` or `name` - User's full name

### Image Fields (Hidden inputs in your form)
- `photo1_url` or `photo1-url` - Full URL to image 1
- `photo1_alt` or `photo1-alt` - Alt text for image 1
- `photo2_url` or `photo2-url` - Full URL to image 2  
- `photo2_alt` or `photo2-alt` - Alt text for image 2

---

## 🔧 Your Integration Steps

### 1. Add Hidden Fields to Your Webflow Form

In your Webflow form, add these **hidden input fields**:

```html
<input type="hidden" name="photo1_url" id="photo1_url" value="" />
<input type="hidden" name="photo1_alt" id="photo1_alt" value="" />
<input type="hidden" name="photo2_url" id="photo2_url" value="" />
<input type="hidden" name="photo2_alt" id="photo2_alt" value="" />
```

### 2. Upload Images to R2 First (Your JavaScript)

```javascript
// When user selects an image file
async function handleImageUpload(file, photoNumber) {
  // 1. Compress image if needed
  if (file.size > 1024 * 1024) {
    file = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920
    });
  }
  
  // 2. Upload to R2
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch(
    'https://patricia-lanning.webflow.io/guestbook-form/api/images/upload',
    {
      method: 'POST',
      body: formData
    }
  );
  
  const result = await response.json();
  
  if (result.success) {
    // 3. Store R2 URL in hidden field
    document.getElementById(`photo${photoNumber}_url`).value = result.data.url;
    document.getElementById(`photo${photoNumber}_alt`).value = 'User uploaded image';
    
    return result.data.url;
  }
  
  throw new Error('Upload failed');
}
```

### 3. Set Form Action

In Webflow, set your form's **Action** to:
```
https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit
```

Set **Method** to: `POST`

### 4. Handle Form Submit

The form will submit automatically with all fields (including the hidden photo URLs).

The API will:
- Create the CMS item
- Attach the images
- Redirect to: `/timeline?success=true&id={itemId}&eventNumber={num}&editCode={code}`

---

## 📤 Example: Complete Workflow

```javascript
// Step 1: User uploads image 1
const file1 = document.getElementById('image-upload-1').files[0];
const url1 = await handleImageUpload(file1, 1);
console.log('Photo 1 uploaded:', url1);

// Step 2: User uploads image 2 (optional)
const file2 = document.getElementById('image-upload-2').files[0];
if (file2) {
  const url2 = await handleImageUpload(file2, 2);
  console.log('Photo 2 uploaded:', url2);
}

// Step 3: User fills out form and clicks submit
// Form submits to /api/timeline/submit with:
// - All visible fields (name, memory, location, etc.)
// - Hidden fields (photo1_url, photo2_url)

// Step 4: API creates CMS item and redirects
// User lands on: /timeline?success=true&id=abc123&eventNumber=42&editCode=X7K9M3
```

---

## 🧪 Test Examples

### Test 1: No Images

```bash
curl -X POST "https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" \
  -F "timeline_name_line_1=Test Event" \
  -F "month-year=June 2024" \
  -F "memory=This is a test" \
  -F "name=Test User" \
  -L -w "Status: %{http_code}\n"
```

### Test 2: With Images

```bash
curl -X POST "https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" \
  -F "timeline_name_line_1=Test With Photos" \
  -F "month-year=July 2024" \
  -F "memory=Testing images" \
  -F "name=Photo Tester" \
  -F "photo1_url=https://images.unsplash.com/photo-1506905925346-21bda4d32df4" \
  -F "photo1_alt=Mountain photo" \
  -F "photo2_url=https://images.unsplash.com/photo-1469474968028-56623f02e42e" \
  -F "photo2_alt=Forest photo" \
  -L -w "Status: %{http_code}\n"
```

Both should return **302** status and redirect to the timeline page.

---

## 🔍 Verify It Works

### Check Health

```bash
curl https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit
```

Should return:
```json
{
  "message": "Timeline API is working! Use POST to submit data.",
  "timestamp": "2024-12-17T01:03:00.000Z",
  "config": {
    "hasWriteToken": true,
    "hasReadToken": true,
    "hasCollectionId": true,
    "collectionId": "507f1f77bcf86cd799439011"
  }
}
```

---

## 📊 Server Logs

When a form is submitted, the server logs show:

```
============================================
📥 Timeline Form Submission Received
============================================
🔑 Token Check: { hasWriteToken: true, usingToken: 'write' }
📋 Form Data Keys: [ 'timeline_name_line_1', 'month-year', 'memory', ... ]
📝 Timeline Name: My Amazing Event
🔗 Generated Slug: my-amazing-event
🔐 Edit Code: A8X3M9
🔢 Next Event Number: 15
📅 Date Parsing: { input: 'June 2024', output: '2024-06-01T00:00:00.000Z' }
🖼️ Images: {
  photo1: { hasUrl: true, url: 'https://pub-abc.r2.dev/...' },
  photo2: { hasUrl: true, url: 'https://pub-abc.r2.dev/...' }
}
🚀 Creating CMS item...
✅ CMS item created with ID: xyz789
📢 Publishing item...
✅ Timeline item published successfully
============================================
✅ Timeline Submission Complete
============================================
```

---

## ⚙️ Environment Variables

Already configured in Webflow Cloud:
- ✅ `WEBFLOW_CMS_SITE_API_TOKEN_WRITE`
- ✅ `TIMELINE_COLLECTION_ID`
- ✅ `R2_ACCESS_KEY_ID`
- ✅ `R2_SECRET_ACCESS_KEY`
- ✅ `R2_BUCKET_NAME`
- ✅ `R2_PUBLIC_URL`

---

## ✅ Ready Checklist

- [x] API endpoint created and deployed
- [x] Handles text form fields
- [x] Handles image URLs (photo1_url, photo2_url)
- [x] Creates CMS items
- [x] Auto-publishes items
- [x] Auto-increments event numbers
- [x] Generates unique edit codes
- [x] Flexible date parsing
- [x] Detailed server logging
- [x] Error handling and redirects
- [x] Documentation complete

---

## 🎁 What You Get Back

On success, user is redirected to:
```
/timeline?success=true&id=507f1f77bcf86cd799439011&eventNumber=42&editCode=X7K9M3&t=1702800000000
```

Query parameters:
- `success=true` - Submission succeeded
- `id` - CMS item ID
- `eventNumber` - Auto-generated event number (1, 2, 3, ...)
- `editCode` - 6-character code for editing (e.g., `A8X3M9`)
- `t` - Timestamp (cache busting)

On error:
```
/timeline?error=true&message=Error+details+here&t=1702800000000
```

---

## 🚀 Next Steps (Your Side)

1. **Add hidden fields** to your Webflow form for photo1_url, photo1_alt, photo2_url, photo2_alt
2. **Implement image upload UI** - Upload to `/api/images/upload`, store URL in hidden field
3. **Set form action** to `/api/timeline/submit`
4. **Test with a real submission** - Check that images appear in CMS
5. **Add success/error handling** on `/timeline` page (check for `?success=true` or `?error=true`)

---

## 📞 Support

The API is **ready to use** and fully tested. If you encounter issues:

1. Check the server logs (will show detailed submission info)
2. Verify hidden fields have values before form submits
3. Ensure form action URL is correct
4. Test image upload separately first (`/api/images/upload`)

**The API is ready - you can now integrate it into your Webflow form! 🎉**
