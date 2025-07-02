import React from "react";
import { FaArrowRight } from "react-icons/fa";
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
    title: "Pitched Roofs",
    description:
      "Expert repair and installation services for pitched roofs of all types.",
  },
  {
    image: roofReplacement,
    icon: roofReplacementIcon,
    title: "Skylights / Velux",
    description:
      "Professional installation and repair of skylights and Velux windows.",
  },
  {
    image: flatRoofing,
    icon: flatRoofingIcon,
    title: "Flat Roofs",
    description:
      "Durable and energy-efficient solutions for all flat roofing needs.",
  },
  {
    image: roofInstallation,
    icon: roofInstallationIcon,
    title: "Fascias & Soffits",
    description:
      "Enhance and protect your roofline with quality fascias and soffits.",
  },
  {
    image: roofInspection,
    icon: roofInspectionIcon,
    title: "Drone Surveys",
    description:
      "Advanced drone inspections to assess roof condition safely and accurately.",
  },
  {
    image: chimneyRepair,
    icon: chimneyRepairIcon,
    title: "Chimneys",
    description:
      "Comprehensive chimney repair, maintenance, and rebuild services.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl w-full mx-auto px-6">
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
        <div className="flex justify-center mt-35">
          <button className="btn-zoom bg-[#9B1915] text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-[#950e0e] transition">
            <span className="btn-zoom-content">
              VIEW ALL SERVICES <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
