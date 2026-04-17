import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const IconHolder = ({
  children,
  href,
  onClick,
  size = 48,
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    // Initial fade + slight pop
    gsap.fromTo(
      el,
      { opacity: 0, y: 10, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" }
    );

    // Hover animation
    const hoverIn = () => {
      gsap.to(el, { y: -8, scale: 1.05, duration: 0.3, ease: "power2.out" });
    };

    const hoverOut = () => {
      gsap.to(el, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    return () => {
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  const content = (
    <div
      ref={ref}
      onClick={onClick}
      className={`flex items-center justify-center rounded-2xl cursor-pointer border border-blue-50/50 bg-gray-950 backdrop-blur-md ${className} hover:bg-blue-50 hover:border-gray-950/50 group`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div className="text-white group-hover:text-black text-xl flex items-center justify-center">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default IconHolder;