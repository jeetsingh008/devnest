import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers, techStack } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".team-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      gsap.from(".tech-strip", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tech-strip",
          start: "top 90%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".tech-badge").forEach((badge, i) => {
        gsap.from(badge, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          delay: i * 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".tech-strip",
            start: "top 90%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="about-heading text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] mb-4">
            The Team Behind the Code
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            We're a focused two-person studio that believes in quality over
            quantity. Every project gets our full attention, expertise, and
            dedication.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="team-card metallic-card p-8 rounded-xl text-center group"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-metallic-light)] opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
                {member.name}
              </h3>
              <p className="text-[var(--color-accent-primary)] text-sm mb-4">
                {member.role}
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Strip */}
        <div className="tech-strip text-center">
          <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-primary)]">
            Our Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="tech-badge text-sm px-4 py-2 rounded-lg border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
