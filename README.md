# Webflow Guestbook CMS Integration

A complete TypeScript-based integration that connects Webflow-generated form components to the Webflow CMS API. This solution enables creating and updating guestbook entries with validation, security, and external embed support.

## 🎯 Features

- ✅ **Full CMS Integration** - Create and update guestbook entries
- ✅ **Webflow Components** - Uses `GuestbookForm` and `GuestbookFormButton` (no custom rewrites)
- ✅ **Secure Server-Side API** - Tokens never exposed to client
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **External Embed** - Can be used on pages outside Webflow Cloud
- ✅ **Auto-Generated Codes** - Unique slug and edit code for each entry
- ✅ **Validation** - Client-side validation with detailed error messages
- ✅ **Modal UI** - Non-intrusive modal dialog

## 📦 Installation

### 1. Install Dependencies

```bash
npm install
```

Required packages (already in package.json):
- `webflow-api` - Webflow SDK
- `iconoir-react` - Icon library
- `@radix-ui/react-dialog` - Modal component

### 2. Set Environment Variables

Create a `.env` file in the project root:

```env
# Required: Webflow CMS API token with write access
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=your_token_here

# Optional: Default guestbook collection ID
PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3

# Optional: Custom Webflow API host
WEBFLOW_API_HOST=https://api.webflow.com
```

**Getting Your API Token:**
1. Go to Webflow Dashboard → Site Settings → Apps & Integrations
2. Create a new API token with CMS write permissions
3. Copy the token and add to `.env`

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see the home page, or `/guestbook` for the demo.

## 🚀 Usage

### Basic Usage in Astro Page

```astro
---
import { GuestbookButton } from '../components/GuestbookButton';
---

<GuestbookButton client:only="react" />
```

### With Custom Props

```astro
<GuestbookButton 
  client:only="react"
  buttonText="Sign Our Guestbook"
  collectionId="69383a09bbf502930bf620a3"
  onSuccess={(data) => console.log('Entry created:', data)}
  onError={(error) => alert('Error: ' + error.message)}
/>
```

### Edit Mode

```astro
<GuestbookButton 
  client:only="react"
  itemId="existing-item-id"
  buttonText="Edit Your Entry"
/>
```

### External Embed

Embed on pages outside Webflow Cloud:

```html
<div id="guestbook"></div>
<script src="https://your-domain.com/embed/guestbook-embed.js"></script>
<script>
  mountGuestbookButton(document.getElementById('guestbook'), {
    buttonText: 'Sign Guestbook',
    collectionId: '69383a09bbf502930bf620a3'
  });
</script>
```

Or use auto-mount with data attributes:

```html
<div 
  data-guestbook-button
  data-button-text="Sign Our Guestbook"
  data-collection-id="69383a09bbf502930bf620a3"
></div>
<script src="https://your-domain.com/embed/guestbook-embed.js"></script>
```

## 📋 Field Mapping

| Form Field | CMS Field | Required | Notes |
|------------|-----------|----------|-------|
| `full_name` | `name`, `first-name` | ✅ Yes | Mapped to both fields |
| `email` | `email` | ✅ Yes | For edit authentication |
| (auto) | `slug` | ✅ Yes | 10-digit code |
| (auto) | `edit-code` | ✅ Yes | 6-char code |
| (auto) | `active` | ✅ Yes | Defaults to `true` |
| `guestbook_location` | `location` | Optional | - |
| `guestbook_first_meeting` | `guestbook-first-meeting` | Optional | - |
| `guestbook_relationship` | `relationship` | Optional | - |
| `guestbook_message` | `guestbook-message` | Optional | - |

**Important:** Form fields use underscores, CMS fields use hyphens.

## 📁 Project Structure

```
src/
├── lib/guestbook/
│   ├── types.ts              # TypeScript types
│   ├── utils.ts              # Helper functions
│   └── api-client.ts         # Client-side API
│
├── components/
│   ├── GuestbookButton.tsx   # Button component
│   └── GuestbookModal.tsx    # Modal with form
│
├── pages/
│   ├── index.astro           # Home page
│   ├── guestbook.astro       # Demo page
│   └── api/cms/
│       ├── [collectionId].ts           # List items
│       ├── [collectionId]/create.ts    # Create item
│       └── [collectionId]/[itemId].ts  # Get/update item
│
└── site-components/
    ├── GuestbookForm.jsx           # Webflow form
    ├── GuestbookFormButton.jsx     # Webflow button
    └── DevLinkProvider.jsx         # Devlink wrapper

embed/
└── guestbook-embed.tsx       # External embed

docs/
└── example-payloads.md       # API payload examples

MASTER_GUIDE.md               # Complete documentation
```

## 🔄 How It Works

### Create Flow

```
User clicks button
    ↓
Modal opens with form
    ↓
User fills form
    ↓
Client validates data
    ↓
POST /api/cms/[collectionId]/create
    ↓
Server calls Webflow API
    ↓
CMS creates item
    ↓
Response with id, slug, edit-code
    ↓
Success message shown
```

### Update Flow

```
User clicks button (with itemId)
    ↓
GET /api/cms/[collectionId]/[itemId]
    ↓
Modal opens with pre-filled form
    ↓
User edits and submits
    ↓
PATCH /api/cms/[collectionId]/[itemId]
    ↓
CMS updates item
    ↓
Success message shown
```

## 🔐 Security

- ✅ API tokens stored server-side only
- ✅ Never exposed to client code
- ✅ All CMS communication via API routes
- ✅ Client-side and server-side validation
- ✅ Environment variables for secrets

## 🧪 Testing

### 1. Test Demo Page

```bash
npm run dev
```

Visit `/guestbook` and:
- [ ] Click "Sign the Guestbook"
- [ ] Fill out form
- [ ] Submit
- [ ] Verify success message
- [ ] Check Webflow CMS for new entry

### 2. Test Validation

- [ ] Submit empty form (should show errors)
- [ ] Submit invalid email (should show error)
- [ ] Submit valid data (should succeed)

### 3. Test Update Mode

```astro
<GuestbookButton 
  client:only="react"
  itemId="your-item-id"
/>
```

- [ ] Form pre-fills with existing data
- [ ] Updates save correctly

## 📚 Documentation

- **MASTER_GUIDE.md** - Complete setup and usage guide
- **docs/example-payloads.md** - JSON payload examples
- **src/lib/guestbook/types.ts** - TypeScript interfaces

## 🐛 Troubleshooting

### "Missing API token" Error

1. Check `.env` file exists
2. Verify `WEBFLOW_CMS_SITE_API_TOKEN_WRITE` is set
3. Restart dev server

### "Collection ID is required" Error

1. Set `PUBLIC_GUESTBOOK_COLLECTION_ID` in `.env`
2. Or pass `collectionId` prop to component

### Modal Doesn't Open

1. Verify `client:only="react"` is used
2. Check browser console for errors
3. Ensure `src/site-components/global.css` is imported

### Styles Look Broken

1. Ensure `src/site-components/global.css` is imported
2. Check `DevLinkProvider` wraps components
3. Clear browser cache

## 🚢 Deployment

### Build

```bash
npm run build
```

### Environment Variables in Production

Set these in Webflow Cloud:
- `WEBFLOW_CMS_SITE_API_TOKEN_WRITE`
- `PUBLIC_GUESTBOOK_COLLECTION_ID`

### Deploy

Follow Webflow Cloud deployment process.

## 🎨 Customization

### Change Button Text

```astro
<GuestbookButton 
  client:only="react"
  buttonText="Your Custom Text"
/>
```

### Add Custom Validation

Edit `src/lib/guestbook/utils.ts`:

```typescript
export function validateGuestbookForm(values: GuestbookFormValues): ValidationError[] {
  // Add custom rules
}
```

### Customize Modal Styles

Edit `src/components/GuestbookModal.tsx`:

```tsx
<div className="your-custom-classes">
  {/* ... */}
</div>
```

## 📞 Support

For issues or questions:
1. Check this README
2. Review MASTER_GUIDE.md
3. Check browser console for errors
4. Review example-payloads.md for API examples

## 📄 License

This code is part of your Webflow Cloud project.

---

**Built with Webflow Cloud, Astro, React, and TypeScript**
