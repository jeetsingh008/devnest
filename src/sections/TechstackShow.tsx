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
    "#4fc3f7", // Sky Blue (Flutter)
    "#00ff00", // Green (Mongodb)
    "#90ee90", // Light Green (Spring Boot)
  ];
  const rightGlowColors = [
    "#ffff00", // Yellow (Python)
    "#00FFFF", // Light Cyan (React Native)
    "#5A5A5A", // Light Gray (Nextjs)
    "#0047AB", // Violet (Aws)
    "#57B9FF", // Blue (Postgresql)
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
        boxShadow: "0 0 5px #FF0000, 0 0 70px #FF0000, 0 0 15px #FF0000",
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
    <section className="relative w-full h-[600px] flex justify-center items-center">
      <div ref={containerRef} className="relative w-full h-full">
        {/* Center element */}
        <div
          ref={centerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black fontbol rounded-full flex items-center justify-center"
        >
          DevNest
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
