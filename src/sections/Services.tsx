import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".service-card");
      if (!cards) return;

      gsap.from(cards, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
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
    <section id="services" ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-4">
          What We Build
        </h2>
        <p className="text-center text-[var(--color-text-muted)] mb-16 max-w-xl mx-auto">
          From concept to deployment, we deliver end-to-end solutions tailored
          to your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="service-card metallic-card p-8 rounded-xl">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)]">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
