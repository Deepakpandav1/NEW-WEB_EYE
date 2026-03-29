import React from "react";
import { Link } from "@tanstack/react-router";
import DoctorSection from "../components/DoctorSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import CashlessInsuranceSection from "../components/CashlessInsuranceSection";
import ContactSection from "../components/ContactSection";
import CareModel from "../components/CareModel";
import Services from "../components/SpecialitySection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SEO from "../components/SEO";
import HomeWelcomeModal from "../components/HomeWelcomeModal";

export const Landing = () => {
  return (
    <>
      <HomeWelcomeModal />
      <SEO
        path="/"
        title={
          "Best Eye Hospital in Pathankot | Dr. Preeti's Bright Eye Care - #1 Eye Specialist Punjab"
        }
        description={
          "HOTA-approved eye hospital in Pathankot, Punjab. Cataract, LASIK, cornea & retina care by Dr. Preeti. Cashless insurance with 32+ partners. Book your eye appointment today."
        }
        keywords={
          "best eye hospital Pathankot, eye specialist Pathankot, cataract surgery Pathankot, LASIK surgery Pathankot, retina specialist Punjab, corneal transplant Pathankot, eye doctor Pathankot, eye care Punjab, ophthalmologist Pathankot, eye treatment Pathankot, Dr Preeti eye hospital, bright eye care Pathankot, eye surgery Pathankot, vision care Pathankot, eye clinic Pathankot, eye hospital Punjab, HOTA approved eye hospital, organ transplant Pathankot, Dr Preeti Pathankot, Dr Preeti eye specialist, Dr Preeti cataract surgeon, Dr Preeti cornea specialist, Dr Manju Kumari Pathankot, Dr Ashima Monga Pathankot, Dr Mohit Mahajan Pathankot, Dr Raghuraj Sharma Pathankot, best eye doctor Pathankot, top ophthalmologist Pathankot, eye surgeon Pathankot, cornea transplant surgeon Pathankot, cataract surgeon Pathankot, LASIK surgeon Pathankot, retina surgeon Pathankot, pediatric ophthalmologist Pathankot, oculoplastic surgeon Pathankot"
        }
      />
      <div className="landing-page-div">
        {/* Modern Announcement Bar */}
        <div className="gradient-primary py-3 overflow-hidden">
          <div className="flex flex-nowrap animate-marquee text-white font-semibold text-sm md:text-base">
            <span className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <svg
                className="h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {
                "HOTA-approved Eye Hospital — Approved by Punjab Govt. | Regd No. DPBECH(P)-CT(N)-PB-2025-5ME3/12737"
              }
            </span>
            <span className="ml-8 flex shrink-0 items-center gap-2 whitespace-nowrap">
              <svg
                className="h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {
                "First Organ/Tissue Transplantation – Corneal Transplantation Center in Pathankot, Punjab"
              }
            </span>
            <span className="ml-8 flex shrink-0 items-center gap-2 whitespace-nowrap">
              <svg
                className="h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {
                "Cashless treatment facility is available at our hospital with empanelment of up to 32 insurance companies"
              }
            </span>
          </div>
          <style>
            {`
          @keyframes marquee {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 32s linear infinite;
          }
        `}
          </style>
        </div>

        {/* Hero Section - Compact Design */}
        <div className="relative bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 overflow-hidden min-h-[40vh] max-h-[60vh] flex items-center">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-800/30 to-teal-900/50"></div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
            <div className="text-center space-y-3 sm:space-y-4 max-w-5xl mx-auto">
              {/* Top badges */}
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl text-xs sm:text-sm">
                  <svg
                    className="w-4 h-4 text-yellow-300 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-center sm:text-left">
                    🏆 India&apos;s Leading Eye Care Hospital
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-cyan-300/25 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl text-xs sm:text-sm max-w-[min(100%,22rem)] sm:max-w-none">
                  <svg
                    className="w-4 h-4 text-cyan-200 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span className="font-semibold leading-snug text-center sm:text-left">
                    Cashless facility available — up to{" "}
                    <span className="font-bold text-cyan-100">32</span>{" "}
                    insurance partners
                  </span>
                </div>
              </div>

              {/* Main Title - Compact */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Dr. Preeti's Bright{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Eye Care Hospital
                </span>
              </h1>

              {/* Subtitle - Compact */}
              <p className="text-sm sm:text-base md:text-lg text-cyan-50 leading-relaxed max-w-3xl mx-auto">
                Cornea and Phaco Center - Delivering world-class eye care with
                cutting-edge technology in Pathankot, Punjab
              </p>

              {/* Action Buttons - Compact */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center pt-2 sm:pt-3">
                <Link
                  to="/bookAnAppointment"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-cyan-700 text-sm font-bold rounded-full hover:bg-cyan-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-transparent border-2 border-white text-white text-sm font-bold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
                >
                  Our Services
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Stats Section - Inline Compact */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-5">
                {/* Stat 1 */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">
                    15+
                  </div>
                  <div className="text-xs text-cyan-100 font-semibold">
                    Specialties
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">
                    5+
                  </div>
                  <div className="text-xs text-cyan-100 font-semibold">
                    Expert Doctors
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">
                    24/7
                  </div>
                  <div className="text-xs text-cyan-100 font-semibold">
                    Emergency Helpline
                  </div>
                </div>
                {/* Trust Badges Inline */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-white font-semibold">
                    HOTA Approved
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-white font-semibold">
                    Cashless — 32 insurers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <Services />

        {/* Vision Statement Section - Compact */}
        <div className="relative bg-white py-8 sm:py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="card-modern p-6 sm:p-8">
              <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="w-8 h-8 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                    Visionaries in Eye Care. Dedicated to You.
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Our highly trained eye specialists are committed to restoring
                  and protecting your vision with precision and compassion. We
                  provide comprehensive, multi-specialty treatment with
                  collaboration, innovation, and patient-centered care.
                </p>
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium">
                    Advanced Technology
                  </span>
                  <span className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                    Expert Team
                  </span>
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    Patient-Centered
                  </span>
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                    HOTA Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CareModel />
        <DoctorSection />
        <CashlessInsuranceSection />

        {/* <TestimonialsSection /> */}
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
};
