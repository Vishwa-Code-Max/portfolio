import React, { forwardRef } from "react";

const DropletExp = forwardRef(({ dropletArray }, ref) => {
  return (
    <div className="w-[80vw] h-full flex items-center justify-center">
      <img
        ref={ref}
        src={dropletArray[0]}
        alt="Droplet Frame"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
});

export default DropletExp;