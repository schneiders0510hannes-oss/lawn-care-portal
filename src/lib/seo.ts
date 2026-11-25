export const SITE_URL = "https://lawn-care-portal.lovable.app";

export const NEARBY_TOWNS = [
  "Gillenfeld", "Strohn", "Saxler", "Udler", "Immerath", "Pantenburg", "Mehren",
  "Schalkenmehren", "Daun", "Ulmen", "Manderscheid", "Eckfeld", "Wallscheid", "Steiningen",
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LandscapingBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "Gartenarbeiten Schneiders",
  url: SITE_URL,
  telephone: "+49 176 55033897",
  email: "schneiders0510.hannes@web.de",
  founder: { "@type": "Person", name: "Hannes Arthur Schneiders" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Im Rehwinkel 11",
    postalCode: "54558",
    addressLocality: "Gillenfeld",
    addressRegion: "Rheinland-Pfalz",
    addressCountry: "DE",
  },
  areaServed: NEARBY_TOWNS.map((name) => ({ "@type": "City", name })),
  makesOffer: ["Rasen mähen", "Heckenschnitt", "Gartenpflege", "Grünflächenpflege"].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};
