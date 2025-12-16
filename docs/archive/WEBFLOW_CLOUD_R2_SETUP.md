# Cloudflare R2 Setup for Webflow Cloud

This guide explains how to set up R2 image uploads within Webflow Cloud.

---

## 🎯 How Webflow Cloud Handles R2

Webflow Cloud automatically provisions and binds Cloudflare R2 buckets for you. You **don't need** to manually create buckets or manage API tokens.

### What Webflow Cloud Provides Automatically:

✅ **R2 Bucket** - Automatically created and bound to your app  
✅ **Binding** - Available as `env.R2_BUCKET` in your code  
✅ **Credentials** - Managed automatically, no tokens needed  
✅ **Public Access** - Configured automatically  

---

## 📝 Configuration in Webflow Cloud

### Step 1: Configure R2 Bucket in webflow.json

Add the R2 bucket configuration to your `webflow.json`:

```json
{
  "name": "your-app-name",
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

### Step 2: That's It! 

Webflow Cloud will automatically:
- Create the R2 bucket
- Bind it to your app
- Make it available as `env.R2_BUCKET`
- Configure public access

---

## 🔧 Updated Implementation

The code needs to be updated to use the Webflow Cloud R2 binding instead of SDK credentials.

### Key Changes:

1. **Remove SDK-based presigned URLs** - Use direct R2 bucket access
2. **Use `env.R2_BUCKET` binding** - Provided by Webflow Cloud
3. **Generate public URLs** - Using Webflow's R2 public domain

---

## 🚀 How It Works in Webflow Cloud

```
┌─────────────────────────────────────────────────────────┐
│  1. User uploads image                                  │
│     → ImageUpload component                             │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  2. Upload to API endpoint                              │
│     → POST /api/images/upload                           │
│     → Receives file as FormData                         │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  3. Server writes to R2 bucket                          │
│     → env.R2_BUCKET.put(fileKey, fileData)              │
│     → Returns public URL                                │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  4. Image accessible via public URL                     │
│     → https://your-bucket.r2.cloudflarestorage.com/...  │
└─────────────────────────────────────────────────────────┘
```

---

## 📋 Environment Variables (Optional)

You may want to set the public URL domain:

```env
# Optional: Custom R2 public domain
R2_PUBLIC_DOMAIN=https://images.yourdomain.com
```

If not set, Webflow Cloud will use the default R2 public URL.

---

## ✅ Advantages of Webflow Cloud R2

✅ **No manual setup** - Bucket created automatically  
✅ **No credentials** - Managed by Webflow  
✅ **Auto-scaling** - Handles any amount of traffic  
✅ **Built-in CDN** - Fast delivery worldwide  
✅ **Secure** - Automatic security configuration  

---

## 🔄 Migration from Manual R2 Setup

If you previously set up R2 manually:

1. Remove these environment variables:
   - ❌ `R2_ACCOUNT_ID`
   - ❌ `R2_ACCESS_KEY_ID`
   - ❌ `R2_SECRET_ACCESS_KEY`
   - ❌ `R2_BUCKET_NAME`

2. Keep only (optional):
   - ✅ `R2_PUBLIC_DOMAIN` (if using custom domain)

3. Update `webflow.json` with R2 binding

4. Deploy - Webflow Cloud handles the rest!

---

## 📖 Next Steps

1. Update `webflow.json` with R2 binding
2. Update upload endpoint to use `env.R2_BUCKET`
3. Test the upload functionality
4. Deploy to Webflow Cloud

See `WEBFLOW_CLOUD_R2_IMPLEMENTATION.md` for updated code.
