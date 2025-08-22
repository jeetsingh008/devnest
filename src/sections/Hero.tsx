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
              <h1 className="text-3xl md:text-4xl xl:text-6xl ">
                Hi, i'm <span className="text-cyan-400/90">Jeet</span>
              </h1>
              <h1>and i forge ideas</h1>
              <h1>
                into
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span className="text-cyan-400/90">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>products</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              I'm a <span className="text-cyan-400">Full-Stack</span> Web
              Developer crafting modern, <br /> responsive, and future-ready
              <span className="text-cyan-400"> web apps</span>.
            </p>
            <Button
              text="Get in touch"
              id="contact"
              className="md:w-80 md:h-16 w-60 h-12"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        {/* <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure> */}
      </div>
    </section>
  );
};

export default Hero;

function BackgroundSnowParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {Array.from({ length: 120 }).map((_, i) => (
        <div key={i} className="snow"></div>
      ))}
    </div>
  );
}
