import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
import StructuredData from "@/components/layout/StructuredData";
import { COMPANY_NAME, SITE_URL } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Business Setup in UAE`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Trusted UAE business setup consultants in Dubai. Mainland, free zone & offshore company formation, trade licenses, visa services, PRO services, labour cards, Emirates ID, document attestation, and corporate banking — all under one roof.",
  keywords: [
    "business setup UAE",
    "company formation Dubai",
    "company registration UAE",
    "free zone company UAE",
    "mainland company Dubai",
    "offshore company UAE",
    "trade license Dubai",
    "business license UAE",
    "PRO services Dubai",
    "visa services UAE",
    "UAE business consultants",
    "Dubai company setup cost",
    "free zone vs mainland UAE",
    "how to start business Dubai",
    "corporate bank account UAE",
    "Emirates ID UAE",
    "labour card UAE",
    "document attestation UAE",
    "resident visa UAE",
    "employee visa UAE",
    "family visa UAE",
    "visa cancellation UAE",
    "branch creation UAE",
    "copyright trademark UAE",
    "notarization UAE",
    "regulatory approvals UAE",
    "LLC formation Dubai",
    "DMCC free zone setup",
    "DIFC company setup",
    "passport clearance UAE",
    "mail collection service UAE",
    "Sharjah free zone setup",
    "Abu Dhabi business setup",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Business Setup UAE — Company Formation & Visa Services`,
    description:
      "End-to-end business setup in UAE. Mainland, free zone, offshore, trade licenses, visa & PRO services. Trusted by 1,000+ businesses across Dubai and the UAE.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Business Setup UAE`,
    description:
      "Expert UAE company formation — mainland, free zone, offshore, trade license, visa & PRO services. Trusted by 1,000+ businesses.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#050C1A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppCTA />
        <StructuredData />
      </body>
    </html>
  );
}
