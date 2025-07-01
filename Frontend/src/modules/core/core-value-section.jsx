import ourMission from "../../assets/our-mission.svg";
import ourVision from "../../assets/our-vision.svg";
import trustedServices from "../../assets/trusted-services.svg";

export function CoreValuesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F3F1F2] text-center p-6 shadow-sm">
          <div className="flex justify-center mb-4">
            <img
              src={ourMission}
              alt="ourMission"
              className="w-10 h-10 text-red-700"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor.
          </p>
        </div>

        <div className="bg-[#9B1915] text-center p-6 shadow-sm text-white">
          <div className="flex justify-center mb-4">
          <img
              src={ourVision}
              alt="ourVision"
              className="w-10 h-10 text-red-700"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor.
          </p>
        </div>

        <div className="bg-[#F3F1F2] text-center p-6 shadow-sm">
          <div className="flex justify-center mb-4">
          <img
              src={trustedServices}
              alt="trustedServices"
              className="w-10 h-10 text-red-700"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Trusted Services
          </h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  );
}
