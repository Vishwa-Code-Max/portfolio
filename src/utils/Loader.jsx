import React from "react";

const Loader = ({ progress }) => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white">

      <div className="text-5xl font-bold mb-6">
        {progress}%
      </div>

      <div className="w-64 h-1 bg-gray-700 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  );
};

export default Loader;