import React from "react";

export function BookingForm() {
  return (
    <div className="bg-[#9B1915] p-4 lg:p-12 text-white">
      <div className="space-y-6 mt-8">
        <h2 className="text-[24px] font-bold mb-8 text-center md:text-left">
          Book Roof solutions
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Write your name"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <input
            type="email"
            placeholder="Email address"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <input
            type="text"
            placeholder="Inspection Date"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <input
            type="text"
            placeholder="Your Location"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full p-4 rounded"
          />

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
