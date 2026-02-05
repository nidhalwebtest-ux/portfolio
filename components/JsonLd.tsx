export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nidhal Ghdiri",
    url: "https://nidhalghdiri.com",
    jobTitle: "NetSuite Administrator",
    worksFor: {
      "@type": "Organization",
      name: "Nidhal Ghdiri", // Optional
    },
    sameAs: [
      "https://www.linkedin.com/in/nidhal-ghdiri/",
      "https://github.com/nidhalghdiri",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salalah",
      addressCountry: "Oman",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
