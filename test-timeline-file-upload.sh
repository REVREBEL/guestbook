#!/bin/bash

# Test Timeline Submit with File Uploads
# Tests against production endpoint

ENDPOINT="https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit"

echo "╔════════════════════════════════════════════╗"
echo "║  Timeline File Upload Test                ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "Testing against: $ENDPOINT"
echo ""

# Create test image files
echo "📝 Creating test image files..."
convert -size 800x600 xc:blue -pointsize 72 -fill white -gravity center -annotate +0+0 "Test Image 1" test-image-1.jpg 2>/dev/null || {
  echo "⚠️  ImageMagick not available, downloading test images..."
  curl -s "https://via.placeholder.com/800x600/0000FF/FFFFFF?text=Test+Image+1" -o test-image-1.jpg
  curl -s "https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Test+Image+2" -o test-image-2.jpg
}

if [ ! -f test-image-1.jpg ]; then
  # Create minimal JPEGs manually
  echo "Creating minimal test JPEGs..."
  base64 -d > test-image-1.jpg << 'EOF'
/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=
EOF
  
  cp test-image-1.jpg test-image-2.jpg
fi

echo "✅ Test images ready"
echo ""

# Test 1: Health Check
echo "═══════════════════════════════════════════════"
echo "Test 1: Health Check (GET)"
echo "═══════════════════════════════════════════════"
curl -s "$ENDPOINT" | jq '.' || echo "Failed to parse JSON"
echo ""
echo ""

# Test 2: Form with No Images
echo "═══════════════════════════════════════════════"
echo "Test 2: Form Submission (No Images)"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Test Event - No Images" \
  -F "timeline_name_line_2=API Test" \
  -F "timeline_date=December 2024" \
  -F "timeline_detail=Testing form submission without images" \
  -F "timeline_location=Test Location" \
  -F "full_name=API Tester" \
  -F "email=test@example.com" \
  -L -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -o /dev/null 2>&1
echo ""
echo ""

# Test 3: Form with 1 Image
echo "═══════════════════════════════════════════════"
echo "Test 3: Form Submission (1 Image)"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Test Event - One Image" \
  -F "timeline_name_line_2=Image Test" \
  -F "timeline_date=January 2025" \
  -F "timeline_detail=Testing with one image upload" \
  -F "timeline_location=Image Test City" \
  -F "full_name=Image Tester" \
  -F "email=images@example.com" \
  -F "fileToUpload1=@test-image-1.jpg" \
  -L -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -o /dev/null 2>&1
echo ""
echo ""

# Test 4: Form with 2 Images
echo "═══════════════════════════════════════════════"
echo "Test 4: Form Submission (2 Images)"
echo "═══════════════════════════════════════════════"
curl -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=Test Event - Two Images" \
  -F "timeline_name_line_2=Full Image Test" \
  -F "timeline_date=June 1990" \
  -F "timeline_detail=Testing with both image uploads" \
  -F "timeline_location=Dual Image City" \
  -F "full_name=Full Tester" \
  -F "email=full@example.com" \
  -F "fileToUpload1=@test-image-1.jpg" \
  -F "fileToUpload2=@test-image-2.jpg" \
  -L -w "\nStatus: %{http_code}\nRedirect: %{redirect_url}\n" \
  -o /dev/null 2>&1
echo ""
echo ""

# Cleanup
echo "🧹 Cleaning up test images..."
rm -f test-image-1.jpg test-image-2.jpg
echo ""

echo "╔════════════════════════════════════════════╗"
echo "║  Test Complete                             ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "All tests should return Status: 302 (redirect)"
echo "Check Webflow Cloud logs for detailed output"
echo ""
