import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/white-logo.svg";

const navLinks = [
  { href: "/", label: "HOME", active: true },
  { href: "/about-us", label: "ABOUT" },
  { href: "#", label: "SERVICES" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex">
        <div className="flex items-center justify-center bg-[#9B1915] px-5">
          <img
            src={logo}
            alt="Righteous Logo"
            className="w-[60%] min-w-[80px] max-w-[180px]"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="bg-[#2f2933] text-white text-sm md:flex justify-between items-center px-6 py-2 hidden">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FaPhoneAlt />
                <span>+111 (564) 568 25</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <div className="flex items-center gap-1">
                <FaEnvelope className="text-[#9B1915]" />
                <span>needhelp.roofing@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
              <button className="ml-4 border border-white text-[#9B1915] bg-white px-3 py-1 rounded hover:bg-gray-200 transition">
                GET HELP
              </button>
            </div>
          </div>

          <div className="bg-white flex items-center px-6 md:px-6 py-10 md:py-2 relative">
            <button
              className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-30"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="w-6 h-6 text-[#9f1313]" />
              ) : (
                <FaBars className="w-6 h-6 text-[#9f1313]" />
              )}
            </button>

            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#2f2933] uppercase w-full">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={link.active ? "text-[#9f1313]" : ""}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex">
              <button className="bg-[#9f1313] text-white font-bold px-8 py-2 rounded hover:bg-[#800f0f] flex items-center gap-2 whitespace-nowrap w-[200px]">
                GET A QUOTE <FaArrowRight />
              </button>
            </div>

            <div
              className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform transition-transform duration-300 md:hidden ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ willChange: "transform" }}
            >
              <button
                className="absolute right-6 top-6 z-60"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="w-7 h-7 text-[#9f1313]" />
              </button>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <nav className="flex flex-col items-center gap-6 text-lg font-semibold text-[#2f2933] uppercase">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={link.active ? "text-[#9f1313]" : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <button
                  className="bg-[#9f1313] text-white font-bold px-8 py-2 rounded hover:bg-[#800f0f] flex items-center gap-2 whitespace-nowrap w-[200px]"
                  onClick={() => setMenuOpen(false)}
                >
                  GET A QUOTE <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
