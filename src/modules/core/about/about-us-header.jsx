import { FaAngleDoubleRight } from "react-icons/fa";
import roofRepair from "../../../assets/roof-repair.jpg";

export function AboutUsHeader() {
  return (
    <div className="relative h-60 bg-about-section flex items-center justify-center">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-center text-white cursor-pointer">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <div className="flex justify-center items-center space-x-2 text-sm">
          <span className="text-gray-200">Home</span>
          <FaAngleDoubleRight className="text-white text-xs" />
          <span className="text-red-500 font-semibold">About Us</span>
        </div>
      </div>
    </div>
  );
}
