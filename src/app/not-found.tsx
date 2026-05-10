import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="gradient-mesh min-h-screen flex items-center relative">
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9963B]/10 blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <div className="text-8xl font-bold text-gradient-gold mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/50 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9963B] hover:bg-[#E0B860] text-white font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:border-[#E0B860] hover:text-[#E0B860] font-semibold text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
