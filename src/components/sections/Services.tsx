import Link from "next/link";
import {
  Building2,
  Globe,
  Anchor,
  FileText,
  Users,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";

const services = [
  {
    icon: Building2,
    title: "Business Setup UAE",
    description:
      "End-to-end mainland and free zone company registration. We handle licensing, approvals, and compliance from day one.",
    href: "/services/business-setup",
    tag: "Most Popular",
  },
  {
    icon: Globe,
    title: "Free Zone Setup",
    description:
      "100% foreign ownership with zero corporate tax. Choose from 50+ UAE free zones that match your business activity.",
    href: "/services/free-zone-setup",
  },
  {
    icon: Building2,
    title: "Mainland Company",
    description:
      "Trade anywhere in the UAE and GCC with a mainland license. Full market access with no restrictions.",
    href: "/services/mainland-company",
  },
  {
    icon: Anchor,
    title: "Offshore Company",
    description:
      "Asset protection, international banking, and global operations from a UAE-based offshore structure.",
    href: "/services/offshore-company",
  },
  {
    icon: FileText,
    title: "PRO Services",
    description:
      "Government liaison, document attestation, ministry approvals, and all paperwork — handled for you.",
    href: "/services/pro-services",
  },
  {
    icon: Users,
    title: "Visa Services",
    description:
      "Investor, partner, employee, and family visas. We manage the entire process quickly and correctly.",
    href: "/services/visa-services",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Offer"
        title="Complete Business Setup Services"
        description="Everything you need to launch and operate in the UAE — under one roof."
        className="mb-14"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-[#050C1A]/10 hover:border-[#C9963B]/40 bg-white hover:bg-[#050C1A]/[0.02] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {s.tag && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#C9963B]/10 text-[#A67C2A] border border-[#C9963B]/20">
                  {s.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#050C1A]/5 group-hover:bg-[#C9963B]/10 flex items-center justify-center transition-colors">
                <Icon className="h-6 w-6 text-[#050C1A]/60 group-hover:text-[#C9963B] transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#050C1A] mb-2 group-hover:text-[#0F2040]">
                  {s.title}
                </h3>
                <p className="text-sm text-[#163058]/60 leading-relaxed line-clamp-3">
                  {s.description}
                </p>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-[#C9963B] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
