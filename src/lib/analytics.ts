/**
 * Analytics Module
 * Integrates with Vercel Analytics and provides event tracking
 */

interface AnalyticsEvent {
  [key: string]: string | number | boolean;
}

const Analytics = {
  /**
   * Track page views (called on route change)
   */
  pageView: (pathname: string) => {
    if (window.gtag) {
      window.gtag('pageview', {
        page_path: pathname,
      });
    }
    // Also track with Plausible if available
    if ((window as any).plausible) {
      (window as any).plausible('pageview');
    }
  },

  /**
   * Track custom events
   */
  event: (eventName: string, data?: AnalyticsEvent) => {
    if (window.gtag) {
      window.gtag('event', eventName, data);
    }
    // Also track with Plausible if available
    if ((window as any).plausible) {
      (window as any).plausible(eventName, { props: data });
    }
  },

  /**
   * Track link clicks
   */
  trackLinkClick: (url: string, label?: string) => {
    Analytics.event('link_click', {
      url,
      label: label || url,
    });
  },

  /**
   * Track music plays
   */
  trackMusicPlay: (title: string, platform: string) => {
    Analytics.event('music_play', {
      title,
      platform,
    });
  },
};

// Extend window type
declare global {
  interface Window {
    gtag?: (command: string, action: string, data?: any) => void;
    plausible?: (eventName: string, options?: any) => void;
  }
}

export default Analytics;
