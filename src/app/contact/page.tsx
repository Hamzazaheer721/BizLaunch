import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Free Business Setup Consultation",
  description:
    "Contact BizLaunch Corporate Services for a free business setup consultation in UAE. Speak to our experts about mainland, free zone, offshore, PRO, and visa services.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9963B]/10 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
              Get In Touch
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Book Your Free Consultation
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Fill in the form below and a specialist will contact you within 24 hours. No
              commitment required — just honest advice for your business.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
