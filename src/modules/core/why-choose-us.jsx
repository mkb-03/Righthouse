import React from "react";
import { AiOutlineSetting, AiOutlineTrophy, AiOutlineHome, AiOutlineCalculator } from "react-icons/ai";
import manWorking from "../../assets/manWorking.jpg";

export function WhyChooseUs() {
  return (
    <div className="w-full">
      {/* Statistics Bar */}
      <div className="bg-red-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <AiOutlineSetting className="w-8 h-8 text-white mr-2" />
                <span className="text-4xl font-bold">25+</span>
              </div>
              <p className="text-sm">Years Of Experience</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <AiOutlineTrophy className="w-8 h-8 text-white mr-2" />
                <span className="text-4xl font-bold">180+</span>
              </div>
              <p className="text-sm">Awards Received</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <AiOutlineHome className="w-8 h-8 text-white mr-2" />
                <span className="text-4xl font-bold">180+</span>
              </div>
              <p className="text-sm">Roofing Completed</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <AiOutlineCalculator className="w-8 h-8 text-white mr-2" />
                <span className="text-4xl font-bold">85k</span>
              </div>
              <p className="text-sm">Roofing Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-white"></div>
                  <span className="text-white font-medium text-sm tracking-wide uppercase">WHY CHOOSE US</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Quality roofing for every Structure.</h2>
              </div>

              {/* Feature Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Quality Box */}
                <div className="bg-white text-gray-800 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <AiOutlineHome className="w-6 h-6 text-red-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Quality</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Pellentesque in ipsum id porta dapibus. Vestibulum ac diam sit amet quam
                  </p>
                </div>

                {/* Speed Box */}
                <div className="bg-red-700 text-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                    <AiOutlineSetting className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Speed</h3>
                  <p className="text-sm text-white text-opacity-90 leading-relaxed">
                    Pellentesque in ipsum id porta dapibus. Vestibulum ac diam sit amet quam
                  </p>
                </div>

                {/* Warranty Box */}
                <div className="bg-white text-gray-800 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <AiOutlineTrophy className="w-6 h-6 text-red-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Warranty</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Pellentesque in ipsum id porta dapibus. Vestibulum ac diam sit amet quam
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-[600px]">
              <img
                src={manWorking}
                alt="Construction worker in safety gear working on a roof"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}