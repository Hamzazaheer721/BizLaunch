import { COMPANY_NAME, SITE_URL, PHONE_NUMBER, EMAIL } from "@/lib/utils";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
        url: SITE_URL,
        telephone: PHONE_NUMBER,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        serviceType: [
          "Business Setup UAE",
          "Company Formation Dubai",
          "Company Registration UAE",
          "Free Zone Company Setup",
          "Mainland Company Formation",
          "Offshore Company UAE",
          "Trade License Dubai",
          "PRO Services Dubai",
          "Visa Services UAE",
          "Resident Visa UAE",
          "Employee Visa UAE",
          "Family Visa UAE",
          "Labour Card UAE",
          "Emirates ID",
          "Document Attestation UAE",
          "Corporate Bank Account UAE",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "14:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "UAE Business Setup Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mainland Company Formation Dubai" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Zone Company Setup UAE" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offshore Company UAE" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trade License Dubai" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PRO Services Dubai" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visa Services UAE" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY_NAME,
        description:
          "UAE business setup consultants. Mainland, free zone, and offshore company formation in Dubai.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does it cost to set up a business in UAE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Business setup costs in UAE vary by jurisdiction. Free zone companies typically start from AED 10,000–50,000. Mainland company formation via DED starts from AED 15,000–30,000. Offshore companies in JAFZA or RAK ICC start from AED 8,000–20,000. Contact us for a precise quote tailored to your activity and visa requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can a foreigner own 100% of a business in Dubai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. UAE's 2021 foreign ownership reforms allow 100% foreign ownership for most mainland business activities. Free zone companies have always allowed 100% foreign ownership. Offshore companies also allow 100% expat ownership.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a free zone and mainland company in UAE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A free zone company operates within a designated economic zone and benefits from 0% tax, 100% foreign ownership, and customs duty exemptions — but cannot trade directly inside the UAE market without a distributor. A mainland company can trade anywhere in the UAE and GCC, bid on government contracts, and has no location or customer restrictions.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to set up a company in Dubai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Free zone company formation typically takes 3–7 business days. Mainland company registration via DED takes 5–10 business days. Offshore company incorporation can be completed in 3–5 business days. BizLaunch handles the entire process to ensure the fastest possible setup.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a physical office to set up a business in UAE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not always. Many free zones offer flexi-desk or co-working options that satisfy the office requirement without a dedicated space. Mainland companies require a registered address (Ejari). Offshore companies require no physical presence in the UAE at all.",
            },
          },
          {
            "@type": "Question",
            name: "What business activities can I do with a UAE trade license?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "UAE trade licenses cover commercial (trading), professional (services), industrial (manufacturing), and tourism activities. You can include multiple related activities under a single license. BizLaunch helps you identify the correct activity codes to maximise your scope of business.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
