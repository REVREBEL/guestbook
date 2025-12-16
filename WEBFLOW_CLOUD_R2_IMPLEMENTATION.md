# Webflow Cloud R2 Image Upload Implementation

Complete implementation guide for image uploads using Webflow Cloud's R2 integration.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Setup Steps](#setup-steps)
3. [How It Works](#how-it-works)
4. [Updated Files](#updated-files)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

This implementation uses **Webflow Cloud's automatic R2 bucket provisioning**. Unlike manual R2 setup, you don't need to:

❌ Create R2 buckets manually  
❌ Manage API keys or tokens  
❌ Configure bucket permissions  
❌ Set up public access  

Webflow Cloud handles all of this automatically when you add the R2 binding to `webflow.json`.

---

## 🚀 Setup Steps

### Step 1: Configure webflow.json

The `webflow.json` file has been updated with the R2 binding:

```json
{
  "cloud": {
    "framework": "astro",
    "project_id": "6c4f60ab-52fe-4073-9320-bed06e02d283"
  },
  "bindings": {
    "r2": [
      {
        "name": "R2_BUCKET",
        "description": "Image storage for timeline uploads"
      }
    ]
  }
}
```

### Step 2: Deploy to Webflow Cloud

When you deploy, Webflow Cloud will automatically:
- Create an R2 bucket
- Bind it to your app as `env.R2_BUCKET`
- Configure public access
- Provide a public URL domain

### Step 3: (Optional) Configure Custom Domain

If you want to use a custom domain for images, add this environment variable in Webflow Cloud:

```
R2_PUBLIC_DOMAIN=https://images.yourdomain.com
```

Otherwise, it will use the default Cloudflare R2 public URL.

---

## 🔄 How It Works

### Upload Flow

```
┌────────────────────────────────────────────────────┐
│  1. User selects image in ImageUpload component    │
│     → File validation (type, size)                 │
└─────────────────────┬──────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│  2. Upload to /api/images/upload                   │
│     → POST with multipart/form-data                │
│     → File sent in request body                    │
└─────────────────────┬──────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│  3. Server-side processing                         │
│     → Validate file type and size                  │
│     → Generate unique filename                     │
│     → Get R2 bucket from env.R2_BUCKET             │
└─────────────────────┬──────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│  4. Upload to R2 bucket                            │
│     → bucket.put(fileKey, fileBuffer)              │
│     → Set content-type metadata                    │
└─────────────────────┬──────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│  5. Return public URL                              │
│     → Generate public URL                          │
│     → Return { success, publicUrl, fileKey }       │
└─────────────────────┬──────────────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────────────┐
│  6. Client receives URL                            │
│     → ImageUpload shows preview                    │
│     → URL included in form submission              │
└────────────────────────────────────────────────────┘
```

### Architecture

```
┌──────────────────────────────────────────────────────────┐
│                    Client (Browser)                      │
│  ┌────────────────────────────────────────────────────┐  │
│  │  ImageUpload Component                             │  │
│  │  - File selection                                  │  │
│  │  - Validation                                      │  │
│  │  - Progress tracking                               │  │
│  └──────────────────┬─────────────────────────────────┘  │
└────────────────────┼────────────────────────────────────┘
                     │ POST /api/images/upload
                     │ (multipart/form-data)
                     ▼
┌──────────────────────────────────────────────────────────┐
│              Astro API Route (Server)                    │
│  ┌────────────────────────────────────────────────────┐  │
│  │  /api/images/upload.ts                             │  │
│  │  - Parse FormData                                  │  │
│  │  - Validate file                                   │  │
│  │  - Generate unique key                             │  │
│  └──────────────────┬─────────────────────────────────┘  │
└────────────────────┼────────────────────────────────────┘
                     │ env.R2_BUCKET.put()
                     ▼
┌──────────────────────────────────────────────────────────┐
│              Cloudflare R2 (Storage)                     │
│  ┌────────────────────────────────────────────────────┐  │
│  │  R2 Bucket (Auto-provisioned by Webflow)          │  │
│  │  - Stores images                                   │  │
│  │  - Serves via public URL                           │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## 📁 Updated Files

### 1. `webflow.json`
**Status**: ✅ Updated  
**Changes**: Added R2 bucket binding configuration

### 2. `src/pages/api/images/upload.ts`
**Status**: ✅ Updated  
**Changes**: 
- Direct file upload (no presigned URLs)
- Uses `env.R2_BUCKET` binding from Webflow Cloud
- Validates file type and size
- Generates unique filenames
- Returns public URL

### 3. `src/lib/images/api-client.ts`
**Status**: ✅ Updated  
**Changes**: 
- Direct upload to `/api/images/upload`
- Progress tracking with XMLHttpRequest
- Removed presigned URL logic

### 4. `worker-configuration.d.ts`
**Status**: ✅ Updated  
**Changes**: 
- Added `R2_BUCKET?: R2Bucket` type
- Added optional `R2_PUBLIC_DOMAIN` variable
- Removed manual R2 configuration types

### 5. `wrangler.jsonc`
**Status**: ✅ Updated  
**Changes**: 
- Removed manual R2 bucket configuration
- Added note that R2 is managed via `webflow.json`

### 6. `src/components/ImageUpload.tsx`
**Status**: ✅ Already Compatible  
**No changes needed** - Works with new upload flow

### 7. `src/pages/api/timeline/submit.ts`
**Status**: ✅ Already Compatible  
**No changes needed** - Receives image URLs from form

---

## 🧪 Testing

### Local Testing

For local testing, you may need to add a local R2 binding or use environment variables. However, **full R2 functionality only works when deployed to Webflow Cloud**.

### Deployed Testing

1. **Deploy to Webflow Cloud**
   ```bash
   # Deploy via Webflow Cloud interface or CLI
   ```

2. **Test Image Upload**
   - Navigate to the timeline form
   - Select an image file (JPEG, PNG, GIF, or WebP)
   - Verify file size is under 10MB
   - Upload and verify preview appears
   - Submit form
   - Verify image URL in CMS

3. **Verify R2 Storage**
   - Check Cloudflare dashboard for R2 bucket
   - Verify files are being uploaded
   - Test public URL access

### Validation Tests

| Test | Expected Result |
|------|-----------------|
| Upload valid image (< 10MB) | ✅ Success with public URL |
| Upload oversized file (> 10MB) | ❌ Error: "File too large" |
| Upload non-image file | ❌ Error: "Invalid file type" |
| Upload without selecting file | ❌ Error: "No file provided" |
| Multiple sequential uploads | ✅ All succeed with unique URLs |

---

## 🔧 Troubleshooting

### Issue: "R2 storage not configured"

**Cause**: R2 binding not available  
**Solution**:
1. Verify `webflow.json` has R2 binding
2. Re-deploy to Webflow Cloud
3. Check Webflow Cloud dashboard for binding status

### Issue: Upload fails with network error

**Cause**: API endpoint not accessible  
**Solution**:
1. Check that `/api/images/upload.ts` exists
2. Verify app is deployed
3. Check browser console for errors

### Issue: Images upload but URLs don't work

**Cause**: Public domain not configured correctly  
**Solution**:
1. Check R2 public URL in Cloudflare dashboard
2. Set `R2_PUBLIC_DOMAIN` environment variable
3. Or rely on default Cloudflare R2 public URL

### Issue: "File too large" for small files

**Cause**: Form misconfiguration  
**Solution**:
1. Verify `astro.config.mjs` has correct limits
2. Check Cloudflare Workers limits
3. Verify file size calculation in upload code

---

## 📝 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `R2_BUCKET` | ✅ Auto | Automatically bound by Webflow Cloud |
| `R2_PUBLIC_DOMAIN` | ❌ Optional | Custom domain for images |
| `R2_PUBLIC_URL` | ❌ Optional | Alternative to R2_PUBLIC_DOMAIN |
| `CLOUDFLARE_ACCOUNT_ID` | ❌ Auto | Provided by Webflow Cloud |

---

## ✅ Benefits of Webflow Cloud R2

1. **Zero Configuration**: No manual bucket setup
2. **Automatic Scaling**: Handles any load
3. **Secure**: Credentials managed automatically
4. **Fast**: CDN-backed delivery
5. **Reliable**: 99.99% uptime SLA

---

## 🎉 You're All Set!

The R2 integration is now ready to use with Webflow Cloud. Simply deploy your app and start uploading images through the timeline form!

For questions or issues, refer to:
- [Webflow Cloud Documentation](https://developers.webflow.com/cloud)
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
