# Webflow Count Component Integration Guide

This guide outlines what needs to be created to render the guestbook count inside a Webflow component on static Webflow pages.

## Overview

The goal is to display the live guestbook count from the Webflow CMS on a static Webflow page using a Webflow-designed component. This requires several pieces working together:

1. **React Component** - `GuestbookCount.tsx` - Wraps the Webflow component and manages state
2. **API Endpoints** - Fetch the count from Webflow CMS
3. **Embed Script** - Standalone JavaScript for static Webflow pages
4. **Webflow Component** - The visual component designed in Webflow Designer
5. **Supporting Files** - Types, utils, and API client

---

## 1. React Component (For Astro Pages)

### File: `src/components/GuestbookCount.tsx`

**Purpose**: A React wrapper around the Webflow `GuestbookCount` component that dynamically fetches and updates the count.

**Key Features**:
- Fetches count from API on mount
- Auto-refreshes every 5 seconds (configurable)
- Listens for custom `guestbook:refresh` event
- Shows loading state
- Handles errors gracefully
- Debug mode in development

**Props Interface**:
```typescript
interface GuestbookCountProps {
  /** Initial count to display (optional) */
  initialCount?: number;
  /** Description text to display */
  description?: string;
  /** Whether to auto-refresh the count */
  autoRefresh?: boolean;
  /** Refresh interval in milliseconds (default: 5000) */
  refreshInterval?: number;
}
```

**Usage in Astro**:
```astro
---
import { GuestbookCount } from '../components/GuestbookCount';
---

<GuestbookCount 
  client:only="react"
  initialCount={0}
  description="Family and friends have signed the guestbook"
  autoRefresh={true}
  refreshInterval={5000}
/>
```

**Key Implementation Details**:
```typescript
// Fetch count from API
const fetchCount = async () => {
  const url = `${baseUrl}/api/guestbook/count`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Cache-Control': 'no-cache' }
  });
  
  if (response.ok) {
    const data = await response.json();
    if (data.success) {
      setCount(data.count);
    }
  }
};

// Auto-refresh
useEffect(() => {
  const interval = setInterval(fetchCount, refreshInterval);
  return () => clearInterval(interval);
}, [autoRefresh, refreshInterval]);

// Listen for custom refresh event
useEffect(() => {
  const handleRefresh = () => fetchCount();
  window.addEventListener('guestbook:refresh', handleRefresh);
  return () => window.removeEventListener('guestbook:refresh', handleRefresh);
}, []);
```

---

## 2. API Endpoints

### File: `src/pages/api/guestbook/count.ts`

**Purpose**: JSON endpoint that returns the count for use in React components.

**Response Format**:
```json
{
  "success": true,
  "count": 42
}
```

**Code Structure**:
```typescript
import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const token = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                  import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    const collectionId = locals?.runtime?.env?.GUESTBOOK_COLLECTION_ID || 
                        import.meta.env.GUESTBOOK_COLLECTION_ID;
    
    if (!token || !collectionId) {
      return new Response(JSON.stringify({ 
        success: false, 
        count: 0, 
        error: 'Missing configuration' 
      }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }

    const client = new WebflowClient({ accessToken: token });
    const response = await client.collections.items.listItemsLive(collectionId, { 
      limit: 1,
      offset: 0
    });
    
    const count = response.pagination?.total ?? 0;
    
    return new Response(JSON.stringify({ 
      success: true, 
      count 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      count: 0, 
      error: error.message 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

### File: `src/pages/api/guestbook/count-html.ts`

**Purpose**: Plain text endpoint for use in standalone embed scripts on static Webflow pages.

**Response Format**: Just the number as plain text (e.g., `"42"`)

**Code Structure**:
```typescript
import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const token = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                  import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
    const collectionId = locals?.runtime?.env?.GUESTBOOK_COLLECTION_ID || 
                        import.meta.env.GUESTBOOK_COLLECTION_ID;
    
    if (!token || !collectionId) {
      return new Response('0', { 
        status: 200,
        headers: { 
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }

    const client = new WebflowClient({ accessToken: token });
    const response = await client.collections.items.listItemsLive(collectionId, { 
      limit: 1,
      offset: 0
    });
    
    const count = response.pagination?.total ?? 0;
    
    return new Response(count.toString(), {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error fetching count:', error);
    return new Response('0', {
      status: 200,
      headers: { 
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
};
```

---

## 3. Embed Script (For Static Webflow Pages)

### File: `public/guestbook-count-embed.js`

**Purpose**: Client-side JavaScript that fetches the count from the API and updates the DOM. Works on any page without requiring React or Astro.

**Key Requirements**:
- Must construct the correct base URL for the API endpoint
- Must handle the app's mount path (e.g., `/guestbook-form`)
- Must update the text content of the target element
- Should refresh the count periodically (e.g., every 5 seconds)
- Should handle errors gracefully
- Must be a standalone script (no build step required)

**Code Structure**:
```javascript
(function() {
  // Determine the base URL from the script's own location
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.src : '';
  
  let baseUrl = '';
  if (scriptSrc) {
    const url = new URL(scriptSrc);
    const pathParts = url.pathname.split('/');
    // Extract mount path (e.g., /guestbook-form)
    if (pathParts.length > 2) {
      baseUrl = '/' + pathParts[1];
    }
  }

  // Function to fetch and update count
  async function updateCount() {
    try {
      const response = await fetch(`${baseUrl}/api/guestbook/count-html`);
      if (response.ok) {
        const count = await response.text();
        const element = document.querySelector('[data-guestbook-count]');
        if (element) {
          element.textContent = count;
        }
      }
    } catch (error) {
      console.error('Error fetching guestbook count:', error);
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCount);
  } else {
    updateCount();
  }
  
  // Refresh every 5 seconds
  setInterval(updateCount, 5000);
})();
```

**Script Tag for Webflow**:
```html
<script src="https://your-app-url.webflow.io/guestbook-form/guestbook-count-embed.js"></script>
```

---

## 4. Supporting Files

### File: `src/lib/guestbook/types.ts`

**Purpose**: TypeScript type definitions for the guestbook integration.

**Key Types** (relevant to count feature):
```typescript
// API response from /api/guestbook/count
export interface CountResponse {
  success: boolean;
  count: number;
  error?: string;
}

// Props for GuestbookCount component
export interface GuestbookCountProps {
  initialCount?: number;
  description?: string;
  autoRefresh?: boolean;
  refreshInterval?: number;
}
```

### File: `src/lib/guestbook/api-client.ts`

**Purpose**: Client-side API functions for interacting with the guestbook endpoints.

**Count Function**:
```typescript
import { baseUrl } from '../base-url';

export async function getGuestbookCount(): Promise<number> {
  try {
    const response = await fetch(`${baseUrl}/api/guestbook/count`, {
      method: 'GET',
      headers: { 'Cache-Control': 'no-cache' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success) {
      return data.count;
    }
    
    throw new Error(data.error || 'Failed to fetch count');
  } catch (error) {
    console.error('Error fetching guestbook count:', error);
    return 0;
  }
}
```

### File: `src/lib/guestbook/utils.ts`

**Purpose**: Utility functions for the guestbook integration.

**Refresh Event Helper**:
```typescript
/**
 * Trigger a refresh of all guestbook count components
 * Call this after a successful form submission
 */
export function triggerCountRefresh(): void {
  const event = new CustomEvent('guestbook:refresh');
  window.dispatchEvent(event);
}
```

**Usage**:
```typescript
// After successful form submission
import { triggerCountRefresh } from '../lib/guestbook/utils';

async function handleSubmit() {
  await submitGuestbookForm(values);
  triggerCountRefresh(); // Update all count displays
}
```

---

## 5. Webflow Component Setup

### Component Requirements

The Webflow component must include a text element with a specific data attribute that the embed script can target.

**Required Data Attribute**:
```html
data-guestbook-count
```

### Webflow Designer Steps

1. **Create or Edit Component** in Webflow Designer
   - This can be the `GuestbookCount` component or any text-based component

2. **Add Text Element**
   - Add a text element where you want the count to appear
   - Set initial placeholder text (e.g., "0" or "Loading...")

3. **Add Custom Attribute**
   - Select the text element
   - In the Element Settings panel, add a custom attribute:
     - **Name**: `data-guestbook-count`
     - **Value**: (leave empty or set to "0")

4. **Style the Component**
   - Apply any desired styling (fonts, colors, spacing, etc.)
   - The number will be updated dynamically but styling will remain

5. **Publish Component**
   - Save and publish the component to make it available

### Using the Component on a Page

#### Option A: In Astro Pages (with React)

```astro
---
import MainLayout from '../layouts/main.astro';
import { GuestbookCount } from '../components/GuestbookCount';
---

<MainLayout>
  <GuestbookCount 
    client:only="react"
    initialCount={0}
    description="Family and friends have signed"
    autoRefresh={true}
  />
</MainLayout>
```

#### Option B: On Static Webflow Pages (with embed script)

1. **Add Component to Page**
   - Drag the component onto your page in Webflow Designer

2. **Add Embed Script to Page**
   - In Page Settings → Custom Code → Before `</body>` tag
   - Add the script tag:
   ```html
   <script src="https://your-app-url.webflow.io/guestbook-form/guestbook-count-embed.js"></script>
   ```

3. **Publish Page**
   - The count will update automatically when the page loads
   - The count will refresh every 5 seconds

---

## 6. Environment Variables

### Required Variables in Webflow Cloud Dashboard

These must be set in your Webflow Cloud app settings:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `GUESTBOOK_COLLECTION_ID` | The Webflow CMS collection ID for guestbook entries | `69383a09bbf502930bf620a3` |
| `WEBFLOW_CMS_SITE_API_TOKEN` | Read-only API token for fetching CMS data | `your-read-token` |
| `WEBFLOW_API_HOST` | (Optional) Custom API host for staging/dev | `https://api.webflow.com` |

### How to Set Environment Variables

1. Go to Webflow Cloud dashboard
2. Select your app
3. Navigate to Settings → Environment Variables
4. Add each variable with its key and value
5. Redeploy the app for changes to take effect

---

## 7. Integration Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     ASTRO PAGES                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  GuestbookCount.tsx (React Component)              │    │
│  │  - Manages state                                    │    │
│  │  - Auto-refreshes                                   │    │
│  │  - Listens for events                              │    │
│  └───────────────┬────────────────────────────────────┘    │
│                  │                                           │
│                  ▼                                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  /api/guestbook/count (JSON)                       │    │
│  │  { success: true, count: 42 }                      │    │
│  └───────────────┬────────────────────────────────────┘    │
└──────────────────┼──────────────────────────────────────────┘
                   │
                   │
┌──────────────────┼──────────────────────────────────────────┐
│                  │    STATIC WEBFLOW PAGES                   │
│  ┌───────────────▼───────────────────────────────────┐     │
│  │  guestbook-count-embed.js (Standalone Script)     │     │
│  │  - Runs without React/Astro                       │     │
│  │  - Updates DOM directly                           │     │
│  └───────────────┬───────────────────────────────────┘     │
│                  │                                           │
│                  ▼                                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  /api/guestbook/count-html (Plain Text)           │    │
│  │  "42"                                               │    │
│  └───────────────┬────────────────────────────────────┘    │
│                  │                                           │
│                  ▼                                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  [data-guestbook-count] Element                    │    │
│  │  <div data-guestbook-count>42</div>                │    │
│  └────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
                   │
                   ▼
         ┌─────────────────────┐
         │  Webflow CMS API    │
         │  (listItemsLive)    │
         └─────────────────────┘
```

---

## 8. Testing Checklist

### Local Testing

- [ ] **React Component** (Astro pages)
  - [ ] Component renders with initial count
  - [ ] Count fetches from API on mount
  - [ ] Count auto-refreshes every 5 seconds
  - [ ] Manual refresh via custom event works
  - [ ] Loading state displays correctly
  - [ ] Errors are handled gracefully

- [ ] **API Endpoints**
  - [ ] JSON endpoint returns correct count: `http://localhost:4321/api/guestbook/count`
  - [ ] HTML endpoint returns plain text: `http://localhost:4321/api/guestbook/count-html`
  - [ ] Both endpoints handle missing env vars
  - [ ] Cache headers are set correctly

- [ ] **Embed Script** (Static pages)
  - [ ] Script is accessible: `http://localhost:4321/guestbook-count-embed.js`
  - [ ] Script correctly determines base URL
  - [ ] Count updates when page loads
  - [ ] Count refreshes every 5 seconds
  - [ ] Works with `[data-guestbook-count]` attribute

### Production Testing

- [ ] Environment variables are set in Webflow Cloud dashboard
- [ ] React component works on Astro pages
- [ ] API endpoints work:
  - [ ] `https://your-app.webflow.io/guestbook-form/api/guestbook/count`
  - [ ] `https://your-app.webflow.io/guestbook-form/api/guestbook/count-html`
- [ ] Embed script loads: `https://your-app.webflow.io/guestbook-form/guestbook-count-embed.js`
- [ ] Component has `data-guestbook-count` attribute
- [ ] Script tag is in page custom code
- [ ] Count displays correctly on page load
- [ ] Count updates after form submission
- [ ] Count refreshes periodically

---

## 9. Troubleshooting

### Count Shows "0"

**Possible Causes**:
- `GUESTBOOK_COLLECTION_ID` not set in Webflow Cloud
- Wrong collection ID value
- API token doesn't have read permissions
- No published items in collection

**Solutions**:
- Verify environment variable is set correctly (not `PUBLIC_GUESTBOOK_COLLECTION_ID`)
- Check console logs in Webflow Cloud dashboard
- Ensure items are published (not just staged)
- Test API endpoint directly in browser

### Count Doesn't Update

**Possible Causes**:
- Script tag not added to page (for static pages)
- Wrong script URL
- Component missing `data-guestbook-count` attribute
- JavaScript errors blocking execution
- React component not rendering (for Astro pages)

**Solutions**:
- Check browser console for errors
- Verify script tag URL matches your app URL
- Inspect element to confirm data attribute exists
- Check network tab to see if API calls are being made
- Verify `client:only="react"` directive is used

### Count Updates Slowly

**Possible Causes**:
- Browser caching the API response
- Network latency

**Solutions**:
- Verify `Cache-Control: no-cache` headers are set
- Check network tab for cache status
- Adjust refresh interval if needed (default: 5000ms)

### React Component Not Rendering

**Possible Causes**:
- Missing `client:only="react"` directive
- Base URL configuration issue
- Import path incorrect

**Solutions**:
- Add `client:only="react"` to component in `.astro` file
- Verify `baseUrl` is imported correctly
- Check console for React errors

---

## 10. File Summary

All files needed for the count feature:

### React/Astro (for Astro pages)
- ✅ `src/components/GuestbookCount.tsx` - React component wrapper
- ✅ `src/lib/guestbook/types.ts` - TypeScript types
- ✅ `src/lib/guestbook/api-client.ts` - API functions
- ✅ `src/lib/guestbook/utils.ts` - Utility functions
- ✅ `src/lib/base-url.ts` - Base URL constant

### API (server-side)
- ✅ `src/pages/api/guestbook/count.ts` - JSON endpoint
- ✅ `src/pages/api/guestbook/count-html.ts` - Plain text endpoint

### Embed (for static Webflow pages)
- ✅ `public/guestbook-count-embed.js` - Standalone script

### Webflow (designed in Designer)
- 🔧 `GuestbookCount` component with `[data-guestbook-count]` attribute

---

## 11. Summary

To render the guestbook count:

### For Astro Pages (with React):
1. ✅ Use `<GuestbookCount client:only="react" />` component
2. ✅ Component fetches from `/api/guestbook/count` (JSON)
3. ✅ Auto-refreshes and listens for custom events
4. ✅ Wraps Webflow component with state management

### For Static Webflow Pages (embed script):
1. ✅ Add `data-guestbook-count` attribute to text element in Webflow
2. ✅ Include embed script in page custom code
3. ✅ Script fetches from `/api/guestbook/count-html` (plain text)
4. ✅ Updates DOM directly without React

### Backend (shared by both):
1. ✅ API endpoints fetch from Webflow CMS using collection ID
2. ✅ Environment variables configured in Webflow Cloud
3. ✅ No caching to ensure fresh data
4. ✅ Error handling with fallback to "0"

The system is designed to be:
- **Secure**: API tokens never exposed to client
- **Real-time**: Updates every 5 seconds
- **Reliable**: Graceful error handling with fallbacks
- **Flexible**: Works in both Astro and static Webflow pages
- **Simple**: Minimal setup required
