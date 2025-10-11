// Header.js
import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { headerMenu } from "../../utils/appUtils/constant";
import { path } from "framer-motion/client";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY <= 0 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => setShowHeader(true), 1000);
      setScrollTimeout(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  const renderItem = (item) => {
    if (typeof item === "string") {
      if (item.includes("@")) return <a href={`mailto:${item}`}>{item}</a>;
      if (item.includes("+91") || item.startsWith("0"))
        return <a href={`tel:${item.replace(/[^+\d]/g, "")}`}>{item}</a>;
      return <span>{item}</span>;
    }
    if (item?.Path || item?.path) {
      return <Link to={item.Path || item.path}>{item.label}</Link>;
    }
    return <span>{item.label}</span>;
  };

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.div
            key="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="header-main-div1 px-4 md:px-6 lg:px-10 py-2 flex justify-between items-center bg-white/90 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50"
          >
            {/* Logo */}

            <div className="logo-lft">
              <Link to="/">
                <img className="w-20 sm:w-24" src="/logo2.png" alt="logo" />
              </Link>
            </div>

            {/* Navigation Menu - Visible only above 1024px */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              {headerMenu.map((menu, idx) => (
                <div key={idx} className="relative group">
                  {menu.Path ? (
                    <Link
                      to={menu.Path}
                      className="text-cyan-900 hover:text-teal-600 font-bold text-[16px] py-2 flex items-center text-center justify-center"
                    >
                      <span>{menu.title}</span>
                    </Link>
                  ) : (
                    <button className="text-cyan-900 hover:text-teal-600 font-bold text-[16px] py-2 flex items-center text-center justify-center ">
                      <span>{menu.title}</span>
                      {menu.items && (
                        <svg
                          className="w-3 h-3 mt-0.5"
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
                    <div className="absolute left-0 top-full mt-0 group-hover:block hidden bg-white shadow-md border border-teal-600 rounded-xl w-80 z-50">
                      {menu.items.map((item, subIdx) => (
                        <div key={subIdx} className="relative group/item">
                          <div className="text-cyan-900 px-4 py-2 font-bold text-[16px] hover:text-teal-600 flex justify-between items-center relative z-10">
                            {renderItem(item)}
                            {item?.items && (
                              <svg
                                className="w-3 h-3 ml-2"
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
                            )}
                          </div>
                          {subIdx < menu.items.length - 1 && (
                            <hr className="border-t border-teal-600 mx-4" />
                          )}
                          {item?.items && (
                            <div className="absolute left-full top-0 px-2 hidden group-hover/item:block p-2 bg-white shadow-md border border-r-teal-600 border-t-teal-600 border-b-teal-600 border-l-0 rounded-xl w-56 z-50">
                              {item.items.map((subItem, subSubIdx) => (
                                <React.Fragment key={subSubIdx}>
                                  <div className="text-cyan-900 block px-4 py-2 font-medium text-lg hover:text-teal-600">
                                    {renderItem(subItem)}
                                  </div>
                                  {subSubIdx < item.items.length - 1 && (
                                    <hr className="border-t border-teal-600 mx-2" />
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-2 rq-f-call">
              <div className="hidden lg:block">
                <Link
                  to="/bookAnAppointment"
                  className="bg-cyan-900 text-white px-4 py-2 rounded-3xl text-xs font-medium hover:bg-teal-700 transition"
                >
                  Book An Appointment
                </Link>
              </div>
              <div>
                <Link
                  to="/login"
                  className="bg-cyan-900 text-white p-1.5 sm:p-2 tex-sm rounded-3xl hover:bg-cyan-800 transition flex items-center justify-center"
                >
                  <img
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-sm lg:w-9 lg:h-9 object-contain"
                    src="/key-ico.ico"
                    alt="LOGIN"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile/Tablet Bottom Navigation (<=1024px) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-teal-600 shadow-lg z-50 flex justify-around py-2">
        <Link
          to="/services"
          className="flex flex-col items-center text-cyan-900 hover:text-teal-600"
        >
          <div className="w-12 h-12 bg-cyan-900 text-white rounded-lg flex items-center justify-center">
            📋
          </div>
          <span className="text-xs mt-1">Services</span>
        </Link>
        <Link
          to="/ContactUs"
          className="flex flex-col items-center text-cyan-900 hover:text-teal-600"
        >
          <div className="w-12 h-12 bg-cyan-900 text-white rounded-lg flex items-center justify-center">
            📞
          </div>
          <span className="text-xs mt-1">Contact</span>
        </Link>
        <Link
          to="/facilityTour"
          className="flex flex-col items-center text-cyan-900 hover:text-teal-600"
        >
          <div className="w-12 h-12 bg-cyan-900 text-white rounded-lg flex items-center justify-center">
            🏥
          </div>
          <span className="text-xs mt-1">Facility Tour</span>
        </Link>
        <Link
          to="/meetourteam"
          className="flex flex-col items-center text-cyan-900 hover:text-teal-600"
        >
          <div className="w-12 h-12 bg-cyan-900 text-white rounded-lg flex items-center justify-center">
            🩺
          </div>
          <span className="text-xs mt-1">Facility Tour</span>
        </Link>
        <Link
          to="/bookAnAppointment"
          className="flex flex-col items-center text-cyan-900 hover:text-teal-600"
        >
          <div className="w-12 h-12 bg-cyan-900 text-white rounded-lg flex items-center justify-center">
            📅
          </div>
          <span className="text-xs mt-1">Book</span>
        </Link>
      </div>
    </>
  );
}

export default Header;
