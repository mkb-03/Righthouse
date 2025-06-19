import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaPaperPlane,
} from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="bg-[#9B1915] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium mb-2">NEED ANY HELP?</p>
            <h3 className="text-2xl lg:text-3xl font-bold">
              Let's book your Appointment with Us now
            </h3>
          </div>
          <button className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors whitespace-nowrap">
            BOOK NOW
            <IoArrowForward className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="w-8 h-8 bg-[#9B1915] rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center -ml-2">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">RIGHTEOUS</h3>
                  <p className="text-xs text-gray-600">
                    ROOFING & PROPERTY MAINTENANCE LTD
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#9B1915] rounded-full flex items-center justify-center text-white hover:bg-red-800 transition-colors"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-800 text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Roofing Services */}
            <div>
              <h4 className="font-bold text-gray-800 text-lg mb-4">
                Roofing Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    Roof Repair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    Roof Replacement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    New Roof Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    Flat Roofing
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-gray-800 text-lg mb-4">
                Subscribe Now
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Subscribe our newsletter to get our latest Update & news
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
                <button className="bg-[#9B1915] hover:bg-red-800 text-white px-4 py-3 rounded-r-md transition-colors">
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#9B1915] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2025 All Rights Reserved Righteous</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
