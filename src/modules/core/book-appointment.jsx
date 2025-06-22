import React from "react";
import { IoArrowForward } from "react-icons/io5";

export function BookAppointment() {
  return (
    <div className="bg-[#9B1915] text-white py-8">
      <div className="max-w-6xl mx-auto px-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium mb-2">NEED ANY HELP?</p>
          <h3 className="text-2xl lg:text-3xl font-bold">
            Let's book your Appointment with Us now
          </h3>
        </div>
        <button className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors whitespace-nowrap">
          BOOK NOW
          <IoArrowForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
