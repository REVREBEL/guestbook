/**
 * Guestbook External Embed
 * 
 * This file provides the mount function for embedding the guestbook button
 * on external pages (outside the Webflow Cloud app).
 * 
 * Usage:
 * ```html
 * <div id="guestbook-button"></div>
 * <script src="https://your-domain.com/embed/guestbook-embed.js"></script>
 * <script>
 *   mountGuestbookButton(document.getElementById('guestbook-button'), {
 *     buttonText: 'Sign Our Guestbook',
 *     collectionId: '69383a09bbf502930bf620a3'
 *   });
 * </script>
 * ```
 */

import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { GuestbookButton } from '../src/components/GuestbookButton';
import type { EmbedMountProps } from '../src/lib/guestbook/types';

// Store roots for cleanup
const mountedRoots = new WeakMap<HTMLElement, Root>();

/**
 * Mount the guestbook button into a DOM element
 * 
 * @param element - Target DOM element to mount into
 * @param props - Configuration props
 * @returns Unmount function
 */
export function mountGuestbookButton(
  element: HTMLElement,
  props: EmbedMountProps = {}
): () => void {
  // Clean up any existing mount
  if (mountedRoots.has(element)) {
    const existingRoot = mountedRoots.get(element)!;
    existingRoot.unmount();
    mountedRoots.delete(element);
  }

  // Get collection ID from environment or props
  const collectionId = props.collectionId 
    || (typeof window !== 'undefined' ? (window as any).__GUESTBOOK_COLLECTION_ID__ : undefined)
    || import.meta.env.PUBLIC_GUESTBOOK_COLLECTION_ID
    || '69383a09bbf502930bf620a3'; // Default collection ID

  // Create React root and render
  const root = createRoot(element);
  mountedRoots.set(element, root);

  root.render(
    <React.StrictMode>
      <GuestbookButton
        buttonText={props.buttonText}
        buttonVariant={props.buttonVariant}
        collectionId={collectionId}
        localeId={props.localeId}
        onSuccess={props.onSuccess}
        onError={props.onError}
      />
    </React.StrictMode>
  );

  // Return unmount function
  return () => {
    root.unmount();
    mountedRoots.delete(element);
  };
}

// Auto-mount to elements with data attribute
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  function autoMount() {
    const elements = document.querySelectorAll('[data-guestbook-button]');
    
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        // Parse props from data attributes
        const props: EmbedMountProps = {
          buttonText: element.dataset.buttonText,
          buttonVariant: element.dataset.buttonVariant,
          collectionId: element.dataset.collectionId,
          localeId: element.dataset.localeId,
        };

        // Mount the button
        mountGuestbookButton(element, props);
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoMount);
  } else {
    autoMount();
  }
}

// Export for module usage
export default mountGuestbookButton;
