import React from "react";
import { Link } from "@tanstack/react-router";
import DoctorSection from "../components/DoctorSection";
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

        {/* Announcement Bar */}
        <div className="gradient-primary py-2.5 overflow-hidden">
          <div className="flex flex-nowrap animate-marquee text-white font-semibold text-xs md:text-sm">
            <span className="flex shrink-0 items-center gap-2 whitespace-nowrap px-6">
              <svg className="h-4 w-4 shrink-0 opacity-90" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              HOTA-approved Eye Hospital — Approved by Punjab Govt. &nbsp;|&nbsp; Regd No. DPBECH(P)-CT(N)-PB-2025-5ME3/12737
            </span>
            <span className="flex shrink-0 items-center gap-2 whitespace-nowrap px-6">
              <svg className="h-4 w-4 shrink-0 opacity-90" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              First Corneal Transplantation Center in Pathankot, Punjab
            </span>
            <span className="flex shrink-0 items-center gap-2 whitespace-nowrap px-6">
              <svg className="h-4 w-4 shrink-0 opacity-90" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cashless treatment with 32+ insurance partners — Book your appointment today
            </span>
          </div>
          <style>{`
            @keyframes marquee {
              0%   { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee { animation: marquee 36s linear infinite; }
          `}</style>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0891b2 0%, #0d9488 60%, #0891b2 100%)" }}>
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white/10 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <svg className="w-3.5 h-3.5 text-yellow-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  India's Leading Eye Care Hospital
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <svg className="w-3.5 h-3.5 shrink-0 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  HOTA Approved
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Cashless — 32 Insurance Partners
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                Dr. Preeti's Bright
                <br />
                <span className="text-cyan-100">Eye Care Hospital</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-cyan-50/90 leading-relaxed max-w-2xl mx-auto mb-8">
                Cornea &amp; Phaco Center — World-class eye care with cutting-edge technology in Pathankot, Punjab.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                <Link
                  to="/bookAnAppointment"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-cyan-700 text-sm font-bold rounded-full hover:bg-cyan-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-all duration-200"
                >
                  Explore Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                {[
                  { num: "15+", label: "Specialties" },
                  { num: "5+", label: "Expert Doctors" },
                  { num: "24/7", label: "Emergency Care" },
                  { num: "32+", label: "Insurance Partners" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 bg-white/12 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2.5">
                    <span className="text-xl sm:text-2xl font-extrabold text-white leading-none">{s.num}</span>
                    <span className="text-xs text-cyan-100 font-medium leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <Services />

        {/* Vision Statement */}
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-modern p-8 sm:p-10 text-center">
              <div className="w-14 h-14 bg-cyan-50 border border-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Visionaries in Eye Care.{" "}
                <span className="text-teal-gradient">Dedicated to You.</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-6">
                Our highly trained eye specialists are committed to restoring and protecting your vision with precision and compassion — combining multi-specialty collaboration, innovation, and patient-centered care.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Advanced Technology", "Expert Team", "Patient-Centered", "HOTA Approved"].map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CareModel />
        <DoctorSection />
        <CashlessInsuranceSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
};
