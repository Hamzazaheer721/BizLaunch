"use client";

import { useState } from "react";
import { CheckCircle2, FileText, Building2, Globe, Anchor } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */

const tabs = ["Free Zone", "Mainland", "Offshore"] as const;
type Tab = (typeof tabs)[number];

const licenseTypes = {
  "Free Zone": [
    {
      icon: FileText,
      title: "Commercial License",
      desc: "Ideal for trading companies — import, export, re-export and distribution within the free zone and internationally. 100% foreign ownership with full profit repatriation.",
    },
    {
      icon: Building2,
      title: "Industrial License",
      desc: "For manufacturing and production activities within designated free zones. Access dedicated industrial land, utilities, and customs duty exemptions.",
    },
    {
      icon: FileText,
      title: "Professional License",
      desc: "For service-based businesses: consultancy, IT, media, education, and healthcare. 100% expat ownership permitted with no local sponsor required.",
    },
    {
      icon: Globe,
      title: "Tourism License",
      desc: "Travel agencies, tour operators, and hospitality businesses operating within free zones benefit from streamlined tourism licensing and dedicated support.",
    },
  ],
  Mainland: [
    {
      icon: FileText,
      title: "Commercial License",
      desc: "Essential for all types of commercial trade in Dubai. Recent reforms now allow 100% foreign ownership for most activities, issued by the Department of Economic Development (DED).",
    },
    {
      icon: Building2,
      title: "Industrial License",
      desc: "For companies converting raw resources into finished products — manufacturing, processing, and assembly. Issued by DED with access to industrial zones across the emirate.",
    },
    {
      icon: FileText,
      title: "Professional License",
      desc: "Permits 100% expat ownership while appointing a UAE national as a Local Service Agent. Ideal for non-physical services such as consultancy, legal, accounting, and freelancing.",
    },
    {
      icon: Globe,
      title: "Tourism License",
      desc: "Dubai offers three key tourism license types: Inbound tourism operator, Outbound tourism operator, and Travel agent — each issued by the Department of Tourism and Commerce Marketing.",
    },
  ],
  Offshore: [
    {
      icon: FileText,
      title: "Commercial License",
      desc: "For international trade, import-export, real estate holdings, and logistics. Issued through JAFZA or RAK ICC, enabling global business with full asset protection.",
    },
    {
      icon: Building2,
      title: "Industrial License",
      desc: "Applicable for offshore entities involved in manufacturing, petroleum, and resource-based industries. Structured for international operations with UAE as the registration base.",
    },
    {
      icon: FileText,
      title: "Professional License",
      desc: "For skilled individuals and service companies in consultancy, healthcare, and education. Our team assists with market identification, strategy, and full offshore setup.",
    },
    {
      icon: Globe,
      title: "Tourism License",
      desc: "Offshore travel businesses operate under a Certificate of Incorporation (not a traditional license). BizLaunch streamlines the process across JAFZA and RAK jurisdictions.",
    },
  ],
};

const benefits = {
  "Free Zone": [
    "100% foreign ownership — no local sponsor required",
    "0% corporate and personal income tax",
    "Full repatriation of profits and capital",
    "Customs duty exemptions on imports and exports",
    "Fast visa processing compared to Mainland",
    "Flexible office options: flexi-desk, co-working, or dedicated office",
    "Simplified setup process guided by free zone authority",
    "Access to 50+ UAE free zones matched to your industry",
  ],
  Mainland: [
    "Trade freely anywhere in the UAE and GCC",
    "Eligible to bid on government contracts",
    "0% corporate tax (with standard exemptions)",
    "100% foreign ownership now permitted for most activities",
    "No restrictions on business activities or locations",
    "Double taxation agreements — no import/export tax liabilities",
    "Larger visa quota capacity vs free zones",
    "Streamlined setup process with expert consultant guidance",
  ],
  Offshore: [
    "100% foreign ownership with full asset protection",
    "Complete tax exemption — no corporate or personal tax",
    "International banking access and confidentiality",
    "No physical office or UAE residency required",
    "Ideal for holding structures and IP rights ownership",
    "Access to two jurisdictions: JAFZA and RAK ICC",
    "Certificate of Incorporation issued instead of trade license",
    "No annual audit requirements in most cases",
  ],
};

const overviews: Record<Tab, { heading: string; body: string; note?: string }> = {
  "Free Zone": {
    heading: "Set Up in a UAE Free Zone",
    body:
      "Dubai's free zones are special economic hubs designed for international business. With 50+ free zones catering to every industry — from fintech and media to healthcare and logistics — free zone setup offers the fastest path to 100% foreign-owned business in the UAE. BizLaunch matches you to the right free zone for your activity, budget, and visa needs, then handles the entire application process.",
    note: "Estimated setup cost: AED 10,000 – 50,000 depending on free zone, activity, and office type.",
  },
  Mainland: {
    heading: "Mainland Company Formation in Dubai",
    body:
      "A mainland company gives you the most flexibility in the UAE — trade anywhere in the country, serve government clients, and operate without restrictions on location or customers. Recent UAE reforms allow 100% foreign ownership for most business activities, making mainland setup more attractive than ever. BizLaunch handles your DED license application, office registration (Ejari), and all government liaison.",
    note:
      "The 0% corporate tax rate continues to make the UAE one of the most attractive business destinations worldwide.",
  },
  Offshore: {
    heading: "UAE Offshore Company Formation",
    body:
      "An offshore company in the UAE operates beyond its registration location and is ideal for asset protection, international banking, IP holding, and global trade structures. Unlike mainland or free zone companies, offshore entities do not receive a traditional trade license — instead, a Certificate of Incorporation is issued. The two primary offshore jurisdictions in the UAE are Jebel Ali Free Zone (JAFZA) and Ras Al Khaimah (RAK ICC).",
    note:
      "Offshore companies cannot conduct business directly within the UAE but can hold assets, own real estate, and operate internationally.",
  },
};

const offshoreDocuments = [
  "Application in the requisite format",
  "Address proof (utility bill or bank statement)",
  "Bank reference letter from applicant's bank",
  "Passport copies of all owners and shareholders",
  "Passport copy of the designated manager",
  "Notarized Memorandum of Association (MOA)",
  "Business plan outlining intended activities",
  "Curriculum Vitae (CV) of the owner/director",
];

/* ─── Component ─────────────────────────────────────────────── */

export default function LicensingTabs() {
  const [active, setActive] = useState<Tab>("Free Zone");

  const Icon =
    active === "Free Zone" ? Globe : active === "Mainland" ? Building2 : Anchor;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-[#050C1A]/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === tab
                ? "bg-[#050C1A] text-white shadow-lg"
                : "bg-[#F8F9FB] text-[#163058]/60 hover:bg-[#050C1A]/5 hover:text-[#050C1A]"
            }`}
          >
            {tab} License
          </button>
        ))}
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-14">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#C9963B]/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-[#C9963B]" />
            </div>
            <h2
              className="text-2xl font-bold text-[#050C1A]"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              {overviews[active].heading}
            </h2>
          </div>
          <p className="text-sm text-[#163058]/70 leading-relaxed mb-4">
            {overviews[active].body}
          </p>
          {overviews[active].note && (
            <div className="inline-flex items-start gap-2 px-4 py-3 rounded-xl bg-[#C9963B]/8 border border-[#C9963B]/20 text-sm text-[#A67C2A]">
              <span className="shrink-0 mt-0.5">💡</span>
              {overviews[active].note}
            </div>
          )}
        </div>

        {/* Benefits */}
        <div className="lg:col-span-2 bg-[#F8F9FB] rounded-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9963B] mb-4">
            Key Benefits
          </p>
          <ul className="space-y-2.5">
            {benefits[active].map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#C9963B] shrink-0 mt-0.5" />
                <span className="text-sm text-[#163058]/70">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* License types */}
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#C9963B] mb-6">
          License Types Available
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {licenseTypes[active].map((lt) => {
            const LtIcon = lt.icon;
            return (
              <div
                key={lt.title}
                className="flex gap-4 p-5 rounded-xl border border-[#050C1A]/8 bg-white hover:border-[#C9963B]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#050C1A]/5 flex items-center justify-center shrink-0 mt-0.5">
                  <LtIcon className="h-4.5 w-4.5 text-[#C9963B]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#050C1A] mb-1">{lt.title}</h3>
                  <p className="text-xs text-[#163058]/60 leading-relaxed">{lt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Offshore-specific: Documents Required */}
      {active === "Offshore" && (
        <div className="bg-[#050C1A] rounded-2xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9963B] mb-5">
            Documents Required for Offshore Formation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {offshoreDocuments.map((doc, i) => (
              <div key={doc} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#C9963B]/20 border border-[#C9963B]/40 flex items-center justify-center text-[10px] font-bold text-[#E0B860] shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-white/70 leading-relaxed">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
