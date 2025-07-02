import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import iconBox1 from "../../assets/icon-box-1.svg";
import iconBox2 from "../../assets/icon-box-2.svg";
import iconBox3 from "../../assets/icon-box-3.svg";
import chimneyRepair from "../../assets/chimney-repair.jpg";
import flatRoofing from "../../assets/flat-roofing.jpg";
import heroSectionBG from "../../assets/heroSectionBg.jpg";
import { ServiceCard } from "./service-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";
import { useNavigate } from "react-router-dom";

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
      isDark: false,
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
      icon: <img src={iconBox1} alt="Support" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      isDark: false,
    },
  ];

  const images = [chimneyRepair, flatRoofing, heroSectionBG];
  const headings = [
    { label: "London Roofing Specialist", link: null },
    { label: "Drone Surveys", link: "/service/drone-surveys" },
    { label: "Skylights / Velux", link: "/service/skylights-velux" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-[90vh]">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <section
                className="relative w-full h-[90vh] text-white hero-section-bg"
                style={{ "--hero-bg": `url(${img})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-6xl w-full mx-auto px-6">
                    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 h-full w-full text-center">
                      <div className="lg:flex flex-col gap-3 hidden">
                        <SlideNextButton className="btn-zoom w-10 h-10 rounded-full bg-[#9f1313] flex items-center justify-center text-white">
                          <span className="btn-zoom-content">
                            <FaArrowRight />
                          </span>
                        </SlideNextButton>
                        <SlidePrevButton className="btn-zoom w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f1313]">
                          <span className="btn-zoom-content">
                            <FaArrowLeft />
                          </span>
                        </SlidePrevButton>
                      </div>
                      <div className="text-center lg:text-left ps-0 lg:ps-10 flex-1 mx-auto">
                        {/* Dynamic Heading */}
                        {headings[activeIndex].link ? (
                          <h1
                            className="text-6xl md:text-5xl font-bold leading-tight mt-2 cursor-pointer"
                            onClick={() => navigate(headings[activeIndex].link)}
                          >
                            {headings[activeIndex].label}
                          </h1>
                        ) : (
                          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2 cursor-pointer">
                            {headings[activeIndex].label}
                          </h1>
                        )}
                        <button className="btn-zoom group mt-6 px-6 py-3 bg-[#9f1313] text-white font-semibold rounded flex items-center gap-2 mx-auto lg:mx-0">
                          <span className="btn-zoom-content">
                            CONTACT US <FaArrowRight />
                          </span>
                        </button>
                      </div>
                      {/* Custom navigation buttons (mobile) */}
                      <div className="lg:hidden flex flex-row justify-center items-center gap-3 mt-10">
                        <SlidePrevButton className="btn-zoom w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f1313]">
                          <span className="btn-zoom-content">
                            <FaArrowLeft />
                          </span>
                        </SlidePrevButton>
                        <SlideNextButton className="btn-zoom w-10 h-10 rounded-full bg-[#9f1313] flex items-center justify-center text-white">
                          <span className="btn-zoom-content">
                            <FaArrowRight />
                          </span>
                        </SlideNextButton>
                      </div>
                      <div className="hidden md:flex items-center justify-center"></div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* NOT REQUIRED FOR NOW */}
      {/* <div className="relative z-10 -mt-30 px-6">
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
      </div> */}
    </>
  );
}
