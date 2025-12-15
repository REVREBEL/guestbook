# Example CMS Payloads

This document provides example JSON payloads for creating and updating guestbook entries in Webflow CMS.

---

## Create New Item

### Request

**Endpoint**: `POST /api/cms/69383a09bbf502930bf620a3/create`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```json
{
  "fieldData": {
    "name": "John Doe",
    "slug": "a1b2c3d4e5",
    "first-name": "John Doe",
    "email": "john@example.com",
    "location": "New York, NY",
    "guestbook-first-meeting": "We met at the company retreat in 2020",
    "relationship": "Colleague",
    "guestbook-message": "Thank you for being such an amazing mentor and friend. Your guidance has been invaluable!",
    "date-added": "2024-01-15T10:30:00.000Z",
    "active": true,
    "edit-code": "Xy9K2m",
    "guestbook-id": "12345"
  },
  "isArchived": false,
  "isDraft": false
}
```

### Response (Success)

**Status**: `201 Created`

```json
{
  "success": true,
  "data": {
    "id": "67e8b9c0d1e2f3a4b5c6d7e8",
    "cmsLocaleId": "653ad8f5be025a1b84e6ef7c",
    "lastPublished": null,
    "lastUpdated": "2024-01-15T10:30:15.234Z",
    "createdOn": "2024-01-15T10:30:15.234Z",
    "isArchived": false,
    "isDraft": false,
    "fieldData": {
      "name": "John Doe",
      "slug": "a1b2c3d4e5",
      "first-name": "John Doe",
      "email": "john@example.com",
      "location": "New York, NY",
      "guestbook-first-meeting": "We met at the company retreat in 2020",
      "relationship": "Colleague",
      "guestbook-message": "Thank you for being such an amazing mentor and friend. Your guidance has been invaluable!",
      "date-added": "2024-01-15T10:30:00.000Z",
      "active": true,
      "edit-code": "Xy9K2m",
      "guestbook-id": "12345"
    }
  }
}
```

### Response (Error - Validation)

**Status**: `400 Bad Request`

```json
{
  "success": false,
  "error": "Name and slug are required fields",
  "validationErrors": [
    {
      "field": "name",
      "message": "Name is required"
    },
    {
      "field": "slug",
      "message": "Slug is required"
    }
  ]
}
```

### Response (Error - Server)

**Status**: `500 Internal Server Error`

```json
{
  "success": false,
  "error": "Server configuration error: Missing API token"
}
```

---

## Update Existing Item

### Request

**Endpoint**: `PATCH /api/cms/69383a09bbf502930bf620a3/67e8b9c0d1e2f3a4b5c6d7e8`

**Headers**:
```
Content-Type: application/json
```

**Body** (only include fields to update):
```json
{
  "fieldData": {
    "location": "San Francisco, CA",
    "guestbook-message": "Updated: Thank you for everything! Moving to SF soon.",
    "relationship": "Friend"
  }
}
```

### Response (Success)

**Status**: `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "67e8b9c0d1e2f3a4b5c6d7e8",
    "cmsLocaleId": "653ad8f5be025a1b84e6ef7c",
    "lastPublished": null,
    "lastUpdated": "2024-01-15T14:22:10.567Z",
    "createdOn": "2024-01-15T10:30:15.234Z",
    "isArchived": false,
    "isDraft": false,
    "fieldData": {
      "name": "John Doe",
      "slug": "a1b2c3d4e5",
      "first-name": "John Doe",
      "email": "john@example.com",
      "location": "San Francisco, CA",
      "guestbook-first-meeting": "We met at the company retreat in 2020",
      "relationship": "Friend",
      "guestbook-message": "Updated: Thank you for everything! Moving to SF soon.",
      "date-added": "2024-01-15T10:30:00.000Z",
      "active": true,
      "edit-code": "Xy9K2m",
      "guestbook-id": "12345"
    }
  }
}
```

### Response (Error - Not Found)

**Status**: `404 Not Found`

```json
{
  "success": false,
  "error": "Item not found"
}
```

---

## Get Single Item

### Request

**Endpoint**: `GET /api/cms/69383a09bbf502930bf620a3/67e8b9c0d1e2f3a4b5c6d7e8`

**Headers**:
```
Content-Type: application/json
```

### Response (Success)

**Status**: `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "67e8b9c0d1e2f3a4b5c6d7e8",
    "cmsLocaleId": "653ad8f5be025a1b84e6ef7c",
    "lastPublished": "2024-01-15T14:30:00.000Z",
    "lastUpdated": "2024-01-15T14:22:10.567Z",
    "createdOn": "2024-01-15T10:30:15.234Z",
    "isArchived": false,
    "isDraft": false,
    "fieldData": {
      "name": "John Doe",
      "slug": "a1b2c3d4e5",
      "first-name": "John Doe",
      "email": "john@example.com",
      "location": "San Francisco, CA",
      "guestbook-first-meeting": "We met at the company retreat in 2020",
      "relationship": "Friend",
      "guestbook-message": "Updated: Thank you for everything! Moving to SF soon.",
      "date-added": "2024-01-15T10:30:00.000Z",
      "active": true,
      "edit-code": "Xy9K2m",
      "guestbook-id": "12345"
    }
  }
}
```

---

## List Items

### Request

**Endpoint**: `GET /api/cms/69383a09bbf502930bf620a3?limit=10&offset=0`

**Headers**:
```
Content-Type: application/json
```

### Response (Success)

**Status**: `200 OK`

```json
{
  "items": [
    {
      "id": "67e8b9c0d1e2f3a4b5c6d7e8",
      "cmsLocaleId": "653ad8f5be025a1b84e6ef7c",
      "lastPublished": "2024-01-15T14:30:00.000Z",
      "lastUpdated": "2024-01-15T14:22:10.567Z",
      "createdOn": "2024-01-15T10:30:15.234Z",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "John Doe",
        "slug": "a1b2c3d4e5",
        "first-name": "John Doe",
        "email": "john@example.com",
        "location": "San Francisco, CA",
        "relationship": "Friend",
        "guestbook-message": "Thank you for everything!",
        "active": true,
        "edit-code": "Xy9K2m"
      }
    },
    {
      "id": "68f9c0d1e2f3a4b5c6d7e8f9",
      "cmsLocaleId": "653ad8f5be025a1b84e6ef7c",
      "lastPublished": "2024-01-14T10:00:00.000Z",
      "lastUpdated": "2024-01-14T09:45:30.123Z",
      "createdOn": "2024-01-14T09:45:30.123Z",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Jane Smith",
        "slug": "f9e8d7c6b5",
        "first-name": "Jane Smith",
        "email": "jane@example.com",
        "location": "Austin, TX",
        "relationship": "Family",
        "guestbook-message": "So grateful for all the memories!",
        "active": true,
        "edit-code": "Qw3Rt5"
      }
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "total": 147
  }
}
```

---

## Minimal Create (Required Fields Only)

### Request

**Endpoint**: `POST /api/cms/69383a09bbf502930bf620a3/create`

**Body**:
```json
{
  "fieldData": {
    "name": "Jane Smith",
    "slug": "f9e8d7c6b5",
    "first-name": "Jane Smith",
    "email": "jane@example.com",
    "active": true,
    "edit-code": "Qw3Rt5"
  }
}
```

### Response

**Status**: `201 Created`

```json
{
  "success": true,
  "data": {
    "id": "68f9c0d1e2f3a4b5c6d7e8f9",
    "cmsLocaleId": "653ad8f5be025a1b84e6ef7c",
    "lastPublished": null,
    "lastUpdated": "2024-01-14T09:45:30.123Z",
    "createdOn": "2024-01-14T09:45:30.123Z",
    "isArchived": false,
    "isDraft": false,
    "fieldData": {
      "name": "Jane Smith",
      "slug": "f9e8d7c6b5",
      "first-name": "Jane Smith",
      "email": "jane@example.com",
      "active": true,
      "edit-code": "Qw3Rt5"
    }
  }
}
```

---

## Create with Image

### Request

**Endpoint**: `POST /api/cms/69383a09bbf502930bf620a3/create`

**Body**:
```json
{
  "fieldData": {
    "name": "Alice Johnson",
    "slug": "c8d9e0f1a2",
    "first-name": "Alice Johnson",
    "email": "alice@example.com",
    "photo": {
      "url": "https://cdn.example.com/photos/alice.jpg",
      "alt": "Alice Johnson's photo"
    },
    "location": "Seattle, WA",
    "relationship": "Client",
    "guestbook-message": "Working with you has been a pleasure!",
    "active": true,
    "edit-code": "Zx4Yv7"
  }
}
```

### Response

**Status**: `201 Created`

```json
{
  "success": true,
  "data": {
    "id": "69a0b1c2d3e4f5a6b7c8d9e0",
    "cmsLocaleId": "653ad8f5be025a1b84e6ef7c",
    "lastPublished": null,
    "lastUpdated": "2024-01-16T08:15:45.678Z",
    "createdOn": "2024-01-16T08:15:45.678Z",
    "isArchived": false,
    "isDraft": false,
    "fieldData": {
      "name": "Alice Johnson",
      "slug": "c8d9e0f1a2",
      "first-name": "Alice Johnson",
      "email": "alice@example.com",
      "photo": {
        "fileId": "650a1b2c3d4e5f6a7b8c9d0e",
        "url": "https://cdn.example.com/photos/alice.jpg",
        "alt": "Alice Johnson's photo"
      },
      "location": "Seattle, WA",
      "relationship": "Client",
      "guestbook-message": "Working with you has been a pleasure!",
      "active": true,
      "edit-code": "Zx4Yv7"
    }
  }
}
```

---

## Archive Item

### Request

**Endpoint**: `PATCH /api/cms/69383a09bbf502930bf620a3/67e8b9c0d1e2f3a4b5c6d7e8`

**Body**:
```json
{
  "isArchived": true
}
```

### Response

**Status**: `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "67e8b9c0d1e2f3a4b5c6d7e8",
    "isArchived": true,
    "fieldData": {
      "name": "John Doe",
      "slug": "a1b2c3d4e5",
      ...
    }
  }
}
```

---

## Field Type Examples

### Date Field
```json
{
  "date-added": "2024-01-15T10:30:00.000Z"
}
```

### Boolean Field
```json
{
  "active": true
}
```

### Image Field
```json
{
  "photo": {
    "url": "https://cdn.example.com/image.jpg",
    "alt": "Description"
  }
}
```

### Number Field
```json
{
  "guestbook-id": "12345"
}
```

### Long Text Field
```json
{
  "guestbook-message": "This is a longer message that can contain multiple paragraphs and more detailed information..."
}
```

---

## Error Response Examples

### 400 Bad Request - Missing Required Field
```json
{
  "success": false,
  "error": "Name and slug are required fields",
  "validationErrors": [
    {
      "field": "name",
      "message": "Name is required"
    }
  ]
}
```

### 401 Unauthorized - Invalid Token
```json
{
  "success": false,
  "error": "Invalid or expired API token"
}
```

### 404 Not Found - Item Doesn't Exist
```json
{
  "success": false,
  "error": "Item not found"
}
```

### 422 Unprocessable Entity - Invalid Data
```json
{
  "success": false,
  "error": "Invalid field data",
  "details": {
    "email": "Invalid email format"
  }
}
```

### 429 Too Many Requests - Rate Limit
```json
{
  "success": false,
  "error": "Rate limit exceeded. Please try again later."
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

## Notes

1. **Collection ID**: `69383a09bbf502930bf620a3` is the default guestbook collection
2. **Item IDs**: Replace `67e8b9c0d1e2f3a4b5c6d7e8` with actual item IDs from your CMS
3. **Timestamps**: All dates use ISO 8601 format
4. **Slugs**: 10-digit alphanumeric codes, auto-generated if not provided
5. **Edit Codes**: 6-character case-sensitive codes for authentication
6. **Optional Fields**: Omit from request if not needed
7. **Partial Updates**: PATCH requests only need fields being changed
