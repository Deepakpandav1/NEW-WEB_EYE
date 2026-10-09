// Professional Meet Our Team Page - Hospital Grade Design
import React from "react";
import MeetOurTeamCard from "../components/shared/MeetOurTeamCard";
import { doctorData } from "../utils/appUtils/constant";
import SEO from "../components/SEO";

const MeetOurTeam = () => {
  return (
    <>
      <SEO
        path="/meetourteam"
        title="Meet Our Expert Doctors | Dr. Preeti's Bright Eye Care Hospital Pathankot"
        description="Our ophthalmology team in Pathankot: cornea, retina, cataract, LASIK, and subspecialty eye surgeons at Dr. Preeti's Bright Eye Care."
        keywords="eye doctors pathankot, ophthalmologists pathankot, dr preeti eye doctor, eye surgeon pathankot, eye specialists punjab, Bright Eye Care doctors"
      />

      {/* Hero Section */}
      <div className="page-hero relative bg-gradient-to-br from-purple-900 via-cyan-900 to-teal-900 text-white py-20 md:py-24 overflow-hidden">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🏥 Our Expert Medical Team
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-cyan-300">Expert Doctors</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Our team of highly qualified ophthalmologists and specialists are
            dedicated to providing world-class eye care with compassion and
            expertise.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              World-Class Eye Care Specialists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each member of our team brings years of experience and specialized
              training from top institutions, dedicated to your vision health.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {doctorData.map(
              (
                { name, url, description, description2, description3 },
                index
              ) => (
                <MeetOurTeamCard
                  key={index}
                  url={url}
                  name={name}
                  description={description}
                  description2={description2}
                  description3={description3}
                />
              )
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience Expert Eye Care?
            </h3>
            <p className="text-lg text-cyan-50 mb-6 max-w-2xl mx-auto">
              Book an appointment with one of our specialists and take the first
              step towards better vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/bookAnAppointment"
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
                Book Appointment
              </a>
              <a
                href="/ContactUs"
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeam;
