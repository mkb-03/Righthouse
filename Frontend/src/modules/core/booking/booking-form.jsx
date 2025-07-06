import React from "react";

export function BookingForm({ inputHeight = "h-12", inputPadding = "p-8" }) {
  const inputClass = `bg-white text-gray-800 border-0 ${inputHeight} placeholder:text-gray-500 w-full ${inputPadding} rounded-[4px]`;
  return (
    <div className="bg-[#9B1915] p-8 lg:p-12 text-white">
      <div className="space-y-6">
        <h2 className="text-[24px] font-bold mb-8 text-center lg:text-left">
          Book Roof solutions
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Write your name"
            className={inputClass}
          />

          <input
            type="email"
            placeholder="Email address"
            className={inputClass}
          />

          <input
            type="text"
            placeholder="Inspection Date"
            className={inputClass}
          />

          <input
            type="text"
            placeholder="Your Location"
            className={inputClass}
          />
          <textarea
            placeholder="Your Query"
            className={`bg-white text-gray-800 border-0 h-30 placeholder:text-gray-500 w-full ${inputPadding} rounded-[4px]`}
          />

          <button
            type="submit"
            className="btn-zoom w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-[4px] flex justify-center items-center"
          >
            <span className="btn-zoom-content ">Book Now</span>
          </button>
        </form>
      </div>
    </div>
  );
}
