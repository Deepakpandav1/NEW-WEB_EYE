import React from "react";
import { careModelData } from "../utils/appUtils/constant";
import { motion } from "framer-motion";

const icons = [
  // Advanced Technology
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // Expert Surgeons
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  // Patient Care
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Affordable
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  // Trusted
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

const cardColors = [
  "from-cyan-500 to-teal-500",
  "from-teal-500 to-emerald-500",
  "from-indigo-500 to-cyan-500",
  "from-violet-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
];

function CareModel() {
  return (
    <section className="bg-slate-50/60 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="section-badge mb-4 inline-flex">Our Care Philosophy</span>
          <h2 className="section-title">
            Why Choose{" "}
            <span className="text-teal-gradient">Dr. Preeti's</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle mt-4 text-sm sm:text-base">
            Five pillars that define our commitment to exceptional eye care.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {careModelData.map((item, idx) => (
            <motion.div
              key={item.id}
              className="card-modern p-5 sm:p-6 flex flex-col gap-4 group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              {/* Number + Icon row */}
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${cardColors[idx]} flex items-center justify-center text-white shadow-sm shrink-0`}>
                  {icons[idx]}
                </div>
                <span className="text-3xl font-extrabold text-slate-100 group-hover:text-cyan-100 transition-colors leading-none select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`h-0.5 w-8 rounded-full bg-linear-to-r ${cardColors[idx]} mt-auto opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareModel;
