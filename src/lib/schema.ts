import { site } from '../data/site';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    foundingDate: site.since,
    areaServed: site.area,
    logo: `${site.domain}/favicon.svg`
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HousePainter',
    '@id': `${site.domain}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    telephone: site.revealPhoneParts.join(' '),
    areaServed: site.area,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.streetAddress,
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country
    }
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.domain,
    inLanguage: site.locale
  };
}
