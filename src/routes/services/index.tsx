// Professional Services Page - Hospital Grade Design
import { Outlet } from "react-router-dom";
import { Link } from "@tanstack/react-router";
import React from "react";
import { servicesData } from "../../utils/appUtils/servicesConstants";
import ServiceCard from "../../components/shared/ServiceCard";
import SEO from "../../components/SEO";

function Services() {
  return (
    <>
      <SEO
        path="/services"
        title="Eye Care Services | Dr. Preeti's Bright Eye Care Hospital Pathankot"
        description="Eye surgery & treatment in Pathankot: cataract, LASIK, cornea, retina, glaucoma, paediatric eye care, dry eye, and more at Dr. Preeti's Bright Eye Care."
        keywords="eye care services pathankot, cataract surgery, LASIK, corneal transplant, retina treatment, eye surgery pathankot, ophthalmology services punjab"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 text-center">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🏥 Our Medical Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Comprehensive{" "}
            <span className="text-cyan-300">Eye Care Services</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Advanced treatments and procedures delivered by expert specialists
            using state-of-the-art technology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              World-Class Eye Care Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine eye exams to complex surgical procedures, we offer a
              full spectrum of ophthalmology services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((item, index) => (
              <React.Fragment key={index}>
                <ServiceCard item={item} />
              </React.Fragment>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg text-cyan-50 mb-6 max-w-2xl mx-auto">
              Our expert team is here to help. Book a consultation and we'll
              guide you to the right treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/bookAnAppointment"
                className="px-8 py-3 bg-white text-cyan-700 font-semibold rounded-full hover:bg-cyan-50 transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Consultation
              </Link>
              <Link
                to="/ContactUs"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Services;
