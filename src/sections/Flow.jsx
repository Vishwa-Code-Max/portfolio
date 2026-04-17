import React, { useState, useRef } from "react";
import gsap from "gsap";
import LetConnect from "../components/flow/LetConnect";
import Contact from "../components/flow/Contact";
import { assets } from "../assets/assets";

const Flow = () => {
  const [stage, setStage] = useState("let");

  const letRef = useRef();
  const videoRef = useRef();

  const handleStart = () => {
    gsap.to(letRef.current, {
      opacity: 0,
      scale: 1.05,
      onComplete: () => setStage("video"),
    });
  };

  const handleVideoEnd = () => {
    gsap.to(videoRef.current, {
      opacity: 0,
      onComplete: () => setStage("contact"),
    });
  };

  const handleReset = () => {
    if (!videoRef.current) {
      setStage("let");
      return;
    }

    gsap.to(videoRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setStage("let");

        gsap.set(letRef.current, {
          opacity: 1,
          scale: 1,
        });
      },
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* CONTACT */}
      {stage === "contact" && (
        <div className="absolute inset-0 z-0">
          <Contact onBack={handleReset} />
        </div>
      )}

      {/* VIDEO */}
      {stage === "video" && (
        <div
          ref={videoRef}
          className="absolute inset-0 z-10 bg-black flex items-center justify-center"
        >
          <video
            src={assets.videos.contact}
            autoPlay
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
          />
        </div>
      )}

      {/* LETCONNECT */}
      {stage === "let" && (
        <div ref={letRef} className="absolute inset-0 z-20 opacity-100">
          <LetConnect onStart={handleStart} />
        </div>
      )}
    </div>
  );
};

export default Flow;
