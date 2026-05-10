import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import HelpWith from "@/components/sections/HelpWith";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { COMPANY_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Business Setup UAE | Mainland, Free Zone & Offshore Company Formation",
  description:
    "Set up your business in UAE with BizLaunch. Expert mainland, free zone & offshore company registration, trade license, visa processing, and PRO services in Dubai. 1,000+ businesses launched. Get a free consultation.",
  alternates: { canonical: SITE_URL },
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
    "how to start a business in UAE",
    "Dubai company formation cost",
    "free zone vs mainland UAE",
    "UAE business consultants",
    "business setup Dubai cost",
  ],
  openGraph: {
    title: `${COMPANY_NAME} | Business Setup UAE`,
    description:
      "End-to-end business setup in UAE — mainland, free zone, offshore, PRO & visa services. Trusted by 1,000+ businesses.",
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <HelpWith />
      <Testimonials />
      <CTABanner />
    </>
  );
}
