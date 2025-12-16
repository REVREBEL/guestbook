# ⚙️ Webflow Cloud Environment Variables Setup

## 🚨 CRITICAL: You MUST set these in Webflow Cloud Dashboard

Your app is deployed but **environment variables are NOT automatically set**. You need to manually configure them in the Webflow Cloud dashboard.

---

## 📍 Where to Set Environment Variables

1. Go to: **Webflow Dashboard** → **Apps** → **Your App** → **Settings** → **Environment Variables**
2. Or visit: `https://webflow.com/dashboard/apps/[your-app-id]/settings`

---

## 🔑 Required Environment Variables

### 1. Webflow API Tokens

```bash
# Read-only token (for fetching data)
WEBFLOW_CMS_SITE_API_TOKEN=your_read_token_here

# Write token (for creating/updating items)
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=your_write_token_here

# Optional: Custom API host (usually not needed)
WEBFLOW_API_HOST=https://api.webflow.com
```

### 2. Collection IDs

```bash
# Guestbook Collection ID
GUESTBOOK_COLLECTION_ID=692bb5a615e3ceecfbe7dd5d

# Timeline Collection ID  
TIMELINE_COLLECTION_ID=692bb5a629f57df04fe7dd5f
```

### 3. R2 Bucket (Optional - Auto-provisioned)

The R2 bucket is **automatically provisioned** by Webflow Cloud based on your `wrangler.jsonc` config. You don't need to set any R2-related environment variables.

---

## ✅ How to Add Variables in Webflow Cloud

1. **Navigate to Settings**: Dashboard → Apps → [Your App] → Settings → Environment Variables
2. **Click "Add Variable"**
3. **Enter Name and Value**:
   - Name: `TIMELINE_COLLECTION_ID`
   - Value: `692bb5a629f57df04fe7dd5f`
4. **Click "Save"**
5. **Repeat for each variable**

---

## 🧪 How to Test

After setting environment variables, test the endpoints:

### Test Timeline API Configuration
```bash
curl https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit
```

Expected response:
```json
{
  "message": "Timeline API is working! Use POST to submit data.",
  "timestamp": "2025-12-16T10:50:00.000Z",
  "config": {
    "hasWriteToken": true,
    "hasReadToken": true,
    "hasCollectionId": true,
    "collectionId": "692bb5a629f57df04fe7dd5f"
  }
}
```

### Test Timeline Form Submission
1. Visit: `https://patricia-lanning.webflow.io/timeline-form`
2. Fill out the form
3. Upload an image
4. Submit
5. Check logs for success

---

## 🐛 Troubleshooting

### Error: "Missing collection ID"
- ❌ Environment variable NOT set in Webflow Cloud
- ✅ Add `TIMELINE_COLLECTION_ID` in dashboard

### Error: "Validation Error: Provided IDs are invalid: Collection ID"
- ❌ Collection ID is invalid or malformed
- ✅ Verify the collection ID is correct: `692bb5a629f57df04fe7dd5f`
- ✅ Must be 24 hexadecimal characters

### Error: "Missing API token"
- ❌ API tokens NOT set in Webflow Cloud
- ✅ Add `WEBFLOW_CMS_SITE_API_TOKEN_WRITE` in dashboard

### Error: "R2_BUCKET is undefined"
- ❌ R2 bucket not provisioned yet
- ✅ Make sure `wrangler.jsonc` has the `r2_buckets` array
- ✅ Redeploy the app
- ✅ Check Webflow Cloud dashboard for bucket status

---

## 📝 Quick Copy-Paste Values

```bash
# Copy these values and paste into Webflow Cloud Dashboard

TIMELINE_COLLECTION_ID=692bb5a629f57df04fe7dd5f
GUESTBOOK_COLLECTION_ID=692bb5a615e3ceecfbe7dd5d
```

**Note**: You'll need to get your API tokens from Webflow. These are NOT in the codebase for security reasons.

---

## 🚀 After Setting Variables

1. **No need to redeploy** - environment variables are loaded at runtime
2. **Test the API** using the curl command above
3. **Submit a test form** to verify everything works
4. **Check the logs** in Webflow Cloud dashboard

---

## 📚 References

- [Webflow Cloud Environment Variables Docs](https://developers.webflow.com/data/docs/environment-variables)
- [Webflow Cloud R2 Object Storage Docs](https://developers.webflow.com/data/docs/r2-object-storage)
