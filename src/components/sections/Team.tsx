"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Zaheer Yousaf",
    role: "Managing Director / Partner",
    photo: "/team/zaheer-yousaf.jpg",
    location: "",
    qualification: "",
    phone: "+971 (56) 701 2245",
    email: "md@weknowbuis.com",
    whatsapp: "971567012245",
    telegram: "zaheer_yousaf",
    viber: "971567012245",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Irina Arana",
    role: "Senior Business Consultant",
    photo: "/team/irina-arana.jpg",
    location: "Los Angeles, CA, USA",
    qualification: "Bachelor and Master of Arts Degree in Public Administration and Economics",
    phone: "+1 (323) 377 6760",
    email: "irina.a@weknowbuis.com",
    whatsapp: "13233776760",
    telegram: "irina_arana",
    viber: "13233776760",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Maryia Halauniova",
    role: "Corporate Business Consultant",
    photo: "/team/maryia-halauniova.jpg",
    location: "Salt Lake City, Utah, USA",
    qualification: "",
    phone: "+1 (801) 916 2157",
    email: "maria.h@weknowbuis.com",
    whatsapp: "18019162157",
    telegram: "maryia_h",
    viber: "18019162157",
    linkedin: "https://www.linkedin.com/",
  },
];

// Fade + lift only — y-only avoids GPU stutter from competing x/y transforms
const slideDir = [
  { x: 0, y: 30 },
  { x: 0, y: 30 },
  { x: 0, y: 30 },
];

const socialLinks = (member: (typeof team)[number]) => [
  {
    href: `https://wa.me/${member.whatsapp}`,
    label: "WhatsApp",
    bg: "bg-[#25D366] hover:bg-[#20c05a]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    href: `https://t.me/${member.telegram}`,
    label: "Telegram",
    bg: "bg-[#2AABEE] hover:bg-[#229ed9]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    href: `viber://chat?number=${member.viber}`,
    label: "Viber",
    bg: "bg-[#7360F2] hover:bg-[#5b4ce0]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M11.4 0C5.7 0 1.2 4.3 1.2 9.6c0 3 1.4 5.7 3.7 7.5v3.7l3.4-1.9c.9.3 1.9.4 2.9.4 5.7 0 10.3-4.3 10.3-9.6C21.5 4.3 17 0 11.4 0zm1 13.6l-2.5-2.7-4.9 2.7 5.4-5.7 2.6 2.7 4.8-2.7-5.4 5.7z" />
      </svg>
    ),
  },
  {
    href: member.linkedin,
    label: "LinkedIn",
    bg: "bg-[#0A66C2] hover:bg-[#084d93]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Team() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="team">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9963B]">
            The Team
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#050C1A] mb-3"
            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
          >
            Meet our team
          </h2>
          <p className="text-sm text-[#163058]/60 max-w-xl">
            Our passionate and committed experts bring a wide range of talents to help your business succeed in the UAE.
          </p>
        </motion.div>

        {/* Top row — 2 equal-height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto items-stretch">
          {team.slice(0, 2).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: slideDir[i].x, y: slideDir[i].y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ willChange: "opacity, transform" }}
              /* Hover handled by CSS — no Framer Motion whileHover to avoid jank */
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-[#050C1A]/8 bg-white hover:border-[#C9963B]/30 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 will-change-transform cursor-default"
            >
              <TeamCardContent member={member} />
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 1 card centered */}
        <div className="flex justify-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: slideDir[2].x, y: slideDir[2].y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            style={{ willChange: "opacity, transform" }}
            className="group flex flex-col items-center text-center p-8 rounded-2xl border border-[#050C1A]/8 bg-white hover:border-[#C9963B]/30 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 will-change-transform cursor-default w-full sm:w-[calc(50%-12px)]"
          >
            <TeamCardContent member={team[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamCardContent({ member }: { member: (typeof team)[number] }) {
  return (
    <>
      {/* Circular photo */}
      <div className="relative w-36 h-36 rounded-full overflow-hidden bg-[#F8F9FB] border-4 border-[#050C1A]/5 shrink-0 mb-5">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="144px"
        />
      </div>

      {/* Role */}
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9963B] mb-1.5">
        {member.role}
      </p>

      {/* Name */}
      <h3 className="text-base font-bold text-[#050C1A] mb-3">{member.name}</h3>

      {/* Qualification + location — fixed min-height keeps cards aligned at the divider */}
      <div className="min-h-[52px] flex flex-col items-center justify-center gap-0.5 mb-4">
        {member.qualification && (
          <p className="text-xs text-[#163058]/50 leading-relaxed max-w-[220px]">
            {member.qualification}
          </p>
        )}
        {member.location && (
          <p className="text-xs text-[#163058]/40">{member.location}</p>
        )}
      </div>

      {/* Divider */}
      <div className="w-10 h-px bg-[#C9963B]/30 mb-4" />

      {/* Contact */}
      <div className="space-y-1.5 mb-5 w-full">
        <a
          href={`tel:${member.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-1.5 text-xs text-[#163058]/60 hover:text-[#C9963B] transition-colors"
        >
          <Phone className="h-3.5 w-3.5 shrink-0" />
          {member.phone}
        </a>
        <a
          href={`mailto:${member.email}`}
          className="flex items-center justify-center gap-1.5 text-xs text-[#163058]/60 hover:text-[#C9963B] transition-colors"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          {member.email}
        </a>
      </div>

      {/* Social icons — CSS scale hover only */}
      <div className="flex items-center justify-center gap-2">
        {socialLinks(member).map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className={`w-7 h-7 rounded-full ${l.bg} flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95`}
          >
            {l.icon}
          </a>
        ))}
      </div>
    </>
  );
}
