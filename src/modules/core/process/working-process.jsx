import React from "react";
import { ProcessStep } from "./process-step";

// Replace with actual icon imports
// import iconInspection from "../assets/icons/inspection.svg";
// import iconQuotation from "../assets/icons/quotation.svg";
// import iconService from "../assets/icons/service.svg";
// import iconFollowUp from "../assets/icons/followup.svg";

const steps = [
  {
    step: "01",
    icon: "iconInspection",
    title: "Inspection",
    description: "Curabitur nullad sit amet tempus convallis",
  },
  {
    step: "02",
    icon: "iconQuotation",
    title: "Quotation",
    description: "Curabitur nullad sit amet tempus convallis",
    active: true,
  },
  {
    step: "03",
    icon: "iconService",
    title: "Service",
    description: "Curabitur nullad sit amet tempus convallis",
  },
  {
    step: "04",
    icon: "iconFollowUp",
    title: "Follow-Up",
    description: "Curabitur nullad sit amet tempus convallis",
  },
];

export function WorkingProcess() {
  return (
    <section
      className="py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/roof-bg.jpg')" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#b01010] uppercase text-sm font-semibold mb-2">
          How it work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f2933] mb-12">
          Standard Working Process
        </h2>
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="bg-[#b01010] text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-[#950e0e] transition">
            BOOK NOW <span className="text-xs">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
