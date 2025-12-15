# Guestbook CMS Integration - Master Guide

## 📋 Overview

This document provides comprehensive documentation for the Webflow Cloud guestbook form integration with Webflow CMS. The solution connects Webflow-generated form components to the Webflow Data API for creating and updating CMS entries.

---

## 🎯 Features

- ✅ **Full CMS Integration** - Create and update guestbook entries in Webflow CMS
- ✅ **Uses Webflow Components** - No custom rewrites, uses `GuestbookForm` and `GuestbookFormButton` as-is
- ✅ **Secure API Communication** - Server-side API routes keep tokens secure
- ✅ **Type-Safe** - Full TypeScript support throughout
- ✅ **External Embed Support** - Can be embedded on pages outside Webflow Cloud
- ✅ **Auto-Generated Codes** - Automatic slug and edit code generation
- ✅ **Validation** - Client-side validation before submission
- ✅ **Modal UI** - Non-intrusive modal dialog for form display

---

## 📁 Project Structure

```
src/
├── lib/guestbook/
│   ├── types.ts              # TypeScript interfaces and types
│   ├── utils.ts              # Helper functions (validation, transformation)
│   └── api-client.ts         # Client-side API communication
│
├── components/
│   ├── GuestbookButton.tsx   # Button component (opens modal)
│   └── GuestbookModal.tsx    # Modal with form and submission logic
│
├── pages/
│   ├── guestbook.astro       # Demo/test page
│   └── api/cms/
│       ├── [collectionId].ts           # GET: List items
│       ├── [collectionId]/create.ts    # POST: Create item
│       └── [collectionId]/[itemId].ts  # GET/PATCH: Read/update item
│
└── site-components/
    ├── GuestbookForm.jsx           # Webflow-generated form
    ├── GuestbookFormButton.jsx     # Webflow-generated button
    ├── DevLinkProvider.jsx         # Required wrapper for Devlink components
    └── global.css                  # Devlink component styles

embed/
└── guestbook-embed.tsx       # External embed entry point
```

---

## 🔧 Configuration

### Required Environment Variables

Add these to your `.env` file:

```env
# Required: Webflow CMS API token with write access
WEBFLOW_CMS_SITE_API_TOKEN_WRITE=your_token_here

# Optional: Default guestbook collection ID
PUBLIC_GUESTBOOK_COLLECTION_ID=69383a09bbf502930bf620a3

# Optional: Custom Webflow API host (for testing)
WEBFLOW_API_HOST=https://api.webflow.com
```

### Collection ID

**Default Collection ID**: `69383a09bbf502930bf620a3` (Guestbook collection)

This can be overridden by:
1. Setting `PUBLIC_GUESTBOOK_COLLECTION_ID` environment variable
2. Passing `collectionId` prop to components
3. Using data attribute in embed: `data-collection-id="..."`

---

## 📋 Field Mapping

### Form Fields → CMS Fields

| Form Field | CMS Field | Type | Required | Notes |
|------------|-----------|------|----------|-------|
| `full_name` | `name` | PlainText | ✅ Yes | Required by Webflow |
| `full_name` | `first-name` | PlainText | ✅ Yes | Also mapped here (custom field) |
| `email` | `email` | Email | ✅ Yes | For edit authentication |
| (auto) | `slug` | PlainText | ✅ Yes | 10-digit code, auto-generated |
| (auto) | `edit-code` | PlainText | ✅ Yes | 6-char code, auto-generated |
| (auto) | `active` | Boolean | ✅ Yes | Defaults to `true` |
| `guestbook_location` | `location` | PlainText | Optional | - |
| `guestbook_first_meeting` | `guestbook-first-meeting` | PlainText | Optional | - |
| `guestbook_relationship` | `relationship` | PlainText | Optional | - |
| `guestbook_message` | `guestbook-message` | PlainText | Optional | - |
| `profile_image` | `photo` | Image | Optional | URL or file upload |
| `date_added` | `date-added` | DateTime | Optional | ISO 8601 format |
| `guestbook_id` | `guestbook-id` | Number | Optional | - |
| `guestbook_edit_code` | `guestbook-edit-code` | PlainText | Optional | Legacy field |

### Important Notes

- **Naming Convention**: Form fields use underscores (`guestbook_location`), CMS fields use hyphens (`location`)
- **Slug Generation**: Slug is a 10-digit random alphanumeric code (e.g., `a1b2c3d4e5`)
- **Edit Code**: 6-character case-sensitive code for authentication (e.g., `Xy9K2m`)
- **Active Default**: New records have `active: true` by default

---

## 🚀 Usage

### 1. Basic Usage in Astro Page

```astro
---
import { GuestbookButton } from '../components/GuestbookButton';
---

<GuestbookButton client:only="react" />
```

### 2. With Custom Props

```astro
<GuestbookButton 
  client:only="react"
  buttonText="Sign Our Guestbook"
  collectionId="69383a09bbf502930bf620a3"
  onSuccess={(data) => console.log('Created:', data)}
  onError={(error) => alert('Error: ' + error.message)}
/>
```

### 3. Edit Existing Entry

```astro
<GuestbookButton 
  client:only="react"
  itemId="existing-item-id"
  buttonText="Edit Your Entry"
/>
```

### 4. External Embed (Outside Webflow Cloud)

#### Option A: Manual Mount

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

#### Option B: Auto-Mount with Data Attributes

```html
<div 
  data-guestbook-button
  data-button-text="Sign Our Guestbook"
  data-collection-id="69383a09bbf502930bf620a3"
></div>
<script src="https://your-domain.com/embed/guestbook-embed.js"></script>
```

---

## 🔄 Data Flow

### Create New Entry

```
User clicks button
    ↓
Modal opens with GuestbookForm
    ↓
User fills form and submits
    ↓
Client-side validation
    ↓
Transform to CMS payload
    ↓
POST /api/cms/[collectionId]/create
    ↓
Server validates and calls Webflow API
    ↓
CMS creates item
    ↓
Response with item data (id, slug, edit-code)
    ↓
Success message shown to user
    ↓
Modal closes
```

### Update Existing Entry

```
User clicks button (with itemId prop)
    ↓
Load existing data: GET /api/cms/[collectionId]/[itemId]
    ↓
Modal opens with pre-filled form
    ↓
User edits and submits
    ↓
Client-side validation
    ↓
Transform to update payload
    ↓
PATCH /api/cms/[collectionId]/[itemId]
    ↓
Server validates and calls Webflow API
    ↓
CMS updates item
    ↓
Response with updated data
    ↓
Success message shown
    ↓
Modal closes
```

---

## 🔐 Security

### API Token Security

- ✅ **Server-Side Only**: API tokens are NEVER exposed to client
- ✅ **Environment Variables**: Stored in `.env` file (not committed to Git)
- ✅ **API Routes**: All CMS communication goes through server-side API routes
- ✅ **No Direct Client Access**: Client code cannot access Webflow API directly

### Best Practices

1. **Never** commit `.env` file to version control
2. **Always** use environment variables for sensitive data
3. **Rotate** API tokens if exposed
4. **Validate** all input on server-side (not just client-side)
5. **Limit** API token permissions to only what's needed

---

## 📝 API Routes Reference

### List Items

**Endpoint**: `GET /api/cms/[collectionId]`

**Query Parameters**:
- `limit` (optional): Max items to return (default: 20, max: 100)
- `offset` (optional): Pagination offset (default: 0)

**Response**:
```json
{
  "items": [...],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "total": 150
  }
}
```

### Create Item

**Endpoint**: `POST /api/cms/[collectionId]/create`

**Request Body**:
```json
{
  "fieldData": {
    "name": "John Doe",
    "slug": "a1b2c3d4e5",
    "first-name": "John Doe",
    "email": "john@example.com",
    "location": "New York",
    "active": true,
    "edit-code": "Xy9K2m"
  },
  "isArchived": false,
  "isDraft": false,
  "localeId": "optional-locale-id"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "cms-item-id",
    "cmsLocaleId": "locale-id",
    "lastPublished": null,
    "lastUpdated": "2024-01-15T10:30:00Z",
    "createdOn": "2024-01-15T10:30:00Z",
    "isArchived": false,
    "isDraft": false,
    "fieldData": {
      "name": "John Doe",
      "slug": "a1b2c3d4e5",
      ...
    }
  }
}
```

### Get Item

**Endpoint**: `GET /api/cms/[collectionId]/[itemId]`

**Response**: Same as create response

### Update Item

**Endpoint**: `PATCH /api/cms/[collectionId]/[itemId]`

**Request Body**: Same structure as create (only include fields to update)

**Response**: Same as create response

---

## 🧪 Testing Checklist

### Local Development

- [ ] Install dependencies: `npm install`
- [ ] Set environment variables in `.env`
- [ ] Start dev server: `npm run dev`
- [ ] Visit `/guestbook` page
- [ ] Click "Sign the Guestbook" button
- [ ] Fill out and submit form
- [ ] Verify success message appears
- [ ] Check Webflow CMS for new entry

### Field Testing

- [ ] Required fields show error if empty
- [ ] Email validation works
- [ ] Optional fields can be left blank
- [ ] Long text is handled properly
- [ ] Special characters don't break submission

### Update Testing

- [ ] Load existing entry with `itemId` prop
- [ ] Form pre-fills with existing data
- [ ] Updates save correctly
- [ ] Existing slug/edit-code are preserved

### Embed Testing

- [ ] Build embed bundle
- [ ] Test manual mount function
- [ ] Test auto-mount with data attributes
- [ ] Verify on external page (outside app)
- [ ] Test in different browsers

---

## 🐛 Troubleshooting

### "Missing API token" Error

**Problem**: Server can't find `WEBFLOW_CMS_SITE_API_TOKEN_WRITE`

**Solution**:
1. Check `.env` file exists
2. Verify variable name is correct (with `_WRITE` suffix)
3. Restart dev server after adding/changing `.env`
4. For production, set in Webflow Cloud environment variables

### "Collection ID is required" Error

**Problem**: Component doesn't have a collection ID

**Solution**:
1. Set `PUBLIC_GUESTBOOK_COLLECTION_ID` in `.env`
2. Pass `collectionId` prop to component
3. For embed, use `data-collection-id` attribute

### "Failed to create guestbook entry" Error

**Problem**: CMS API request failed

**Solution**:
1. Check API token has write permissions
2. Verify collection ID is correct
3. Check required fields are provided
4. Look at browser console for detailed error
5. Check server logs for Webflow API response

### Modal Doesn't Open

**Problem**: Button click doesn't show modal

**Solution**:
1. Verify `client:only="react"` directive is used
2. Check browser console for React errors
3. Ensure DevLinkProvider is wrapping components
4. Check `src/site-components/global.css` is imported

### Form Submission Hangs

**Problem**: Submit button shows loading state indefinitely

**Solution**:
1. Check network tab for failed API requests
2. Verify API routes are accessible
3. Check for JavaScript errors in console
4. Ensure validation isn't blocking submission

### Styles Look Broken

**Problem**: Form or button doesn't look right

**Solution**:
1. Ensure `src/site-components/global.css` is imported
2. Check `generated/webflow.css` exists
3. Verify DevLinkProvider is wrapping components
4. Clear browser cache
5. Check for CSS conflicts with other styles

---

## 📧 Post-Submission Email (Future Enhancement)

After successful submission, you may want to send an email with:

```
✅ Thank you for your guestbook entry!

To edit your entry later, you'll need these codes:

🔑 Your Slug: a1b2c3d4e5
🔐 Your Edit Code: Xy9K2m
📧 Your Email: john@example.com

Visit [your-site.com/edit] and enter all three to make changes.
```

**Implementation Options**:
1. Add email API route that calls SendGrid, Mailgun, etc.
2. Call from `GuestbookModal` after successful CMS creation
3. Use Webflow's email notification rules (if available)

---

## 🎨 Customization

### Change Button Styles

Edit the Webflow component in Designer, or override in code:

```tsx
<GuestbookFormButton
  buttonRuntimeProps={{
    className: 'my-custom-class',
    style: { backgroundColor: 'blue' }
  }}
/>
```

### Change Modal Styles

Edit `src/components/GuestbookModal.tsx`:

```tsx
<div className="bg-white dark:bg-gray-900 rounded-lg ...">
  {/* Your custom styles */}
</div>
```

### Change Validation Rules

Edit `src/lib/guestbook/utils.ts`:

```typescript
export function validateGuestbookForm(values: GuestbookFormValues): ValidationError[] {
  const errors: ValidationError[] = [];
  
  // Add custom validation rules
  if (values.guestbook_message && values.guestbook_message.length < 10) {
    errors.push({
      field: 'guestbook_message',
      message: 'Message must be at least 10 characters'
    });
  }
  
  return errors;
}
```

### Add Custom Fields

1. Add field to `GuestbookFormValues` type in `types.ts`
2. Add field to payload transformers in `utils.ts`
3. Add field to form in Webflow Designer
4. Rebuild and deploy

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables in Production

Set these in your Webflow Cloud app settings:
- `WEBFLOW_CMS_SITE_API_TOKEN_WRITE`
- `PUBLIC_GUESTBOOK_COLLECTION_ID` (optional)

### Deploy

```bash
# Deploy to Webflow Cloud
npm run deploy
```

---

## 📚 Additional Resources

- [Webflow Data API Documentation](https://developers.webflow.com/data/reference)
- [Webflow CMS Collections](https://developers.webflow.com/data/reference/cms/collections)
- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

## ⚠️ Known Limitations

1. **File Uploads**: Image uploads require additional implementation (URL only for now)
2. **Draft Support**: Draft items may not be queryable via live API
3. **Pagination**: List endpoint limited to 100 items per request
4. **Locales**: Multi-language support requires locale IDs to be provided
5. **Rate Limits**: Webflow API has rate limits (check documentation)

---

## 🔄 Version History

### Version 1.0.0 (Current)

- Initial release
- Create and update CMS items
- Auto-generated slug and edit codes
- Modal UI with validation
- External embed support
- Full TypeScript support
- Server-side API routes
- Demo page

---

## 📞 Support

For issues or questions:

1. Check this guide first
2. Review troubleshooting section
3. Check browser console for errors
4. Review server logs
5. Consult Webflow Developer documentation

---

## 📄 License

This code is part of your Webflow Cloud project and follows the same licensing terms.

---

**Last Updated**: January 2024
**Author**: Webflow Cloud AI App Builder
