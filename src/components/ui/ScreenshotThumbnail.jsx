import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * ScreenshotThumbnail Component
 * 
 * Generates live screenshots of websites using ScreenshotOne API.
 * No backend needed - API is called directly from the browser.
 * 
 * Features:
 * - Lazy loading for performance
 * - Fallback image on error
 * - 24h caching via API parameters
 * - 16:9 aspect ratio for desktop view
 */
const ScreenshotThumbnail = ({ 
  url, 
  alt, 
  fallbackImage = '/images/placeholder.png',
  className = '',
  width = 1920,
  height = 1080
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get API key from environment variables
  const apiKey = import.meta.env.VITE_SCREENSHOTONE_API_KEY;

  /**
   * Build ScreenshotOne API URL
   * 
   * Why no backend needed:
   * ScreenshotOne allows direct browser calls with proper CORS headers.
   * The API key is safe to expose in frontend as it's restricted by domain.
   * Caching is handled by the API itself (cache parameter).
   */
  const buildScreenshotUrl = () => {
    if (!apiKey) {
      console.warn('ScreenshotOne API key not found. Using fallback image.');
      return fallbackImage;
    }

    // Base URL for ScreenshotOne API
    const baseUrl = 'https://api.screenshotone.com/take';
    
    // API Parameters
    const params = new URLSearchParams({
      access_key: apiKey,
      url: url,
      // Screenshot dimensions (16:9 aspect ratio)
      viewport_width: width.toString(),
      viewport_height: height.toString(),
      // Image format and quality
      format: 'jpg',
      image_quality: '80',
      // Caching: 24 hours (86400 seconds)
      cache: 'true',
      cache_ttl: '86400',
      // Full page screenshot (false for above-the-fold only)
      full_page: 'false',
      // Device emulation
      device_scale_factor: '1',
      // Wait for page to fully load
      delay: '2',
      // Block ads and cookie banners for cleaner screenshots
      block_ads: 'true',
      block_cookie_banners: 'true',
      // Dark mode preference (optional)
      dark_mode: 'false'
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const screenshotUrl = buildScreenshotUrl();

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.error(`Failed to load screenshot for: ${url}`);
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-bg-tertiary animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-accent-coral border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Screenshot Image */}
      <img
        src={hasError ? fallbackImage : screenshotUrl}
        alt={alt}
        loading="lazy" // Native lazy loading
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full object-cover object-center ${className}`}
      />
    </div>
  );
};

ScreenshotThumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallbackImage: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default ScreenshotThumbnail;
