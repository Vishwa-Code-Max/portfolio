import React from "react";
import { assets } from "../../../assets/assets";
import SwordExp from "../../3Dexp/sword/SwordExp";

const RealStack = () => {
  const techImages = Object.values(assets.techstack);
  const leftImages = techImages.slice(0, 8);
  const rightImages = techImages.slice(8, 16);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-10">
      <div className="w-full h-[15%] flex items-center justify-end pr-10 p-5">
        <img
          src={assets.master.techstack}
          alt="Tech Stack"
          className="h-full object-contain"
        />
      </div>

      <div className="w-full h-[85%] flex">
        <div className="w-[35%] h-full flex items-center justify-center">
          <div className="w-full h-full grid grid-cols-2 gap-6 justify-items-center content-center">
            {leftImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`left-${i}`}
                className="w-30 h-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* MIDDLE - 20% */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <SwordExp
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI / 2, 0]}
            showControls={true}
          />
        </div>

        {/* RIGHT - 40% */}
        <div className="w-[35%] h-full flex items-center justify-center">
          <div className="grid grid-cols-2 w-full h-full gap-6 justify-items-center content-center">
            {rightImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`right-${i}`}
                className="w-30 h-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealStack;
