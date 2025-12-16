/**
 * Timeline Environment Variable Test Endpoint
 * Tests reading TIMELINE_COLLECTION_ID from environment
 */

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  console.log('=== Timeline Env Var Test ===');
  
  // Check locals.runtime.env
  const fromRuntime = locals?.runtime?.env?.TIMELINE_COLLECTION_ID;
  const fromImportMeta = import.meta.env.TIMELINE_COLLECTION_ID;
  
  console.log('1. locals?.runtime?.env?.TIMELINE_COLLECTION_ID:', fromRuntime);
  console.log('2. import.meta.env.TIMELINE_COLLECTION_ID:', fromImportMeta);
  
  // Check all env keys
  if (locals?.runtime?.env) {
    const envKeys = Object.keys(locals.runtime.env);
    console.log('3. All env keys:', envKeys);
    
    // Try to access TIMELINE_COLLECTION_ID directly
    const directAccess = locals.runtime.env['TIMELINE_COLLECTION_ID'];
    console.log('4. Direct access [TIMELINE_COLLECTION_ID]:', directAccess);
    
    // Log the actual values of all CMS-related env vars
    console.log('5. GUESTBOOK_COLLECTION_ID:', locals.runtime.env['GUESTBOOK_COLLECTION_ID']);
    console.log('6. TIMELINE_COLLECTION_ID:', locals.runtime.env['TIMELINE_COLLECTION_ID']);
  }
  
  const result = {
    fromRuntime: fromRuntime || 'UNDEFINED',
    fromImportMeta: fromImportMeta || 'UNDEFINED',
    typeofFromRuntime: typeof fromRuntime,
    typeofFromImportMeta: typeof fromImportMeta,
    allEnvKeys: locals?.runtime?.env ? Object.keys(locals.runtime.env) : [],
    directAccess: locals?.runtime?.env?.['TIMELINE_COLLECTION_ID'] || 'UNDEFINED',
    guestbookId: locals?.runtime?.env?.['GUESTBOOK_COLLECTION_ID'] || 'UNDEFINED',
  };
  
  console.log('=== Test Complete ===');
  
  return new Response(JSON.stringify(result, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
