import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import DropletExp from "../components/master/dropletExp";
import HorizontalExp from "../components/master/HorizontalExp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Master = () => {
  const sectionRef = useRef(null);
  const dropletContainerRef = useRef(null);
  const horizontalRef = useRef(null);

  const imageRef = useRef(null);
  const currentIndexRef = useRef(0);

  const dropletArray = Object.values(assets.droplet);
  const totalPanels = 4;

  // 🔥 PHASE CONSTANTS (single source of truth)
  const DROPLET_END = 0.25;
  const FADE_END = 0.30;
  const H_START = FADE_END;
  const H_RANGE = 1 - H_START;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=700%",
          pin: true,
          scrub: 1.2,

          // 🔥 PANEL SNAP
          snap: {
            snapTo: (value) => {
              // no snap before horizontal phase
              if (value < H_START) return value;

              // map to 0 → 1
              const progress = (value - H_START) / H_RANGE;

              // snap to panels
              const snapped =
                Math.round(progress * (totalPanels - 1)) /
                (totalPanels - 1);

              // map back to global
              return H_START + snapped * H_RANGE;
            },
            duration: { min: 0.2, max: 0.5 },
            ease: "power2.out",
            inertia: true,
          },
        },
      });

      // 🔵 DROPLET PHASE
      tl.to(
        {},
        {
          duration: DROPLET_END,
          onUpdate: function () {
            const progress = this.progress();

            const newIndex = Math.floor(
              progress * (dropletArray.length - 1)
            );

            if (newIndex !== currentIndexRef.current) {
              currentIndexRef.current = newIndex;

              if (imageRef.current) {
                imageRef.current.src = dropletArray[newIndex];
              }
            }
          },
        }
      );

      // 🟣 FADE PHASE
      tl.to(dropletContainerRef.current, {
        opacity: 0,
        duration: FADE_END - DROPLET_END,
        ease: "power3.out",
      });

      // 🟢 HORIZONTAL PHASE
      tl.to(horizontalRef.current, {
        x: () =>
          -(horizontalRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        duration: 1 - FADE_END,
      });
    });

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [dropletArray]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* 🔵 Horizontal Layer */}
      <div className="absolute inset-0 z-10">
        <HorizontalExp containerRef={horizontalRef} />
      </div>

      {/* 🟣 Droplet Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          ref={dropletContainerRef}
          className="w-screen h-full flex bg-black justify-center items-center"
        >
          <DropletExp
            ref={imageRef}
            dropletArray={dropletArray}
          />
        </div>
      </div>
    </section>
  );
};

export default Master;