import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiThrownKnife } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(textRef.current.children);

      sections.forEach((section) => {
        const elements = section.children;

        // Section fade-in
        gsap.fromTo(
          section,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          },
        );

        // Inner text animation (staggered cinematic reveal)
        gsap.fromTo(
          elements,
          {
            y: 120,
            opacity: 0,
            rotateX: -25,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 1.5,
            stagger: 0.25,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 10%",
              scrub: 1.2,
            },
          },
        );
      });
    }, containerRef);

    // ✅ Refresh ScrollTrigger after a short delay
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (showInfo && infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        },
      );
    }
  }, [showInfo]);

  return (
    <div
      ref={containerRef}
      id="aboutme"
      className="relative w-full h-full flex flex-col items-center justify-start bg-black"
    >
      {/* Long Mobile-Ratio Background Image */}
      <div className="w-full relative z-10">
        <img
          src={assets.master.about}
          alt="Background"
          className="w-full h-auto relative"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Story Text Overlay */}
      <div className="absolute inset-0 w-full h-full flex flex-col z-20">
        {/* All main sections inside textRef */}
        <div ref={textRef} className="flex flex-col justify-between h-[60%]">
          {/* Section 1 */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-6">
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              Long ago, in a quiet place,
            </p>
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              there was a mind that never stayed still.
            </p>
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              It questioned everything… even when answers didn’t come easy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-6">
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              Through school, he moved forward
            </p>
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              silent, steady, unnoticed
            </p>
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              Not chasing attention… just learning, enduring.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-6">
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              Then came engineering.
            </p>
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              Circuits, signals… and something deeper waiting beneath.
            </p>
            <p className="text-xl md:text-3xl text-white font-extrabold text-center">
              Code.
            </p>
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              At first, it was just logic.
            </p>
            <p className="text-lg md:text-2xl text-white font-bold text-center">
              Then it became control. Then… creation.
            </p>
          </div>

          {/* Section 4 */}
          <div className="relative flex-1 flex flex-col items-center justify-center px-6 space-y-6">
            <p className="text-xl md:text-3xl text-white font-bold text-center">
              Yeah, I’m <span className="text-9xl">Vishwa</span>.
            </p>
            <p className="flex items-center justify-center gap-3 text-lg md:text-2xl text-white font-bold text-center">
              MERN full stack developer
              <span
                onClick={() => setShowInfo((prev) => !prev)}
                className="text-yellow-400 hover:text-yellow-200 flex items-center cursor-pointer text-4xl transition-colors duration-300 rotate-45 transform animate-pulse"
              >
                <GiThrownKnife />
              </span>
            </p>

            {showInfo && (
              <div
                ref={infoRef}
                className="absolute top-full mt-3 w-[50%] 
  bg-black/80 backdrop-blur-md border text-white text-sm 
  p-4 rounded-xl shadow-lg z-50 text-justify pointer-events-auto"
              >
                I am Vishwa G, a B.E. Electronics and Communication Engineering
                graduate from Sona College of Technology (2021–2025). I
                completed my schooling under the Tamil Nadu State Board with 78%
                in SSLC and 82% in HSC, and qualified for JEE Advanced after
                securing 69 percentile in JEE Main.
                <br /> <br /> During my college years, I transitioned into
                full-stack development, gaining hands-on experience in building
                scalable web applications and working on real-world projects,
                including an award-winning assistive system for the visually
                impaired.
                <br /> <br /> I worked as a MERN Stack Developer at Gessdemn
                Global Services, Coimbatore (July 2025 – February 2026), where I
                progressed from a frontend role to full-stack development within
                two months and contributed to 25+ projects. I was recognized as
                Employee of the Month for my performance.
                <br /> <br /> I specialize in JavaScript, React.js, Node.js, and
                MongoDB, with a strong interest in Devops and AI integration.
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-6">
          <p className="text-lg md:text-2xl text-white bg-red-950 p-2 font-bold text-center">
            And this… is only the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
