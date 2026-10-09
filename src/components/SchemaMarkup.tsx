const SchemaMarkup = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: "Dr. Preeti's Bright Eye Care Hospital",
          image: "https://drpreetisbrighteyecare.com/assets/images/logo.png",
          url: "https://drpreetisbrighteyecare.com",
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            "name": "NABH Entry Level Certification Program (ELCP) for Hospitals, 2nd Edition",
            "credentialCategory": "NABH Entry Level Certification",
            "identifier": "ELCP-2026-18028",
            "recognizedBy": {
              "@type": "Organization",
              "name": "National Accreditation Board for Hospitals & Healthcare Providers"
            },
            "url": "https://drpreetisbrighteyecare.com/certificates/nabh-elcp-2026-18028.jpeg",
            "description": "Valid from 4 August 2026 through 3 August 2028, for the scope specified in the certificate annexure, subject to continued compliance."
          },
          telephone: "+91-6239507877",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Durga Market, Chhoti Nehar to Sarna Road, Near Flyover",
            addressLocality: "Pathankot",
            addressRegion: "Punjab",
            postalCode: "145025",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 32.27,
            longitude: 75.65,
          },
          openingHours: "Mo-Sa 09:00-19:00",
          priceRange: "₹₹",
          sameAs: ["https://www.instagram.com/drpreetisbrighteyecarehospital/"],
        }),
      }}
    />
  );
};

export default SchemaMarkup;
