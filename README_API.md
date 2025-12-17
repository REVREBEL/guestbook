# Timeline Form API - Documentation Index

## 🎯 Start Here

**API Status:** ✅ Production Ready  
**Last Tested:** 2025-12-17 01:05 UTC  
**All Tests:** PASSING (7/7)

---

## 📚 Documentation

### Quick Start (Read First)
- **`DONE.txt`** - Summary of what's delivered and your 3 steps
- **`QUICK_START.txt`** - Visual 3-step integration guide
- **`HANDOFF.md`** - Complete handoff document with examples

### Detailed Guides
- **`API_COMPLETE.md`** - Production status, complete integration code
- **`docs/TIMELINE_SUBMIT_API.md`** - Full API reference (all fields, formats, examples)
- **`docs/TIMELINE_SUBMIT_API_READY.md`** - Ready-for-use integration guide

### Testing
- **`test-api-endpoint.mjs`** - Automated Node.js test suite (run: `node test-api-endpoint.mjs`)
- **`test-timeline-submit.sh`** - Bash/curl test suite (run: `bash test-timeline-submit.sh`)

---

## 🚀 Your 3 Steps

### 1. Add Hidden Fields to Webflow Form

```html
<input type="hidden" name="photo1_url" id="photo1_url" />
<input type="hidden" name="photo1_alt" id="photo1_alt" />
<input type="hidden" name="photo2_url" id="photo2_url" />
<input type="hidden" name="photo2_alt" id="photo2_alt" />
```

### 2. Upload Images via JavaScript

```javascript
// When user selects an image
const formData = new FormData();
formData.append('file', imageFile);

const response = await fetch('/api/images/upload', {
  method: 'POST',
  body: formData
});

const result = await response.json();

// Store R2 URL in hidden field
document.getElementById('photo1_url').value = result.data.url;
```

### 3. Set Form Action

```
Action: https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit
Method: POST
```

---

## 🧪 Test the API

### Quick Test (curl)

```bash
curl -X POST "https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" \
  -F "timeline_name_line_1=Test Event" \
  -F "month-year=June 2024" \
  -F "name=Test User" \
  -F "memory=Testing" \
  -F "photo1_url=https://images.unsplash.com/photo-1506905925346-21bda4d32df4" \
  -L
```

### Health Check

```bash
curl https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit
```

### Full Test Suite

```bash
node test-api-endpoint.mjs
```

---

## 📋 What the API Does

✅ Accepts form data (event name, date, description, location, etc.)  
✅ Accepts image URLs via hidden fields (`photo1_url`, `photo2_url`)  
✅ Creates CMS items in Timeline collection  
✅ Auto-publishes items (appear immediately)  
✅ Auto-increments event numbers  
✅ Generates unique 6-character edit codes  
✅ Supports multiple date formats  
✅ Redirects to success/error pages  
✅ Detailed server-side logging  

---

## 🎁 What You Get Back

After successful submission, user redirects to:

```
/timeline?success=true&id={itemId}&eventNumber={100}&editCode={QVXJP0}&t={timestamp}
```

On error:

```
/timeline?error=true&message={errorMessage}&t={timestamp}
```

---

## 📊 Form Fields Supported

### Standard Fields (Your Form)
- `timeline_name_line_1` - Event name (line 1)
- `timeline_name_line_2` - Event name (line 2)
- `month-year` - Event date (flexible formats)
- `memory` - Event description
- `location` - Event location
- `name` - User's name
- `email` - User's email
- `timeline_type` - Event category

### Image Fields (Hidden)
- `photo1_url` - R2 URL for photo 1
- `photo1_alt` - Alt text for photo 1
- `photo2_url` - R2 URL for photo 2
- `photo2_alt` - Alt text for photo 2

---

## 🔍 Complete Example

See **`API_COMPLETE.md`** for:
- Complete HTML form with hidden fields
- JavaScript upload handler (copy-paste ready)
- Success/error page handling
- Browser debugging tips

---

## ✅ Production Ready

- [x] API endpoint deployed to production
- [x] All tests passing (7/7)
- [x] Environment variables configured
- [x] Image upload working
- [x] CMS integration working
- [x] Auto-publish working
- [x] Documentation complete
- [ ] Hidden fields added to your Webflow form (your side)
- [ ] JavaScript upload handler added (your side)
- [ ] Form action updated (your side)

---

## 📞 Support

If something doesn't work:

1. Check **`docs/TIMELINE_SUBMIT_API.md`** - Troubleshooting section
2. Run test suite: `node test-api-endpoint.mjs`
3. Check server logs in Webflow Cloud → Apps → Logs
4. Verify hidden fields have values before submit

---

## 🎉 Ready to Start!

The API is 100% complete and tested. Start with **`QUICK_START.txt`** for your 3-step integration guide.

**Endpoint:** `POST https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit`

**Status:** ✅ READY
