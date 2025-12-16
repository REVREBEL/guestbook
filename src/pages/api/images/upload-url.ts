/**
 * Generate Presigned Upload URL for R2
 * 
 * Returns a presigned URL that allows direct upload to Cloudflare R2
 */

import type { APIRoute } from 'astro';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { fileName, fileType } = body;

    if (!fileName || !fileType) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing fileName or fileType'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate file type (images only)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(fileType.toLowerCase())) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get R2 credentials from environment
    const accountId = locals?.runtime?.env?.R2_ACCOUNT_ID || import.meta.env.R2_ACCOUNT_ID;
    const accessKeyId = locals?.runtime?.env?.R2_ACCESS_KEY_ID || import.meta.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = locals?.runtime?.env?.R2_SECRET_ACCESS_KEY || import.meta.env.R2_SECRET_ACCESS_KEY;
    const bucketName = locals?.runtime?.env?.R2_BUCKET_NAME || import.meta.env.R2_BUCKET_NAME;
    const publicUrl = locals?.runtime?.env?.R2_PUBLIC_URL || import.meta.env.R2_PUBLIC_URL;

    if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
      console.error('Missing R2 configuration:', {
        hasAccountId: !!accountId,
        hasAccessKeyId: !!accessKeyId,
        hasSecretAccessKey: !!secretAccessKey,
        hasBucketName: !!bucketName
      });
      return new Response(JSON.stringify({
        success: false,
        error: 'R2 storage not configured'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate unique file key
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = fileName.split('.').pop()?.toLowerCase() || 'jpg';
    const fileKey = `images/${timestamp}-${randomString}.${extension}`;

    // Configure S3 client for R2
    const s3Client = new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    // Create presigned URL
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: fileType,
    });

    const uploadUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600, // 1 hour
    });

    // Construct public URL
    const filePublicUrl = `${publicUrl}/${fileKey}`;

    console.log('Generated upload URL:', {
      fileKey,
      publicUrl: filePublicUrl,
      expiresIn: '1 hour'
    });

    return new Response(JSON.stringify({
      success: true,
      uploadUrl,
      fileKey,
      publicUrl: filePublicUrl,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('Error generating upload URL:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to generate upload URL'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
