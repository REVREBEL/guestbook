# Cloudflare R2 Image Upload - Setup Checklist

This checklist will guide you through setting up image uploads for the Timeline form.

---

## ✅ Prerequisites

- [ ] Cloudflare account with R2 enabled
- [ ] Access to Cloudflare Dashboard
- [ ] Access to Webflow Cloud environment variables

---

## 📦 Step 1: Create R2 Bucket

### Via Cloudflare Dashboard:

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **R2 Object Storage** in the sidebar
3. Click **Create bucket**
4. Enter bucket name: `timeline-images`
5. Choose location: **Automatic** (recommended)
6. Click **Create bucket**

### Via Wrangler CLI (alternative):

```bash
npx wrangler r2 bucket create timeline-images
```

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 🔑 Step 2: Create API Token

1. In Cloudflare Dashboard, go to **R2 Object Storage**
2. Click **Manage R2 API Tokens**
3. Click **Create API Token**
4. Configure:
   - **Name:** `Timeline Images Upload`
   - **Permissions:** Object Read & Write
   - **Specific buckets:** Select `timeline-images`
5. Click **Create API Token**
6. **IMPORTANT:** Copy and save these credentials (shown only once):
   - Access Key ID: `____________________`
   - Secret Access Key: `____________________`
7. Also note your Account ID (found in R2 Settings): `____________________`

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 🌐 Step 3: Configure Public Access

### Option A: Using R2.dev Subdomain (Easiest)

1. In your R2 bucket settings, go to **Settings** tab
2. Under **Public Access**, click **Allow Access**
3. Enable **R2.dev subdomain**
4. Your public URL will be: `https://pub-xxxxxxxx.r2.dev`
5. Copy this URL for later: `____________________`

### Option B: Custom Domain (Recommended for Production)

1. In bucket settings, click **Connect Domain**
2. Enter your custom domain: `images.yourdomain.com`
3. Add the required DNS records to your domain
4. Wait for DNS propagation
5. Enable automatic HTTPS
6. Your public URL will be: `https://images.yourdomain.com`

**Public URL:** `____________________`

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 🔐 Step 4: Add Environment Variables

### In `.env` (Local Development):

Add these variables to your `.env` file:

```env
# Cloudflare R2 Configuration
R2_ACCOUNT_ID=your_account_id_here
R2_ACCESS_KEY_ID=your_access_key_id_here
R2_SECRET_ACCESS_KEY=your_secret_access_key_here
R2_BUCKET_NAME=timeline-images
R2_PUBLIC_URL=https://pub-xxxxxxxx.r2.dev
```

### In Webflow Cloud:

1. Go to your Webflow Cloud app settings
2. Navigate to **Environment Variables**
3. Add each of these variables:
   - `R2_ACCOUNT_ID`
   - `R2_ACCESS_KEY_ID`
   - `R2_SECRET_ACCESS_KEY`
   - `R2_BUCKET_NAME` (value: `timeline-images`)
   - `R2_PUBLIC_URL` (value: your R2 public URL)

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 🔧 Step 5: Update Wrangler Configuration

The `wrangler.jsonc` file has already been updated with the R2 bucket binding.

Verify it contains:

```jsonc
"r2_buckets": [
  {
    "binding": "TIMELINE_IMAGES",
    "bucket_name": "timeline-images"
  }
]
```

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 📦 Step 6: Install Dependencies

Dependencies have already been installed:

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

**Status:** ✅ Complete

---

## 🧪 Step 7: Test Upload Functionality

### Test Locally:

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Navigate to the timeline form page

3. Try uploading an image:
   - Click "Upload Photo 1" button
   - Select an image file
   - Watch for progress indicator
   - Verify preview appears

4. Submit the form and check that:
   - Image URL is included in the submission
   - Image appears in the CMS after submission

### Test in Production:

1. Deploy to Webflow Cloud
2. Repeat the upload test
3. Verify images are accessible via their public URLs

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 🔍 Step 8: Verify R2 Storage

1. Go to Cloudflare Dashboard > R2
2. Open your `timeline-images` bucket
3. Look for uploaded images in the `images/` folder
4. Click on an image to get its public URL
5. Paste the URL in a browser to verify it loads

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 📝 Step 9: Check CMS Integration

1. Go to Webflow Designer
2. Navigate to your CMS Collections
3. Open the Timeline collection
4. Find a newly submitted entry with images
5. Verify the `photo-1` and `photo-2` fields contain the R2 URLs

**Status:** ⬜ Not started | ⏳ In progress | ✅ Complete

---

## 🐛 Troubleshooting

### Images not uploading?

- [ ] Check browser console for errors
- [ ] Verify R2 credentials in environment variables
- [ ] Ensure file size is under 10MB
- [ ] Verify file type is an image (JPEG, PNG, GIF, WebP)

### Upload URL generation fails?

- [ ] Check that all R2 environment variables are set
- [ ] Verify R2 API token has correct permissions
- [ ] Check server logs for detailed error messages

### Images not displaying?

- [ ] Verify R2_PUBLIC_URL is correct
- [ ] Check that public access is enabled on the bucket
- [ ] Ensure CORS is configured (if needed)
- [ ] Try accessing the image URL directly in a browser

### Form submission doesn't include images?

- [ ] Check that hidden fields are being populated
- [ ] Verify upload completes before form submission
- [ ] Check browser console for JavaScript errors
- [ ] Ensure ImageUpload components are properly nested in the form

---

## 📚 Additional Resources

- **Full Documentation:** See `docs/cloudflare-r2-image-upload-guide.md`
- **Cloudflare R2 Docs:** https://developers.cloudflare.com/r2/
- **Presigned URLs:** https://developers.cloudflare.com/r2/api/s3/presigned-urls/

---

## 🎉 Setup Complete!

Once all steps are checked off, your Timeline form will support image uploads to Cloudflare R2 storage.

**Total Progress:** ___/9 steps complete

---

## Quick Reference

### File Locations:

- **API Endpoint:** `src/pages/api/images/upload-url.ts`
- **React Component:** `src/components/ImageUpload.tsx`
- **Type Definitions:** `src/lib/images/types.ts`
- **API Client:** `src/lib/images/api-client.ts`
- **Timeline Form:** `src/components/TimelineFormWithUploads.tsx`
- **Timeline Submit:** `src/pages/api/timeline/submit.ts`

### Environment Variables Required:

- `R2_ACCOUNT_ID`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET_NAME`
- `R2_PUBLIC_URL`

### Support:

If you encounter issues, check:
1. Browser console for client-side errors
2. Server logs for API errors
3. Cloudflare Dashboard > R2 > Metrics for bucket activity
