import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/app/blog/page";
import CTABanner from "@/components/sections/CTABanner";
import { formatDate, SITE_URL } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

// Inline content for blog posts (keeps things simple without a CMS)
const postContent: Record<string, string> = {
  "how-to-setup-business-dubai-2024": `
Setting up a business in Dubai is one of the most attractive options for entrepreneurs worldwide. With its strategic location, world-class infrastructure, and business-friendly regulations, Dubai continues to draw global investment.

## Step 1: Choose Your Business Activity

Your business activity determines which license type you need and where you can operate. Dubai broadly categorizes activities into:
- **Commercial** — trading goods
- **Professional** — providing services
- **Industrial** — manufacturing or production

## Step 2: Decide on Mainland or Free Zone

**Mainland** gives you access to the entire UAE market and the ability to bid on government contracts. Since 2021, most mainland activities allow 100% foreign ownership.

**Free Zone** offers zero corporate tax, full repatriation of profits, and simplified setup — but you may face restrictions trading directly within the UAE mainland without a local distributor.

## Step 3: Reserve Your Trade Name

Choose a unique business name that follows UAE naming conventions — no offensive words, no references to Allah or other religious figures, and it must reflect your business activity.

## Step 4: Apply for a Trade License

Submit your application to the Department of Economic Development (mainland) or the relevant free zone authority. Required documents typically include:
- Passport copies of all shareholders
- Visa page (if UAE resident)
- Proposed trade name
- Business activity description

## Step 5: Secure Office Space

All UAE businesses require a registered physical address. Free zones often offer flexi-desks and virtual office options. Mainland companies require a tenancy contract (Ejari registration).

## Step 6: Open a Corporate Bank Account

Once you have your trade license, you can open a corporate bank account. UAE banks have varying requirements — we recommend preparing 3–6 months of projected transactions and a solid business plan.

## Ready to Get Started?

BizLaunch handles every step of this process for you. Book a free consultation and we'll advise on the best setup for your specific business.
  `.trim(),
};

const categoryColors: Record<string, string> = {
  "Business Setup": "bg-blue-50 text-blue-700",
  "Free Zones": "bg-purple-50 text-purple-700",
  "Visa Services": "bg-green-50 text-green-700",
  "PRO Services": "bg-orange-50 text-orange-700",
  Compliance: "bg-red-50 text-red-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug];
  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#E0B860] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-white/10 text-white/70"}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-white/40 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
            <span className="text-xs text-white/40">{formatDate(post.date)}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
          >
            {post.title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <p className="text-lg text-[#163058]/80 leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
              {content ? (
                <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#050C1A] prose-p:text-[#163058]/70 prose-p:leading-relaxed prose-li:text-[#163058]/70 prose-strong:text-[#050C1A] prose-a:text-[#C9963B] hover:prose-a:text-[#E0B860]">
                  {content.split("\n\n").map((block, i) => {
                    if (block.startsWith("## ")) {
                      return (
                        <h2 key={i} className="text-xl font-bold text-[#050C1A] mt-8 mb-4">
                          {block.slice(3)}
                        </h2>
                      );
                    }
                    if (block.startsWith("- ")) {
                      const items = block.split("\n").filter((l) => l.startsWith("- "));
                      return (
                        <ul key={i} className="space-y-2 mb-6 ml-4">
                          {items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#163058]/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9963B] shrink-0 mt-2" />
                              <span dangerouslySetInnerHTML={{ __html: item.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={i} className="text-sm text-[#163058]/70 leading-relaxed mb-4">
                        {block}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-[#F8F9FB] rounded-2xl p-8 text-center">
                  <p className="text-sm text-[#163058]/50">Full article coming soon.</p>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-[#050C1A] rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-base font-bold mb-2">Need Help Setting Up?</h3>
                <p className="text-xs text-white/50 mb-4 leading-relaxed">
                  Our experts handle everything from license applications to visa processing.
                </p>
                <Link
                  href="/contact"
                  className="block text-center w-full px-4 py-2.5 rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white text-sm font-semibold transition-colors mb-3"
                >
                  Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="block text-center w-full px-4 py-2.5 rounded-full border border-white/20 text-white hover:border-[#E0B860] hover:text-[#E0B860] text-sm font-semibold transition-colors"
                >
                  View Services
                </Link>
              </div>

              {related.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-[#050C1A] mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="block p-4 rounded-xl border border-[#050C1A]/10 hover:border-[#C9963B]/40 hover:shadow-sm transition-all"
                      >
                        <div className="text-xs font-semibold text-[#C9963B] mb-1">{r.category}</div>
                        <div className="text-sm font-medium text-[#050C1A] leading-snug line-clamp-2">{r.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
