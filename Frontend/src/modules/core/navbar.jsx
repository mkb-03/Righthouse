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
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../assets/white-logo.svg";

const navLinks = [
  { href: "/", label: "HOME", active: true },
  { href: "/about-us", label: "ABOUT" },
  {
    href: "/service",
    label: "ROOFING SERVICES",
    dropdown: [
      "Pitched Roofs",
      "Flat Roofs",
      "Skylights / Velux",
      "Drone Surveys",
      "Fascias & Soffits",
      "Chimneys",
      "Roof Insulation",
      "Guttering",
    ],
  },
  // { href: "/home-maintenance", label: "HOME MAINTENANCE" },
  // { href: "/drone-surveys", label: "DRONE SURVEYS" },
  // { href: "/gutter", label: "GUTTERS" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header>
      <div className="flex">
        <div className="flex items-center justify-center bg-[#9B1915] px-5">
          <img
            src={logo}
            alt="Righteous Logo"
            className="w-[90%] min-w-[80px] max-w-[180px]"
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
              <button className="ml-4 text-[#9B1915] bg-white px-3 py-1 rounded-[4px] hover:bg-gray-200 transition">
                GET HELP
              </button>
            </div>
          </div>

          <div className="bg-white flex items-center justify-center px-6 md:px-6 py-10 md:py-2 relative">
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

            <nav className="hidden md:flex items-center justify-center gap-5 text-[13px] font-medium text-[#2f2933] uppercase w-full whitespace-nowrap">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="flex items-center gap-1">
                        <a
                          href={link.href}
                          className="hover:text-[#9f1313] transition-colors"
                        >
                          {link.label}
                        </a>
                        <FaChevronDown className="text-xs" />
                      </div>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-4 w-64 bg-white shadow-lg border border-gray-200 rounded-md z-50 transition-all duration-200 ${
                          servicesDropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                      >
                        <div className="py-2">
                          {link.dropdown.map((service, index) => (
                            <a
                              key={index}
                              href={`/service/${service
                                .toLowerCase()
                                .replace(/[\/&\s]+/g, "-")
                                .replace(/-+/g, "-")
                                .replace(/^-|-$/g, "")}`}
                              className="block px-4 py-2 text-sm text-[#2f2933] hover:bg-gray-100 hover:text-[#9f1313] transition-colors"
                            >
                              {service}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className={link.active ? "text-[#9f1313]" : ""}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex">
              <button className="bg-[#9f1313] text-white rounded-[4px] font-semibold px-8 py-3 ms-3 rounded-[4px] hover:bg-[#800f0f] flex items-center gap-2 w-[160px] uppercase">
                Call Us
                 <FaArrowRight />
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
                    <div key={link.label} className="text-center w-full">
                      {link.dropdown ? (
                        <div className="flex flex-col items-center w-full">
                          <div className="flex items-center gap-2 cursor-pointer w-full justify-center">
                            <a
                              href={link.href}
                              className="hover:text-[#9f1313] transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {link.label}
                            </a>
                            <FaChevronDown
                              className={`text-xs transition-transform duration-400 cursor-pointer ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                              onClick={() =>
                                setMobileServicesOpen(!mobileServicesOpen)
                              }
                            />
                          </div>
                          <div
                            className={`mt-4 flex flex-col gap-4 w-full text-center ${
                              mobileServicesOpen ? "block" : "hidden"
                            }`}
                          >
                            {link.dropdown.map((service, index) => (
                              <a
                                key={index}
                                href={`/service/${service
                                  .toLowerCase()
                                  .replace(/[\/&\s]+/g, "-")
                                  .replace(/-+/g, "-")
                                  .replace(/^-|-$/g, "")}`}
                                className="text-sm text-[#2f2933] hover:text-[#9f1313] transition-colors pl-4"
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                              >
                                {service}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          className={link.active ? "text-[#9f1313]" : ""}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
                <button
                  className="bg-[#9f1313] text-white font-bold px-8 py-2 rounded-[4px] hover:bg-[#800f0f] flex items-center gap-[10px] whitespace-nowrap w-[240px] uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  Call Us: 1234567 <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
