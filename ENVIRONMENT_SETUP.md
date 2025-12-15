# Environment Setup Guide

This guide explains how to configure the environment variables for the guestbook integration.

## 📋 Required Environment Variables

Add these to your existing `.env` file:

```env
# Guestbook-specific configuration
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=${WEBFLOW_CMS_SITE_API_TOKEN}
PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3
```

## 🔑 Understanding the Variables

### WEBFLOW_CMS_SITE_API_TOKEN_WRITE

**Purpose**: API token with CMS write permissions for creating/updating entries

**Value**: Use your existing `WEBFLOW_CMS_SITE_API_TOKEN`

**Why separate name?**: 
- Clarifies that this token needs write permissions
- Allows for potential future separation of read/write tokens
- Makes code more explicit about security requirements

**In your .env**:
```env
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=${WEBFLOW_CMS_SITE_API_TOKEN}
```

### PUBLIC_GUESTBOOK_COLLECTION_ID

**Purpose**: Default collection ID for guestbook entries

**Value**: `69383a09bbf502930bf620a3` (your Guestbook collection)

**Why PUBLIC_ prefix?**: 
- Makes it available to client-side code
- Not sensitive data (collection IDs are not secret)
- Allows overriding via component props

**In your .env**:
```env
PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3
```

## 🔄 Complete .env File Structure

Your `.env` should look like this:

```env
# Existing Webflow variables
WEBFLOW_API_HOST=https://api.webflow.com
WEBFLOW_SITE_API_TOKEN=your_site_token
WEBFLOW_CMS_SITE_API_TOKEN=your_cms_token

# Guestbook integration
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=${WEBFLOW_CMS_SITE_API_TOKEN}
PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3
```

## 🎯 What Each Variable Does

| Variable | Used Where | Purpose |
|----------|------------|---------|
| `WEBFLOW_API_HOST` | API routes | Webflow API endpoint |
| `WEBFLOW_CMS_SITE_API_TOKEN` | Existing integrations | Read/write CMS access |
| `WEBFLOW_CMS_SITE_API_TOKEN_WRITE` | Guestbook API routes | Create/update entries |
| `PUBLIC_GUESTBOOK_COLLECTION_ID` | Client & server | Default collection ID |

## 🔐 Security Best Practices

### ✅ Do This

- Keep `.env` file in `.gitignore` (already configured)
- Use `${VARIABLE}` syntax to reference existing variables
- Restart dev server after changing `.env`
- Set same variables in production environment

### ❌ Don't Do This

- Don't commit `.env` to version control
- Don't share API tokens publicly
- Don't use production tokens in development
- Don't hardcode tokens in code

## 🚀 Production Setup

### Webflow Cloud Environment Variables

In Webflow Cloud, set these environment variables:

1. Go to your app settings
2. Add environment variables:
   - `WEBFLOW_CMS_SITE_API_TOKEN_WRITE` → (your CMS token)
   - `PUBLIC_GUESTBOOK_COLLECTION_ID` → `69383a09bbf502930bf620a3`

### Cloudflare Workers (if deploying there)

In `wrangler.toml` or Cloudflare dashboard:

```toml
[env.production.vars]
PUBLIC_GUESTBOOK_COLLECTION_ID = "69383a09bbf502930bf620a3"

[env.production.secrets]
WEBFLOW_CMS_SITE_API_TOKEN_WRITE = "your_token_here"
```

## 🧪 Verification

### Check Variables Are Loaded

Add this to any `.astro` file:

```astro
---
console.log('Write Token:', import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE ? '✅ Set' : '❌ Missing');
console.log('Collection ID:', import.meta.env.PUBLIC_GUESTBOOK_COLLECTION_ID || '❌ Missing');
---
```

### Test API Route

```bash
curl http://localhost:4321/api/cms/69383a09bbf502930bf620a3
```

Expected: JSON response with items or proper error message

## 🐛 Troubleshooting

### "Missing API token" Error

**Problem**: `WEBFLOW_CMS_SITE_API_TOKEN_WRITE` not found

**Solutions**:
1. Check variable name matches exactly (with `_WRITE` suffix)
2. Verify `.env` file is in project root
3. Restart dev server: `npm run dev`
4. Check console for loading errors

### "Collection ID is required" Error

**Problem**: `PUBLIC_GUESTBOOK_COLLECTION_ID` not found

**Solutions**:
1. Add to `.env` with `PUBLIC_` prefix
2. Or pass `collectionId` prop to component
3. Restart dev server

### Variables Not Loading

**Checklist**:
- [ ] `.env` file exists in project root
- [ ] Variable names match exactly (case-sensitive)
- [ ] No spaces around `=` sign
- [ ] Dev server restarted after changes
- [ ] Not using quotes around `${VARIABLE}` references

## 📚 Additional Resources

- [Astro Environment Variables](https://docs.astro.build/en/guides/environment-variables/)
- [Webflow API Authentication](https://developers.webflow.com/data/reference/authorization)
- [Cloudflare Workers Secrets](https://developers.cloudflare.com/workers/configuration/secrets/)

---

**Need more help?** See MASTER_GUIDE.md or README.md
