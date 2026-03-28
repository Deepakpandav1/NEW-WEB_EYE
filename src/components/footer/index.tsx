// Professional Hospital Footer - Enterprise Grade
import React from "react";
import { Link } from "@tanstack/react-router";
import { footerLinks } from "../../utils/appUtils/constant";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaAward,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white">
      {/* Emergency Contact Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse">
                <FaPhoneAlt className="text-red-600 text-xl" />
              </div>
              <div>
                <div className="text-sm font-semibold">
                  24/7 EMERGENCY HELPLINE
                </div>
                <div className="text-lg md:text-xl font-bold">
                  {footerLinks.contact.emergency}
                </div>
              </div>
            </div>
            <Link
              to="/bookAnAppointment"
              className="px-6 py-2.5 bg-white text-red-600 font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Emergency Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <img
                  src="/logo2.png"
                  alt="Dr. Preeti's Bright Eye Care Hospital"
                  className="h-16 w-auto bg-white p-2 rounded-xl"
                />
              </Link>
              <h3 className="text-lg font-bold mb-3 text-cyan-300">
                Dr. Preeti's Bright Eye Care
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Pathankot's first HOTA-approved hospital for corneal
                transplantation. Delivering world-class eye care with
                cutting-edge technology and compassionate treatment.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-cyan-900/50 px-3 py-1.5 rounded-lg">
                  <FaAward className="text-yellow-400" />
                  <span className="text-xs font-semibold">HOTA Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-cyan-900/50 px-3 py-1.5 rounded-lg">
                  <FaHeart className="text-red-400" />
                  <span className="text-xs font-semibold">15+ Services</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-900 hover:bg-cyan-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <FaFacebookF className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-900 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <FaYoutube className="text-white text-lg" />
                </a>
                <a
                  href={`https://wa.me/${footerLinks.contact.phone.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-900 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <FaWhatsapp className="text-white text-lg" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.quickLinks[0]?.submenu?.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path || "#"}
                      className="text-gray-300 hover:text-cyan-300 text-sm flex items-center gap-2 group transition-all duration-200"
                    >
                      <svg
                        className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item.label}
                    </Link>
                  </li>
                ))}
                {footerLinks.quickLinks[1]?.submenu?.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path || "#"}
                      className="text-gray-300 hover:text-cyan-300 text-sm flex items-center gap-2 group transition-all duration-200"
                    >
                      <svg
                        className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                    clipRule="evenodd"
                  />
                </svg>
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.quickLinks[2]?.submenu
                  ?.slice(0, 6)
                  .map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path || "#"}
                        className="text-gray-300 hover:text-cyan-300 text-sm flex items-center gap-2 group transition-all duration-200"
                      >
                        <svg
                          className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link
                    to="/services"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-2 group"
                  >
                    View All Services
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-700 transition-colors">
                    <FaMapMarkerAlt className="text-cyan-300" />
                  </div>
                  <div className="text-sm text-gray-300">
                    <div className="font-semibold text-white mb-1">
                      Visit Us
                    </div>
                    <div>{footerLinks.contact.address}</div>
                    <div>{footerLinks.contact.address1}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-700 transition-colors">
                    <FaPhoneAlt className="text-cyan-300" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-1">Call Us</div>
                    <a
                      href={`tel:${footerLinks.contact.phone}`}
                      className="text-gray-300 hover:text-cyan-300"
                    >
                      {footerLinks.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-700 transition-colors">
                    <FaEnvelope className="text-cyan-300" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-1">
                      Email Us
                    </div>
                    <a
                      href={`mailto:${footerLinks.contact.email}`}
                      className="text-gray-300 hover:text-cyan-300 break-all"
                    >
                      {footerLinks.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-700 transition-colors">
                    <FaClock className="text-cyan-300" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-1">
                      Working Hours
                    </div>
                    <div className="text-gray-300">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </div>
                    <div className="text-gray-300">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-900/50 bg-slate-950/50 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-cyan-400 font-semibold">
                Dr. Preeti's Bright Eye Care Hospital
              </span>
              . All Rights Reserved.
              <span className="mx-2">|</span>
              <Link
                to="/termsofservices"
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="mx-2">|</span>
              <Link
                to="/privacyPolicy"
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              Made with <span className="text-red-500">❤</span> for Better
              Vision
            </div>
          </div>
        </div>
      </div>

      {/* Floating Emergency Button - Desktop Only */}
      <a
        href={`tel:${footerLinks.contact.emergency}`}
        className="hidden lg:flex fixed bottom-24 right-6 bg-gradient-to-r from-red-600 to-orange-600 text-white px-5 py-3 rounded-full shadow-2xl items-center gap-3 hover:shadow-red-500/50 hover:scale-105 transition-all duration-200 z-40 animate-pulse"
      >
        <FaPhoneAlt className="text-lg" />
        <div className="text-sm">
          <div className="font-semibold">24/7 Emergency</div>
          <div className="text-xs">{footerLinks.contact.emergency}</div>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
