/**
 * Guestbook Count Component
 * 
 * Wraps the Webflow GuestbookCount component and dynamically fetches
 * the count from the API
 */

import React, { useEffect, useState } from 'react';
import { GuestbookCount as WebflowGuestbookCount } from '../site-components/GuestbookCount';
import { getClientBaseUrl } from '../lib/base-url';

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

export function GuestbookCount({
  initialCount = 0,
  description = 'Family, friends, and loved ones have already signed the guestbook. Join them by adding your own message.',
  autoRefresh = true,
  refreshInterval = 5000
}: GuestbookCountProps) {
  const [count, setCount] = useState<number>(initialCount);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [baseUrl, setBaseUrl] = useState('');

  // Get base URL on mount (client-side only)
  useEffect(() => {
    const url = getClientBaseUrl();
    setBaseUrl(url);
    console.log('[GuestbookCount] Base URL detected:', url);
  }, []);

  const fetchCount = async () => {
    if (!baseUrl) {
      console.log('[GuestbookCount] Base URL not ready yet, skipping fetch');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const url = `${baseUrl}/api/guestbook/count`;
      console.log('[GuestbookCount] Fetching from:', url);
      console.log('[GuestbookCount] baseUrl:', baseUrl);
      console.log('[GuestbookCount] Current location:', window.location.href);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });

      console.log('[GuestbookCount] Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log('[GuestbookCount] Response data:', data);
      
      if (data.success) {
        console.log('[GuestbookCount] Setting count to:', data.count);
        setCount(data.count);
      } else {
        console.error('[GuestbookCount] API returned error:', data.error);
        setError(data.error || 'Failed to fetch count');
      }
    } catch (err: any) {
      console.error('[GuestbookCount] Fetch error:', err);
      setError(err.message || 'Failed to fetch count');
    } finally {
      setLoading(false);
    }
  };

  // Fetch count on mount (after baseUrl is set)
  useEffect(() => {
    if (baseUrl) {
      console.log('[GuestbookCount] Base URL ready, fetching count');
      fetchCount();
    }
  }, [baseUrl]);

  // Auto-refresh if enabled
  useEffect(() => {
    if (!autoRefresh || !baseUrl) {
      console.log('[GuestbookCount] Auto-refresh disabled or base URL not ready');
      return;
    }

    console.log('[GuestbookCount] Setting up auto-refresh interval:', refreshInterval, 'ms');
    const interval = setInterval(() => {
      console.log('[GuestbookCount] Auto-refreshing...');
      fetchCount();
    }, refreshInterval);
    
    return () => {
      console.log('[GuestbookCount] Cleaning up auto-refresh interval');
      clearInterval(interval);
    };
  }, [autoRefresh, refreshInterval, baseUrl]);

  // Listen for custom event to refresh count
  useEffect(() => {
    const handleRefresh = () => {
      console.log('[GuestbookCount] Manual refresh triggered via event');
      fetchCount();
    };

    window.addEventListener('guestbook:refresh', handleRefresh);
    return () => window.removeEventListener('guestbook:refresh', handleRefresh);
  }, [baseUrl]);

  const displayDescription = error 
    ? `Unable to load count: ${error}` 
    : description;

  console.log('[GuestbookCount] Rendering with count:', count);

  return (
    <div style={{ position: 'relative' }}>
      <WebflowGuestbookCount 
        countSlot={count.toString()}
        description={displayDescription}
      />
      
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '4px 8px',
          fontSize: '10px',
          color: 'var(--muted-foreground)',
          opacity: 0.5
        }}>
          Updating...
        </div>
      )}
      
      {/* Debug info in dev mode */}
      {import.meta.env.DEV && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '4px 8px',
          fontSize: '10px',
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderRadius: '4px',
          marginTop: '8px'
        }}>
          <div>Count: {count}</div>
          <div>Base URL: {baseUrl}</div>
          {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </div>
      )}
    </div>
  );
}
