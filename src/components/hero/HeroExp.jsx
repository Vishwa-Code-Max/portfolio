import React, { forwardRef } from "react";

const HeroExp = forwardRef(({ imageArray, currentIndex }, ref) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          ref={ref}
          src={imageArray[currentIndex] || imageArray[0]}
          alt={`Experience Sequence`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
    </div>
  );
});

HeroExp.displayName = "HeroExp";

export default HeroExp;