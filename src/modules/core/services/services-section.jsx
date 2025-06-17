import React from "react";
import {ServiceCard} from "./service-card";

// Sample icons – replace with actual icon paths or SVGs
// import icon1 from "../assets/icons/icon1.svg";
// import icon2 from "../assets/icons/icon2.svg";
// import icon3 from "../assets/icons/icon3.svg";
// ... import other icons similarly

const services = [
  {
    image: "/assets/roof-repair.jpg",
    icon: "icon1",
    title: "Roof Repair",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/assets/roof-replacement.jpg",
    icon: "icon2",
    title: "Roof Replacement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/assets/flat-roofing.jpg",
    icon: "icon3",
    title: "Flat Roofing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/assets/roof-installation.jpg",
    icon: "icon1",
    title: "Roof Installation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/assets/roof-inspection.jpg",
    icon: "icon2",
    title: "Roof Inspection",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/assets/chimney-repairs.jpg",
    icon: "icon3",
    title: "Chimney Repairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#b01010] uppercase text-sm font-semibold">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f2933]">
          High-quality Services
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#b01010] text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-[#950e0e] transition">
          VIEW ALL SERVICES <span className="text-xs">↗</span>
        </button>
      </div>
    </section>
  );
}
