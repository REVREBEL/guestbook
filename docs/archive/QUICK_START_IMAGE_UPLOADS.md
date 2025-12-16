# 🚀 Quick Start: Add Image Uploads to Your Webflow Form

## ⚡ 5-Minute Integration

Follow these steps to add automatic image compression and R2 uploads to your existing Webflow form.

---

## ✅ Prerequisites

Make sure you have:
- [ ] Webflow form component (e.g., `TimelineForm.jsx`)
- [ ] Image upload slots in your form (e.g., `photo1UploadFIeldImageUploadSlot`)
- [ ] R2 bucket configured in `webflow.json`
- [ ] Environment variables set

---

## 📝 Step-by-Step

### Step 1: Use the Wrapper Component (10 seconds)

**In your page/modal** (e.g., `src/pages/timeline-test.astro`):

```astro
---
// Replace this:
// import { TimelineForm } from '../site-components/TimelineForm';

// With this:
import { TimelineFormWithUploads } from '../components/TimelineFormWithUploads';
---

<!-- Replace this: -->
<!-- <TimelineForm client:only="react" /> -->

<!-- With this: -->
<TimelineFormWithUploads client:only="react" />
```

**That's it!** Your form now has image uploads with compression. 🎉

---

## 🧪 Test It

### 1. Start Dev Server
```bash
npm run dev
```

### 2. Visit Test Page
```
http://localhost:4321/timeline-test
```

### 3. Upload Images
- Try a small image (< 1MB)
- Try a large image (5-10MB)
- Check browser console for logs
- Verify preview appears
- Test form submission

### 4. Check Results
- [ ] Images compressed to ~1MB
- [ ] Upload progress shown
- [ ] Preview displayed
- [ ] Form submits successfully
- [ ] CMS item created with images

---

## 📊 What You Should See

### In Browser Console
```javascript
📷 Image already small enough, skipping compression
// or
📷 Original image: { size: "5.23 MB" }
🔄 Compressing image...
✅ Compressed image: { size: "0.98 MB", reduction: "81.3%" }
✅ Photo 1 uploaded: { url: "https://...jpg" }
```

### In UI
```
[Upload Photo 1]
    ↓ Select large image
[Compressing... 50%]
    ↓ Wait 1-2 seconds
[Uploading... 75%]
    ↓ Wait 1-2 seconds
[Preview] [X]
    ↓ Ready to submit!
```

---

## 🎨 Customization (Optional)

### Change Button Text
In `src/components/TimelineFormWithUploads.tsx`:
```typescript
<ImageUpload
  label="Choose Photo 1"  // ← Change this
  name="photo1"
  // ...
/>
```

### Make Upload Required
```typescript
const handleSubmit = (e: FormEvent) => {
  if (!photo1) {
    e.preventDefault();
    alert('Please upload at least one photo');
  }
};
```

### Adjust Compression
In `src/components/ImageUpload.tsx`:
```typescript
const options = {
  maxSizeMB: 0.5,         // More aggressive (500KB)
  maxWidthOrHeight: 1280, // Smaller dimension
};
```

---

## 🐛 Troubleshooting

### Issue: Upload Button Doesn't Appear
**Fix**: Make sure your form has the upload slots defined:
```typescript
photo1UploadFIeldImageUploadSlot
photo2UploadFIeldImageUploadSlot
```

### Issue: Images Not Compressing
**Check**:
- [ ] `browser-image-compression` installed
- [ ] Browser supports Canvas API
- [ ] Console for errors

### Issue: Upload Fails
**Check**:
- [ ] R2_BUCKET in `webflow.json`
- [ ] R2_PUBLIC_DOMAIN environment variable
- [ ] Network tab in DevTools

### Issue: Form Doesn't Submit Images
**Check**:
- [ ] Hidden fields inside `<form>` element
- [ ] API extracting `photo1_url` field
- [ ] Field name matches CMS schema

---

## 🚀 Deploy

### 1. Build
```bash
npm run build
```

### 2. Deploy via Webflow Cloud
Push to production

### 3. Verify
- [ ] Test on live site
- [ ] Check R2 bucket
- [ ] Verify CMS items
- [ ] Monitor errors

---

## 📚 Full Documentation

Need more details? Check out:
- **Integration Guide**: `TIMELINE_FORM_IMAGE_INTEGRATION.md`
- **Visual Guide**: `docs/integration-visual-guide.md`
- **Full R2 Guide**: `docs/cloudflare-r2-image-upload-guide.md`

---

## ✨ You're Done!

Your Webflow form now has:
- ✅ Automatic image compression
- ✅ Direct R2 upload
- ✅ Progress indicators
- ✅ Error handling
- ✅ Preview with remove

**All in 5 minutes!** 🎉

---

## 🆘 Need Help?

Common questions:

**Q: Can I use this with other forms?**
A: Yes! Just create a new wrapper component following the same pattern.

**Q: How do I add more upload slots?**
A: Copy the photo1 pattern and create photo3, photo4, etc.

**Q: Can I change the compression quality?**
A: Yes! Edit `src/components/ImageUpload.tsx` options.

**Q: What if users upload huge files?**
A: Compression happens automatically for files > 1MB.

**Q: Is this production-ready?**
A: Yes! Includes error handling, logging, and validation.

---

**Ready? Let's go!** 🚀

```bash
npm run dev
# Open http://localhost:4321/timeline-test
```
