import React from "react";
import {BookingDetails} from "./booking-details";
import {BookingForm} from "./booking-form";
export function Booking() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <BookingDetails />
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
