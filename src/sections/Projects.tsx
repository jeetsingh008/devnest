import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      gsap.from(".projects-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
        },
      });

      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="projects-heading text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] mb-4">
            Selected Work
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed">
            A glimpse into the solutions we've crafted for our clients.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card metallic-card rounded-xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02] ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Image Placeholder */}
              <div
                className={`bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-primary-bg)] flex items-center justify-center ${
                  i === 0 ? "h-56 md:h-72" : "h-48 md:h-56"
                }`}
              >
                <span className="text-[var(--color-text-muted)] text-sm tracking-wide">
                  Project Preview
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-highlight)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] group-hover:border-[var(--color-border-glow)] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
