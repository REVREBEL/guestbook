/**
 * Guestbook Embed Script
 * 
 * Add this script to your Webflow page's custom code (before </body>):
 * 
 * <script src="/guestbook-embed.js"></script>
 * <div data-guestbook-button 
 *      data-button-text="Sign Our Guestbook"
 *      data-collection-id="69383a09bbf502930bf620a3">
 * </div>
 */

(function() {
  'use strict';
  
  console.log('[Guestbook Embed] Script loaded');

  // Get the base URL for the app
  function getBaseUrl() {
    const scriptTag = document.currentScript;
    if (scriptTag && scriptTag.src) {
      const url = new URL(scriptTag.src);
      // Remove the filename to get the base path
      return url.origin + url.pathname.replace(/\/[^\/]*$/, '');
    }
    return '';
  }

  const BASE_URL = getBaseUrl();
  console.log('[Guestbook Embed] Base URL:', BASE_URL);

  // Wait for DOM to be ready
  function init() {
    console.log('[Guestbook Embed] Initializing...');
    
    // Find all elements with data-guestbook-button attribute
    const elements = document.querySelectorAll('[data-guestbook-button]');
    console.log('[Guestbook Embed] Found elements:', elements.length);
    
    if (elements.length === 0) {
      console.warn('[Guestbook Embed] No elements found with data-guestbook-button attribute');
      return;
    }

    elements.forEach((element, index) => {
      console.log('[Guestbook Embed] Mounting button', index + 1);
      
      // Get props from data attributes
      const buttonText = element.getAttribute('data-button-text') || 'Sign the Guestbook';
      const collectionId = element.getAttribute('data-collection-id') || '69383a09bbf502930bf620a3';
      
      // Create button element
      const button = document.createElement('button');
      button.textContent = buttonText;
      button.style.cssText = `
        background-color: var(--primary, #C98769);
        color: var(--primary-foreground, #FFFFFF);
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        font-family: var(--button-font, inherit);
        transition: opacity 0.2s;
      `;
      
      button.addEventListener('mouseenter', function() {
        this.style.opacity = '0.9';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
      });
      
      button.addEventListener('click', function() {
        console.log('[Guestbook Embed] Button clicked, opening modal');
        // Navigate to the guestbook page
        window.location.href = BASE_URL + '/guestbook';
      });
      
      // Replace the placeholder element with the button
      element.appendChild(button);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
