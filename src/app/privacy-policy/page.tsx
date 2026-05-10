import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { COMPANY_NAME, EMAIL, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY_NAME}. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-mesh pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/40">Last updated: May 2025</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <div className="space-y-8 text-sm text-[#163058]/70 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">1. Introduction</h2>
              <p>
                {COMPANY_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting
                your personal information. This Privacy Policy explains how we collect, use,
                and safeguard data when you visit our website or use our services.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">2. Information We Collect</h2>
              <p>We may collect the following information when you contact us or use our services:</p>
              <ul className="mt-2 space-y-1 ml-4">
                {["Full name", "Email address", "Phone number", "Business information", "Message content from contact forms"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9963B] shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">3. How We Use Your Information</h2>
              <p>We use collected information to respond to enquiries, provide business setup services, send relevant updates (with your consent), and improve our website.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. Contact
                form submissions are transmitted securely and stored only as long as necessary
                to fulfil your request.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">5. Third-Party Services</h2>
              <p>
                We may use third-party tools such as email delivery services. These providers
                are bound by confidentiality agreements and may not use your data for any
                other purpose.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">6. Cookies</h2>
              <p>
                Our website may use essential cookies for site functionality. We do not use
                tracking cookies or third-party advertising cookies without your explicit
                consent.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">7. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete any personal data we hold
                about you. To exercise these rights, contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#C9963B] hover:text-[#E0B860]">
                  {EMAIL}
                </a>
                .
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#050C1A] mb-3">8. Contact</h2>
              <p>
                For privacy-related questions, email{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#C9963B] hover:text-[#E0B860]">
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
