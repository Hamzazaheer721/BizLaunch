"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const highlights = [
  "100% foreign ownership allowed",
  "Setup in 3–5 business days",
  "Expert PRO & visa support",
];

const stats = [
  { value: "1,000+", label: "Businesses Launched" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Free Zones Covered" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold accent orb */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#C9963B]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0F2040]/80 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 xl:gap-20 items-center">
          {/* Left — text content */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9963B]/30 bg-[#C9963B]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C9963B] animate-pulse" />
              <span className="text-xs font-semibold text-[#E0B860] uppercase tracking-wider">
                UAE Business Setup Experts
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Launch Your Business
              <br />
              in the{" "}
              <span className="text-gradient-gold">UAE</span>
              <br />
              with Confidence
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-8">
              From mainland to free zone setup — we handle everything so you can focus
              on what matters. Trusted by 1,000+ businesses across Dubai and the UAE.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle className="h-4 w-4 text-[#C9963B] shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" variant="primary">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20business%20setup%20services%20in%20UAE.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-white/20 text-white hover:border-[#25D366] hover:text-[#25D366] transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — stat cards (desktop only) */}
          <div className="hidden lg:flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 text-right"
              >
                <div className="text-2xl font-bold text-gradient-gold">{stat.value}</div>
                <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
