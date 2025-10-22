# Vercel Deployment Guide

This guide will help you deploy the hianime-API to Vercel.

## Prerequisites

- A Vercel account
- GitHub, GitLab, or Bitbucket account (for automatic deployments)
- The hianime-API project cloned

## Deployment Steps

### 1. Connect Your Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." and select "Project"
3. Import your Git repository containing the hianime-API

### 2. Configure Environment Variables

In the Vercel dashboard, add the following environment variables:

```
ORIGIN=https://your-domain.vercel.app
NODE_ENV=production
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_LIMIT=100
```

Optional (if using Upstash Redis for caching):
```
UPSTASH_REDIS_REST_URL=your-upstash-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```

### 3. Deployment Settings

Vercel will automatically detect that this is a Node.js project and use the settings from `vercel.json`.

The project is configured to:
- Use `index.js` as the entry point
- Route all requests to the serverless function
- Set a maximum function duration of 30 seconds

### 4. Deploy

Click "Deploy" and Vercel will build and deploy your application.

### 5. Post-Deployment

1. Once deployed, note your Vercel URL
2. Update the `ORIGIN` environment variable to include your new Vercel URL
3. Redeploy if you made changes to environment variables

## Local Development

To run the project locally with Node.js (instead of Bun):

```bash
# Install dependencies
npm install

# Start the server
npm start
```

## Troubleshooting

### Function Timeout

If you're experiencing timeout issues, you can increase the function duration in `vercel.json`:

```json
{
  "functions": {
    "index.js": {
      "maxDuration": 60  // Increase from 30 to 60 seconds
    }
  }
}
```

### CORS Issues

Make sure your `ORIGIN` environment variable includes all domains that will access your API:

```
ORIGIN=https://your-domain.vercel.app,https://localhost:3000,https://your-custom-domain.com
```

### Memory Issues

If you encounter memory issues, you may need to optimize the code or consider using a different hosting solution with more resources.