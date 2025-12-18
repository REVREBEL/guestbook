The image and media storage implementation for applications deployed on Webflow Cloud is centered around Cloudflare R2, which serves as the Object Store for unstructured data. This integration ensures scalability, security, and high performance for handling user uploads like photos and videos.
The integration process involves configuring the cloud environment, running a specific upload workflow, and optimizing assets to maintain performance.
1. R2 Configuration and Provisioning
Webflow Cloud is designed to automate R2 setup, simplifying deployment compared to manual Cloudflare integration:
• R2 as Object Store: The Object Store is the recommended architectural solution for media files and unstructured data, offering scalable, secure, and globally deployed storage. This decouples large media files from the relational data stored in Cloudflare D1 (SQLite).
• Automatic Provisioning: Webflow Cloud automatically creates and binds the R2 bucket when the necessary binding is declared in the configuration files. This means developers do not need to manually create buckets or manage API keys/tokens.
• Required Bindings: The R2 bucket must be defined in the project configuration files, using a binding name like MEDIA_BUCKET (for memory wall) or R2_BUCKET (general configuration).
    ◦ The binding must be present in wrangler.jsonc and the Webflow configuration file.
    ◦ The corresponding TypeScript type definition for the R2 binding must be added to worker-configuration.d.ts.
    ◦ In the server-side code (Workers), the R2 instance is accessed via locals.runtime.env.R2_BUCKET or similar environment binding.
• Public Access: Public access is configured automatically by Webflow Cloud, but developers can specify a custom domain for images using the R2_PUBLIC_DOMAIN environment variable if desired.
2. Image Upload Workflow
The application uses a secure, multi-step process for handling media uploads:
• Client-Side Upload: The user selects a photo or video in the form. The file is uploaded via FormData to a dedicated API endpoint in the Webflow Cloud Worker.
    ◦ The primary API endpoints used are typically /api/upload.ts or /api/images/upload.ts.
• Direct Upload vs. Presigned URLs:
    ◦ The most integrated approach uses the env.R2_BUCKET binding for direct upload within the Workers runtime.
    ◦ An older method involved generating presigned URLs (/api/images/upload-url.ts) using the AWS S3 SDK. This allowed the client to securely upload the file directly to R2 without exposing credentials, limiting the operation to a set time (e.g., 1 hour expiration).
• Server-Side Handling: The API endpoint receives the file, validates its type and size, generates a unique file key (e.g., photos/1234567890-filename.jpg), and stores the file in the R2 bucket.
• Data Persistence: The public URL path (e.g., /api/media/12345-abc.jpg) and the unique storage key (media_key) are saved to the memories table in the D1 database, rather than storing the large file data itself.
3. Image Optimization and Limits
To prevent proxy limits (413 errors) and enhance user experience, client-side image processing is mandated:
• Automatic Compression: The application implements automatic compression for files greater than 1MB. This process uses a library (e.g., browser-image-compression) to reduce the file size, typically targeting ~1MB.
• Compression Process: Compression runs in a background Web Worker thread to prevent blocking the UI. It maintains the aspect ratio and converts the image format, often to JPEG, for optimal compression.
• File Limits: Documented maximum file limits are 5MB for photos and 50MB for videos. The client-side validation often enforces a size limit (e.g., 10MB) to prevent oversized uploads.
• General Performance Best Practice: Outside of compression, the general goal for website performance is to keep all images under 200kb.
4. Retrieval and API Access
Once stored in the R2 bucket, media is retrieved securely through a dedicated API route:
• API Endpoint for Retrieval: The R2 bucket is private by default. To retrieve files, the application uses an API endpoint, typically src/pages/api/media/[filename].ts or a similar Media API route.
• Secure Retrieval: This server-side route fetches the file from R2 using the application's binding and streams it to the client, ensuring the media uses the same domain as the app and includes proper caching headers, without requiring the bucket itself to be publicly accessible.
• Form Integration: The uploaded image URLs and keys are automatically populated into hidden fields within the form (e.g., photo1_url, photo1_fileKey), which are then processed by the submission API and written to the CMS.


The Webflow Cloud backend, built on Astro, Cloudflare Workers, D1 (SQLite), and R2 (Object Store), presents several common configuration and deployment issues. These issues primarily revolve around environment setup, dependency management, and correct handling of the application's mount path.
Here are the common issues and their solutions, derived from the project's troubleshooting and fix documentation:
1. Deployment and Build Failures
Issue
Cause
Solution
"Tarball Extraction Error" (or Build Failure)
The project contained conflicting migration directories, specifically the old drizzle/ folder alongside the required migrations/ folder, causing the build system to fail packaging the application.
Remove the old drizzle/ folder completely from the project structure. Also, clean build artifacts (.wrangler, dist, .astro) before attempting a fresh build.
npm ci Failure During Deployment
Production dependencies list included packages only necessary for local development, such as better-sqlite3, drizzle-kit, and tsx, which rely on native compilation that fails in the Cloudflare Workers sandbox environment.
Remove all native development dependencies (like better-sqlite3 and drizzle-kit) from package.json and regenerate package-lock.json before deployment. These tools should only be installed and used locally.
2. Routing and 404 Errors
Issue
Cause
Solution
404 Errors on All Routes/API Calls in Production
The Astro configuration (astro.config.mjs) had the base path hardcoded to an empty string (base: ''), causing paths like /api/memory_journal to fail because Webflow Cloud deploys applications at a mount path (e.g., /memory-journal).
Dynamically set the base path in astro.config.mjs to respect the BASE_URL environment variable provided by Webflow Cloud: `base: import.meta.env.BASE_URL
Assets Not Loading in Production
Similar to routing errors, static assets (CSS, JS) failed to load because the base path was incorrectly handled.
Configure assetsPrefix in astro.config.mjs to also respect the BASE_URL, ensuring static assets resolve correctly under the base path. All URLs must use the utility helper (src/lib/base-url.ts) to handle the base path dynamically.
3. Database (D1) Connectivity and Data Issues
Issue
Cause
Solution
"DB binding not found" (Production)
The D1 database binding name or ID was incorrect, or the Webflow Cloud application did not successfully provision the resource.
Verify the binding name is exactly "DB" (case-sensitive) in wrangler.jsonc and that the database ID matches the ID shown in the Webflow Cloud dashboard. Redeploy the app to trigger resource creation.
"Table doesn't exist" (Migrations)
Database schema migrations were not applied to the production D1 database. Developers may have used an incorrect directory name in configuration.
Ensure migration files are located in the migrations/ folder (as defined in wrangler.jsonc). Webflow Cloud automatically applies migrations from this directory during the deployment process.
"DB binding not found" (Local Development)
The Astro platform proxy was not enabled to simulate Cloudflare bindings during local development.
Enable platformProxy: { enabled: true } in astro.config.mjs to allow access to bindings via locals.runtime.env during npm run dev.
4. Image Upload and Form Submission Errors
Issue
Cause
Solution
Form Submits as GET or POST Fails
The HTML form element in the Webflow component had the method set incorrectly or was intercepted by an external security measure.
Verify the form method is explicitly set to POST in the Webflow Designer's Form Settings. Ensure the API route handler includes export const prerender = false;. If using custom API endpoints, ensure Astro's CSRF protection is disabled in astro.config.mjs using security.checkOrigin: false.
Large File Uploads Fail (413 Error)
Files, even if under the R2 limit, often exceed the limits of the reverse proxy layer (Cloudflare Workers) used by Webflow Cloud.
Implement automatic client-side image compression for files larger than 1MB, typically targeting a size of ~1MB, before they are uploaded to R2. This uses the browser's Canvas API to ensure faster uploads and prevent proxy errors.
Media Uploads Don't Display or Fail to Fetch
The R2 bucket binding or the subsequent media retrieval API endpoint was misconfigured.
Verify the R2 bucket binding (e.g., MEDIA_BUCKET) is correctly configured in wrangler.jsonc and that the media API route (/api/media/[filename].ts) is successfully fetching files from the provisioned R2 storage.

--------------------------------------------------------------------------------
The core issues in this environment stem from the distinction between the local root path development environment and the production mount path utilized by the Webflow Cloud architecture. Successfully deploying the application requires rigidly adhering to the use of dynamic base path variables (BASE_URL) for all routing and meticulously separating local development dependencies and files from the production build structure.
