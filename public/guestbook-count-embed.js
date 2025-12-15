/**
 * Guestbook Count Embed Script for Static Webflow Pages
 * 
 * This fetches the count and injects it into your Webflow component's count slot.
 * 
 * Add this to your Webflow page's custom code (before </body>):
 * 
 * <!-- Make sure your GuestbookCount component has an element with data-count-target -->
 * <script src="/guestbook-count-embed.js"></script>
 */

(function() {
  'use strict';
  
  console.log('[Guestbook Count Embed] Script loaded');

  // Get the base URL for the app
  function getBaseUrl() {
    const scriptTag = document.currentScript;
    if (scriptTag && scriptTag.src) {
      const url = new URL(scriptTag.src);
      const pathParts = url.pathname.split('/');
      pathParts.pop();
      return url.origin + pathParts.join('/');
    }
    return window.location.origin;
  }

  const BASE_URL = getBaseUrl();
  console.log('[Guestbook Count Embed] Base URL:', BASE_URL);

  // Fetch count from API
  async function fetchCount() {
    try {
      console.log('[Guestbook Count Embed] Fetching count...');
      const response = await fetch(BASE_URL + '/api/guestbook/count-html?t=' + Date.now());
      
      if (!response.ok) {
        throw new Error('Failed to fetch count: ' + response.status);
      }
      
      const count = await response.text();
      console.log('[Guestbook Count Embed] Count:', count);
      
      return count;
    } catch (error) {
      console.error('[Guestbook Count Embed] Error:', error);
      return '0';
    }
  }

  // Update count in the component
  async function updateCount() {
    const count = await fetchCount();
    
    // Find all elements that should display the count
    // Look for common selectors in the Webflow component
    const selectors = [
      '[data-count-target]',
      '[data-guestbook-count]',
      '.guestbook-count',
      '#guestbook-count'
    ];
    
    let updated = false;
    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        elements.forEach(element => {
          element.textContent = count;
          console.log('[Guestbook Count Embed] Updated element:', element);
          updated = true;
        });
      }
    }
    
    if (!updated) {
      console.warn('[Guestbook Count Embed] No target elements found. Add data-count-target attribute to your count element.');
    }
  }

  // Initialize
  function init() {
    console.log('[Guestbook Count Embed] Initializing...');
    
    // Wait a bit for the page to fully load
    setTimeout(() => {
      updateCount();
      
      // Auto-refresh every 5 seconds
      setInterval(updateCount, 5000);
      
      // Listen for updates
      window.addEventListener('guestbookUpdated', updateCount);
    }, 100);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
