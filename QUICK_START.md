# Quick Start Guide

Get your Webflow guestbook integration up and running in 5 minutes.

## ⚡ 1. Install Dependencies

```bash
npm install
```

## 🔑 2. Get Your Webflow API Token

1. Go to your Webflow site settings
2. Navigate to **Apps & Integrations**
3. Click **Generate API Token**
4. Enable **CMS Write** permissions
5. Copy the token

## 📝 3. Configure Environment

Create `.env` file in project root:

```env
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=your_token_here
PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3
```

## 🚀 4. Start Development

```bash
npm run dev
```

Open `http://localhost:4321/guestbook`

## ✅ 5. Test It

1. Click "Sign the Guestbook"
2. Fill out the form:
   - **Name**: John Doe *(required)*
   - **Email**: john@example.com *(required)*
   - **Location**: New York *(optional)*
   - **Message**: Hello! *(optional)*
3. Click Submit
4. You should see: ✅ "Guestbook entry created successfully!"

## 🎯 6. Use in Your Pages

Add to any `.astro` file:

```astro
---
import { GuestbookButton } from '../components/GuestbookButton';
---

<GuestbookButton client:only="react" />
```

## 📦 7. Embed Externally (Optional)

For use outside Webflow Cloud:

```html
<div data-guestbook-button></div>
<script src="https://your-domain.com/embed/guestbook-embed.js"></script>
```

---

## 🔧 Common Issues

### ❌ "Missing API token"
→ Check `.env` file and restart dev server

### ❌ Modal doesn't open
→ Ensure you used `client:only="react"`

### ❌ Styles broken
→ Check `src/site-components/global.css` is imported

---

## 📚 Next Steps

- Read **MASTER_GUIDE.md** for detailed documentation
- See **docs/example-payloads.md** for API examples
- Customize in `src/components/GuestbookModal.tsx`

---

**Need help?** Check the troubleshooting section in README.md
