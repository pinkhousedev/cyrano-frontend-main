# Troubleshooting Guide

## "Body is unusable: Body has already been read" Error

### What was fixed:
- **Root Cause**: The `getPage` function in `lib/server/api.ts` was calling `res.json()` twice on the same response object
- **Solution**: Removed the duplicate `res.json()` call and improved error handling

### How to verify the fix:
1. Restart your Next.js development server
2. Check the browser console - the error should no longer appear
3. The page should load without the "Body is unusable" error

## Common Issues and Solutions

### 1. Strapi Server Not Running
**Symptoms**: 404 errors, long loading times, "Server page null" messages

**Solutions**:
```bash
# Check if Strapi is running
npm run check-strapi

# Or manually check
curl https://cyrano-pamphlet-backend.onrender.com/
```

**If Strapi is not running**:
- Start your Strapi backend server
- Make sure it's running on port 1337
- Check the Strapi logs for any startup errors

### 2. Environment Configuration Issues
**Check your `.env.local` file**:
```bash
# Current setting (development)
NEXT_PUBLIC_STRAPI_API_URL=https://cyrano-pamphlet-backend.onrender.com/

# For production, use:
# NEXT_PUBLIC_STRAPI_API_URL=https://cyrano-pamphlet-backend.onrender.com/
```

**Verify environment variables are loaded**:
- Restart your Next.js server after changing `.env.local`
- Check that `process.env.NEXT_PUBLIC_STRAPI_API_URL` is not undefined

### 3. Network/Connectivity Issues
**Symptoms**: Timeout errors, connection refused

**Solutions**:
- Check if your firewall is blocking cyrano-pamphlet-backend.onrender.com/ connections
- Verify the port 1337 is not used by another service
- Try using `127.0.0.1:1337` instead of `cyrano-pamphlet-backend.onrender.com/`

### 4. Caching Issues
**Symptoms**: Old data persists, changes not reflected

**Solutions**:
```bash
# Clear Next.js cache
rm -rf .next

# Clear browser cache
# Or use Ctrl+Shift+R (hard refresh)

# Restart development server
npm run dev
```

## Debugging Steps

### 1. Check Server Logs
Look for these console messages:
- "Fetching page from: [URL]"
- "Page [slug] fetched successfully: X items found"
- "Global settings fetched successfully"

### 2. Check Network Tab
- Open browser DevTools → Network tab
- Look for failed requests to your Strapi API
- Check response status codes and error messages

### 3. Verify API Endpoints
Test these endpoints directly:
- `https://cyrano-pamphlet-backend.onrender.com/api/health` - Health check
- `https://cyrano-pamphlet-backend.onrender.com/api/pages` - Pages endpoint
- `https://cyrano-pamphlet-backend.onrender.com/api/global` - Global settings

## Performance Optimization

### 1. Reduce API Calls
- The app now uses proper caching with `force-cache`
- Global data is cached for 5 minutes
- Page data is cached for 1 minute

### 2. Background Refresh
- Global data refreshes in the background after 5 minutes
- Stale data is served while refreshing

### 3. Error Handling
- Graceful fallbacks to default data when API fails
- Detailed logging for debugging
- Timeout protection (10 seconds)

## Still Having Issues?

1. **Check the console logs** for specific error messages
2. **Verify Strapi is running** with `npm run check-strapi`
3. **Check your environment variables** are properly set
4. **Restart both servers** (Strapi and Next.js)
5. **Clear all caches** and try again

## Useful Commands

```bash
# Check Strapi server status
npm run check-strapi

# Start development server
npm run dev

# Build for production
npm run build

# Check for linting issues
npm run lint
```
