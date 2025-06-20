import { FaArrowRight } from "react-icons/fa";

export function AboutSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image collage */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="row-span-2">
            <img
              src="/images/roofing-1.jpg"
              alt="Main worker"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/roofing-2.jpg"
              alt="Secondary worker"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/roofing-3.jpg"
              alt="Worker close-up"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          {/* Heading */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-red-700"></div>
              <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Roofing is our heritage, <br /> Quality is our tradition
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Badge and Experience */}
          <div className="flex items-center gap-4">
            <img src="/images/badge-icon.png" alt="Badge" className="w-20 h-20" />
            <div>
              <h3 className="text-3xl font-bold text-gray-800">25+</h3>
              <p className="font-semibold text-gray-700 leading-tight">Years Experience<br />Company</p>
              <p className="text-sm text-gray-500 mt-1">
                Ruffers construct and fix roofs using hand tools and other equipment. They ensure roofs are stable and waterproof.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold transition">
            BOOK AN APPOINTMENT
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
