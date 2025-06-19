import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import React from "react";

export function BookingDetails() {
  return (
    <div className="p-8 lg:p-12 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-0.5 bg-[#9B1915]"></div>
          <span className="text-red-700 font-medium text-sm tracking-wide uppercase">BOOKING APPOINTMENT</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Get your Roofing Solutions With Our Profession
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AiOutlineHome className="w-6 h-6 text-red-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Professional</h3>
            <p className="text-gray-800">Worker</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AiOutlineHome className="w-6 h-6 text-red-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Safe and roof</h3>
            <p className="text-gray-800">Solution</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Roofing Solutions</span>
          <span className="text-gray-700 font-bold">95%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-[#9B1915] h-2 rounded-full" style={{ width: "95%" }}></div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-[#9B1915] rounded-full flex items-center justify-center">
          <AiOutlinePhone className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Any time Call Us</p>
          <p className="text-gray-800 font-bold text-lg">+111 (564) 568 25</p>
        </div>
      </div>
    </div>
  );
}
