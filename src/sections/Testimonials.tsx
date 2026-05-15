import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-center mb-4">Client Voices</h2>
        <p className="text-center text-[var(--color-text-muted)] mb-16 max-w-xl mx-auto">What our clients say about working with us.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card metallic-card p-8 rounded-xl">
              <span className="text-4xl text-[var(--color-accent-primary)] opacity-50 block mb-4">"</span>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="font-semibold text-[var(--color-text-primary)]">{t.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
