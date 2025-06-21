import React from "react";

export function ServiceCard({ title, icon, description, isDark = false }) {
  return (
    <div
      className={`p-10 pt-12  shadow relative border-t-1 ${
        isDark
          ? "bg-[#2f2933] text-white border-white"
          : "bg-white text-black border-[#9f1313]"
      }`}
    >
      <div className="absolute -top-8 left-20 transform -translate-x-1/2 w-[100px]">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className={`text-sm mt-2 ${isDark ? "text-white" : "text-[#6F6E77]"}`}>
        {description}
      </p>
    </div>
  );
}