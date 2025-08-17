import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { testimonials } from "../constants";

const InfiniteTestimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Tween | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Duplicate content for seamless looping
    container.innerHTML += container.innerHTML;

    const cards =
      container.querySelectorAll<HTMLDivElement>(".testimonial-card");

    // GSAP Infinite Scroll
    tl.current = gsap.to(container, {
      xPercent: -50, // since duplicated, move half length
      ease: "linear",
      duration: 40,
      repeat: -1,
    });

    // Pause/Resume with hover
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        tl.current?.pause();
        gsap.to(card, { scale: 1.05, duration: 0.1, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        tl.current?.resume();
        gsap.to(card, { scale: 1, duration: 0.1, ease: "power3.inOut" });
      });
    });

    // New Heading Animation: Typewriter with Bounce and Glow
    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll("span");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 20, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          ease: "elastic.out(1, 0.5)",
          duration: 0.8,
          onUpdate: function () {
            const char = this.targets()[0] as HTMLElement;
            gsap.to(char, {
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              duration: 0.3,
              yoyo: true,
              repeat: 1,
            });
          },
        }
      );
    }

    return () => {
      tl.current?.kill();
    };
  }, []);

  return (
    <section className="testimonial-wrapper text-center my-12 md:my-16 px-6">
      {/* Animated Heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-semibold mb-10 text-white"
      >
        {"Praises in Motion".split("").map((char, i) => (
          <span
            key={i}
            className="inline-block opacity-0"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      {/* Box Wrapper */}
      <div className="testimonial-box mx-auto">
        <div className="testimonial-container" ref={containerRef}>
          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">"{item.text}"</p>
              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-role">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteTestimonials;
