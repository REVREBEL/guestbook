# Webflow Cloud R2 Setup Checklist

Quick reference for setting up R2 image uploads in Webflow Cloud.

---

## ✅ Pre-Deployment Checklist

### Configuration Files

- [x] **webflow.json** - R2 binding added
  ```json
  "bindings": {
    "r2": [
      {
        "name": "R2_BUCKET",
        "description": "Image storage for timeline uploads"
      }
    ]
  }
  ```

- [x] **worker-configuration.d.ts** - R2 types defined
  ```typescript
  R2_BUCKET?: R2Bucket;
  ```

- [x] **wrangler.jsonc** - No manual R2 config (managed by Webflow)

### API Endpoints

- [x] **src/pages/api/images/upload.ts** - Direct upload endpoint
  - Uses `env.R2_BUCKET` binding
  - Validates file type and size
  - Returns public URL

### Client Code

- [x] **src/lib/images/api-client.ts** - Upload function
  - Direct upload to API endpoint
  - Progress tracking
  - Error handling

- [x] **src/components/ImageUpload.tsx** - UI component
  - File selection
  - Preview
  - Progress display

### Form Integration

- [x] **src/pages/api/timeline/submit.ts** - Handles image URLs
  - Accepts image data from form
  - Writes to CMS with image URLs

---

## 🚀 Deployment Steps

### 1. Verify Configuration
```bash
# Check that webflow.json has R2 binding
cat webflow.json | grep -A 5 "bindings"
```

### 2. Deploy to Webflow Cloud
- Use Webflow Cloud interface, or
- Use Webflow CLI

### 3. Webflow Cloud Will Automatically:
- ✅ Create R2 bucket
- ✅ Bind it as `env.R2_BUCKET`
- ✅ Configure public access
- ✅ Provide public URL

### 4. (Optional) Configure Custom Domain
In Webflow Cloud environment variables:
```
R2_PUBLIC_DOMAIN=https://images.yourdomain.com
```

---

## 🧪 Post-Deployment Testing

### Basic Upload Test
1. [ ] Navigate to timeline form
2. [ ] Click "Upload Photo 1" or "Upload Photo 2"
3. [ ] Select an image file (< 10MB)
4. [ ] Verify upload progress shows
5. [ ] Verify preview appears
6. [ ] Verify "Remove" button works

### Validation Tests
1. [ ] Try uploading file > 10MB → Should show error
2. [ ] Try uploading non-image file → Should show error
3. [ ] Try uploading without selecting file → Should show error

### Form Submission Test
1. [ ] Upload 1-2 images
2. [ ] Fill out other form fields
3. [ ] Submit form
4. [ ] Verify success message
5. [ ] Check CMS for new entry
6. [ ] Verify image URLs are accessible

### R2 Storage Verification
1. [ ] Open Cloudflare dashboard
2. [ ] Navigate to R2 storage
3. [ ] Find your bucket (created by Webflow)
4. [ ] Verify uploaded files exist
5. [ ] Test public URL access

---

## 🔍 Troubleshooting Checklist

### Upload Fails

**Check 1: R2 Binding**
```bash
# In deployed app logs, verify R2_BUCKET is available
# Look for: "R2 storage not configured" error
```
- [ ] R2 binding in `webflow.json`
- [ ] App redeployed after adding binding
- [ ] No errors in deployment logs

**Check 2: API Endpoint**
- [ ] `/api/images/upload` endpoint exists
- [ ] No TypeScript errors
- [ ] Server logs show endpoint being called

**Check 3: Client Code**
- [ ] Browser console shows no errors
- [ ] Network tab shows POST to `/api/images/upload`
- [ ] Request includes file data

### Images Upload But URLs Don't Work

- [ ] Check public URL format in R2 dashboard
- [ ] Verify `R2_PUBLIC_DOMAIN` if set
- [ ] Test URL directly in browser
- [ ] Check CORS configuration in R2

### Performance Issues

- [ ] Files under 10MB limit
- [ ] Good network connection
- [ ] No rate limiting issues
- [ ] Cloudflare Workers not hitting limits

---

## 📊 Validation Matrix

| Scenario | Expected Result | Status |
|----------|-----------------|--------|
| Upload JPEG (2MB) | ✅ Success | [ ] |
| Upload PNG (5MB) | ✅ Success | [ ] |
| Upload GIF (1MB) | ✅ Success | [ ] |
| Upload WebP (3MB) | ✅ Success | [ ] |
| Upload file > 10MB | ❌ Error message | [ ] |
| Upload PDF | ❌ Error message | [ ] |
| Upload without file | ❌ Error message | [ ] |
| Upload 2 photos | ✅ Both succeed | [ ] |
| Submit form with images | ✅ URLs in CMS | [ ] |
| Access image URL | ✅ Image loads | [ ] |

---

## 🎯 Success Criteria

Your R2 integration is working correctly when:

✅ Images upload without errors  
✅ Progress tracking displays correctly  
✅ Preview shows after upload  
✅ Form submission includes image URLs  
✅ CMS entries contain working image URLs  
✅ Images are accessible via public URLs  
✅ Validation prevents invalid files  
✅ Error messages are clear and helpful  

---

## 📝 Environment Variables Summary

| Variable | Source | Required | Purpose |
|----------|--------|----------|---------|
| `R2_BUCKET` | Webflow Cloud (auto) | ✅ Yes | R2 bucket binding |
| `R2_PUBLIC_DOMAIN` | You (optional) | ❌ No | Custom image domain |
| `CLOUDFLARE_ACCOUNT_ID` | Webflow Cloud (auto) | ❌ No | Fallback for public URL |

---

## 🎉 Completion

Once all checkboxes are ✅, your R2 integration is fully operational!

**Next Steps:**
1. Monitor uploads in production
2. Set up custom domain (optional)
3. Configure CDN caching (optional)
4. Add image optimization (optional)

---

## 📚 Reference Documentation

- **Webflow Cloud R2 Setup**: `WEBFLOW_CLOUD_R2_SETUP.md`
- **Implementation Details**: `WEBFLOW_CLOUD_R2_IMPLEMENTATION.md`
- **Webflow Cloud Docs**: https://developers.webflow.com/cloud
- **Cloudflare R2 Docs**: https://developers.cloudflare.com/r2/
