import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LicensingTabs from "./LicensingTabs";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Business Licensing UAE | Free Zone, Mainland & Offshore Licenses",
  description:
    "Get a business license in UAE — free zone, mainland, or offshore. BizLaunch handles commercial, industrial, professional, and tourism licenses across Dubai and all Emirates.",
  alternates: { canonical: `${SITE_URL}/licensing` },
  keywords: [
    "business license UAE",
    "trade license Dubai",
    "free zone license UAE",
    "mainland license Dubai",
    "offshore license UAE",
    "commercial license Dubai",
    "professional license UAE",
    "DED license Dubai",
  ],
  openGraph: {
    title: "Business Licensing UAE | Free Zone, Mainland & Offshore",
    description:
      "Expert business licensing services across UAE free zones, mainland, and offshore jurisdictions. Fast, compliant, transparent.",
    url: `${SITE_URL}/licensing`,
  },
};

export default function LicensingPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9963B]/10 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-[#E0B860] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Licensing</span>
          </div>
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
              Business Licensing UAE
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              The Right License for
              <br />
              Your UAE Business
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mb-8">
              BizLaunch makes obtaining a trade license in Dubai straightforward. We handle
              commercial, industrial, professional, and tourism licenses across mainland,
              free zone, and offshore jurisdictions — tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white transition-colors shadow-lg shadow-[#C9963B]/20"
              >
                Get Free Advice <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-white/20 text-white hover:border-[#E0B860] hover:text-[#E0B860] transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Intro strip */}
      <section className="py-10 bg-[#F8F9FB] border-b border-[#050C1A]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#163058]/60 max-w-3xl leading-relaxed">
            With over a decade of expertise, BizLaunch is a trusted choice for business
            setup and licensing services across Dubai and the UAE. Our experienced team
            ensures a smooth application and maintenance process — tailored to your specific
            business type, activity, and jurisdiction.
          </p>
        </div>
      </section>

      {/* Main tab content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LicensingTabs />
        </div>
      </section>

      {/* Visa note */}
      <section className="py-12 bg-[#F8F9FB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Free Zone",
                visa: "Visa quota based on office size. Flexi-desk typically allows 1–3 visas. Dedicated offices allow more.",
              },
              {
                type: "Mainland",
                visa: "Resident visas required for management and employees. Larger quota capacity — no cap for most activities.",
              },
              {
                type: "Offshore",
                visa: "Offshore company holders are not entitled to UAE resident visas. Ideal for international operations only.",
              },
            ].map((item) => (
              <div
                key={item.type}
                className="p-5 rounded-xl border border-[#050C1A]/8 bg-white"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#C9963B] mb-2">
                  {item.type} — Visa Entitlement
                </p>
                <p className="text-sm text-[#163058]/60 leading-relaxed">{item.visa}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
