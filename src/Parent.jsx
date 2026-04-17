import React, { useEffect, useRef } from "react";
import Hero from "./sections/Hero.jsx";
import Master from "./sections/Master.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flow from "./sections/Flow.jsx";

gsap.registerPlugin(ScrollTrigger);

const Parent = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <Hero />
      <AboutMe />
      <Master />
      <Flow />
    </div>
  );
};

export default Parent;
