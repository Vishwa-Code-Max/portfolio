import React from "react";
import { assets } from "../../../assets/assets";
import HelmetExp from "../../3Dexp/helmet/HelmetExp";

const Experiance = () => {
  const techImages = Object.values(assets.techstack);
  const leftImages = techImages.slice(0, 8);
  const rightImages = techImages.slice(8, 16);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-10">
      <div className="w-full h-[15%] flex items-center justify-end pr-10 p-5">
        <img
          src={assets.master.experiance}
          alt="Experiance"
          className="h-full object-contain"
        />
      </div>

      <div className="w-full h-[85%] flex">
        <div className="w-[35%] h-full flex flex-col items-start justify-center p-10 gap-6">
          <div>
            <h1>MERN Stack Developer</h1>
            <p className="italic text-gray-500">
              Gessdemn Global Services · Coimbatore
            </p>
            <h1>Jul 2025 – Feb 2026</h1>
          </div>
          <div className="text-justify">
            Worked across the full development lifecycle, building scalable web
            applications and internal systems using the MERN stack. Started with
            frontend development and quickly progressed into full-stack
            responsibilities through consistent delivery and problem-solving.
          </div>
          <div className="text-justify">
            Contributed to 25+ projects, including dynamic platforms, e-commerce
            systems, and internal business tools. Focused on building clean
            APIs, managing application state efficiently, and ensuring
            performance-driven architecture.
          </div>
          <div className="text-justify">
            Handled real-world challenges such as authentication, data flow
            optimization, and production-level deployments. Collaborated in team
            environments while also taking ownership of independent modules and
            features.
          </div>
        </div>

        {/* MIDDLE - 20% */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <HelmetExp
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI / 2, 0]}
            showControls={true}
          />
        </div>

        {/* RIGHT - 40% */}
        <div className="w-[35%] h-full flex flex-col items-start justify-center p-10 gap-6">
          <div className="text-justify">
            Strong foundation in modern web technologies with hands-on
            experience in JavaScript, React.js, Node.js, Express, and MongoDB,
            along with building RESTful services and secure authentication
            systems.
          </div>
          <div className="text-justify">
            Recently expanded expertise in SQL, enabling structured data
            handling, query optimization, and relational database understanding
            alongside NoSQL systems.
          </div>
          <div className="text-justify">
            Familiar with performance optimization techniques, scalable
            architecture patterns, and interactive UI development using tools
            like GSAP and Three.js.
          </div>
          <div className="text-justify">
            Additionally, developed a basic understanding of Artificial
            Intelligence concepts, focusing on practical applications and
            integration possibilities within modern web solutions.
          </div>
          <div className="text-justify">
            Continuously exploring new technologies to build efficient,
            maintainable, and future-ready applications.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
