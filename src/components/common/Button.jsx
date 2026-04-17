// Button.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Button = ({ children, onClick }) => {
  const btnRef = useRef();

  useEffect(() => {
    const btn = btnRef.current;

    const enter = () => {
      gsap.to(btn, {
        scale: 1.06,
        y: -2,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(btn, {
        scale: 1,
        y: 0,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const click = () => {
      gsap.to(btn, {
        scale: 0.94,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    };

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);
    btn.addEventListener("click", click);

    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
      btn.removeEventListener("click", click);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className="
        px-6 py-3
        rounded-2xl
        bg-white text-black
        font-medium
        shadow-md
        hover:shadow-xl
        transition-shadow
      "
    >
      {children}
    </button>
  );
};

export default Button;