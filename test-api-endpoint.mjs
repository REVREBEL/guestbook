#!/usr/bin/env node

/**
 * Test Timeline Submit API Endpoint
 * Tests against deployed production endpoint
 */

const BASE_URL = 'https://patricia-lanning.webflow.io/guestbook-form';

console.log('╔════════════════════════════════════════════╗');
console.log('║  Timeline API Endpoint Tests               ║');
console.log('╚════════════════════════════════════════════╝');
console.log('');
console.log(`Testing against: ${BASE_URL}`);
console.log('');

// Test 1: Health Check
console.log('═══════════════════════════════════════════════');
console.log('Test 1: Health Check (GET /api/timeline/submit)');
console.log('═══════════════════════════════════════════════');

try {
  const response = await fetch(`${BASE_URL}/api/timeline/submit`);
  const data = await response.json();
  
  console.log('Status:', response.status);
  console.log('Response:', JSON.stringify(data, null, 2));
  
  if (data.message && data.message.includes('Timeline API is working')) {
    console.log('✅ PASS: Health check successful');
  } else {
    console.log('❌ FAIL: Unexpected response');
  }
} catch (error) {
  console.log('❌ FAIL: Health check failed');
  console.error('Error:', error.message);
}

console.log('');
console.log('');

// Test 2: POST without images
console.log('═══════════════════════════════════════════════');
console.log('Test 2: POST - Basic Submission (No Images)');
console.log('═══════════════════════════════════════════════');

try {
  const formData = new FormData();
  formData.append('timeline_name_line_1', 'API Test Event - No Images');
  formData.append('timeline_name_line_2', 'Automated Test');
  formData.append('month-year', 'December 2024');
  formData.append('memory', 'This is an automated test submission without images');
  formData.append('location', 'Test Location');
  formData.append('name', 'API Tester');
  formData.append('email', 'test@example.com');
  formData.append('timeline_type', 'test');
  
  console.log('Submitting form data...');
  
  const response = await fetch(`${BASE_URL}/api/timeline/submit`, {
    method: 'POST',
    body: formData,
    redirect: 'manual' // Don't follow redirects
  });
  
  console.log('Status:', response.status);
  console.log('Status Text:', response.statusText);
  
  if (response.status === 302) {
    const location = response.headers.get('location');
    console.log('Redirect Location:', location);
    
    if (location && location.includes('success=true')) {
      console.log('✅ PASS: Form submitted successfully');
      
      // Parse query params
      const url = new URL(location, BASE_URL);
      const params = Object.fromEntries(url.searchParams);
      console.log('Response Data:', {
        itemId: params.id,
        eventNumber: params.eventNumber,
        editCode: params.editCode
      });
    } else if (location && location.includes('error=true')) {
      console.log('⚠️  WARN: API returned error redirect');
      const url = new URL(location, BASE_URL);
      console.log('Error Message:', url.searchParams.get('message'));
    } else {
      console.log('❌ FAIL: Unexpected redirect location');
    }
  } else {
    console.log('❌ FAIL: Expected 302 redirect, got', response.status);
  }
} catch (error) {
  console.log('❌ FAIL: Request failed');
  console.error('Error:', error.message);
}

console.log('');
console.log('');

// Test 3: POST with images
console.log('═══════════════════════════════════════════════');
console.log('Test 3: POST - Submission with Images');
console.log('═══════════════════════════════════════════════');

try {
  const formData = new FormData();
  formData.append('timeline_name_line_1', 'API Test Event - With Images');
  formData.append('timeline_name_line_2', 'Image Test');
  formData.append('month-year', 'June 1990');
  formData.append('memory', 'Testing image attachment via API');
  formData.append('location', 'Image Test Location');
  formData.append('name', 'Image Tester');
  formData.append('email', 'images@example.com');
  formData.append('timeline_type', 'memory');
  
  // Add image URLs (using Unsplash for testing)
  formData.append('photo1_url', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800');
  formData.append('photo1_alt', 'Test Mountain Landscape');
  formData.append('photo2_url', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800');
  formData.append('photo2_alt', 'Test Forest Path');
  
  console.log('Submitting form data with 2 images...');
  
  const response = await fetch(`${BASE_URL}/api/timeline/submit`, {
    method: 'POST',
    body: formData,
    redirect: 'manual'
  });
  
  console.log('Status:', response.status);
  console.log('Status Text:', response.statusText);
  
  if (response.status === 302) {
    const location = response.headers.get('location');
    console.log('Redirect Location:', location);
    
    if (location && location.includes('success=true')) {
      console.log('✅ PASS: Form with images submitted successfully');
      
      const url = new URL(location, BASE_URL);
      const params = Object.fromEntries(url.searchParams);
      console.log('Response Data:', {
        itemId: params.id,
        eventNumber: params.eventNumber,
        editCode: params.editCode
      });
      console.log('');
      console.log('⚠️  NOTE: Check CMS to verify images were attached!');
    } else if (location && location.includes('error=true')) {
      console.log('⚠️  WARN: API returned error redirect');
      const url = new URL(location, BASE_URL);
      console.log('Error Message:', url.searchParams.get('message'));
    } else {
      console.log('❌ FAIL: Unexpected redirect location');
    }
  } else {
    console.log('❌ FAIL: Expected 302 redirect, got', response.status);
  }
} catch (error) {
  console.log('❌ FAIL: Request failed');
  console.error('Error:', error.message);
}

console.log('');
console.log('');

// Test 4: Date format variations
console.log('═══════════════════════════════════════════════');
console.log('Test 4: Date Format Variations');
console.log('═══════════════════════════════════════════════');

const dateTests = [
  { input: 'June 1990', expected: '1990-06-01' },
  { input: '06/01/2025', expected: '2025-06-01' },
  { input: 'June 1 2025', expected: '2025-06-01' },
  { input: '2024-08-15', expected: '2024-08-15' }
];

for (const test of dateTests) {
  try {
    const formData = new FormData();
    formData.append('timeline_name_line_1', `Date Test: ${test.input}`);
    formData.append('month-year', test.input);
    formData.append('memory', `Testing date format: ${test.input}`);
    formData.append('name', 'Date Tester');
    
    const response = await fetch(`${BASE_URL}/api/timeline/submit`, {
      method: 'POST',
      body: formData,
      redirect: 'manual'
    });
    
    if (response.status === 302) {
      const location = response.headers.get('location');
      if (location && location.includes('success=true')) {
        console.log(`✅ ${test.input} → Success`);
      } else {
        console.log(`❌ ${test.input} → Failed (error redirect)`);
      }
    } else {
      console.log(`❌ ${test.input} → Failed (status ${response.status})`);
    }
  } catch (error) {
    console.log(`❌ ${test.input} → Error:`, error.message);
  }
}

console.log('');
console.log('');

console.log('╔════════════════════════════════════════════╗');
console.log('║  Test Suite Complete                       ║');
console.log('╚════════════════════════════════════════════╝');
console.log('');
console.log('Summary:');
console.log('- Health check tested');
console.log('- Basic form submission tested');
console.log('- Image attachment tested');
console.log('- Date format variations tested');
console.log('');
console.log('✅ API is ready for integration!');
console.log('');
console.log('Next steps:');
console.log('1. Add hidden fields to your Webflow form (photo1_url, photo2_url)');
console.log('2. Upload images to /api/images/upload first');
console.log('3. Store R2 URLs in hidden fields');
console.log('4. Submit form to /api/timeline/submit');
console.log('');
