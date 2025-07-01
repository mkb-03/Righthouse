import { ContactInfoCard } from "./contact-info-card";
import { BookingForm } from "../booking/booking-form";
import location from "../../../assets/location.svg";
import email from "../../../assets/email.svg";
import qualityRoof from "../../../assets/contact-roof-repair.svg";
import contactIcon from "../../../assets/contact-icon.svg";

export function ContactSection() {
  return (
    <div className="py- my-4 bg-gray-50">
      <div className="mx-auto px-2">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="overflow-hidden shadow-lg h-full min-h-[550px]">
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="Map"
                className="w-100px h-full object-cover"
              />
            </div>

            {/* <div className="hidden lg:block absolute top-25 left-130 transform -translate-x-1/2 -translate-y-1/2 w-[350px] max-w-sm z-10 h-[150px]">
              <div className="bg-white shadow-xl rounded-lg">
                <BookingForm />
              </div>
            </div> */}

            <div className="mt-6 lg:hidden">
              <BookingForm />
            </div>
          </div>

          <div className="space-y-8 lg:mt-20 mt-130">
            <div className="space-y-4 lg:text-start text-center">
              <div className="flex gap-3 items-center justify-center lg:justify-start">
                <div>
                  <div className="w-7 h-0.5 bg-[#9B1915]"></div>
                  <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
                </div>
                <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Quality roofing for every Structure.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactInfoCard
                icon={
                  <img
                    src={contactIcon}
                    alt="contactIcon"
                    className="w-8 h-8 text-white"
                  />
                }
                title="Call Us"
                content="+123 (456) 789-0118"
              />
              <ContactInfoCard
                icon={
                  <img
                    src={email}
                    alt="Email"
                    className="w-8 h-8 text-white"
                  />
                }
                title="Email Us"
                content="info@example.com"
              />
              <ContactInfoCard
                icon={
                  <img
                    src={location}
                    alt="Location"
                    className="w-8 h-8 text-white"
                  />
                }
                title="Address"
                content="Mesa, Wolverhampton"
              />
              <ContactInfoCard
                icon={
                  <img
                    src={qualityRoof}
                    alt="Quality Roof"
                    className="w-8 h-8 text-white"
                  />
                }
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
