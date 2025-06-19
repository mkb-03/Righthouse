import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTools } from "react-icons/fa";
import { ContactInfoCard } from "./contact-info-card";
import { BookingForm } from "../booking/booking-form";

export function ContactSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section 1: Map and Form */}
          <div className="lg:col-span-2 relative">
            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full min-h-[500px]">
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="Map"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Form positioned on right 50% of map */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2  w-1/2 max-w-md z-10">
              <div className="bg-white shadow-xl rounded-lg">
                <BookingForm />
              </div>
            </div>

            {/* Mobile fallback: Show form below map */}
            <div className="mt-6 lg:hidden">
              <BookingForm />
            </div>
          </div>

          {/* Section 2: Contact Information */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-[#9B1915]"></div>
                <span className="text-red-700 font-medium text-sm tracking-wide uppercase">
                  CONTACT US
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Quality roofing for every Structure.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactInfoCard
                icon={<FaPhone className="w-6 h-6 text-white" />}
                title="Call Us"
                content="+123 (456) 789-0118"
              />
              <ContactInfoCard
                icon={<FaEnvelope className="w-6 h-6 text-white" />}
                title="Email Us"
                content="info@example.com"
              />
              <ContactInfoCard
                icon={<FaMapMarkerAlt className="w-6 h-6 text-white" />}
                title="Address"
                content="Mesa, Wolverhampton"
              />
              <ContactInfoCard
                icon={<FaTools className="w-6 h-6 text-white" />}
                title="Quality Roof"
                content="Repair"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
