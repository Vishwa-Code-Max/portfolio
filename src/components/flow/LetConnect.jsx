import React from "react";
import { assets } from "../../assets/assets";
import AutumnWinterExp from "../3Dexp/authumnwinter/AutumnWinterExp";
import Button from "../common/Button";

const LetConnect = ({ onStart }) => {
  return (
    <div className="relative min-h-screen w-screen bg-black text-white">
      <div className="relative grid md:grid-cols-2 gap-6 w-full min-h-screen items-center justify-center">
        {/* Left Image */}
        <div className="flex items-center justify-center border-24 border-blue-50 h-full w-full">
          <img
            src={assets.master.me}
            alt="Let Connect"
            className="h-[80vh] w-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center h-full w-full px-10">
          <div className="w-full h-[15%] flex items-center justify-end pr-10 p-5">
            <img
              src={assets.master.letsconnect}
              alt="Let Connect"
              className="h-full object-contain"
            />
          </div>
          <div className="flex flex-col overflow-hidden h-[20%] pr-10">
            <p>Thirukkural - 786</p>
            <div className="text-justify">
              <p className="flex flex-col items-center justify-center">
                அழிவதூஉம் ஆவதூஉம் ஆகி வழிபயக்கும்
                <br />
                உழிதுயர் நீக்கி நட்பு.
                <span className="w-full flex items-center justify-end">
                  - திருவள்ளுவர்
                </span>
              </p>
            </div>
            <p className="mt-2  text-justify">
              A true friend walks with you through both success and failure and
              makes the journey easier.
            </p>
          </div>
          <div className="h-[50%] flex items-center justify-center">
            <AutumnWinterExp
              position={[0, -0.8, 0]}
              scale={4.5}
              showControls={true}
            />
          </div>
          <div className="h-[15%] flex items-center justify-center gap-6">
            <Button
              className="px-6 py-3 rounded-2xl bg-blue-50 text-black font-medium shadow-md hover:shadow-2xl backdrop-blur-md border border-white/20"
              onClick={onStart}
            >
              Let’s Connect
            </Button>
            <Button className="px-6 py-3 rounded-2xl bg-blue-50 text-black font-medium shadow-md hover:shadow-2xl backdrop-blur-md border border-white/20">
              U Wanna Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetConnect;
