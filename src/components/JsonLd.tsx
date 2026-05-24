import { about } from "@/lib/data";

export default function JsonLd() {
  const { name, realName, descriptions, work, location } = about();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: realName,
    alternateName: name,
    description: descriptions[0],
    jobTitle: work[0],
    address: {
      "@type": "PostalAddress",
      addressCountry: location,
    },
    url: "https://unfazed-portfolio.vercel.app",
    sameAs: [
      "https://github.com/Unfazed-Akash",
      "https://www.linkedin.com/in/unfazed-akash/",
      "https://x.com/unfazed_akash",
      "https://www.instagram.com/unfazed_akash",
      "https://www.youtube.com/@unfazed_akash",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
