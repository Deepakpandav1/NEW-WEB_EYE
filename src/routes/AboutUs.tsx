// Professional About Us Page - Hospital Grade Design
import React from "react";
import { aboutUsContent } from "../utils/appUtils/aboutUs";
import SEO from "../components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us | Dr. Preeti's Bright Eye Care Hospital - Best Eye Care in Pathankot"
        description="Learn about Dr. Preeti's Bright Eye Care Hospital, Pathankot's first HOTA-approved eye hospital. Expert team, advanced technology, and patient-centered care."
        keywords="about dr preeti eye hospital, eye hospital pathankot about, bright eye care about us, HOTA approved hospital pathankot"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-900 to-teal-900 text-white py-20 md:py-28 overflow-hidden">
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
              About Our Hospital
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {aboutUsContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
            {aboutUsContent.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Grid */}
          <div className="space-y-12">
            {aboutUsContent.description.split("\n\n").map((section, idx) => {
              const lines = section.split("\n");
              const isHeading = lines[0].trim().startsWith("###");
              const heading = isHeading
                ? lines[0].replace("### ", "").trim()
                : null;
              const content = isHeading ? lines.slice(1).join("\n") : section;

              if (heading) {
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {heading}
                        </h3>
                        {content.split("\n").map((para, pIdx) => {
                          if (para.trim().startsWith("-")) {
                            const items = para
                              .split(" - ")
                              .filter(Boolean)
                              .map((item) => item.trim().replace(/^-\s*/, ""));
                            return (
                              <ul key={pIdx} className="space-y-2 ml-2">
                                {items.map((item, iIdx) => (
                                  <li
                                    key={iIdx}
                                    className="flex items-start gap-3 text-gray-700"
                                  >
                                    <svg
                                      className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span className="leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            );
                          } else if (para.trim()) {
                            return (
                              <p
                                key={pIdx}
                                className="text-gray-700 leading-relaxed mb-4"
                              >
                                {para.trim()}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
                  >
                    {section.split("\n").map((para, pIdx) => {
                      if (para.trim()) {
                        return (
                          <p
                            key={pIdx}
                            className="text-gray-700 leading-relaxed text-lg mb-4"
                          >
                            {para.trim()}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                );
              }
            })}
          </div>

          {/* Key Features Grid */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                HOTA Approved
              </h4>
              <p className="text-gray-700 text-sm">
                First corneal transplantation center in Pathankot
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Expert Team
              </h4>
              <p className="text-gray-700 text-sm">
                Highly trained specialists from top institutions
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Emergency
              </h4>
              <p className="text-gray-700 text-sm">
                Round-the-clock emergency eye care services
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
