import React from "react";
import { ServicesSectionCard } from "./service-section-card";
import roofRepair from "../../../assets/roof-repair.jpg";
import roofReplacement from "../../../assets/roof-replacement.jpg";
import roofInstallation from "../../../assets/roof-installation.jpg";
import roofInspection from "../../../assets/roof-inspection.jpg";
import flatRoofing from "../../../assets/flat-roofing.jpg";
import chimneyRepair from "../../../assets/chimney-repair.jpg";

import roofRepairIcon from "../../../assets/icon-box-3.svg";
import roofReplacementIcon from "../../../assets/roof-replacement.svg";
import roofInstallationIcon from "../../../assets/roof-installation.svg";
import flatRoofingIcon from "../../../assets/flat-roofing.svg";
import chimneyRepairIcon from "../../../assets/chimney-repairs.svg";
import roofInspectionIcon from "../../../assets/roof-inspection.svg";

export const services = [
  {
    image: roofRepair,
    icon: roofRepairIcon,
    title: "Roof Repair",
    description: "Expert repair services for all types of roofing issues.",
  },
  {
    image: roofReplacement,
    icon: roofReplacementIcon,
    title: "Roof Replacement",
    description: "Complete roof replacement with high-quality materials.",
  },
  {
    image: flatRoofing,
    icon: flatRoofingIcon,
    title: "Flat Roofing",
    description: "Durable and efficient flat roofing solutions.",
  },
  {
    image: roofInstallation,
    icon: roofInstallationIcon,
    title: "Roof Installation",
    description: "Professional installation for new and existing buildings.",
  },
  {
    image: roofInspection,
    icon: roofInspectionIcon,
    title: "Roof Inspection",
    description: "Thorough inspection to ensure your roof's integrity.",
  },
  {
    image: chimneyRepair,
    icon: chimneyRepairIcon,
    title: "Chimney Repairs",
    description: "Reliable chimney repair and maintenance services.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center text-center gap-3">
          <div>
            <div className="w-7 h-0.5 bg-[#9B1915]"></div>
            <div className="w-10 h-0.5 bg-[#9B1915] mt-2"></div>
          </div>
          <span className="text-[#9B1915] font-medium text-sm tracking-wide uppercase">
            Services
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f2933] mt-5">
          High-quality Services
        </h2>
      </div>
      <div className="grid gap-x-6 gap-y-30  sm:grid-cols-1 lg:grid-cols-3">
        {services.map((service, idx) => (
          <ServicesSectionCard key={idx} {...service} />
        ))}
      </div>
      <div className="flex justify-center mt-30">
        <button className="bg-[#b01010] text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-[#950e0e] transition">
          VIEW ALL SERVICES <span className="text-xs">↗</span>
        </button>
      </div>
    </section>
  );
}
