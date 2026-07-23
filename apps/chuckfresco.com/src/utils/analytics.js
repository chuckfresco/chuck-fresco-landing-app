export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, parameters);
};

export const trackPageView = location => {
  trackEvent('page_view', {
    page_location: window.location.href,
    page_path: `${location.pathname}${location.search}${location.hash}`,
    page_title: document.title,
  });
};
