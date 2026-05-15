import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroContent } from "../constants";

const Hero = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-headline", {
        y: 40,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".hero-subtext",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <section
      id="hero"
      ref={container}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div
        className="gradient-orb absolute top-1/4 -left-32 w-[500px] h-[500px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(74,127,181,0.6) 0%, rgba(42,90,138,0.3) 50%, transparent 70%)",
        }}
      />
      <div
        className="gradient-orb absolute bottom-1/4 -right-32 w-[400px] h-[400px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(107,163,214,0.5) 0%, rgba(74,127,181,0.2) 50%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="hero-headline shimmer-text text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space)] leading-tight">
          {heroContent.headline}
        </h1>
        <p className="hero-subtext mt-6 text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
          {heroContent.subtext}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="hero-cta shimmer-button px-8 py-3 font-medium text-[var(--color-highlight)]">
            {heroContent.cta1}
          </a>
          <a
            href="#contact"
            className="hero-cta metallic-border-btn px-8 py-3 font-medium text-[var(--color-accent-secondary)] transition-all duration-300"
          >
            {heroContent.cta2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
