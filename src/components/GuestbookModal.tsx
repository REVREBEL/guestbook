/**
 * Guestbook Modal Component
 * 
 * Displays a modal dialog containing the Webflow-generated guestbook form.
 * This component wraps the form and handles opening/closing the modal.
 */

import React, { useState, useEffect } from 'react';
import { GuestbookForm } from '../site-components/GuestbookForm';
import { getClientBaseUrl } from '../lib/base-url';

interface GuestbookModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Collection ID to submit to */
  collectionId: string;
  /** Optional item ID for editing existing entries */
  itemId?: string;
  /** Optional edit code for authentication */
  editCode?: string;
  /** Callback on successful submission */
  onSuccess?: (data: any) => void;
  /** Callback on error */
  onError?: (error: Error) => void;
}

export function GuestbookModal({
  isOpen,
  onClose,
  collectionId,
  itemId,
  editCode,
  onSuccess,
  onError
}: GuestbookModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');

  // Get base URL on mount (client-side only)
  useEffect(() => {
    setBaseUrl(getClientBaseUrl());
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Listen for successful form submission
  useEffect(() => {
    const handleSuccess = () => {
      console.log('Form submitted successfully, triggering count refresh');
      // Dispatch custom event to refresh the count
      window.dispatchEvent(new CustomEvent('guestbook:refresh'));
      onClose();
    };

    // Listen for URL changes that indicate success
    const checkUrlParams = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('success') === 'true') {
        handleSuccess();
      }
    };

    if (isOpen) {
      checkUrlParams();
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const apiEndpoint = `${baseUrl}/api/guestbook/submit`;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          cursor: 'pointer'
        }}
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--background)',
          borderRadius: '8px',
          padding: '0',
          maxWidth: '800px',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
          zIndex: 1000,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          cursor: 'default'
        }}
      >
        {/* Header with close button */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 24px',
            borderBottom: '1px solid var(--border)',
            backgroundColor: 'var(--background)',
            zIndex: 10
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: 600,
              fontFamily: 'var(--heading-font)',
              color: 'var(--foreground)'
            }}
          >
            {itemId ? 'Edit Guestbook Entry' : 'Sign the Guestbook'}
          </h2>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close modal"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px 8px',
              color: 'var(--muted-foreground)',
              lineHeight: 1,
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--muted)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ×
          </button>
        </div>

        {/* Form container */}
        <div style={{ padding: '24px' }}>
          <GuestbookForm
            formAction={apiEndpoint}
            formMethod="POST"
            collectionIdField={collectionId}
            itemIdField={itemId}
            editCodeField={editCode}
            fullNameFieldVisibility={true}
            emailFieldVisibility={true}
            locationFieldVisibility={true}
            firstMetFieldVisibility={true}
            relationshipFieldVisibility={true}
            messageFieldVisibility={true}
            submitButtonVisibility={true}
          />
        </div>
      </div>
    </>
  );
}
