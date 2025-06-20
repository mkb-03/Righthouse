import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

export function Navbar() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#2f2933] text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaPhoneAlt />
            <span>+111 (564) 568 25</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-1">
            <FaEnvelope className="text-[#b01010]" />
            <span>needhelp.roofing@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <button className="ml-4 border border-white text-[#b01010] bg-white px-3 py-1 rounded hover:bg-gray-200 transition">
            GET HELP
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white flex justify-between items-center px-6 py-4 shadow">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img
              src={Logo}
              alt="Righteous Logo"
              className="h-12 bg-[#9f1313] p-2"
            /> */}
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#2f2933]">
          <a href="#" className="text-[#9f1313]">
            HOME
          </a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES +</a>
          <a href="#">GALLERY</a>
          <a href="#">PRICING</a>
          <a href="#">BLOG</a>
          <a href="#">FAQ</a>
          <a href="#">REVIEWS</a>
        </nav>

        {/* Quote Button */}
        <button className="bg-[#9f1313] text-white font-bold px-5 py-2 rounded hover:bg-[#800f0f] flex items-center gap-2">
          GET A QUOTE <FaArrowRight />
        </button>
      </div>
    </header>
  );
}
