"use client";

import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Hero() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden pt-8 pb-6 sm:pt-12 sm:pb-8 px-4"
    >
      {/* Subtle background shapes with gentle floating animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-muted/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1
          className={`text-2xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-semibold text-foreground leading-[1.2] sm:leading-[1.15] mb-5 sm:mb-6 max-w-[320px] sm:max-w-2xl md:max-w-3xl mx-auto transition-all duration-700 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The{" "}
          <span className="text-[#005daa] font-semibold">Costco Method</span>{" "}
          That&apos;s Changing Everything
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-xl text-muted-foreground max-w-[300px] sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty font-light transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Discover how people are saving big on bulk essentials, electronics, home items, and everyday needs.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://trksy.org/aff_c?offer_id=4171&aff_id=26188"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-button group inline-flex items-center gap-3 bg-[#005daa] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#004a8a] transition-all duration-300 hover:shadow-xl hover:shadow-[#005daa]/20 hover:-translate-y-0.5"
          >
            APPLY NOW
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Trust indicator with avatars */}
        <div
          className={`mt-5 sm:mt-6 flex flex-col items-center gap-2 transition-all duration-700 ease-out delay-[400ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Stacked Avatars */}
          <div className="flex items-center -space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/db4211add066b155f0b8dc5ad01869db-lfULDC2IvdA6knBfNHsHwdcQwAYITZ.jpg"
              alt="Member"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-background shadow-sm object-cover"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4c05f6b9b049c6f69fbbd32e7fc4ec7-1MCtNdiHFnD1LCzngLZURPXhURSuaY.jpg"
              alt="Member"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-background shadow-sm object-cover"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e25146a3cc2b7182546f7b937949cd66-zmZh8BJSJoY02jf5FaL6iUUgbcUwaD.jpg"
              alt="Member"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-background shadow-sm object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground/70 font-medium">
            <span className="sm:hidden">Join 12,000+ members who&apos;ve<br />already claimed their rewards.</span>
            <span className="hidden sm:inline">Join 12,000+ members who&apos;ve already claimed their rewards.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
