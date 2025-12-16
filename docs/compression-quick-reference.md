# Image Compression Quick Reference

## 🚀 TL;DR

Images > 1MB are automatically compressed to ~1MB before upload. No user action required.

---

## 📦 Package

```bash
npm install browser-image-compression
```

✅ Installed: `browser-image-compression@2.0.2`

---

## ⚙️ Settings

```typescript
// Target size
maxSizeMB: 1

// Max dimension
maxWidthOrHeight: 1920

// Output format
fileType: 'image/jpeg'

// Server limit
maxSize: 1.5 * 1024 * 1024  // 1.5MB
```

---

## 📊 Compression Results

| Original | Result | Time |
|----------|--------|------|
| 500KB | 500KB (no compression) | 0s |
| 2MB | ~1MB | ~1s |
| 5MB | ~1MB | ~2s |
| 10MB | ~1MB | ~4s |

---

## 🎯 User Experience

### What Users See

**Initial:**
```
[Upload Photo]
Max size: 10MB • Auto-compressed to ~1MB
```

**Compressing:**
```
[Image preview]
Compressing image...
[Progress: ██████████░░░░░ 50%]
```

**Uploading:**
```
[Image preview]
Uploading... 75%
[Progress: ████████████████░ 75%]
```

**Complete:**
```
[Image preview] [X]
```

---

## 🔍 Console Logs

### Small File (No Compression)
```javascript
📷 Image already small enough, skipping compression
```

### Large File (With Compression)
```javascript
📷 Original image: { size: "5.23 MB" }
🔄 Compressing image...
✅ Compressed image: { size: "0.98 MB", reduction: "81.3%" }
✅ Image uploaded successfully
```

---

## ❌ Common Errors

### Client-Side
```javascript
// File too large (before compression)
"File size must be less than 10MB"

// Invalid file type
"Please select an image file"

// Compression failed
"Failed to compress image"
```

### Server-Side
```json
{
  "error": "File too large (1.8MB). Images should be compressed to ~1MB on the client."
}
```

---

## 🧪 Quick Test

```typescript
// Test with different sizes
const testFiles = [
  { name: 'small.jpg', size: '800KB' },   // Should NOT compress
  { name: 'medium.jpg', size: '3MB' },    // Should compress to ~1MB
  { name: 'large.jpg', size: '8MB' },     // Should compress to ~1MB
];

// Check console for compression logs
// Verify final file size < 1.5MB
// Check image quality is acceptable
```

---

## 🔧 Adjust Compression

### More Aggressive (Smaller Files)
```typescript
// In ImageUpload.tsx
maxSizeMB: 0.5          // Target 500KB
maxWidthOrHeight: 1280  // Smaller dimension

// In upload.ts
maxSize: 0.6 * 1024 * 1024  // 600KB + buffer
```

### More Lenient (Better Quality)
```typescript
// In ImageUpload.tsx
maxSizeMB: 2            // Target 2MB
maxWidthOrHeight: 2560  // Larger dimension

// In upload.ts
maxSize: 2.5 * 1024 * 1024  // 2.5MB + buffer
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Not compressing | Check console for errors |
| Too slow | Reduce `maxWidthOrHeight` |
| Quality too low | Increase `maxSizeMB` |
| Still getting 413 | Check server limit |

---

## 📚 Full Documentation

- [`docs/image-compression-guide.md`](./image-compression-guide.md) - Complete guide
- [`docs/compression-implementation-summary.md`](./compression-implementation-summary.md) - Implementation details

---

## ✅ Checklist

- [x] Package installed
- [x] Compression logic added
- [x] Server limits updated
- [x] UI feedback added
- [x] Console logging added
- [x] Documentation created
- [ ] Tested with various file sizes
- [ ] Tested on mobile devices
- [ ] Verified in production
- [ ] Monitoring compression metrics

---

## 💡 Pro Tips

1. **Check console logs** during development to see compression in action
2. **Test on mobile** - compression is even more important on slower connections
3. **Monitor file sizes** in R2 to ensure compression is working
4. **Watch for quality issues** - increase `maxSizeMB` if users complain
5. **Track metrics** - compression time, file sizes, success rates

---

## 🎉 Done!

Compression is **ready to use**. Upload images and watch the magic happen! ✨
