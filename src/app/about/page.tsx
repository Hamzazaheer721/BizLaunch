import type { Metadata } from "next";
import { Target, Award, Globe, Users } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import CTABanner from "@/components/sections/CTABanner";
import Team from "@/components/sections/Team";
import CountUp from "@/components/ui/CountUp";
import { COMPANY_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BizLaunch Corporate Services — UAE's trusted business setup consultants with 10+ years of experience helping entrepreneurs launch in Dubai and across the Emirates.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description:
      "Every recommendation we make is tailored to your specific business goals, not what's easiest for us.",
  },
  {
    icon: Award,
    title: "Regulatory Expertise",
    description:
      "Deep knowledge of UAE mainland, free zone, and offshore regulations ensures your company is always compliant.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We work with clients from 50+ nationalities, providing multilingual support and cross-border understanding.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after setup. We're your ongoing corporate services partner for years to come.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
              About BizLaunch
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Your Trusted Partner for Business in the UAE
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
              Since 2014, we&apos;ve helped entrepreneurs and established businesses navigate UAE
              company formation, compliance, and corporate services — making the process
              simple, transparent, and fast.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              title="Making Business Setup Simple for Everyone"
              description="The UAE is one of the world's best places to do business — but navigating the legal, regulatory, and administrative landscape can be overwhelming. We exist to remove that complexity."
            />
            <p className="mt-6 text-sm text-[#163058]/60 leading-relaxed">
              Whether you&apos;re a solo entrepreneur launching your first company or a multinational
              expanding into the Gulf, we provide the same level of expertise and attention.
              Our consultants have collective experience spanning over a decade in UAE corporate law,
              government relations, and business operations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { to: 1000, suffix: "+", thousands: true,  label: "Companies Formed" },
              { to: 10,   suffix: "+", thousands: false, label: "Years Experience" },
              { to: 50,   suffix: "+", thousands: false, label: "Nationalities Served" },
              { to: 50,   suffix: "+", thousands: false, label: "Free Zones Covered" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#F8F9FB] rounded-2xl p-6 flex flex-col gap-1"
              >
                <div className="text-3xl font-bold text-gradient-gold">
                  <CountUp to={s.to} suffix={s.suffix} thousands={s.thousands} duration={2} />
                </div>
                <div className="text-xs text-[#163058]/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <SectionHeading
          eyebrow="Our Values"
          title="What We Stand For"
          light
          centered
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9963B]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9963B]/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[#C9963B]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Team */}
      <Team />

      <CTABanner />
    </>
  );
}
