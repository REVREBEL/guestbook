#!/bin/bash

# Direct curl test for timeline submission with files
# Run this AFTER deploying the updated endpoint

echo "════════════════════════════════════════════════"
echo "Timeline File Upload - Direct CURL Test"
echo "════════════════════════════════════════════════"
echo ""

# Create a tiny test JPEG
echo "Creating test image..."
base64 -d > test.jpg << 'EOF'
/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=
EOF

echo "✅ Test image created (minimal 1x1 JPEG)"
echo ""

ENDPOINT="https://patricia-lanning.webflow.io/guestbook-form/api/timeline/submit"

echo "Testing POST to: $ENDPOINT"
echo ""

# Test with actual file upload
echo "Submitting form with file..."
curl -v -X POST "$ENDPOINT" \
  -F "timeline_name_line_1=CURL Test with File" \
  -F "timeline_name_line_2=File Upload Test" \
  -F "timeline_date=December 2024" \
  -F "timeline_detail=Testing file upload via curl" \
  -F "timeline_location=Test City" \
  -F "full_name=CURL Tester" \
  -F "email=curl@test.com" \
  -F "fileToUpload1=@test.jpg;type=image/jpeg" \
  2>&1 | grep -E "(< HTTP|< Location|< Content-Type)"

echo ""
echo ""
echo "Check Webflow Cloud logs for detailed output"
echo "Expected: 302 redirect with Location header"
echo ""

# Cleanup
rm -f test.jpg
