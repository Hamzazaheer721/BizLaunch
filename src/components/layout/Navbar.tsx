"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE_NUMBER } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Setup", href: "/services/business-setup" },
      { label: "Mainland Company", href: "/services/mainland-company" },
      { label: "Free Zone Setup", href: "/services/free-zone-setup" },
      { label: "Offshore Company", href: "/services/offshore-company" },
      { label: "PRO Services", href: "/services/pro-services" },
      { label: "Visa Services", href: "/services/visa-services" },
      { label: "Licensing", href: "/licensing" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050C1A]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-white">Biz</span>
              <span className="text-gradient-gold">Launch</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-[#E0B860] transition-colors rounded-lg">
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === link.href && "rotate-180"
                        )}
                      />
                    </button>
                    {activeDropdown === link.href && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 rounded-xl bg-[#050C1A] border border-white/10 shadow-xl shadow-black/40 overflow-hidden">
                        <div className="py-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-white/70 hover:text-[#E0B860] hover:bg-white/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-[#E0B860] transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-[#E0B860] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white transition-colors shadow-lg shadow-[#C9963B]/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#050C1A] z-40 overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-white/80 rounded-lg hover:bg-white/5"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.href ? null : link.href
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileExpanded === link.href && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileExpanded === link.href && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2.5 text-sm text-white/60 hover:text-[#E0B860] transition-colors rounded-lg"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-white/80 hover:text-[#E0B860] rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-[#E0B860] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </a>
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
