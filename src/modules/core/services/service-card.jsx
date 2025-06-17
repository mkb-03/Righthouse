import React from "react";

export function ServiceCard({ image, icon, title, description }) {
  return (
    <div className="relative group overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300" />
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4">
        <div className="absolute -top-6 left-4 bg-[#b01010] text-white p-2 rounded">
          <img src={icon} alt={title + " icon"} className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-[#2f2933]">{title}</h3>
        <p className="text-sm text-[#555]">{description}</p>
        <div className="pt-2 text-sm font-semibold text-[#b01010] flex items-center gap-1 cursor-pointer">
          READ MORE <span className="text-xs">↗</span>
        </div>
      </div>
    </div>
  );
}
