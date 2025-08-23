"use client";

import React, { useRef, useEffect } from "react";
import { AnimatedBeam } from "../components/magicui/animated-beam";
import { techStackIcons } from "../constants";
import gsap from "gsap";

const TechstackShow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  // Create arrays of refs for left and right beams (5 icons per side)
  const leftRefs = Array.from({ length: 5 }, () =>
    useRef<HTMLDivElement | null>(null)
  );
  const rightRefs = Array.from({ length: 5 }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  // Glow colors for each icon
  const leftGlowColors = [
    "#00f0ff", // Cyan (Reactjs)
    "#ffffff", // White (Expressjs)
    "#00ff00", // Green (Mongodb)
    "#ffff00", // Yellow (Javascript)
    "#57B9FF", // Blue (Postgresql)
  ];
  const rightGlowColors = [
    "#FFFFC5", // Light Yellow (Python)
    "#5A5A5A", // Light Gray (Nextjs)x
    "#00FFFF", // Light Cyan (React Native)
    "#FFBF00", //
    "#FFCCCB", //
  ];

  // GSAP random glow animation
  useEffect(() => {
    // Animate left icons
    leftRefs.forEach((ref, idx) => {
      if (ref.current) {
        gsap.to(ref.current, {
          boxShadow: `0 0 5px ${leftGlowColors[idx]}, 0 0 10px ${leftGlowColors[idx]}, 0 0 15px ${leftGlowColors[idx]}`,
          duration: 1 + Math.random() * 1, // Random duration between 1-2s
          delay: Math.random() * 0.5, // Random delay between 0-0.5s
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    });

    // Animate right icons
    rightRefs.forEach((ref, idx) => {
      if (ref.current) {
        gsap.to(ref.current, {
          boxShadow: `0 0 5px ${rightGlowColors[idx]}, 0 0 10px ${rightGlowColors[idx]}, 0 0 15px ${rightGlowColors[idx]}`,
          duration: 1 + Math.random() * 1, // Random duration between 1-2s
          delay: Math.random() * 0.5, // Random delay between 0-0.5s
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    });

    // Animate center element
    if (centerRef.current) {
      gsap.to(centerRef.current, {
        boxShadow: "0 0 5px #23D5D5, 0 0 70px #23D5D5, 0 0 15px #23D5D5",
        duration: 1 + Math.random() * 1, // Random duration between 1-2s
        delay: Math.random() * 3, // Random delay between 0-0.5s
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }
  }, [leftRefs, rightRefs]);

  // Split techStackIcons into left and right (first 5 for left, last 5 for right)
  const leftIcons = techStackIcons.slice(0, 5);
  const rightIcons = techStackIcons.slice(5, 10);

  return (
    <section
      id="techstack"
      className="relative w-full h-[700px] mx-auto md:px-8 my-16 md:my-24 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col text-center gap-2 mx-auto">
        <h1 className="font-semibold font-sans text-center gap-2 md:text-4xl text-3xl">
          My Tech Arsenal
        </h1>
        <p className="flex items-center tracking-wider gap-2 text-sm md:text-lg xl:text-xl">
          <span>
            <span className="text-cyan-400">Tools</span> and{" "}
            <span className="text-cyan-400">technologies</span> I work with to
            build seamless <span className="text-cyan-400">web apps</span>.
          </span>
        </p>
      </div>
      <div ref={containerRef} className="relative w-full h-full">
        {/* Center element */}
        <div
          ref={centerRef}
          className="absolute overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black fontbol rounded-full flex items-center justify-center"
        >
          <img
            src="/images/avtar12.png"
            alt="My Avatar"
            className="object-cover"
          />
        </div>

        {/* Left elements */}
        {leftIcons.map((icon, idx) => (
          <div
            key={`left-${idx}`}
            ref={leftRefs[idx]}
            className="group absolute w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center"
            style={{
              left: "20%",
              top: `calc(50% + ${-240 + idx * 120}px)`,
              position: "absolute",
              boxShadow: "inset 0 0 5px rgba(255, 255, 255, 0.3)",
            }}
          >
            <img
              src={icon.imgPath}
              alt={`${icon.name} icon`}
              title={icon.name}
              className="w-12 h-12 object-contain"
            />
            <span className="absolute text-center bottom-[-30px] left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
              {icon.name}
            </span>
          </div>
        ))}

        {/* Right elements */}
        {rightIcons.map((icon, idx) => (
          <div
            key={`right-${idx}`}
            ref={rightRefs[idx]}
            className="group absolute w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center"
            style={{
              right: "20%",
              top: `calc(50% + ${-240 + idx * 120}px)`,
              position: "absolute",
              boxShadow: "inset 0 0 5px rgba(255, 255, 255, 0.3)",
            }}
          >
            <img
              src={icon.imgPath}
              alt={`${icon.name} icon`}
              title={icon.name}
              className="w-12 h-12 object-contain"
            />
            <span className="absolute text-center bottom-[-30px] left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
              {icon.name}
            </span>
          </div>
        ))}

        {/* Beams from left to center */}
        {leftRefs.map((ref, idx) => (
          <AnimatedBeam
            key={`left-${idx}`}
            containerRef={containerRef}
            fromRef={ref}
            toRef={centerRef}
            gradientStartColor="#00f0ff"
            gradientStopColor="#00ff90"
            pathWidth={2}
            curvature={15}
          />
        ))}

        {/* Beams from right to center */}
        {rightRefs.map((ref, idx) => (
          <AnimatedBeam
            key={`right-${idx}`}
            containerRef={containerRef}
            fromRef={ref}
            toRef={centerRef}
            gradientStartColor="#ff00f0"
            gradientStopColor="#ff9060"
            pathWidth={2}
            curvature={15}
            reverse={true}
          />
        ))}
      </div>
    </section>
  );
};

export default TechstackShow;
