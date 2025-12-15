# Setup Checklist

Use this checklist to ensure your guestbook integration is properly configured and working.

## 📋 Pre-Flight Checklist

### ✅ 1. Dependencies Installed

- [ ] Run `npm install`
- [ ] Verify `iconoir-react` is in `package.json`
- [ ] Verify `webflow-api` is in `package.json`
- [ ] Verify `@radix-ui/react-dialog` is in `package.json`

### ✅ 2. Environment Variables

- [ ] Open `.env` file (in project root)
- [ ] Add: `WEBFLOW_CMS_SITE_API_TOKEN_WRITE=${WEBFLOW_CMS_SITE_API_TOKEN}`
- [ ] Add: `PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3`
- [ ] Verify `WEBFLOW_CMS_SITE_API_TOKEN` exists (should already be there)
- [ ] Restart dev server if it's running

**Your .env should include:**
```env
WEBFLOW_API_HOST=...
WEBFLOW_SITE_API_TOKEN=...
WEBFLOW_CMS_SITE_API_TOKEN=...
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=${WEBFLOW_CMS_SITE_API_TOKEN}
PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3
```

### ✅ 3. Webflow Components Verified

- [ ] Check `src/site-components/GuestbookForm.jsx` exists
- [ ] Check `src/site-components/GuestbookFormButton.jsx` exists
- [ ] Check `src/site-components/DevLinkProvider.jsx` exists
- [ ] Check `src/site-components/global.css` exists

### ✅ 4. Type Check Passes

```bash
npm run astro check
```

- [ ] Result shows "0 errors"
- [ ] Result shows "0 warnings"

### ✅ 5. Dev Server Starts

```bash
npm run dev
```

- [ ] Server starts without errors
- [ ] Can access `http://localhost:4321`

---

## 🧪 Testing Checklist

### ✅ 6. Home Page Works

- [ ] Visit `http://localhost:4321`
- [ ] Page loads without errors
- [ ] See "Webflow Guestbook App" heading
- [ ] See "View Demo" button
- [ ] Click button → goes to `/guestbook`

### ✅ 7. Demo Page Loads

- [ ] Visit `http://localhost:4321/guestbook`
- [ ] Page loads without errors
- [ ] See "Sign the Guestbook" button
- [ ] See field mapping table
- [ ] See features list

### ✅ 8. Modal Opens

- [ ] Click "Sign the Guestbook" button
- [ ] Modal overlay appears
- [ ] Modal dialog slides in
- [ ] Form is visible inside modal
- [ ] Can close modal (X button or click outside)

### ✅ 9. Form Validation Works

- [ ] Open modal
- [ ] Try to submit empty form
- [ ] Should see validation errors
- [ ] Enter invalid email (e.g., "test")
- [ ] Should see email validation error
- [ ] Enter valid name and email
- [ ] Validation errors should clear

### ✅ 10. Form Submission Works

**Test create:**
- [ ] Open modal
- [ ] Fill in:
  - Name: "Test User"
  - Email: "test@example.com"
  - (Optional) Location: "Test City"
  - (Optional) Message: "Test message"
- [ ] Click Submit
- [ ] See success message
- [ ] Modal closes automatically
- [ ] Check Webflow CMS → new entry exists

**Check generated codes:**
- [ ] In CMS, verify entry has:
  - `slug`: 10-digit code (e.g., "a1b2c3d4e5")
  - `edit-code`: 6-char code (e.g., "Xy9K2m")
  - `active`: true
  - `first-name`: "Test User"
  - `email`: "test@example.com"

### ✅ 11. Browser Console Check

Open browser DevTools (F12):

- [ ] No red errors in Console tab
- [ ] No 404 errors in Network tab
- [ ] API calls to `/api/cms/...` succeed (Status 200 or 201)

### ✅ 12. Error Handling Works

**Test API error:**
- [ ] Temporarily break `.env` (remove write token)
- [ ] Restart dev server
- [ ] Try to submit form
- [ ] Should see error message
- [ ] Fix `.env` and restart

**Test validation error:**
- [ ] Submit form with only email (no name)
- [ ] Should see "Full name is required"

---

## 🔧 Component Usage Checklist

### ✅ 13. Basic Component Works

Create a test page: `src/pages/test.astro`

```astro
---
import { GuestbookButton } from '../components/GuestbookButton';
import MainLayout from '../layouts/main.astro';
---

<MainLayout>
  <div class="p-8">
    <GuestbookButton client:only="react" />
  </div>
</MainLayout>
```

- [ ] Page loads
- [ ] Button renders
- [ ] Modal opens
- [ ] Form works

### ✅ 14. Component with Props Works

```astro
<GuestbookButton 
  client:only="react"
  buttonText="Custom Text"
  onSuccess={(data) => console.log('Success:', data)}
  onError={(error) => console.error('Error:', error)}
/>
```

- [ ] Button shows custom text
- [ ] Success callback logs to console
- [ ] Error callback works (test by breaking token)

### ✅ 15. Edit Mode Works (Optional)

If you have an existing entry:

```astro
<GuestbookButton 
  client:only="react"
  itemId="your-existing-item-id"
  buttonText="Edit Entry"
/>
```

- [ ] Modal loads existing data
- [ ] Fields are pre-filled
- [ ] Can update and save
- [ ] Slug and edit-code preserved

---

## 📦 Embed Testing (Optional)

### ✅ 16. Embed Build Works

- [ ] Build the project: `npm run build`
- [ ] Check `dist/` folder exists
- [ ] Find embed file in build output

### ✅ 17. Embed in External Page

Create a test HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Embed Test</title>
</head>
<body>
  <h1>External Embed Test</h1>
  <div id="guestbook"></div>
  
  <script src="http://localhost:4321/embed/guestbook-embed.js"></script>
  <script>
    mountGuestbookButton(document.getElementById('guestbook'), {
      buttonText: 'Sign Guestbook'
    });
  </script>
</body>
</html>
```

- [ ] Open HTML file in browser
- [ ] Button renders
- [ ] Modal opens
- [ ] Form submission works

---

## 🚀 Production Checklist

### ✅ 18. Build Succeeds

```bash
npm run build
```

- [ ] Build completes without errors
- [ ] `dist/` folder created
- [ ] Files generated in `dist/_worker.js/`

### ✅ 19. Production Environment Variables

In Webflow Cloud dashboard:

- [ ] Set `WEBFLOW_CMS_SITE_API_TOKEN_WRITE`
- [ ] Set `PUBLIC_GUESTBOOK_COLLECTION_ID`
- [ ] Values match local `.env`

### ✅ 20. Deploy and Test

- [ ] Deploy to Webflow Cloud
- [ ] Visit production URL
- [ ] Test form submission
- [ ] Check CMS for new entries
- [ ] Verify no console errors

---

## ✨ Optional Features Checklist

### ✅ 21. Customization (If Desired)

- [ ] Customize button text
- [ ] Customize validation rules
- [ ] Customize success/error messages
- [ ] Add custom fields (see MASTER_GUIDE.md)
- [ ] Style modal (edit GuestbookModal.tsx)

### ✅ 22. Additional Pages (If Desired)

- [ ] Create admin page to view entries
- [ ] Create public guestbook display
- [ ] Add pagination for entries
- [ ] Add search/filter functionality

---

## 🎯 Final Verification

### ✅ 23. Complete System Test

- [ ] Fresh browser (incognito/private mode)
- [ ] Visit home page
- [ ] Navigate to demo
- [ ] Submit guestbook entry
- [ ] Verify in Webflow CMS
- [ ] Check all fields mapped correctly
- [ ] Verify slug and edit-code generated

### ✅ 24. Documentation Review

- [ ] Read `README.md`
- [ ] Review `QUICK_START.md`
- [ ] Bookmark `MASTER_GUIDE.md` for reference
- [ ] Check `example-payloads.md` if using API directly

---

## ✅ Checklist Complete!

If all items are checked, your guestbook integration is:

- ✅ Properly installed
- ✅ Correctly configured
- ✅ Fully tested
- ✅ Production ready

---

## 🐛 If Something Doesn't Work

**Common Issues:**

1. **Modal doesn't open**
   → Check `client:only="react"` is used

2. **"Missing API token" error**
   → Verify `.env` variables and restart server

3. **Styles broken**
   → Ensure `src/site-components/global.css` imported

4. **Form submission fails**
   → Check browser console and network tab

5. **TypeScript errors**
   → Run `npm run astro check` to see details

**Need More Help?**

- See `MASTER_GUIDE.md` → Troubleshooting section
- Check browser DevTools console
- Review API responses in Network tab
- Verify environment variables are set

---

**Happy Building! 🎉**
