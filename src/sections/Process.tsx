import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Process: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const steps = containerRef.current?.querySelectorAll(".process-step");
      if (!steps) return;

      gsap.from(steps, {
        x: -40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="process" ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-4">
          Our Process
        </h2>
        <p className="text-center text-[var(--color-text-muted)] mb-16 max-w-xl mx-auto">
          A streamlined workflow built for clarity and results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent" />

          {processSteps.map((step, i) => (
            <div key={i} className="process-step relative text-center">
              <div className="shimmer-text text-5xl font-bold font-space mb-4">
                0{step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
