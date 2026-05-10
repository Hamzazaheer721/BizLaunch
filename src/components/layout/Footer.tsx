import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PHONE_NUMBER, EMAIL, COMPANY_NAME } from "@/lib/utils";

const services = [
  { label: "Business Setup", href: "/services/business-setup" },
  { label: "Mainland Company", href: "/services/mainland-company" },
  { label: "Free Zone Setup", href: "/services/free-zone-setup" },
  { label: "Offshore Company", href: "/services/offshore-company" },
  { label: "PRO Services", href: "/services/pro-services" },
  { label: "Visa Services", href: "/services/visa-services" },
  { label: "Licensing", href: "/licensing" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050C1A] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Biz</span>
                <span className="text-gradient-gold">Launch</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Your trusted partner for business setup and corporate services in the UAE.
              We make launching and growing your business simple and compliant.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#E0B860] transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#C9963B]" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#E0B860] transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#C9963B]" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-[#C9963B] mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-[#E0B860] transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-[#E0B860] transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Start Your Business
            </h3>
            <p className="text-sm text-white/50 mb-5 leading-relaxed">
              Ready to launch your business in the UAE? Get a free consultation with our experts today.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 text-sm font-semibold rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white transition-colors shadow-lg shadow-[#C9963B]/20"
            >
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Registered in Dubai, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
