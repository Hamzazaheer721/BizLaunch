import { CheckCircle2, Clock, Shield, HeadphonesIcon } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Fully Licensed & Compliant",
    description:
      "We operate in full compliance with UAE regulations. Every company we set up meets all legal and regulatory requirements from day one.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most business setups are completed in 3–7 business days. We streamline the process so you can start trading quickly.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. We provide a clear breakdown of costs before you commit to anything.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Your dedicated advisor is available via phone, email, and WhatsApp throughout the entire process and beyond.",
  },
];

export default function WhyUs() {
  return (
    <Section id="why-us" className="bg-[#F8F9FB]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionHeading
            eyebrow="Why BizLaunch"
            title="The Smarter Way to Set Up in UAE"
            description="We've helped over 1,000 entrepreneurs and companies navigate the UAE business landscape. Here's what sets us apart."
          />
          <div className="mt-10 space-y-6">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#050C1A]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-[#C9963B]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#050C1A] mb-1">{r.title}</h3>
                    <p className="text-sm text-[#163058]/60 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process steps */}
        <div className="relative">
          <div className="bg-[#050C1A] rounded-3xl p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9963B] mb-6">
              How It Works
            </p>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  desc: "Tell us about your business. We advise on the best structure.",
                },
                {
                  step: "02",
                  title: "Document Collection",
                  desc: "We guide you through the required documents — usually just passport copies.",
                },
                {
                  step: "03",
                  title: "License Application",
                  desc: "We submit all applications and handle government communications.",
                },
                {
                  step: "04",
                  title: "Launch & Operate",
                  desc: "Receive your trade license, open a corporate bank account, and start.",
                },
              ].map((step, i) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#C9963B]/20 border border-[#C9963B]/40 flex items-center justify-center text-xs font-bold text-[#E0B860] shrink-0">
                      {step.step}
                    </div>
                    {i < 3 && (
                      <div className="w-px flex-1 bg-white/10 mt-2 mb-0 min-h-[24px]" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
