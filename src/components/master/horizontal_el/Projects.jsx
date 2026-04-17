import React from "react";
import { assets } from "../../../assets/assets";
import OutfitExp from "../../3Dexp/outfit/OutfitExp";

const Projects = () => {
  const techImages = Object.values(assets.techstack);
  const leftImages = techImages.slice(0, 8);
  const rightImages = techImages.slice(8, 16);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-10">
      <div className="w-full h-[15%] flex items-center justify-end pr-10 p-5">
        <img
          src={assets.master.projects}
          alt="Projects"
          className="h-full object-contain"
        />
      </div>

      <div className="w-full h-[85%] flex">
        <div className="w-[35%] h-full flex flex-col items-start justify-center p-10 gap-6">
          <div className="text-justify">
            I have designed and developed a wide range of applications, from
            static interfaces to fully functional, production-style systems. My
            work goes beyond simple project implementation, focusing on building
            complete user flows, scalable architecture, and real-world business
            logic.
          </div>
          <div className="text-justify">
            Built dynamic web applications with complex state management, API
            integrations, and optimized rendering strategies. Developed
            e-commerce platforms with end-to-end functionality including product
            management, secure payments, order lifecycle handling, and admin
            control systems.
          </div>
          <div className="text-justify">
            Created internal software solutions simulating real business
            environments such as HR, CRM, and operational dashboards. These
            systems were structured with modular architecture, role-based
            workflows, and scalable data handling approaches.
          </div>
          <div className="text-justify">
            Worked on multiple UI-intensive applications integrating animations
            and 3D elements to enhance user interaction while maintaining
            performance and responsiveness.
          </div>
        </div>

        {/* MIDDLE - 20% */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <OutfitExp
            position={[0, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
            showControls={true}
          />
        </div>

        {/* RIGHT - 40% */}
        <div className="w-[35%] h-full flex flex-col items-start justify-center p-10 gap-6">
          <div>
            <h1 className="underline mb-1 underline-offset-2">Enterprise Admin Management System</h1>
            <div className="text-justify">
              Built a centralized internal platform to manage HR, recruitment,
              payroll, attendance, and project workflows. Designed modular
              architecture with role-based access and dynamic data handling.
              Integrated mini-CRM features for client and project tracking,
              focusing on scalability and structured system design.
            </div>
          </div>
          <div>
            <h1 className="underline mb-1 underline-offset-2">PrabhaTex (E-Commerce Platform)</h1>
            <div className="text-justify">
              Developed a full-scale e-commerce system with complete order
              lifecycle management. Integrated Shiprocket for logistics and
              Razorpay for secure payments. Designed scalable database
              structures and built an admin dashboard for product, order, and
              inventory control.
            </div>
          </div>
          <div>
            <h1 className="underline mb-1 underline-offset-2">Vidiyal (Interactive Experience Platform)</h1>
            <div className="text-justify">
              Created a high-performance interactive web platform using GSAP and
              Three.js. Implemented smooth animations, 3D elements, and
              optimized rendering with lazy loading and memoization. Built an
              admin panel for dynamic content and media management.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
