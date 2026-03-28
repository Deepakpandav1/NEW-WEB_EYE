// Professional Hospital Header - Refined Design (Logo Only)
import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { headerMenu } from "../../utils/appUtils/constant";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY <= 0 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowHeader(true), 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const renderItem = (item) => {
    if (typeof item === "string") {
      if (item.includes("@"))
        return (
          <a
            href={`mailto:${item}`}
            className="hover:text-cyan-600 transition-colors"
          >
            {item}
          </a>
        );
      if (item.includes("+91") || item.startsWith("0"))
        return (
          <a
            href={`tel:${item.replace(/[^+\d]/g, "")}`}
            className="hover:text-cyan-600 transition-colors"
          >
            {item}
          </a>
        );
      return <span>{item}</span>;
    }
    if (item?.Path || item?.path) {
      return (
        <Link
          to={item.Path || item.path}
          className="hover:text-cyan-600 transition-colors"
        >
          {item.label}
        </Link>
      );
    }
    return <span>{item.label}</span>;
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-cyan-800 to-teal-900 text-white py-2 px-4 fixed top-0 left-0 right-0 z-[60]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+916239507877"
              className="flex items-center gap-1 hover:text-cyan-200 transition-colors"
              aria-label="Call emergency number +91-62395 07877"
            >
              <svg
                className="w-3 h-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">Emergency: +91-62395 07877</span>
            </a>
            <a
              href="mailto:drpreetisbrighteyecare@gmail.com"
              className="hidden md:flex items-center gap-1 hover:text-cyan-200 transition-colors"
              aria-label="Email us at drpreetisbrighteyecare@gmail.com"
            >
              <svg
                className="w-3 h-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden lg:inline">
                drpreetisbrighteyecare@gmail.com
              </span>
              <span className="lg:hidden">Email Us</span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden sm:flex items-center gap-1">
              <svg
                className="w-3 h-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Mon-Sat 9AM-6PM</span>
            </span>
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-200 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-200 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-3 h-3"
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
                className="hover:text-cyan-200 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white border-b border-gray-200 shadow-md fixed top-[32px] sm:top-[28px] left-0 right-0 z-50"
          >
            <nav
              className="max-w-7xl mx-auto px-4 sm:px-6"
              role="navigation"
              aria-label="Main navigation"
            >
              <div className="flex items-center justify-between h-14 sm:h-16">
                {/* Logo Only */}
                <Link
                  to="/"
                  className="flex items-center group flex-shrink-0"
                  aria-label="Go to homepage"
                >
                  <img
                    src="/logo2.png"
                    alt="Dr. Preeti's Bright Eye Care Hospital Logo"
                    width="120"
                    height="56"
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    fetchpriority="high"
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-0.5">
                  {headerMenu.map((menu, idx) => (
                    <div key={idx} className="relative group">
                      {menu.Path ? (
                        <Link
                          to={menu.Path}
                          className="px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-all duration-200 whitespace-nowrap"
                        >
                          {menu.title}
                        </Link>
                      ) : (
                        <button className="px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-all duration-200 flex items-center gap-1 whitespace-nowrap">
                          {menu.title}
                          {menu.items && (
                            <svg
                              className="w-3 h-3 transform group-hover:rotate-180 transition-transform duration-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </button>
                      )}

                      {menu.items && (
                        <div className="absolute left-0 top-full mt-1 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                            {menu.items.map((item, subIdx) => (
                              <div key={subIdx} className="px-2">
                                <div className="px-3 py-2 text-xs xl:text-sm font-semibold text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors cursor-pointer">
                                  {renderItem(item)}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    to="/bookAnAppointment"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs xl:text-sm font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
                    aria-label="Book an appointment"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Book
                  </Link>
                  <Link
                    to="/login"
                    className="p-2 bg-gray-100 hover:bg-cyan-50 text-cyan-700 rounded-full transition-all duration-200"
                    title="Patient Login"
                    aria-label="Patient login"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </Link>
                  <button
                    className="lg:hidden p-2 bg-gray-100 hover:bg-cyan-50 text-cyan-700 rounded-full transition-all duration-200"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          mobileMenuOpen
                            ? "M6 18L18 6M6 6l12 12"
                            : "M4 6h16M4 12h16M4 18h16"
                        }
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed top-[84px] right-0 bottom-0 w-[min(320px,85vw)] bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <nav className="p-6 space-y-1" aria-label="Mobile navigation">
              {headerMenu.map((menu, idx) => (
                <div key={idx} className="py-2">
                  {menu.Path ? (
                    <Link
                      to={menu.Path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-xl transition-colors"
                    >
                      {menu.title}
                    </Link>
                  ) : menu.items ? (
                    <>
                      <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {menu.title}
                      </div>
                      <div className="space-y-1 pl-2">
                        {menu.items.map((item, subIdx) => (
                          <div key={subIdx} onClick={() => setMobileMenuOpen(false)}>
                            {typeof item === "string" ? (
                              item.includes("@") ? (
                                <a
                                  href={`mailto:${item}`}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg"
                                >
                                  {item}
                                </a>
                              ) : (
                                <a
                                  href={`tel:${item.replace(/[^+\d]/g, "")}`}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg"
                                >
                                  {item}
                                </a>
                              )
                            ) : (item?.Path || item?.path) ? (
                              <Link
                                to={item.Path || item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <span className="block px-4 py-2.5 text-sm text-gray-700">{item?.label}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <span className="block px-4 py-3 text-base font-semibold text-gray-700">
                      {menu.title}
                    </span>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/bookAnAppointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 pb-safe">
        <div className="grid grid-cols-5 gap-1 p-2">
          <Link
            to="/services"
            className="flex flex-col items-center gap-1 py-2 px-1 hover:bg-cyan-50 rounded-lg transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-gray-700">
              Services
            </span>
          </Link>
          <Link
            to="/ContactUs"
            className="flex flex-col items-center gap-1 py-2 px-1 hover:bg-cyan-50 rounded-lg transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-gray-700">
              Contact
            </span>
          </Link>
          <Link
            to="/facilityTour"
            className="flex flex-col items-center gap-1 py-2 px-1 hover:bg-cyan-50 rounded-lg transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-gray-700">
              Facility
            </span>
          </Link>
          <Link
            to="/meetourteam"
            className="flex flex-col items-center gap-1 py-2 px-1 hover:bg-cyan-50 rounded-lg transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-gray-700">Team</span>
          </Link>
          <Link
            to="/bookAnAppointment"
            className="flex flex-col items-center gap-1 py-2 px-1 hover:bg-cyan-50 rounded-lg transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-gray-700">Book</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
