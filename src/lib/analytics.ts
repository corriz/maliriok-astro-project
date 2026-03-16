import { site } from '../data/site';

export function getGa4Snippet() {
  if (!site.analytics.ga4Id || site.analytics.ga4Id === 'G-XXXXXXXXXX') return '';

  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied'
    });
    gtag('js', new Date());
    gtag('config', '${site.analytics.ga4Id}', { anonymize_ip: true });
  `;
}
