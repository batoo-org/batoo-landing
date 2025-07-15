# API Setup for Batoo Landing

## Backend URL Configuration

The landing page needs to be configured with the correct backend API URL to enable the waitlist functionality.

### Environment Variables

Create a `.env` file in the `packages/landing/` directory with the following content:

```env
# Backend API URL
# For development, you might want to use: http://localhost:3000
# For production, use your actual backend URL
VITE_BACKEND_URL=https://api.batoo.com
```

### API Endpoint

The waitlist functionality calls the following endpoint:

- **URL**: `POST /api/v1/whitelist`
- **Content-Type**: `application/json`
- **Authentication**: None required

#### Request Body

```typescript
interface WhitelistRequest {
	email: string; // Required, must be valid email format
	type: 'user' | 'private' | 'broker' | 'shipyard'; // Required, only these 4 values allowed
}
```

#### Response

```typescript
interface WhitelistResponse {
	success: boolean;
	message?: string;
}
```

### Development

For local development, you can set the backend URL to your local development server:

```env
VITE_BACKEND_URL=http://localhost:3000
```

### Production

For production deployment, make sure to set the correct production backend URL in your environment variables or deployment configuration.
