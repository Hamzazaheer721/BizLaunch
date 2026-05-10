"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GitBranch,
  UserCheck,
  Briefcase,
  ClipboardList,
  CreditCard,
  Users,
  UserX,
  FileCheck2,
  MailOpen,
  Shield,
  BookOpen,
  FileText,
  PenLine,
  ShieldCheck,
  Landmark,
} from "lucide-react";

const services = [
  { icon: Building2,     label: "Company Formation" },
  { icon: GitBranch,     label: "Branch Creation" },
  { icon: UserCheck,     label: "Resident Visa" },
  { icon: Briefcase,     label: "Employee Visa" },
  { icon: ClipboardList, label: "Labour Cards" },
  { icon: CreditCard,    label: "Emirates ID Card" },
  { icon: Users,         label: "Family Visa" },
  { icon: UserX,         label: "Visa Cancellation" },
  { icon: FileCheck2,    label: "Document Attestation" },
  { icon: MailOpen,      label: "Mail Collection" },
  { icon: Shield,        label: "Copyright & Trademark" },
  { icon: BookOpen,      label: "Passport Clearance" },
  { icon: FileText,      label: "Trade License" },
  { icon: PenLine,       label: "Notarization" },
  { icon: ShieldCheck,   label: "Regulatory Approvals" },
  { icon: Landmark,      label: "Corporate Bank Account" },
];

export default function HelpWith() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F3FF] via-[#F8F9FB] to-[#EEF1FF]" />
      {/* Gold accent orb */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C9963B]/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
            Our Expertise
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050C1A] mb-4"
            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
          >
            We Can Help You With
          </h2>
          <p className="text-base sm:text-lg text-[#163058]/60 max-w-2xl mx-auto leading-relaxed">
            From company formation to banking — one expert team handles every aspect
            of your UAE business journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{ willChange: "opacity, transform" }}
                className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-white bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-[#C9963B]/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9963B]/15 to-[#C9963B]/5 flex items-center justify-center group-hover:from-[#C9963B]/25 group-hover:to-[#C9963B]/10 transition-all duration-300">
                  <Icon className="h-5 w-5 text-[#C9963B]" />
                </div>
                <span className="text-sm font-semibold text-[#163058] text-center leading-snug">
                  {svc.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
