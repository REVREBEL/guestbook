/**
 * Base URL for the application
 * 
 * In development: Uses Astro's BASE_URL (empty string for root)
 * In production (Webflow Cloud): Uses COSMIC_MOUNT_PATH environment variable
 * 
 * This ensures the app works correctly when deployed to a mount path like /guestbook-form
 */

// For server-side usage (Astro components, API routes)
// This reads the COSMIC_MOUNT_PATH at runtime from Webflow Cloud
export function getBaseUrl(locals?: any): string {
  // In Webflow Cloud, use COSMIC_MOUNT_PATH from runtime env
  const mountPath = locals?.runtime?.env?.COSMIC_MOUNT_PATH || 
                   import.meta.env.COSMIC_MOUNT_PATH || 
                   import.meta.env.BASE_URL || 
                   '';
  
  // Remove trailing slash
  return mountPath.replace(/\/$/, '');
}

// For client-side usage (React components, browser scripts)
// This detects the base path from the current window location
export function getClientBaseUrl(): string {
  if (typeof window === 'undefined') {
    // During SSR, return empty string
    return '';
  }
  
  // Extract the base path from the current location
  // For example, if URL is https://site.com/guestbook-form/page
  // We want to extract /guestbook-form
  const path = window.location.pathname;
  
  // Common app paths - detect if we're on one of these
  const appPaths = ['/api/', '/guestbook', '/timeline-'];
  
  for (const appPath of appPaths) {
    const index = path.indexOf(appPath);
    if (index > 0) {
      // Return everything before the app path
      return path.substring(0, index);
    }
  }
  
  // If we're on the root index page, check if there's a path segment
  // For /guestbook-form/ or /guestbook-form -> return /guestbook-form
  const segments = path.split('/').filter(s => s);
  if (segments.length > 0) {
    return '/' + segments[0];
  }
  
  return '';
}

// Static export for build-time (will be empty in most cases)
// Client components should use getClientBaseUrl() instead
export const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
