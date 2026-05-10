"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section, { SectionHeading } from "@/components/ui/Section";

const testimonials = [
  {
    name: "Mr Harish Prithvi",
    company: "Guild Holdings FZE",
    photo: "/testimonials/harish-prithvi.jpg" as string | null,
    content:
      "Working with BizLaunch and Mr. Zaheer to set up Guild Holdings was a fantastic experience. Their knowledgeable and patient team understood our business needs, provided transparent cost guidance, and I highly recommend them.",
  },
  {
    name: "Alexey Ionov",
    company: "Food Island",
    photo: "/testimonials/alexey-ionov.jpg" as string | null,
    content:
      "I had a fantastic experience with BizLaunch in Dubai. They helped me with ID processing, family registration, and company setup. Their service was fast, reliable, and transparent in billing. I plan to continue working with them and highly recommend them to friends and colleagues.",
  },
  {
    name: "Oxana Ionova",
    company: "Free Lancer Fashion Stylist",
    photo: "/testimonials/oxana-ionova.jpg" as string | null,
    content:
      "Just wanted to say that I had a nice experience during working with Mr. Zaheer and his company BizLaunch. He is always polite and always available and all he promised he made in due time. I got my id and opened account super fast. I'll definitely come back.",
  },
];

// Left card slides from left, centre from bottom, right card from right
const slideDir = [
  { x: -60, y: 0 },
  { x: 0,   y: 50 },
  { x: 60,  y: 0 },
];

export default function Testimonials() {
  return (
    <Section dark id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          eyebrow=""
          title="What people say"
          light
          centered
          className="mb-14"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, x: slideDir[i].x, y: slideDir[i].y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            /* CSS-only hover — avoids Framer Motion re-render jank on pointer events */
            className="flex flex-col bg-white/10 border border-white/10 rounded-2xl p-6 text-center hover:border-[#C9963B]/40 hover:bg-white/15 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 will-change-transform cursor-default"
          >
            {/* Quote mark */}
            <div className="text-4xl font-serif text-[#C9963B] leading-none mb-4 text-left">
              &#8220;
            </div>

            {/* Quote text */}
            <p className="text-sm text-white/80 leading-relaxed mb-8 flex-1">
              {t.content}
            </p>

            {/* Photo + name */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-36 rounded-xl overflow-hidden bg-white/10 shrink-0 flex items-center justify-center">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                ) : (
                  <span className="text-3xl font-bold text-white/40">{t.name[0]}</span>
                )}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-white/50 mt-0.5">{t.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
