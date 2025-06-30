import { ContactInfoCard } from "./contact-info-card";
import { QueryForm } from "../faq/query-form";
import location from "../../../assets/location.svg";
import email from "../../../assets/email.svg";
import qualityRoof from "../../../assets/contact-roof-repair.svg";
import contactIcon from "../../../assets/contact-icon.svg";

export function ContactDetailsSection() {
  return (
    <div className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex gap-3 justify-center lg:justify-start items-center">
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
          <div>
            <QueryForm
              heading="Contact Us"
              bgColor="#F3F1F2"
              headingColor="#000000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
