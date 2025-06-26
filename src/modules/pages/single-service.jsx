import React from "react";
import { BookingForm } from "../core/booking/booking-form";
import { FaqSection } from "../core/faq/faq-section";
import { ServiceCard } from "../core/service-card";
import { faqData } from "../core/faq/faqData";
import roofRepairIcon from "../../assets/icon-box-3.svg";
import roofReplacementIcon from "../../assets/roof-replacement.svg";
import roofInstallationIcon from "../../assets/roof-installation.svg";
import heroSectionBg from "../../assets/heroSectionBg.jpg";
import manWorking from "../../assets/manWorking.jpg";
import { PageHeader } from "../core/page-header";

export function SingleService() {
  return (
    <>
      <PageHeader title="Service Details" />
      <div className="bg-[#F8F8F8] min-h-screen py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <img
              src={heroSectionBg}
              alt="Protect Your Roof from Storm"
              className="w-full h-80 object-cover rounded-lg"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6">
              Protect Your Roof from Storm
            </h1>
            <p className="text-gray-600">
              When it comes to protecting your roof from storms, there are
              several features you can add to your roof to increase its
              durability and resistance. One of the most popular features is
              impact-resistant shingles. These shingles are specially designed
              to withstand hail, high winds, and other extreme weather
              conditions. They come in a variety of materials and styles,
              including asphalt, metal, and tile.
              <br />
              <br />
              Another important feature is the use of hurricane straps or clips.
              These metal connectors are designed to secure the roof to the
              walls and provide extra strength to the roof's structure during a
              storm. They are especially critical in areas that are prone to
              hurricanes and other severe weather events.
              <br />
              <br />
              Proper ventilation is also important to prevent moisture buildup,
              which can weaken the roof over time. A well-ventilated roof allows
              air to flow through the attic and roof system.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8">
              Extra Roofing Services
            </h2>
            <p className="text-gray-600 mb-6">
              Roof cleaning: Professional roof cleaning can remove debris, mold,
              and mildew, improving the appearance of your roof and prolonging
              its lifespan.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Roof Plumbing"
                icon={
                  <img
                    src={roofRepairIcon}
                    alt="Roof Plumbing"
                    className="w-16 h-16 "
                  />
                }
                description="Roof plumbing can be described as any work that includes renovating."
              />
              <ServiceCard
                title="Quality Material"
                icon={
                  <img
                    src={roofReplacementIcon}
                    alt="Quality Material"
                    className="w-16 h-16"
                  />
                }
                description="Using quality materials is an essential factor in protecting your roof."
                isDark={true}
              />
              <ServiceCard
                title="Expert Engineer"
                icon={
                  <img
                    src={roofInstallationIcon}
                    alt="Expert Engineer"
                    className="w-16 h-16"
                  />
                }
                description="Overall, hiring an expert engineer is an essential step in protecting your roof."
              />
            </div>
            <div className="mt-10">
              <FaqSection faqData={faqData} gridClass="px-5" />
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Roofing Services
              </h3>
              <ul className="space-y-2">
                <li className="bg-[#9B1915] text-white rounded px-4 py-2 flex justify-between items-center font-semibold">
                  Roof Repair <span>&rarr;</span>
                </li>
                <li className="hover:bg-gray-100 rounded px-4 py-2 flex justify-between items-center cursor-pointer">
                  Roof Replacement <span>&rarr;</span>
                </li>
                <li className="hover:bg-gray-100 rounded px-4 py-2 flex justify-between items-center cursor-pointer">
                  Flat Roofing <span>&rarr;</span>
                </li>
                <li className="hover:bg-gray-100 rounded px-4 py-2 flex justify-between items-center cursor-pointer">
                  Roof Installation <span>&rarr;</span>
                </li>
                <li className="hover:bg-gray-100 rounded px-4 py-2 flex justify-between items-center cursor-pointer">
                  Roof Inspection <span>&rarr;</span>
                </li>
                <li className="hover:bg-gray-100 rounded px-4 py-2 flex justify-between items-center cursor-pointer">
                  Chimney Repairs <span>&rarr;</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img
                src={manWorking}
                alt="Consultation"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <div className="bg-[#9B1915] text-white rounded-lg p-4 w-full text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="inline-block bg-white text-[#9B1915] rounded-full p-2 mr-2">
                    &#128222;
                  </span>
                  <span className="font-bold">Need Consultation</span>
                </div>
                <div className="font-bold text-lg">+111 (564) 568 25</div>
                <div className="text-sm">info@example.com</div>
              </div>
              <div className="w-full mt-4">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
