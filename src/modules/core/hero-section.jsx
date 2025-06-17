import React from "react";
import { FaArrowRight, FaArrowLeft, FaPlay } from "react-icons/fa";
import heroSectionBg from "../../assets/heroSectionBg.jpg";// Adjust the path as necessary

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center text-white heroSectionBg"
      style={{ backgroundImage: `url(${heroSectionBg})` }}
    >
      <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center px-6">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Arrow Buttons */}
            <div className="flex flex-col gap-3">
              <button className="w-10 h-10 rounded-full bg-[#9f1313] flex items-center justify-center text-white">
                <FaArrowRight />
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f1313]">
                <FaArrowLeft />
              </button>
            </div>

            {/* Main Content */}
            <div className="text-center md:text-left flex-1">
              <p className="text-sm uppercase">Service Promise</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                Your Trusted Roofing <br /> & Home Maintenance Experts
              </h1>
              <button className="mt-6 px-6 py-3 bg-[#9f1313] text-white font-semibold rounded flex items-center gap-2 mx-auto md:mx-0">
                CONTACT US <FaArrowRight />
              </button>
            </div>

            {/* Play Button */}
            <div className="hidden md:flex items-center justify-center">
              <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                <FaPlay />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Roof Repair", icon: "🏠" },
              { title: "Maintenance", icon: "🔧", dark: true },
              { title: "Emergency", icon: "🚨" },
              { title: "24/7 Team Support", icon: "🎧" },
            ].map(({ title, icon, dark }) => (
              <div
                key={title}
                className={`p-4 rounded shadow bg-white text-black relative ${
                  dark ? "bg-[#2f2933] text-white" : ""
                }`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center text-2xl ${
                    dark ? "bg-white text-black" : "bg-[#9f1313] text-white"
                  } rounded`}
                >
                  {icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-center">{title}</h3>
                <p className="text-sm text-center mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
