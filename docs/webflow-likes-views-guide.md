# Webflow Likes & Views Component Integration Guide

This guide outlines how to build and deploy a complete likes and views tracking system using Webflow components, including a clickable "Like" button and a display component showing total likes and views counts.

## Overview

This system provides two interactive components:

1. **Liked Button** - A clickable button that allows users to like content
2. **LikedViewsTotal Count** - A display component showing total views and likes

The solution includes:
- React components for Astro pages
- Standalone embed scripts for static Webflow pages
- Server-side API endpoints with data persistence
- Real-time updates across all instances
- View tracking on page load
- Like tracking on button click

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     ASTRO PAGES                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Liked.tsx (React Component)                       │    │
│  │  - Clickable button                                │    │
│  │  - Tracks user's like state                        │    │
│  │  - Sends like/unlike to API                        │    │
│  └───────────────┬────────────────────────────────────┘    │
│                  │                                           │
│  ┌───────────────▼───────────────────────────────────┐     │
│  │  LikedViewsTotal.tsx (React Component)            │     │
│  │  - Displays total likes                           │     │
│  │  - Displays total views                           │     │
│  │  - Auto-refreshes                                 │     │
│  │  - Listens for like events                       │     │
│  └───────────────┬───────────────────────────────────┘     │
│                  │                                           │
│                  ▼                                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  API Endpoints (JSON)                              │    │
│  │  POST /api/likes/increment                         │    │
│  │  POST /api/likes/decrement                         │    │
│  │  POST /api/views/increment                         │    │
│  │  GET  /api/stats                                   │    │
│  └───────────────┬────────────────────────────────────┘    │
└──────────────────┼──────────────────────────────────────────┘
                   │
┌──────────────────┼──────────────────────────────────────────┐
│                  │    STATIC WEBFLOW PAGES                   │
│  ┌───────────────▼───────────────────────────────────┐     │
│  │  likes-views-embed.js (Standalone Script)         │     │
│  │  - Handles like button clicks                     │     │
│  │  - Updates counts in DOM                          │     │
│  │  - Tracks view on load                           │     │
│  │  - Uses localStorage for like state              │     │
│  └───────────────┬───────────────────────────────────┘     │
│                  │                                           │
│                  ▼                                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  HTML Elements with Data Attributes                │    │
│  │  <button data-liked-button></button>               │    │
│  │  <span data-likes-count>42</span>                  │    │
│  │  <span data-views-count>1337</span>                │    │
│  └────────────────────────────────────────────────────┘    │
└──────────────────┼──────────────────────────────────────────┘
                   │
                   ▼
         ┌─────────────────────┐
         │  Cloudflare KV      │
         │  (Data Storage)     │
         │  - likes_count      │
         │  - views_count      │
         └─────────────────────┘
```

---

## Part 1: Data Storage Setup

### Cloudflare KV Namespace

The system uses Cloudflare KV (Key-Value storage) to persist likes and views counts.

**Keys Used**:
- `likes_count` - Total number of likes
- `views_count` - Total number of page views

**Why KV?**:
- Persistent across deployments
- Fast read/write operations
- No external database needed
- Built into Cloudflare Workers (Webflow Cloud)

---

## Part 2: Backend - API Endpoints

### File: `src/pages/api/likes/increment.ts`

**Purpose**: Increment the likes count when a user clicks the like button.

**Method**: `POST`

**Request Body**: None required

**Response**:
```json
{
  "success": true,
  "likes": 43
}
```

**Code Structure**:
```typescript
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ locals }) => {
  try {
    const kv = locals?.runtime?.env?.LIKES_VIEWS_KV;
    
    if (!kv) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'KV namespace not configured' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get current count
    const currentCount = await kv.get('likes_count');
    const newCount = (parseInt(currentCount || '0', 10) + 1);
    
    // Store new count
    await kv.put('likes_count', newCount.toString());
    
    return new Response(JSON.stringify({ 
      success: true, 
      likes: newCount 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

---

### File: `src/pages/api/likes/decrement.ts`

**Purpose**: Decrement the likes count when a user unlikes.

**Method**: `POST`

**Response**:
```json
{
  "success": true,
  "likes": 42
}
```

**Code Structure**: Similar to increment, but subtracts 1 and ensures count doesn't go below 0.

---

### File: `src/pages/api/views/increment.ts`

**Purpose**: Increment the views count when a page is loaded.

**Method**: `POST`

**Response**:
```json
{
  "success": true,
  "views": 1338
}
```

**Code Structure**: Same pattern as likes increment.

---

### File: `src/pages/api/stats.ts`

**Purpose**: Get current likes and views counts.

**Method**: `GET`

**Response**:
```json
{
  "success": true,
  "likes": 42,
  "views": 1337
}
```

**Code Structure**:
```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const kv = locals?.runtime?.env?.LIKES_VIEWS_KV;
    
    if (!kv) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'KV namespace not configured',
        likes: 0,
        views: 0
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const likesCount = await kv.get('likes_count');
    const viewsCount = await kv.get('views_count');
    
    return new Response(JSON.stringify({ 
      success: true, 
      likes: parseInt(likesCount || '0', 10),
      views: parseInt(viewsCount || '0', 10)
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      likes: 0,
      views: 0
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

---

## Part 3: React Components (For Astro Pages)

### File: `src/components/Liked.tsx`

**Purpose**: A clickable like button component that tracks user's like state and updates the server.

**Key Features**:
- Tracks user's like state in localStorage
- Toggles between liked/unliked states
- Updates server on click
- Emits custom event for other components to listen
- Visual feedback (loading state, liked state)
- Prevents double-clicking

**Props Interface**:
```typescript
interface LikedProps {
  /** Storage key for tracking user's like state (default: 'user_has_liked') */
  storageKey?: string;
  /** Button text when not liked (default: 'Like') */
  unlikedText?: string;
  /** Button text when liked (default: 'Liked') */
  likedText?: string;
  /** Callback when like state changes */
  onLikeChange?: (liked: boolean, newCount: number) => void;
}
```

**Component Structure**:
```typescript
import React, { useEffect, useState } from 'react';
import { Liked as WebflowLiked } from '../site-components/Liked';
import { baseUrl } from '../lib/base-url';

export function Liked({
  storageKey = 'user_has_liked',
  unlikedText = 'Like',
  likedText = 'Liked',
  onLikeChange
}: LikedProps) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const hasLiked = localStorage.getItem(storageKey) === 'true';
    setLiked(hasLiked);
  }, [storageKey]);

  const handleClick = async () => {
    if (loading) return;
    
    setLoading(true);
    const newLikedState = !liked;
    
    try {
      const endpoint = newLikedState 
        ? `${baseUrl}/api/likes/increment`
        : `${baseUrl}/api/likes/decrement`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.success) {
          // Update local state
          setLiked(newLikedState);
          localStorage.setItem(storageKey, newLikedState.toString());
          
          // Emit event for other components
          window.dispatchEvent(new CustomEvent('likes:updated', { 
            detail: { likes: data.likes, views: null } 
          }));
          
          // Call callback
          onLikeChange?.(newLikedState, data.likes);
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WebflowLiked 
      onClick={handleClick}
      data-liked={liked}
      data-loading={loading}
      aria-label={liked ? likedText : unlikedText}
    />
  );
}
```

**Usage in Astro**:
```astro
---
import { Liked } from '../components/Liked';
---

<Liked 
  client:only="react"
  unlikedText="Like this"
  likedText="You liked this"
/>
```

---

### File: `src/components/LikedViewsTotal.tsx`

**Purpose**: Display component showing total likes and views counts.

**Key Features**:
- Fetches counts from API on mount
- Auto-refreshes periodically
- Listens for like events to update immediately
- Tracks page view on mount
- Shows loading state
- Error handling

**Props Interface**:
```typescript
interface LikedViewsTotalProps {
  /** Initial likes count (optional) */
  initialLikes?: number;
  /** Initial views count (optional) */
  initialViews?: number;
  /** Whether to track a view on mount (default: true) */
  trackView?: boolean;
  /** Whether to auto-refresh (default: true) */
  autoRefresh?: boolean;
  /** Refresh interval in milliseconds (default: 10000) */
  refreshInterval?: number;
  /** Label for likes (default: 'Likes') */
  likesLabel?: string;
  /** Label for views (default: 'Views') */
  viewsLabel?: string;
}
```

**Component Structure**:
```typescript
import React, { useEffect, useState } from 'react';
import { LikedViewsTotal as WebflowLikedViewsTotal } from '../site-components/LikedViewsTotal';
import { baseUrl } from '../lib/base-url';

export function LikedViewsTotal({
  initialLikes = 0,
  initialViews = 0,
  trackView = true,
  autoRefresh = true,
  refreshInterval = 10000,
  likesLabel = 'Likes',
  viewsLabel = 'Views'
}: LikedViewsTotalProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [views, setViews] = useState(initialViews);
  const [loading, setLoading] = useState(false);

  // Fetch stats from API
  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/stats`, {
        headers: { 'Cache-Control': 'no-cache' }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setLikes(data.likes);
          setViews(data.views);
        }
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Track view on mount
  useEffect(() => {
    if (trackView) {
      fetch(`${baseUrl}/api/views/increment`, { method: 'POST' })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setViews(data.views);
          }
        })
        .catch(err => console.error('Error tracking view:', err));
    }
    
    fetchStats();
  }, []);

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(fetchStats, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval]);

  // Listen for like events
  useEffect(() => {
    const handleLikeUpdate = (event: CustomEvent) => {
      if (event.detail?.likes !== null) {
        setLikes(event.detail.likes);
      }
    };

    window.addEventListener('likes:updated', handleLikeUpdate as EventListener);
    return () => window.removeEventListener('likes:updated', handleLikeUpdate as EventListener);
  }, []);

  return (
    <WebflowLikedViewsTotal 
      likesSlot={`${likes} ${likesLabel}`}
      viewsSlot={`${views} ${viewsLabel}`}
      data-loading={loading}
    />
  );
}
```

**Usage in Astro**:
```astro
---
import { LikedViewsTotal } from '../components/LikedViewsTotal';
---

<LikedViewsTotal 
  client:only="react"
  trackView={true}
  autoRefresh={true}
  likesLabel="Likes"
  viewsLabel="Views"
/>
```

---

## Part 4: Embed Script (For Static Webflow Pages)

### File: `public/likes-views-embed.js`

**Purpose**: Standalone JavaScript for static Webflow pages that don't use React/Astro.

**Key Features**:
- Handles like button clicks
- Updates likes and views counts in DOM
- Tracks page view on load
- Uses localStorage for like state
- Auto-refreshes counts
- Works without any framework

**Required Data Attributes**:
- `data-liked-button` - The clickable like button
- `data-likes-count` - Element displaying likes count
- `data-views-count` - Element displaying views count

**Code Structure**:
```javascript
(function() {
  // Configuration
  const STORAGE_KEY = 'user_has_liked';
  const REFRESH_INTERVAL = 10000; // 10 seconds
  
  // Determine base URL from script location
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.src : '';
  
  let baseUrl = '';
  if (scriptSrc) {
    const url = new URL(scriptSrc);
    const pathParts = url.pathname.split('/');
    if (pathParts.length > 2) {
      baseUrl = '/' + pathParts[1];
    }
  }

  // State
  let userHasLiked = localStorage.getItem(STORAGE_KEY) === 'true';
  let isProcessing = false;

  // Get elements
  function getElements() {
    return {
      likeButton: document.querySelector('[data-liked-button]'),
      likesCount: document.querySelector('[data-likes-count]'),
      viewsCount: document.querySelector('[data-views-count]')
    };
  }

  // Fetch current stats
  async function fetchStats() {
    try {
      const response = await fetch(`${baseUrl}/api/stats`);
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          updateCounts(data.likes, data.views);
        }
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }

  // Update counts in DOM
  function updateCounts(likes, views) {
    const elements = getElements();
    
    if (elements.likesCount && likes !== null && likes !== undefined) {
      elements.likesCount.textContent = likes;
    }
    
    if (elements.viewsCount && views !== null && views !== undefined) {
      elements.viewsCount.textContent = views;
    }
  }

  // Update button state
  function updateButtonState() {
    const elements = getElements();
    if (elements.likeButton) {
      elements.likeButton.setAttribute('data-liked', userHasLiked);
      elements.likeButton.setAttribute('aria-pressed', userHasLiked);
    }
  }

  // Handle like button click
  async function handleLikeClick() {
    if (isProcessing) return;
    
    isProcessing = true;
    const newLikedState = !userHasLiked;
    
    try {
      const endpoint = newLikedState 
        ? `${baseUrl}/api/likes/increment`
        : `${baseUrl}/api/likes/decrement`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.success) {
          userHasLiked = newLikedState;
          localStorage.setItem(STORAGE_KEY, userHasLiked.toString());
          updateButtonState();
          updateCounts(data.likes, null);
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      isProcessing = false;
    }
  }

  // Track page view
  async function trackView() {
    try {
      const response = await fetch(`${baseUrl}/api/views/increment`, {
        method: 'POST'
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          updateCounts(null, data.views);
        }
      }
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  }

  // Initialize
  function init() {
    const elements = getElements();
    
    // Set initial button state
    updateButtonState();
    
    // Add click handler to button
    if (elements.likeButton) {
      elements.likeButton.addEventListener('click', handleLikeClick);
    }
    
    // Track view and fetch initial stats
    trackView();
    fetchStats();
    
    // Auto-refresh
    setInterval(fetchStats, REFRESH_INTERVAL);
  }

  // Wait for DOM then initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

**Script Tag for Webflow**:
```html
<script src="https://your-app-url.webflow.io/your-mount-path/likes-views-embed.js"></script>
```

---

## Part 5: Supporting Files

### File: `src/lib/likes-views/types.ts`

**Purpose**: TypeScript type definitions.

```typescript
// API response from stats endpoint
export interface StatsResponse {
  success: boolean;
  likes: number;
  views: number;
  error?: string;
}

// API response from increment/decrement endpoints
export interface LikeResponse {
  success: boolean;
  likes: number;
  error?: string;
}

export interface ViewResponse {
  success: boolean;
  views: number;
  error?: string;
}

// Props for Liked component
export interface LikedProps {
  storageKey?: string;
  unlikedText?: string;
  likedText?: string;
  onLikeChange?: (liked: boolean, newCount: number) => void;
}

// Props for LikedViewsTotal component
export interface LikedViewsTotalProps {
  initialLikes?: number;
  initialViews?: number;
  trackView?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  likesLabel?: string;
  viewsLabel?: string;
}
```

---

### File: `src/lib/likes-views/api-client.ts`

**Purpose**: Client-side API functions.

```typescript
import { baseUrl } from '../base-url';
import type { StatsResponse, LikeResponse, ViewResponse } from './types';

export async function getStats(): Promise<StatsResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/stats`, {
      headers: { 'Cache-Control': 'no-cache' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching stats:', error);
    return { success: false, likes: 0, views: 0, error: error.message };
  }
}

export async function incrementLikes(): Promise<LikeResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/likes/increment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return { success: false, likes: 0, error: error.message };
  }
}

export async function decrementLikes(): Promise<LikeResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/likes/decrement`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error decrementing likes:', error);
    return { success: false, likes: 0, error: error.message };
  }
}

export async function incrementViews(): Promise<ViewResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/views/increment`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error incrementing views:', error);
    return { success: false, views: 0, error: error.message };
  }
}
```

---

### File: `src/lib/likes-views/utils.ts`

**Purpose**: Utility functions.

```typescript
/**
 * Trigger a refresh of all likes/views display components
 */
export function triggerStatsRefresh(): void {
  const event = new CustomEvent('likes:updated', { 
    detail: { likes: null, views: null } 
  });
  window.dispatchEvent(event);
}

/**
 * Check if user has liked (from localStorage)
 */
export function getUserLikeState(storageKey: string = 'user_has_liked'): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(storageKey) === 'true';
}

/**
 * Set user's like state (to localStorage)
 */
export function setUserLikeState(liked: boolean, storageKey: string = 'user_has_liked'): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(storageKey, liked.toString());
}
```

---

## Part 6: Webflow Component Setup

### Component 1: Liked Button

**Component Name**: `Liked`

**Requirements**:
1. Must be a clickable element (button, link, or div with click handler)
2. Should have visual states for:
   - Default (not liked)
   - Liked (after user clicks)
   - Loading (while processing)

**Recommended Structure in Webflow**:
```
Liked Component
├── Button or Link Element
│   ├── Icon (heart, thumbs up, etc.)
│   └── Text (optional)
└── States managed via data attributes
```

**Data Attributes for Embed Script**:
- `data-liked-button` - Required for embed script to target the button

**Styling Based on State**:
```css
/* Not liked state */
[data-liked-button] {
  /* Default styles */
}

/* Liked state */
[data-liked-button][data-liked="true"] {
  /* Liked styles (e.g., filled heart) */
}

/* Loading state */
[data-liked-button][data-loading="true"] {
  /* Loading styles (e.g., opacity, cursor) */
  opacity: 0.6;
  pointer-events: none;
}
```

---

### Component 2: LikedViewsTotal Count

**Component Name**: `LikedViewsTotal`

**Requirements**:
1. Must have separate text elements for likes and views counts
2. Should be clearly labeled
3. Can be styled to match your design

**Recommended Structure in Webflow**:
```
LikedViewsTotal Component
├── Container
│   ├── Likes Section
│   │   ├── Icon (optional)
│   │   ├── Label: "Likes"
│   │   └── Count: [data-likes-count]
│   └── Views Section
│       ├── Icon (optional)
│       ├── Label: "Views"
│       └── Count: [data-views-count]
```

**Data Attributes for Embed Script**:
- `data-likes-count` - Element that displays the likes number
- `data-views-count` - Element that displays the views number

**Example HTML Structure**:
```html
<div class="stats-container">
  <div class="stat-item">
    <span class="stat-label">Likes</span>
    <span class="stat-value" data-likes-count>0</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Views</span>
    <span class="stat-value" data-views-count>0</span>
  </div>
</div>
```

---

## Part 7: Deployment - Step by Step

### Step 1: Cloudflare KV Setup

**1.1 Create KV Namespace (via Wrangler CLI)**:

```bash
# Install wrangler if not already installed
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create KV namespace for production
wrangler kv:namespace create "LIKES_VIEWS_KV"

# Create KV namespace for preview (optional but recommended)
wrangler kv:namespace create "LIKES_VIEWS_KV" --preview
```

**Output will look like**:
```
🌀 Creating namespace with title "your-app-LIKES_VIEWS_KV"
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "LIKES_VIEWS_KV", id = "abc123def456..." }
```

**1.2 Update wrangler.jsonc**:

Add the KV namespace binding to your `wrangler.jsonc`:

```jsonc
{
  "name": "your-app-name",
  "compatibility_date": "2024-01-01",
  "kv_namespaces": [
    {
      "binding": "LIKES_VIEWS_KV",
      "id": "abc123def456...", // Use the ID from step 1.1
      "preview_id": "xyz789ghi012..." // Use the preview ID if created
    }
  ]
}
```

**1.3 Initialize KV Data (Optional)**:

You can pre-populate the KV store with initial values:

```bash
# Set initial likes count
wrangler kv:key put --namespace-id=abc123def456... "likes_count" "0"

# Set initial views count
wrangler kv:key put --namespace-id=abc123def456... "views_count" "0"
```

---

### Step 2: Code Implementation in Astro Project

**2.1 Create Directory Structure**:

```bash
# API endpoints
mkdir -p src/pages/api/likes
mkdir -p src/pages/api/views

# React components
mkdir -p src/components

# Supporting library
mkdir -p src/lib/likes-views

# Public embed script
mkdir -p public
```

**2.2 Create All Files**:

Follow the file structures outlined in Parts 2-5 above to create:

- ✅ API Endpoints (Part 2):
  - `src/pages/api/likes/increment.ts`
  - `src/pages/api/likes/decrement.ts`
  - `src/pages/api/views/increment.ts`
  - `src/pages/api/stats.ts`

- ✅ React Components (Part 3):
  - `src/components/Liked.tsx`
  - `src/components/LikedViewsTotal.tsx`

- ✅ Embed Script (Part 4):
  - `public/likes-views-embed.js`

- ✅ Supporting Files (Part 5):
  - `src/lib/likes-views/types.ts`
  - `src/lib/likes-views/api-client.ts`
  - `src/lib/likes-views/utils.ts`

**2.3 Update TypeScript Config (if needed)**:

Ensure `worker-configuration.d.ts` includes KV binding:

```typescript
interface Env {
  LIKES_VIEWS_KV: KVNamespace;
  // ... other bindings
}
```

---

### Step 3: Local Testing

**3.1 Start Dev Server**:

```bash
npm run dev
```

**3.2 Test API Endpoints**:

Open your browser and test each endpoint:

```
# Get current stats
http://localhost:4321/api/stats

# Increment likes (use browser console or Postman)
fetch('http://localhost:4321/api/likes/increment', { method: 'POST' })

# Increment views
fetch('http://localhost:4321/api/views/increment', { method: 'POST' })
```

**3.3 Create Test Page**:

Create `src/pages/test-likes.astro`:

```astro
---
import MainLayout from '../layouts/main.astro';
import { Liked } from '../components/Liked';
import { LikedViewsTotal } from '../components/LikedViewsTotal';
---

<MainLayout>
  <div style="padding: 2rem;">
    <h1>Likes & Views Test</h1>
    
    <div style="margin: 2rem 0;">
      <Liked client:only="react" />
    </div>
    
    <div style="margin: 2rem 0;">
      <LikedViewsTotal client:only="react" />
    </div>
  </div>
</MainLayout>
```

Visit `http://localhost:4321/test-likes` and verify:
- ✅ Like button is clickable
- ✅ Like count updates when clicked
- ✅ Views count increments on page load
- ✅ Both counts auto-refresh
- ✅ Like state persists (check localStorage)

---

### Step 4: Webflow Designer Setup

**4.1 Create Liked Button Component**:

1. Open Webflow Designer
2. Create a new component called "Liked"
3. Add a button or clickable element
4. Style for both "unliked" and "liked" states
5. Add interactions if desired (hover, click animations)
6. Publish the component

**4.2 Create LikedViewsTotal Component**:

1. Create a new component called "LikedViewsTotal"
2. Add structure:
   ```
   Container
   ├── Likes: <text>0</text>
   └── Views: <text>0</text>
   ```
3. Select the likes count text element:
   - Add custom attribute: `data-likes-count`
4. Select the views count text element:
   - Add custom attribute: `data-views-count`
5. Style to match your design
6. Publish the component

**4.3 Export Components via Devlink**:

1. In Webflow Designer, go to Apps → Devlink
2. Select both components
3. Click "Export to Devlink"
4. Components will be generated in `src/site-components/`

**4.4 Verify Generated Files**:

Check that these files exist:
- `src/site-components/Liked.jsx`
- `src/site-components/Liked.d.ts`
- `src/site-components/LikedViewsTotal.jsx`
- `src/site-components/LikedViewsTotal.d.ts`

---

### Step 5: Build for Production

**5.1 Build the Astro App**:

```bash
npm run build
```

This creates the production build in `dist/` directory.

**5.2 Test Production Build Locally**:

```bash
npm run preview
```

Visit the preview URL and test all functionality.

---

### Step 6: Deploy to Webflow Cloud

**6.1 Connect to Webflow Cloud**:

1. Log in to Webflow Dashboard
2. Go to Apps section
3. Find your app or create a new one
4. Connect your Git repository (GitHub, GitLab, etc.)

**6.2 Configure Build Settings**:

In Webflow Cloud app settings:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18 or higher
- **Install Command**: `npm install`

**6.3 Set Environment Variables** (if any):

If you need any environment variables (unlikely for this setup since KV is in wrangler.jsonc), add them in:
- Settings → Environment Variables

**6.4 Deploy**:

1. Commit all your code changes
2. Push to your Git repository
3. Webflow Cloud will automatically build and deploy
4. Monitor the build logs for any errors

**6.5 Verify Deployment**:

Once deployed, your app will be available at:
```
https://your-app-url.webflow.io/your-mount-path/
```

Test all endpoints:
```
https://your-app-url.webflow.io/your-mount-path/api/stats
https://your-app-url.webflow.io/your-mount-path/api/likes/increment
```

---

### Step 7: Using on Static Webflow Pages

**7.1 Get Your App URL**:

From Webflow Cloud dashboard, copy your app's full URL:
```
https://your-app-url.webflow.io/your-mount-path
```

**7.2 Add Embed Script to Page**:

1. Open your Webflow site in Designer
2. Go to the page where you want likes/views
3. Open Page Settings → Custom Code
4. In "Before </body> tag" section, add:

```html
<script src="https://your-app-url.webflow.io/your-mount-path/likes-views-embed.js"></script>
```

**7.3 Add Components to Page**:

1. Add the "Liked" component to your page
2. Select the button element inside it
3. Add custom attribute: `data-liked-button`

4. Add the "LikedViewsTotal" component to your page
5. Verify it has the correct data attributes:
   - Likes count element: `data-likes-count`
   - Views count element: `data-views-count`

**7.4 Publish Webflow Site**:

Publish your Webflow site to make the changes live.

**7.5 Test on Live Site**:

1. Visit your published page
2. Verify view count increments
3. Click like button
4. Verify like count increments
5. Refresh page - like state should persist
6. Open in incognito - view should increment again

---

### Step 8: Using in Astro Pages

**8.1 Import Components**:

In any `.astro` page file:

```astro
---
import MainLayout from '../layouts/main.astro';
import { Liked } from '../components/Liked';
import { LikedViewsTotal } from '../components/LikedViewsTotal';
---

<MainLayout>
  <h1>My Page</h1>
  
  <Liked 
    client:only="react"
    unlikedText="Like this"
    likedText="You liked this"
  />
  
  <LikedViewsTotal 
    client:only="react"
    trackView={true}
    autoRefresh={true}
    likesLabel="Total Likes"
    viewsLabel="Total Views"
  />
</MainLayout>
```

**8.2 Deploy Changes**:

1. Commit and push changes
2. Webflow Cloud will rebuild
3. Test on deployed URL

---

## Part 8: Testing Checklist

### Local Development Testing

- [ ] **KV Namespace Created**
  - [ ] Production namespace created
  - [ ] Preview namespace created (optional)
  - [ ] Bindings added to `wrangler.jsonc`

- [ ] **API Endpoints**
  - [ ] `/api/stats` returns correct counts
  - [ ] `/api/likes/increment` increments and returns new count
  - [ ] `/api/likes/decrement` decrements and returns new count
  - [ ] `/api/views/increment` increments and returns new count
  - [ ] All endpoints handle errors gracefully
  - [ ] Cache headers are set correctly

- [ ] **React Components** (Astro pages)
  - [ ] Liked button renders correctly
  - [ ] Liked button toggles state on click
  - [ ] Like state persists in localStorage
  - [ ] LikedViewsTotal displays counts
  - [ ] Counts update after like button click
  - [ ] View increments on page load
  - [ ] Auto-refresh works
  - [ ] Loading states display

- [ ] **Embed Script** (Static pages)
  - [ ] Script is accessible at `/likes-views-embed.js`
  - [ ] Script detects base URL correctly
  - [ ] Like button click toggles state
  - [ ] Like state persists in localStorage
  - [ ] Counts update in DOM
  - [ ] View increments on page load
  - [ ] Auto-refresh works

### Production Testing

- [ ] **Deployment**
  - [ ] App builds successfully
  - [ ] No build errors in logs
  - [ ] App is accessible at production URL

- [ ] **API Endpoints (Production)**
  - [ ] All endpoints return correct data
  - [ ] KV namespace is accessible
  - [ ] Counts persist across requests
  - [ ] Multiple users can like/view

- [ ] **React Components (Production)**
  - [ ] Components render on Astro pages
  - [ ] All functionality works as in local dev
  - [ ] Base URL is resolved correctly

- [ ] **Embed Script (Production)**
  - [ ] Script loads on static Webflow pages
  - [ ] Like button works on static pages
  - [ ] Counts display correctly
  - [ ] Multiple page loads increment views
  - [ ] Like state persists across sessions

- [ ] **Cross-Browser Testing**
  - [ ] Works in Chrome
  - [ ] Works in Firefox
  - [ ] Works in Safari
  - [ ] Works in Edge
  - [ ] Works on mobile browsers

- [ ] **Edge Cases**
  - [ ] Multiple tabs open (like state syncs)
  - [ ] Rapid clicking (debounced/prevented)
  - [ ] Network errors handled gracefully
  - [ ] Works with ad blockers
  - [ ] LocalStorage disabled scenario

---

## Part 9: Troubleshooting

### KV Namespace Issues

**Problem**: "KV namespace not configured" error

**Solutions**:
- Verify `wrangler.jsonc` has correct KV binding
- Ensure namespace ID matches the one created in Cloudflare
- Redeploy after adding KV binding
- Check Cloudflare dashboard for namespace existence

**Problem**: Counts reset to 0

**Solutions**:
- Check if correct namespace is being used (production vs preview)
- Verify keys exist in KV: `wrangler kv:key list --namespace-id=YOUR_ID`
- Initialize keys if missing

---

### API Endpoint Issues

**Problem**: 500 errors from API

**Solutions**:
- Check deployment logs in Webflow Cloud dashboard
- Verify KV namespace is bound correctly
- Test endpoints individually
- Add more logging to identify issue

**Problem**: CORS errors

**Solutions**:
- Ensure requests are to the same origin
- If cross-origin is needed, add CORS headers to API responses

---

### React Component Issues

**Problem**: Components not rendering

**Solutions**:
- Verify `client:only="react"` directive is used
- Check browser console for React errors
- Ensure components are imported correctly
- Verify Devlink components exist in `src/site-components/`

**Problem**: Counts don't update

**Solutions**:
- Check browser network tab for failed API calls
- Verify base URL is correct
- Check that custom events are being emitted
- Ensure auto-refresh is enabled

---

### Embed Script Issues

**Problem**: Script not loading on Webflow page

**Solutions**:
- Verify script URL is correct
- Check that script is in page custom code (before </body>)
- Look for JavaScript errors in console
- Ensure page is published

**Problem**: Like button doesn't work

**Solutions**:
- Verify button has `data-liked-button` attribute
- Check that script is loaded (view page source)
- Look for errors in console
- Test API endpoints directly

**Problem**: Counts not displaying

**Solutions**:
- Verify elements have correct data attributes:
  - `data-likes-count`
  - `data-views-count`
- Check that elements exist in DOM
- Inspect network requests to API

---

### State Persistence Issues

**Problem**: Like state doesn't persist

**Solutions**:
- Verify localStorage is enabled in browser
- Check that correct storage key is used
- Look for localStorage errors in console
- Test in non-incognito window

**Problem**: Different count on each page load

**Solutions**:
- Ensure KV is being used (not in-memory storage)
- Verify same namespace is used across deploys
- Check for race conditions in increment logic

---

## Part 10: Advanced Customization

### Custom Storage Key

Change the localStorage key to avoid conflicts:

```typescript
// In Liked component
<Liked 
  storageKey="my_custom_like_key"
  client:only="react"
/>
```

```javascript
// In embed script
const STORAGE_KEY = 'my_custom_like_key';
```

---

### Multiple Like Buttons

Track different items with unique keys:

```typescript
<Liked 
  storageKey="article_123_liked"
  client:only="react"
/>

<Liked 
  storageKey="photo_456_liked"
  client:only="react"
/>
```

For this to work fully, you'd need to extend the API to support item-specific counts using KV key patterns like `likes:article_123`.

---

### Custom Refresh Intervals

Change how often counts refresh:

```typescript
<LikedViewsTotal 
  refreshInterval={30000} // 30 seconds
  client:only="react"
/>
```

---

### Disable View Tracking

If you only want likes (not views):

```typescript
<LikedViewsTotal 
  trackView={false}
  client:only="react"
/>
```

---

### Callbacks for Custom Logic

Add custom behavior on like:

```typescript
<Liked 
  onLikeChange={(liked, newCount) => {
    console.log(`User ${liked ? 'liked' : 'unliked'}. New count: ${newCount}`);
    // Custom logic here (e.g., analytics, notifications)
  }}
  client:only="react"
/>
```

---

## Part 11: Summary

### What You've Built

A complete likes and views tracking system with:
- ✅ Persistent data storage (Cloudflare KV)
- ✅ Server-side API endpoints
- ✅ React components for Astro pages
- ✅ Standalone embed script for static Webflow pages
- ✅ Real-time updates
- ✅ State persistence (localStorage)
- ✅ Auto-refresh functionality
- ✅ Error handling and fallbacks

### Files Created

**Backend**:
- `src/pages/api/stats.ts`
- `src/pages/api/likes/increment.ts`
- `src/pages/api/likes/decrement.ts`
- `src/pages/api/views/increment.ts`

**Frontend (React)**:
- `src/components/Liked.tsx`
- `src/components/LikedViewsTotal.tsx`

**Frontend (Embed)**:
- `public/likes-views-embed.js`

**Supporting**:
- `src/lib/likes-views/types.ts`
- `src/lib/likes-views/api-client.ts`
- `src/lib/likes-views/utils.ts`

**Configuration**:
- `wrangler.jsonc` (with KV binding)
- `worker-configuration.d.ts` (TypeScript types)

### Deployment Checklist

- [ ] KV namespace created in Cloudflare
- [ ] KV binding added to `wrangler.jsonc`
- [ ] All code files created
- [ ] Local testing completed
- [ ] Webflow components created with correct data attributes
- [ ] App deployed to Webflow Cloud
- [ ] Production testing completed
- [ ] Embed script added to Webflow pages
- [ ] Webflow site published

### Key Concepts

1. **Data Persistence**: Cloudflare KV stores counts permanently
2. **Client State**: localStorage tracks individual user's like status
3. **Real-time Updates**: Custom events and auto-refresh keep UI in sync
4. **Flexibility**: Works in both React (Astro) and vanilla JS (static pages)
5. **Security**: Server-side API prevents count manipulation

---

## Support & Resources

- **Cloudflare KV Docs**: https://developers.cloudflare.com/kv/
- **Astro Docs**: https://docs.astro.build/
- **Webflow Cloud**: https://webflow.com/cloud
- **React Hooks**: https://react.dev/reference/react

---

**End of Guide**

This complete solution provides everything needed to implement a production-ready likes and views tracking system in Webflow Cloud with Astro. Follow the steps in order for successful deployment.
