#!/bin/bash

# Timeline Form Submission Endpoint Test Script
# Tests the /api/timeline/submit endpoint with various scenarios

BASE_URL="http://localhost:4321"
ENDPOINT="$BASE_URL/api/timeline/submit"

echo "╔════════════════════════════════════════════╗"
echo "║  Timeline Submit Endpoint Test Suite      ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Test 1: GET request (health check)
echo "═══════════════════════════════════════════════"
echo "Test 1: GET /api/timeline/submit (Health Check)"
echo "═══════════════════════════════════════════════"
curl -X GET "$ENDPOINT" \
  -H "Accept: application/json" \
  -w "\nStatus: %{http_code}\n" \
  -s | jq '.'
echo ""
echo ""

# Test 2: Basic form submission (no images)
echo "═══════════════════════════════════════════════"
echo "Test 2: POST - Basic Submission (No Images)"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Test Event No Images" \
  -F "timeline_name_line_2=Basic Test" \
  -F "month-year=June 2024" \
  -F "memory=This is a test memory without images" \
  -F "location=Test Location" \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "timeline_type=milestone" \
  -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -s -L -o /dev/null
echo ""
echo ""

# Test 3: Form submission with photo1 only
echo "═══════════════════════════════════════════════"
echo "Test 3: POST - Submission with Photo 1 Only"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Test Event Photo 1" \
  -F "timeline_name_line_2=Single Image Test" \
  -F "month-year=July 2024" \
  -F "memory=This is a test with one image" \
  -F "location=Photo Test Location" \
  -F "name=Photo Tester" \
  -F "email=photo@example.com" \
  -F "timeline_type=celebration" \
  -F "photo1_url=https://images.unsplash.com/photo-1506905925346-21bda4d32df4" \
  -F "photo1_alt=Beautiful Mountain Landscape" \
  -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -s -L -o /dev/null
echo ""
echo ""

# Test 4: Form submission with both photos
echo "═══════════════════════════════════════════════"
echo "Test 4: POST - Submission with Both Photos"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Test Event Two Photos" \
  -F "timeline_name_line_2=Double Image Test" \
  -F "month-year=August 1990" \
  -F "memory=This is a test with two images from the past" \
  -F "location=Dual Photo Location" \
  -F "name=Dual Photo Tester" \
  -F "email=dual@example.com" \
  -F "timeline_type=memory" \
  -F "photo1_url=https://images.unsplash.com/photo-1506905925346-21bda4d32df4" \
  -F "photo1_alt=Mountain Landscape" \
  -F "photo2_url=https://images.unsplash.com/photo-1469474968028-56623f02e42e" \
  -F "photo2_alt=Forest Path" \
  -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -s -L -o /dev/null
echo ""
echo ""

# Test 5: Form submission with R2 URLs (simulating actual upload)
echo "═══════════════════════════════════════════════"
echo "Test 5: POST - Submission with R2 URLs"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Test Event R2 Storage" \
  -F "timeline_name_line_2=R2 Integration Test" \
  -F "month-year=12/25/2023" \
  -F "memory=Testing with R2 storage URLs" \
  -F "location=R2 Test Location" \
  -F "name=R2 Tester" \
  -F "email=r2@example.com" \
  -F "timeline_type=milestone" \
  -F "photo1_url=https://pub-123abc.r2.dev/timeline-images/test-photo-1.jpg" \
  -F "photo1_alt=R2 Stored Image 1" \
  -F "photo2_url=https://pub-123abc.r2.dev/timeline-images/test-photo-2.jpg" \
  -F "photo2_alt=R2 Stored Image 2" \
  -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -s -L -o /dev/null
echo ""
echo ""

# Test 6: Date format variations
echo "═══════════════════════════════════════════════"
echo "Test 6: POST - Various Date Formats"
echo "═══════════════════════════════════════════════"
echo "Testing date: June 1990"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Date Test 1" \
  -F "month-year=June 1990" \
  -F "memory=Testing month-year format" \
  -F "name=Date Tester" \
  -w "\nStatus: %{http_code}\n" \
  -s -o /dev/null
echo ""

echo "Testing date: 06/01/2025"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Date Test 2" \
  -F "month-year=06/01/2025" \
  -F "memory=Testing MM/DD/YYYY format" \
  -F "name=Date Tester" \
  -w "\nStatus: %{http_code}\n" \
  -s -o /dev/null
echo ""

echo "Testing date: June 1 2025"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Date Test 3" \
  -F "month-year=June 1 2025" \
  -F "memory=Testing Month Day Year format" \
  -F "name=Date Tester" \
  -w "\nStatus: %{http_code}\n" \
  -s -o /dev/null
echo ""
echo ""

# Test 7: Alternate field names
echo "═══════════════════════════════════════════════"
echo "Test 7: POST - Alternate Field Names"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "name=Alternate Fields Test" \
  -F "date-added=September 2024" \
  -F "timeline_detail=Using alternate field names" \
  -F "timeline_location=Alternate Location" \
  -F "full_name=Alternate Tester" \
  -F "event-type=test" \
  -F "photo1-url=https://images.unsplash.com/photo-1506905925346-21bda4d32df4" \
  -F "photo1-alt=Alternate URL format test" \
  -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -s -L -o /dev/null
echo ""
echo ""

echo "╔════════════════════════════════════════════╗"
echo "║  Test Suite Complete                       ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "Review the server logs for detailed output from each test."
echo "All tests should return status 302 (redirect) on success."
echo ""
