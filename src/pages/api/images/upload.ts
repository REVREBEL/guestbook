/**
 * Direct Image Upload to R2 (Webflow Cloud)
 * 
 * Uploads images directly to R2 bucket using Webflow Cloud binding
 * Expected file size: ~1MB (compressed by client)
 * Max allowed: 1.5MB (buffer for compression variance)
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Debug: Log all available environment bindings
    console.log('🔍 Available environment keys:', Object.keys(locals?.runtime?.env || {}));
    
    // Get R2 bucket from Webflow Cloud binding
    const bucket = locals?.runtime?.env?.R2_BUCKET;
    
    if (!bucket) {
      console.error('❌ R2_BUCKET binding not found');
      console.error('📋 Available bindings:', Object.keys(locals?.runtime?.env || {}).join(', '));
      return new Response(JSON.stringify({
        success: false,
        error: 'R2 storage not configured. The R2_BUCKET binding is missing. Please ensure it\'s configured in webflow.json and the app has been redeployed.',
        debug: {
          availableBindings: Object.keys(locals?.runtime?.env || {})
        }
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('✅ R2_BUCKET binding found');

    // Parse multipart form data
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response(JSON.stringify({
        success: false,
        error: 'No file provided'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate file type (images only)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type.toLowerCase())) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate file size (1.5MB limit - buffer for compression variance)
    const maxSize = 1.5 * 1024 * 1024; // 1.5MB
    if (file.size > maxSize) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      return new Response(JSON.stringify({
        success: false,
        error: `File too large (${fileSizeMB}MB). Images should be compressed to ~1MB on the client. Maximum allowed is 1.5MB.`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('📤 Uploading image:', {
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      type: file.type
    });

    // Generate unique file key
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const fileKey = `images/${timestamp}-${randomString}.${extension}`;

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    console.log('⬆️  Writing to R2:', fileKey);

    // Upload to R2
    await bucket.put(fileKey, buffer, {
      httpMetadata: {
        contentType: file.type,
      },
    });

    console.log('✅ R2 write successful');

    // Get public URL
    // Webflow Cloud provides a public domain for R2 buckets
    const publicDomain = locals?.runtime?.env?.R2_PUBLIC_DOMAIN || 
                        locals?.runtime?.env?.R2_PUBLIC_URL ||
                        `https://${locals?.runtime?.env?.CLOUDFLARE_ACCOUNT_ID || 'pub'}.r2.dev`;
    
    const publicUrl = `${publicDomain}/${fileKey}`;

    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    console.log('✅ Image uploaded successfully:', {
      fileKey,
      size: `${fileSizeMB} MB`,
      type: file.type,
      publicUrl
    });

    return new Response(JSON.stringify({
      success: true,
      fileKey,
      publicUrl,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('❌ Image upload error:', error);
    console.error('Stack:', error.stack);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to upload image',
      details: error.stack
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
