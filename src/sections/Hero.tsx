import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import "./Snow.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <BackgroundSnowParticles />
      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen px-5 md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Where ideas</h1>
              <h1>
                hatch into
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>products</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, i am adrian, a developer based in croatia with a passion for
              code.
            </p>
            <Button
              id="button"
              className="md:w-80 md:h-16 w-60 h-12"
              text="Get in touch"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;

function BackgroundSnowParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="snow"></div>
      ))}
    </div>
  );
}
