#!/bin/bash

# Validation script for timeline submit endpoint
# Checks all required functionality is present

echo "╔════════════════════════════════════════════════════════╗"
echo "║  Timeline Endpoint Validation                          ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

ENDPOINT_FILE="src/pages/api/timeline/submit.ts"
PASS=0
FAIL=0

check() {
  local name="$1"
  local pattern="$2"
  
  if grep -q "$pattern" "$ENDPOINT_FILE"; then
    echo "✅ $name"
    PASS=$((PASS + 1))
  else
    echo "❌ $name - NOT FOUND"
    FAIL=$((FAIL + 1))
  fi
}

echo "Checking $ENDPOINT_FILE..."
echo ""

echo "═══ File Upload Support ═══"
check "Accepts fileToUpload1" "fileToUpload1"
check "Accepts fileToUpload2" "fileToUpload2"
check "S3Client import" "import.*S3Client"
check "PutObjectCommand" "PutObjectCommand"
check "R2 upload logic" "s3Client.send"
check "Generates R2 URLs" "imageUrl.*r2"
echo ""

echo "═══ Timeline ID Logic ═══"
check "Queries all items" "while.*true"
check "Finds max event-number" "max.*event-number"
check "Increments by 1" "maxId.*\\+ 1"
check "Calculates even/odd" "nextEventNumber % 2"
echo ""

echo "═══ Required Field Values ═══"
check "origin = 'webflow'" "'origin':.*'webflow'"
check "approved = true" "'approved':.*true"
check "active = true" "'active':.*true"
check "Sets event-number" "'event-number':.*nextEventNumber"
check "Sets even-number" "'even-number':.*isEven"
echo ""

echo "═══ Publishing ═══"
check "Publishes item" "publishItem"
check "_draft = false" "'_draft':.*false"
echo ""

echo "═══ Image Attachment ═══"
check "Attaches photo-1" "'photo-1':"
check "Attaches photo-2" "'photo-2':"
check "Image URLs from R2" "uploadedImages"
echo ""

echo "════════════════════════════════════════════════════════"
echo "Results: ✅ $PASS passed, ❌ $FAIL failed"
echo "════════════════════════════════════════════════════════"
echo ""

if [ $FAIL -eq 0 ]; then
  echo "🎉 All checks passed! Endpoint is ready to deploy."
  echo ""
  echo "Next steps:"
  echo "  1. Deploy: wrangler deploy"
  echo "  2. Test query: curl 'https://patricia-lanning.webflow.io/guestbook-form/api/timeline/test?mode=query'"
  echo "  3. Test create: curl 'https://patricia-lanning.webflow.io/guestbook-form/api/timeline/test?mode=create'"
  echo "  4. Test file upload: ./curl-test-timeline.sh"
  echo "  5. Test production form"
  echo ""
else
  echo "⚠️  Some checks failed. Review the endpoint before deploying."
  exit 1
fi
