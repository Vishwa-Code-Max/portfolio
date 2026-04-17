import React from "react";

const HeroExp = ({ imageArray, currentIndex }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          src={imageArray[currentIndex]}
          alt={`Experience Sequence ${currentIndex}`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
    </div>
  );
};

export default HeroExp;
