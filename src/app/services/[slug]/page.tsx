import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { services } from "@/app/services/page";
import CTABanner from "@/components/sections/CTABanner";
import Section from "@/components/ui/Section";
import { SITE_URL, PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9963B]/10 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/services" className="hover:text-[#E0B860] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </div>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-2xl bg-[#C9963B]/20 border border-[#C9963B]/40 flex items-center justify-center mb-6">
              <Icon className="h-7 w-7 text-[#E0B860]" />
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white transition-colors shadow-lg shadow-[#C9963B]/20"
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-white/20 text-white hover:border-[#E0B860] hover:text-[#E0B860] transition-colors"
              >
                <Phone className="h-4 w-4" /> {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Benefits */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
              What&apos;s Included
            </p>
            <h2
              className="text-3xl font-bold text-[#050C1A] mb-8"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Key Benefits & Inclusions
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#C9963B] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#163058]/70 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Sidebar */}
          <div className="bg-[#050C1A] rounded-3xl p-8 text-white">
            <h3 className="text-lg font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              Book a free consultation with our {service.title.toLowerCase()} specialists.
              We&apos;ll advise on the best structure, costs, and timeline for your specific situation.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white font-semibold text-sm transition-colors"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full border border-white/20 text-white hover:border-[#25D366] hover:text-[#25D366] font-semibold text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/30">
              Free consultation · No commitment required
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-[#F8F9FB]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
          Explore More
        </p>
        <h2
          className="text-2xl font-bold text-[#050C1A] mb-8"
          style={{ fontFamily: "var(--font-heading, sans-serif)" }}
        >
          Other Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services
            .filter((s) => s.slug !== slug)
            .slice(0, 3)
            .map((s) => {
              const RelIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-[#050C1A]/10 hover:border-[#C9963B]/40 bg-white hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#050C1A]/5 group-hover:bg-[#C9963B]/10 flex items-center justify-center shrink-0 transition-colors">
                    <RelIcon className="h-5 w-5 text-[#050C1A]/50 group-hover:text-[#C9963B] transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#050C1A] truncate">{s.title}</div>
                    <div className="text-xs text-[#163058]/50 truncate">{s.shortDescription.slice(0, 60)}…</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#C9963B] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
