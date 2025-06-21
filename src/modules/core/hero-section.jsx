import React from "react";
import { FaArrowRight, FaArrowLeft, FaPlay } from "react-icons/fa";
import iconBox1 from "../../assets/icon-box-1.svg";
import iconBox2 from "../../assets/icon-box-2.svg";
import iconBox3 from "../../assets/icon-box-3.svg";
import iconBox4 from "../../assets/icon-box-4.svg";
import { ServiceCard } from "./service-card";

export function HeroSection() {
  const cardData = [
    {
      title: "Roof Repair",
      icon: <img src={iconBox1} alt="Roof Repair" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
    {
      title: "Maintenance",
      icon: <img src={iconBox2} alt="Maintenance" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: true,
    },
    {
      title: "Emergency",
      icon: <img src={iconBox3} alt="Emergency" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
    {
      title: "24/7 Team Support",
      icon: <img src={iconBox4} alt="Support" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
  ];

  return (
    <>
      <section className="relative w-full h-[90vh] text-white hero-section-bg">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-7xl w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col gap-3">
                <button className="w-10 h-10 rounded-full bg-[#9f1313] flex items-center justify-center text-white">
                  <FaArrowRight />
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f1313]">
                  <FaArrowLeft />
                </button>
              </div>

              <div className="text-center md:text-left md:ms-25 flex-1">
                <p className="text-sm uppercase">Service Promise</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                  Your Trusted Roofing <br /> & Home Maintenance Experts
                </h1>
                <button className="mt-6 px-6 py-3 bg-[#9f1313] text-white font-semibold rounded flex items-center gap-2 mx-auto md:mx-0">
                  CONTACT US <FaArrowRight />
                </button>
              </div>

              <div className="hidden md:flex items-center justify-center">
                {/* <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                  <FaPlay />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-30 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              isDark={card.isDark}
            />
          ))}
        </div>
      </div>
    </>
  );
}
