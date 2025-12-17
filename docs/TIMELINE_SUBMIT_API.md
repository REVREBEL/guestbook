# Timeline Submit API Documentation

## Endpoint

**POST** `/api/timeline/submit`

Accepts form submissions and creates CMS items in the Webflow Timeline collection with optional image uploads.

---

## Authentication

Uses environment variables:
- `WEBFLOW_CMS_SITE_API_TOKEN_WRITE` (preferred) or `WEBFLOW_CMS_SITE_API_TOKEN`
- `TIMELINE_COLLECTION_ID` (required)
- `WEBFLOW_API_HOST` (optional)

---

## Request Format

**Content-Type:** `multipart/form-data` or `application/x-www-form-urlencoded`

### Core Fields

| Field Name | Type | Required | Description | CMS Field |
|------------|------|----------|-------------|-----------|
| `timeline_name_line_1` | string | No | Event name line 1 | `event-name` |
| `timeline_name_line_2` | string | No | Event name line 2 | `event-name-main` |
| `name` | string | No | Fallback event/user name | `name` (required) |
| `month-year` | string | No | Event date (flexible format) | `date-added` |
| `memory` | string | No | Event description/details | `description` |
| `location` | string | No | Event location | `timeline-location` |
| `email` | string | No | User email | `email` |
| `timeline_type` | string | No | Event type/category | `event-type` |

### Image Fields

| Field Name | Type | Required | Description | CMS Field |
|------------|------|----------|-------------|-----------|
| `photo1_url` | string (URL) | No | Photo 1 URL (from R2 or external) | `photo-1.url` |
| `photo1_alt` | string | No | Photo 1 alt text | `photo-1.alt` |
| `photo2_url` | string (URL) | No | Photo 2 URL (from R2 or external) | `photo-2.url` |
| `photo2_alt` | string | No | Photo 2 alt text | `photo-2.alt` |

**Note:** Supports both `photo1_url`/`photo1-url` and `photo1_alt`/`photo1-alt` formats.

### Alternate Field Names

The API accepts multiple field name variations:

| Primary | Alternates |
|---------|-----------|
| `timeline_name_line_1` | `event-name` |
| `timeline_name_line_2` | `event-name-main` |
| `month-year` | `timeline_date`, `date-added` |
| `memory` | `timeline_detail` |
| `location` | `timeline_location` |
| `name` | `full_name` |
| `timeline_type` | `event-type` |

### Date Format Support

The `month-year` field accepts multiple formats:
- `June 1990` → 1990-06-01
- `06/01/2025` → 2025-06-01
- `June 1 2025` → 2025-06-01
- `2024-08-15` → 2024-08-15
- Defaults to first day of month if day is missing

### Auto-Generated Fields

The API automatically generates:
- `slug` - URL-safe slug from event name
- `event-number` - Auto-incremented event ID
- `even-number` - Boolean (even/odd event number)
- `edit-code` - 6-character alphanumeric code (e.g., `A3X9K2`)
- `date` - Current timestamp (submission date)
- `origin` - Defaults to `"webflow"`

---

## Response

### Success (302 Redirect)

```
Status: 302 Found
Location: https://patricia-lanning.webflow.io/timeline?success=true&id={itemId}&eventNumber={number}&editCode={code}&t={timestamp}
```

### Error (302 Redirect)

```
Status: 302 Found
Location: https://patricia-lanning.webflow.io/timeline?error=true&message={errorMessage}&t={timestamp}
```

---

## Example Requests

### 1. Basic Submission (No Images)

```bash
curl -X POST "https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" \
  -F "timeline_name_line_1=Summer Vacation" \
  -F "timeline_name_line_2=Beach Trip" \
  -F "month-year=July 2024" \
  -F "memory=Amazing trip to the coast" \
  -F "location=Malibu Beach" \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "timeline_type=vacation"
```

### 2. Submission with One Image

```bash
curl -X POST "https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" \
  -F "timeline_name_line_1=Wedding Day" \
  -F "month-year=June 1 2024" \
  -F "memory=Best day ever!" \
  -F "name=Jane Smith" \
  -F "photo1_url=https://pub-abc123.r2.dev/timeline-images/wedding.jpg" \
  -F "photo1_alt=Wedding ceremony photo"
```

### 3. Submission with Both Images

```bash
curl -X POST "https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" \
  -F "timeline_name_line_1=Graduation" \
  -F "month-year=May 2024" \
  -F "memory=Finally graduated!" \
  -F "name=Alex Johnson" \
  -F "photo1_url=https://pub-abc123.r2.dev/timeline-images/grad1.jpg" \
  -F "photo1_alt=Graduation ceremony" \
  -F "photo2_url=https://pub-abc123.r2.dev/timeline-images/grad2.jpg" \
  -F "photo2_alt=With family"
```

### 4. JavaScript Fetch Example

```javascript
const formData = new FormData();
formData.append('timeline_name_line_1', 'My Event');
formData.append('month-year', 'June 2024');
formData.append('memory', 'Great memory!');
formData.append('name', 'Test User');
formData.append('photo1_url', 'https://pub-abc123.r2.dev/image.jpg');
formData.append('photo1_alt', 'Event photo');

const response = await fetch('/api/timeline/submit', {
  method: 'POST',
  body: formData
});

// Server returns 302 redirect
// Browser will automatically follow to success/error page
```

### 5. HTML Form Example

```html
<form action="https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit" method="POST">
  <input type="text" name="timeline_name_line_1" placeholder="Event Name" required />
  <input type="text" name="month-year" placeholder="June 2024" required />
  <textarea name="memory" placeholder="Share your memory"></textarea>
  <input type="text" name="location" placeholder="Location" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Email" />
  
  <!-- Hidden fields for images (populated by JavaScript) -->
  <input type="hidden" name="photo1_url" id="photo1_url" />
  <input type="hidden" name="photo1_alt" id="photo1_alt" />
  <input type="hidden" name="photo2_url" id="photo2_url" />
  <input type="hidden" name="photo2_alt" id="photo2_alt" />
  
  <button type="submit">Submit</button>
</form>
```

---

## Image Upload Workflow

### Complete Flow

1. **User uploads image** → Compress with browser-image-compression
2. **Upload to R2** → POST to `/api/images/upload`
3. **Get R2 URL** → Response contains public URL
4. **Store URL** → Save in hidden form field or JavaScript variable
5. **Submit form** → Include `photo1_url`/`photo2_url` in form data
6. **API creates CMS item** → Images automatically attached

### Example JavaScript

```javascript
// Step 1-3: Upload image to R2
async function uploadImage(file) {
  // Compress if > 1MB
  if (file.size > 1024 * 1024) {
    file = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920
    });
  }
  
  // Upload to R2
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/images/upload', {
    method: 'POST',
    body: formData
  });
  
  const result = await response.json();
  return result.data; // { url, fileKey, ... }
}

// Step 4-5: Store URL and submit form
const imageData = await uploadImage(selectedFile);
document.getElementById('photo1_url').value = imageData.url;
document.getElementById('photo1_alt').value = 'My photo';

// Now submit the form
document.getElementById('timeline-form').submit();
```

---

## Testing

### Health Check

```bash
curl https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit
```

Response:
```json
{
  "message": "Timeline API is working! Use POST to submit data.",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "config": {
    "hasWriteToken": true,
    "hasReadToken": true,
    "hasCollectionId": true,
    "collectionId": "abc123..."
  }
}
```

### Run Test Suite

```bash
chmod +x test-timeline-submit.sh
./test-timeline-submit.sh
```

Tests include:
- Basic submission without images
- Submission with photo1 only
- Submission with both photos
- R2 URL format testing
- Date format variations
- Alternate field names

---

## Server Logs

The API provides detailed logging:

```
============================================
📥 Timeline Form Submission Received
============================================
Timestamp: 2024-01-15T10:30:00.000Z
Request URL: /api/timeline/submit
Request Method: POST
Content-Type: multipart/form-data

🔑 Token Check: { hasWriteToken: true, usingToken: 'write' }
📋 Form Data Received: { timeline_name_line_1: '...', ... }
📁 Collection ID: abc123...
📝 Timeline Name: Summer Vacation
🔗 Generated Slug: summer-vacation
🔐 Edit Code: X7K9M3
🔢 Next Event Number: 42
📅 Date Parsing: { input: 'July 2024', output: '2024-07-01T00:00:00.000Z' }
🖼️ Images: {
  photo1: { hasUrl: true, url: 'https://...' },
  photo2: { hasUrl: false }
}
🚀 Creating CMS item...
✅ CMS item created with ID: xyz789
📢 Publishing item...
✅ Timeline item published successfully
============================================
✅ Timeline Submission Complete
============================================
```

---

## Error Handling

### Missing Token
```json
{
  "success": false,
  "error": "Missing API token"
}
```

### Missing Collection ID
```json
{
  "success": false,
  "error": "Missing collection ID - set TIMELINE_COLLECTION_ID in Webflow Cloud environment variables"
}
```

### Invalid Collection ID
```json
{
  "success": false,
  "error": "Invalid collection ID format: abc123"
}
```

### CMS API Error
Redirects to:
```
/timeline?error=true&message=<error_details>&t=<timestamp>
```

---

## Environment Variables Setup

In **Webflow Cloud → Apps → Your App → Environment Variables**:

```
WEBFLOW_CMS_SITE_API_TOKEN_WRITE = your_write_token_here
TIMELINE_COLLECTION_ID = 507f1f77bcf86cd799439011
```

Optional:
```
WEBFLOW_API_HOST = https://api.webflow.com
```

---

## CMS Field Mapping

| Form Field | CMS Field | Type |
|------------|-----------|------|
| `timeline_name_line_1` | `event-name` | Plain Text |
| `timeline_name_line_2` | `event-name-main` | Plain Text |
| `name` | `name` | Plain Text (required) |
| `slug` | `slug` | Plain Text (required, auto) |
| `month-year` | `date-added` | Date/Time |
| `memory` | `description` | Plain Text |
| `location` | `timeline-location` | Plain Text |
| `email` | `email` | Email |
| `timeline_type` | `event-type` | Plain Text |
| `photo1_url` | `photo-1` | Image |
| `photo2_url` | `photo-2` | Image |
| (auto) | `event-number` | Number |
| (auto) | `even-number` | Bool |
| (auto) | `edit-code` | Plain Text |
| (auto) | `date` | Date/Time |
| (auto) | `origin` | Plain Text |

---

## Integration Checklist

- [ ] Environment variables configured in Webflow Cloud
- [ ] `TIMELINE_COLLECTION_ID` set correctly
- [ ] Write token has permissions for collection
- [ ] Form action points to `/api/timeline/submit`
- [ ] Image upload workflow tested (if using images)
- [ ] Hidden fields for `photo1_url`, `photo2_url` in form
- [ ] Success/error redirect handling on `/timeline` page
- [ ] Tested with `curl` or Postman
- [ ] Tested in production environment

---

## Support

For issues:
1. Check server logs for detailed error messages
2. Verify environment variables are set
3. Test with health check endpoint (GET request)
4. Run test suite: `./test-timeline-submit.sh`
5. Check CMS collection permissions

---

## Version History

- **v1.2** - Added support for alternate field names (`photo1-url`, etc.)
- **v1.1** - Added image URL support via hidden form fields
- **v1.0** - Initial release with basic form submission
