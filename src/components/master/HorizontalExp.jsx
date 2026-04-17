import React from "react";
import RealStack from "./horizontal_el/RealStack";
import Projects from "./horizontal_el/Projects";
import Experiance from "./horizontal_el/Experiance";
import Education from "./horizontal_el/Education";

const HorizontalExp = ({ containerRef }) => {
  return (
    <div ref={containerRef} className="flex h-full">
      <div className="panel w-screen h-full flex-shrink-0">
        <RealStack />
      </div>

      <div className="panel w-screen h-full flex-shrink-0">
        <Projects />
      </div>

      <div className="panel w-screen h-full flex-shrink-0">
        <Experiance />
      </div>

      <div className="panel w-screen h-full flex-shrink-0">
        <Education />
      </div>
    </div>
  );
};

export default HorizontalExp;