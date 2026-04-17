import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets.js";
import HeroExp from "../components/hero/HeroExp.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);
  const imageArray = Object.values(assets.images);

  useEffect(() => {
    // ✅ GSAP CONTEXT
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1.5, // 🔥 smoother scrub
        onUpdate: (self) => {
          const newIndex = Math.floor(
            self.progress * (imageArray.length - 1)
          );
          if (newIndex !== index) {
            setIndex(newIndex);
          }
        },
      });
    });

    // ✅ Refresh after layout settle
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [imageArray.length]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        src={assets.videos.hero}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="w-[80vw] h-full flex -translate-y-20 p-10">
          <HeroExp imageArray={imageArray} currentIndex={index} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
