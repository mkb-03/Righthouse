import React from "react";

export function BookingForm() {
  return (
    <div className="bg-red-700 p-8 lg:p-12 text-white">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-8">Book Roof solutions</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Write your name"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full px-3 rounded"
          />

          <input
            type="email"
            placeholder="Email address"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full px-3 rounded"
          />

          <input
            type="text"
            placeholder="Inspection Date"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full px-3 rounded"
          />

          <input
            type="text"
            placeholder="Your Location"
            className="bg-white text-gray-800 border-0 h-12 placeholder:text-gray-500 w-full px-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
