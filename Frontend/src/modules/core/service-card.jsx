import React from "react";

export function ServiceCard({
  title,
  icon,
  description,
  isDark = false,
  showReadMore = false,
  transparentBg = false,
}) {
  return (
    <div
      className={`p-10 pt-12 shadow relative border-t-2 ${
        transparentBg
          ? isDark
            ? "bg-[#2f2933]/80 text-white border-white"
            : "bg-[#CDCDCD]/80 text-black border-[#9f1313]"
          : isDark
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
      {showReadMore && (
        <div className="pt-2 text-sm font-semibold text-[#9B1915] flex items-center gap-1 cursor-pointer">
          READ MORE <span className="text-xs">↗</span>
        </div>
      )}
    </div>
  );
}