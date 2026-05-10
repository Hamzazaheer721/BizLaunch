import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Globe,
  Anchor,
  FileText,
  Users,
  ArrowRight,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Business Setup Services in UAE",
  description:
    "Complete business setup services in UAE: mainland company, free zone setup, offshore company, PRO services, visa processing, and more. Serving Dubai and all Emirates.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export const services = [
  {
    slug: "business-setup",
    icon: Building2,
    title: "Business Setup UAE",
    shortDescription:
      "End-to-end company registration for mainland, free zone, and offshore structures. We handle everything from trade license to bank account opening.",
    benefits: [
      "Full trade license application",
      "Memorandum of Association drafting",
      "Office space sourcing",
      "Corporate bank account assistance",
      "Ongoing compliance support",
    ],
    metaTitle: "Business Setup in UAE | Company Formation Dubai",
    metaDescription:
      "Professional business setup services in UAE. We handle mainland, free zone, and offshore company formation in Dubai with fast turnaround and transparent pricing.",
  },
  {
    slug: "free-zone-setup",
    icon: Globe,
    title: "Free Zone Setup",
    shortDescription:
      "100% foreign ownership. Choose from 50+ UAE free zones — DMCC, DIFC, IFZA, Shams, and more. We match you to the right jurisdiction for your business.",
    benefits: [
      "100% foreign ownership",
      "0% corporate and personal tax",
      "Full profit repatriation",
      "Flexi-desk and virtual office options",
      "Multiple visa quotas available",
    ],
    metaTitle: "Free Zone Company Setup UAE | Dubai Free Zone Business",
    metaDescription:
      "Set up a free zone company in UAE with 100% foreign ownership and zero tax. We cover 50+ free zones including DMCC, DIFC, IFZA, and Shams.",
  },
  {
    slug: "mainland-company",
    icon: Building2,
    title: "Mainland Company",
    shortDescription:
      "Trade anywhere in the UAE and GCC. Full market access with a DED-licensed mainland company, including government contracts eligibility.",
    benefits: [
      "Trade anywhere in UAE & GCC",
      "Bid on government contracts",
      "No restrictions on business activities",
      "Multiple visa quotas",
      "Wide range of permitted activities",
    ],
    metaTitle: "Mainland Company Formation Dubai | DED License UAE",
    metaDescription:
      "Form a mainland company in Dubai with a DED trade license. Full market access, government contract eligibility, and no ownership restrictions for most activities.",
  },
  {
    slug: "offshore-company",
    icon: Anchor,
    title: "Offshore Company",
    shortDescription:
      "International asset protection and banking from a UAE offshore structure. Ideal for holding companies, IP rights, and global trading.",
    benefits: [
      "Asset protection & privacy",
      "International banking access",
      "No UAE tax liability",
      "Suitable for holding structures",
      "RAK ICC and JAFZA jurisdictions",
    ],
    metaTitle: "Offshore Company UAE | RAK ICC & JAFZA Offshore Setup",
    metaDescription:
      "Set up an offshore company in UAE for asset protection and international banking. We cover RAK ICC and JAFZA jurisdictions with fast, affordable setup.",
  },
  {
    slug: "pro-services",
    icon: FileText,
    title: "PRO Services",
    shortDescription:
      "Government document processing, attestation, ministry approvals, license renewals, and all UAE administrative paperwork — handled by our expert PRO team.",
    benefits: [
      "Document attestation & notarization",
      "Ministry of Labour approvals",
      "License renewals",
      "Immigration & residency paperwork",
      "Municipality approvals",
    ],
    metaTitle: "PRO Services Dubai | Government Document Processing UAE",
    metaDescription:
      "Professional PRO services in Dubai and UAE. We handle all government document processing, attestation, ministry approvals, and licensing paperwork.",
  },
  {
    slug: "visa-services",
    icon: Users,
    title: "Visa Services",
    shortDescription:
      "Investor, partner, employee, and family visas in the UAE. We manage medical checks, Emirates ID, and the full residency visa process.",
    benefits: [
      "Investor & partner visas",
      "Employment visas",
      "Family residency visas",
      "Medical fitness processing",
      "Emirates ID application",
    ],
    metaTitle: "UAE Visa Services | Investor & Residency Visa Dubai",
    metaDescription:
      "Complete UAE visa services including investor, employment, and family residency visas. We manage the full process from application to Emirates ID.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#C9963B]/10 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
              Our Services
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Complete Business Setup Services in UAE
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
              From mainland trade licenses to free zone companies, visa processing to PRO
              services — we handle every aspect of your UAE business journey.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col gap-5 p-6 rounded-2xl border border-[#050C1A]/10 hover:border-[#C9963B]/40 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050C1A]/5 group-hover:bg-[#C9963B]/10 flex items-center justify-center transition-colors">
                  <Icon className="h-6 w-6 text-[#050C1A]/60 group-hover:text-[#C9963B] transition-colors" />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-bold text-[#050C1A] mb-2">{s.title}</h2>
                  <p className="text-sm text-[#163058]/60 leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {s.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-[#163058]/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9963B] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="flex items-center gap-1 text-xs font-semibold text-[#C9963B] group-hover:gap-2 transition-all">
                  View service details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
