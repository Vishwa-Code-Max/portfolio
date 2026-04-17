import React from "react";
import { assets } from "../../../assets/assets";
import CompassExp from "../../3Dexp/compass/CompassExp";

const Education = () => {
  const techImages = Object.values(assets.techstack);
  const leftImages = techImages.slice(0, 8);
  const rightImages = techImages.slice(8, 16);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-10">
      <div className="w-full h-[15%] flex items-center justify-end pr-10 p-5">
        <img
          src={assets.master.Approch}
          alt="Approach and Achievements"
          className="h-full object-contain"
        />
      </div>

      <div className="w-full h-[85%] flex">
        <div className="w-[35%] h-full flex flex-col items-start justify-center p-10 gap-6">
          <div className="text-justify">
            Build systems with a focus on reusability and efficient rendering,
            structuring components to remain modular, scalable, and consistent
            across the application. Optimize performance by controlling
            re-renders using memoization, selective state updates, and clean
            data flow. Apply lazy loading, code splitting, and asynchronous
            operations to ensure smooth and non-blocking user experiences.
          </div>
          <div className="text-justify">
            Design backend services with clear API architecture, secure
            authentication, and scalable data models. Utilize Redis for caching
            and performance improvement, and follow structured querying
            practices alongside flexible NoSQL design.
          </div>
          {/* <div className="text-justify">
            Work with containerized environments using Docker and understand
            deployment scalability concepts with Kubernetes, ensuring
            applications are production-ready and portable.
          </div> */}
          <div className="text-justify">
            Handle integrations and complex systems with strong error handling
            and well-defined data contracts, maintaining stability across
            services. Keep UI development intentional balancing interactivity
            with performance, and continuously refining code to stay clean,
            maintainable, and efficient.
          </div>
        </div>

        {/* MIDDLE - 20% */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <CompassExp position={[0, 0, 0]} scale={1.2} showControls={true} />
        </div>

        {/* RIGHT - 40% */}
        <div className="w-[35%] h-full flex flex-col items-start justify-center p-10 gap-6">
          <div className="text-justify">
            Completed multiple industry-recognized certifications including IBM
            (Python for Data Science, Web Development Fundamentals), Google IT
            Support Professional Certificate, NPTEL (Introduction to IoT), and
            Anna University Full Stack Development, along with specialized
            programs from Zoho(Customer Relation Management) and Texas
            Instruments (Vision Bot).
          </div>
          <div className="text-justify">
            Awarded Best Project Award (2025) for developing a real-time
            assistive system for visually impaired individuals using radar-based
            obstacle detection and intelligent feedback systems.
          </div>
          <div className="text-justify">
            Recognized as Employee of the Month (Dec 2025) for consistent
            performance, ownership, and contribution to project outcomes.
          </div>
          <div className="text-justify">
            Qualified JEE Advanced through JEE Main performance (69 percentile),
            demonstrating strong analytical and academic foundation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
