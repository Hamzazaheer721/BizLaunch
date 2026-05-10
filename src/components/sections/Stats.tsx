import Section from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { to: 1000, suffix: "+", label: "Businesses Launched", thousands: true },
  { to: 10,   suffix: "+", label: "Years in UAE Market",  thousands: false },
  { to: 50,   suffix: "+", label: "Free Zones Covered",   thousands: false },
  { to: 98,   suffix: "%", label: "Client Satisfaction",  thousands: false },
];

export default function Stats() {
  return (
    <Section dark>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center text-center px-4 relative"
          >
            {i !== 0 && (
              <div className="hidden lg:block absolute left-0 top-1/4 h-1/2 w-px bg-white/10" />
            )}
            <div className="text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">
              <CountUp to={s.to} suffix={s.suffix} thousands={s.thousands} duration={2} />
            </div>
            <div className="text-sm text-white/50 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
