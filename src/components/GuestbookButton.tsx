/**
 * GuestbookButton Component
 * 
 * Button component that triggers the guestbook form modal.
 * Wraps the Webflow-generated GuestbookFormButton component and manages modal state.
 * 
 * Can be used directly in Astro pages or embedded externally via the embed script.
 */

import { useState } from 'react';
import { DevLinkProvider } from '../site-components/DevLinkProvider';
import { GuestbookFormButton } from '../site-components/GuestbookFormButton';
import { GuestbookModal } from './GuestbookModal';
import type { GuestbookButtonProps } from '../lib/guestbook/types';

export function GuestbookButton({
  buttonText = 'Sign the Guestbook',
  collectionId,
  localeId,
  itemId,
  onSuccess,
  onError,
}: GuestbookButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Open the modal when button is clicked
   */
  function handleClick() {
    setIsModalOpen(true);
  }

  /**
   * Close the modal
   */
  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <DevLinkProvider>
      {/* Render Webflow Button Component */}
      <div onClick={handleClick}>
        <GuestbookFormButton
          buttonLabelText={buttonText}
          buttonRuntimeProps={{
            onClick: handleClick,
            type: 'button',
          }}
        />
      </div>

      {/* Render Modal */}
      <GuestbookModal
        isOpen={isModalOpen}
        onClose={handleClose}
        collectionId={collectionId}
        localeId={localeId}
        itemId={itemId}
        onSuccess={onSuccess}
        onError={onError}
      />
    </DevLinkProvider>
  );
}
