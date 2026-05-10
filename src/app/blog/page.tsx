import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import CTABanner from "@/components/sections/CTABanner";
import { formatDate, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Business Setup Blog | UAE Company Formation Guides",
  description:
    "Expert guides, tips, and news on business setup in UAE. Learn about free zones, mainland company formation, visa requirements, and more.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export const blogPosts = [
  {
    slug: "how-to-setup-business-dubai-2024",
    title: "How to Set Up a Business in Dubai: Complete 2025 Guide",
    excerpt:
      "A step-by-step guide covering everything you need to know about business registration in Dubai — from choosing your license type to opening a corporate bank account.",
    date: "2025-04-10",
    readTime: "8 min read",
    category: "Business Setup",
  },
  {
    slug: "best-free-zones-dubai-2025",
    title: "Top 10 Free Zones in Dubai and UAE for 2025",
    excerpt:
      "Comparing the best UAE free zones — DMCC, DIFC, IFZA, Shams, and more. Which is right for your business type and budget?",
    date: "2025-03-22",
    readTime: "6 min read",
    category: "Free Zones",
  },
  {
    slug: "mainland-vs-freezone-uae",
    title: "Mainland vs Free Zone in UAE: Which Should You Choose?",
    excerpt:
      "Breaking down the key differences between mainland and free zone company structures in the UAE — costs, ownership, trading rights, and visa quotas.",
    date: "2025-03-05",
    readTime: "7 min read",
    category: "Business Setup",
  },
  {
    slug: "uae-visa-for-investors-guide",
    title: "UAE Investor Visa: Types, Requirements & How to Apply",
    excerpt:
      "Everything you need to know about UAE investor and partner visas — eligibility, documents, processing time, and the golden visa option.",
    date: "2025-02-18",
    readTime: "5 min read",
    category: "Visa Services",
  },
  {
    slug: "pro-services-what-is-it",
    title: "What Are PRO Services in UAE and Do You Need Them?",
    excerpt:
      "PRO (Public Relations Officer) services explained — what they cover, how they save you time, and when your business should outsource them.",
    date: "2025-01-30",
    readTime: "4 min read",
    category: "PRO Services",
  },
  {
    slug: "uae-corporate-tax-guide-2025",
    title: "UAE Corporate Tax 2025: What Business Owners Need to Know",
    excerpt:
      "A plain-English breakdown of UAE's 9% corporate tax — who it applies to, exemptions, free zone treatment, and how to stay compliant.",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "Compliance",
  },
];

const categoryColors: Record<string, string> = {
  "Business Setup": "bg-blue-50 text-blue-700",
  "Free Zones": "bg-purple-50 text-purple-700",
  "Visa Services": "bg-green-50 text-green-700",
  "PRO Services": "bg-orange-50 text-orange-700",
  Compliance: "bg-red-50 text-red-700",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9963B]/10 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
              BizLaunch Blog
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              UAE Business Insights
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Expert guides, regulatory updates, and practical advice for starting and growing
              your business in the UAE.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <Section>
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-14 p-8 rounded-3xl border border-[#050C1A]/10 hover:border-[#C9963B]/40 hover:shadow-xl transition-all duration-300 bg-[#F8F9FB]"
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {featured.category}
                </span>
                <span className="text-xs text-[#163058]/40">Featured</span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#050C1A] mb-3 group-hover:text-[#0F2040] leading-snug"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                {featured.title}
              </h2>
              <p className="text-sm text-[#163058]/60 leading-relaxed mb-4 max-w-xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#163058]/40">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
                <span>{formatDate(featured.date)}</span>
              </div>
            </div>
            <div className="lg:shrink-0 flex items-center gap-2 text-sm font-semibold text-[#C9963B] group-hover:gap-3 transition-all">
              Read article <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 p-6 rounded-2xl border border-[#050C1A]/10 hover:border-[#C9963B]/40 hover:shadow-lg bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {post.category}
                </span>
              </div>
              <h2
                className="text-base font-bold text-[#050C1A] group-hover:text-[#0F2040] leading-snug line-clamp-2"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                {post.title}
              </h2>
              <p className="text-sm text-[#163058]/60 leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#163058]/40">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1 text-[#C9963B] font-semibold group-hover:gap-2 transition-all">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
