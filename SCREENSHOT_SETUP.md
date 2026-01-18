# Dynamic Screenshot Thumbnails Setup Guide

## Overview
This implementation uses **ScreenshotOne API** to automatically generate live screenshots of your project demos. No backend required!

## Why No Backend is Needed

### Traditional Approach (with backend):
- Backend server takes screenshots
- Stores them in cloud storage
- Serves them to frontend
- Requires server maintenance, storage costs

### Our Approach (frontend-only):
- ScreenshotOne API accepts direct browser requests
- Has proper CORS headers for browser calls
- Built-in caching reduces API calls
- API key can be safely exposed (domain-restricted)
- Screenshots served directly from ScreenshotOne CDN

## Setup Instructions

### 1. Get ScreenshotOne API Key
1. Go to [ScreenshotOne.com](https://screenshotone.com/)
2. Sign up for a free account (includes 100 free screenshots/month)
3. Get your API access key from the dashboard
4. (Optional) Restrict the key to your domain for security

### 2. Configure Environment Variables

#### Local Development
Create a `.env` file in the project root:
```bash
VITE_SCREENSHOTONE_API_KEY=your_actual_api_key_here
```

#### Vercel Deployment
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_SCREENSHOTONE_API_KEY`
   - **Value**: Your actual API key
   - **Environment**: Production, Preview, Development (select all)
4. Redeploy your application

### 3. Component Usage

The `ScreenshotThumbnail` component is already integrated into `ProjectCard.jsx`:

```jsx
<ScreenshotThumbnail
  url={project.demoLink}           // Live demo URL to screenshot
  alt="Project screenshot"          // Alt text for accessibility
  fallbackImage={project.thumbnail} // Fallback if API fails
  className="w-full h-full"        // Custom styling
/>
```

### 4. Project Data Structure

Your `projects.js` file should include:
```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description...",
  demoLink: "https://your-project.vercel.app", // Required for screenshots
  thumbnail: "/images/fallback.png"             // Fallback image
}
```

## Features Implemented

### ✅ Automatic Screenshots
- Screenshots are taken automatically from live demo URLs
- No manual screenshot capture needed
- Updates automatically when you redeploy your projects

### ✅ Smart Caching
- 24-hour cache (86400 seconds)
- Reduces API calls significantly
- CDN distribution for fast loading

### ✅ Lazy Loading
- Images load only when visible in viewport
- Improves initial page load performance
- Native browser lazy loading

### ✅ Fallback Images
- Shows your existing thumbnails if API fails
- Graceful degradation
- No broken images

### ✅ Loading States
- Animated loading spinner
- Smooth transition to loaded image
- Better user experience

### ✅ Optimizations
- 16:9 aspect ratio for professional look
- Compressed JPG format (80% quality)
- Blocks ads and cookie banners
- 2-second delay for page to load fully

## API Parameters Explained

```javascript
{
  viewport_width: 1920,        // Screenshot width (16:9)
  viewport_height: 1080,       // Screenshot height
  format: 'jpg',               // Image format
  image_quality: '80',         // Compression (1-100)
  cache: 'true',               // Enable caching
  cache_ttl: '86400',          // Cache for 24 hours
  full_page: 'false',          // Capture above-the-fold only
  delay: '2',                  // Wait 2s for page load
  block_ads: 'true',           // Remove ads from screenshot
  block_cookie_banners: 'true', // Remove cookie popups
  dark_mode: 'false'           // Light mode screenshots
}
```

## Cost Estimation

### ScreenshotOne Pricing (as of 2026):
- **Free Tier**: 100 screenshots/month
- **Starter**: $10/month for 1,000 screenshots
- **Pro**: $29/month for 5,000 screenshots

### With Our Caching:
- 6 projects × 1 screenshot each = 6 API calls
- With 24h cache: ~180 calls/month (if viewed daily)
- **Free tier is sufficient** for most portfolios

### To Reduce Costs Further:
1. Increase `cache_ttl` to 7 days (604800 seconds)
2. Use existing thumbnails for less important projects
3. Only enable for featured projects

## Troubleshooting

### Screenshots not loading?
1. Check if API key is set correctly in `.env`
2. Verify the key is active in ScreenshotOne dashboard
3. Check browser console for error messages
4. Ensure project URLs are accessible publicly

### API quota exceeded?
1. Check usage in ScreenshotOne dashboard
2. Increase cache duration
3. Consider upgrading plan
4. Use fallback images for some projects

### Slow loading?
- First load will be slower (generating screenshot)
- Subsequent loads use cached version (very fast)
- This is expected behavior

## Security Notes

### Is it safe to expose the API key?
**Yes**, for ScreenshotOne specifically:
- The API key can be restricted to your domain
- No sensitive data is exposed
- API calls are rate-limited automatically
- Industry-standard practice for screenshot services

### Additional Security:
1. Restrict API key to your domain in ScreenshotOne dashboard
2. Monitor usage regularly
3. Rotate keys if compromised
4. Use environment variables (never commit `.env`)

## File Structure

```
Portfolio-3/
├── .env                                    # Your API key (git-ignored)
├── .env.example                            # Template for API key
├── src/
│   ├── components/
│   │   ├── ProjectCard.jsx                 # Updated to use screenshots
│   │   └── ui/
│   │       └── ScreenshotThumbnail.jsx     # Main component
│   └── data/
│       └── projects.js                     # Project data with URLs
└── public/
    └── images/
        └── placeholder.png                  # Fallback image
```

## Testing

### Local Testing:
```bash
# 1. Add API key to .env
echo "VITE_SCREENSHOTONE_API_KEY=your_key" > .env

# 2. Restart dev server
npm run dev

# 3. Open browser and check Projects section
# 4. Screenshots should load (may take 2-3 seconds first time)
```

### Production Testing:
1. Deploy to Vercel
2. Add environment variable in Vercel dashboard
3. Redeploy
4. Check live site

## Alternative Services (if needed)

If ScreenshotOne doesn't work for you, alternatives include:
- **ApiFlash** - Similar pricing and features
- **UrlBox** - More expensive but very reliable
- **Microlink** - Free tier available
- **Screenshotlayer** - Simple API

Just update the `buildScreenshotUrl()` function in `ScreenshotThumbnail.jsx`.

## Support

For issues or questions:
1. Check [ScreenshotOne Documentation](https://screenshotone.com/docs)
2. Review browser console for errors
3. Verify all URLs are publicly accessible
4. Ensure environment variables are set correctly

---

**Summary**: This is a production-ready, frontend-only solution that automatically generates and caches screenshots of your live projects without needing any backend infrastructure. Perfect for portfolios hosted on Vercel or similar platforms.
