# Webflow Cloud Base Path Fix

## Problem
The app was deployed to Webflow Cloud at the path `/guestbook-form`, but the code was using empty string `''` as the base URL. This caused all API calls and internal links to fail in production.

## Solution
Updated the base URL handling to support both development (root path `/`) and production (mount path `/guestbook-form`).

## Changes Made

### 1. Updated `src/lib/base-url.ts`
Added two functions:
- **`getBaseUrl(locals)`**: For server-side usage (Astro pages, API routes)
  - Reads `COSMIC_MOUNT_PATH` from Webflow Cloud runtime environment
  - Falls back to `import.meta.env.BASE_URL` for development

- **`getClientBaseUrl()`**: For client-side usage (React components)
  - Detects the base path from `window.location.pathname`
  - Looks for common app paths like `/api/`, `/guestbook`, `/timeline-`
  - Extracts the mount path dynamically

### 2. Updated Astro Pages
All `.astro` files now use `getBaseUrl(Astro.locals)`:
- `src/pages/index.astro`
- `src/pages/guestbook/success.astro` (if needed)
- `src/pages/guestbook/error.astro` (if needed)
- `src/pages/timeline-embed-test.astro` (if needed)

### 3. Updated React Components
All React components now call `getClientBaseUrl()` at runtime:
- `src/components/GuestbookModal.tsx`
- `src/components/GuestbookCount.tsx`

### 4. Updated API Clients
All client-side API utilities now use `getClientBaseUrl()`:
- `src/lib/guestbook/api-client.ts`
- `src/lib/images/api-client.ts`

### 5. Embed Scripts (Already Working)
The embed scripts in `public/` already have dynamic base URL detection:
- `public/guestbook-embed.js`
- `public/guestbook-count-embed.js`
- `public/timeline-form-embed.js`

They detect the base URL from the script tag's `src` attribute, so they automatically work with any mount path.

## How It Works

### Development (Local)
- Base path: `/` (root)
- `getBaseUrl()` returns `''`
- `getClientBaseUrl()` returns `''`
- All URLs work at root: `/api/guestbook/submit`

### Production (Webflow Cloud)
- Mount path: `/guestbook-form`
- `getBaseUrl()` reads `COSMIC_MOUNT_PATH` → `/guestbook-form`
- `getClientBaseUrl()` detects from URL → `/guestbook-form`
- All URLs include base: `/guestbook-form/api/guestbook/submit`

## Testing

### After Deploy:
1. **Home Page**: Visit `https://your-site.com/guestbook-form/`
   - Links should work correctly
   
2. **Guestbook Button**: Click "Sign Our Guestbook"
   - Modal should open
   - Form submission should work
   - Count should update

3. **Timeline Form**: Visit `/guestbook-form/timeline-embed-test`
   - Image uploads should work
   - Form submission should work

4. **Embedded Components** (on static Webflow pages):
   - Guestbook button should work
   - Guestbook count should display
   - Timeline form should work

## Environment Variables
The only environment variable needed is `COSMIC_MOUNT_PATH`, which is automatically set by Webflow Cloud. You don't need to configure anything manually.

## Troubleshooting

### If API calls fail (404 errors):
1. Check browser console for the full URL being called
2. Verify it includes `/guestbook-form` prefix
3. Check `getClientBaseUrl()` detection logic

### If links are broken:
1. Verify Astro pages use `getBaseUrl(Astro.locals)`
2. Check that the mount path is set correctly in Webflow Cloud

### If embed scripts don't work:
1. Verify the script `src` attribute includes the full path:
   ```html
   <script src="https://your-site.com/guestbook-form/guestbook-embed.js"></script>
   ```
2. The script will auto-detect the base URL from this path

## Key Takeaways

✅ Server-side code (Astro) → Use `getBaseUrl(Astro.locals)`
✅ Client-side code (React) → Use `getClientBaseUrl()`
✅ Embed scripts → Already handle base URL automatically
✅ No manual configuration needed → Webflow Cloud provides `COSMIC_MOUNT_PATH`
