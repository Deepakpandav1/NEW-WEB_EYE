import React from "react";
import { useNavigate } from "@tanstack/react-router";
import SEO from "../SEO";

const ServicePageCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title={`${item.title} Treatment | Dr. Preeti's Bright Eye Care Hospital Pathankot`}
        description={item.description}
        keywords={`${item.title} treatment pathankot, ${item.title} surgery, eye care ${item.title}, ${item.title} specialist pathankot`}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🏥 Specialized Treatment
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                {item.title}
                <span className="block text-2xl sm:text-3xl md:text-4xl text-cyan-300 font-normal mt-2">
                  Expert Care & Treatment
                </span>
              </h1>
              <p className="text-base sm:text-lg text-cyan-50 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="/bookAnAppointment"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white text-cyan-700 font-bold rounded-full hover:bg-cyan-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
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
                </a>
                <a
                  href="/ContactUs"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
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

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600">Expert</div>
                      <div className="font-bold text-slate-900">Care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="section-padding bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Card with Modern Styling */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Render the detailed content from servicePageConst */}
            <div className="prose prose-lg max-w-none">
              <style>
                {`
                  .prose h1 {
                    @apply text-3xl sm:text-4xl font-extrabold text-slate-900 mt-8 mb-6 text-center;
                  }
                  .prose h2 {
                    @apply text-2xl sm:text-3xl font-bold text-cyan-700 mt-8 mb-4;
                  }
                  .prose h3 {
                    @apply text-xl sm:text-2xl font-semibold text-cyan-600 mt-6 mb-3;
                  }
                  .prose p {
                    @apply text-base text-gray-700 leading-relaxed mb-4;
                  }
                  .prose ul {
                    @apply list-none space-y-3 my-6;
                  }
                  .prose li {
                    @apply flex items-start gap-3 text-gray-700;
                  }
                  .prose img {
                    @apply rounded-2xl shadow-lg my-6;
                  }
                  .prose hr {
                    @apply border-gray-200 my-10;
                  }
                  .prose .bg-gray-50 {
                    @apply bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl shadow-sm;
                  }
                  .prose .bg-white {
                    @apply bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300;
                  }
                  .prose table {
                    @apply w-full border-collapse my-8;
                  }
                  .prose th {
                    @apply bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-3 text-left font-semibold;
                  }
                  .prose td {
                    @apply border border-gray-200 px-4 py-3 text-gray-700;
                  }
                  .prose blockquote {
                    @apply border-l-4 border-cyan-600 pl-6 italic text-gray-600 my-6;
                  }
                `}
              </style>
              {item.content}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Treatment?
            </h2>
            <p className="text-base sm:text-lg text-cyan-50 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our expert specialists today and take
              the first step towards better vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/bookAnAppointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-cyan-700 font-bold rounded-full hover:bg-cyan-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
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
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
              >
                View All Services
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePageCard;
