import React, { useState } from "react";
import { careModelData } from "../utils/appUtils/constant";
import { motion } from "framer-motion";

function CareModel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header - Compact */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              ✨ Our Care Philosophy
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Dr. Preeti's
            </span>
          </h2>
        </div>

        {/* Compact Grid of Excellence Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {careModelData.map((item, idx) => (
            <motion.div
              key={item.id}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white gpu-accelerated"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Compact Image & Content */}
              <div className="aspect-square relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent"></div>

                {/* Number Badge */}
                <div className="absolute top-2 left-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                </div>
              </div>

              {/* Title & Description - Compact */}
              <div className="p-2 sm:p-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareModel;
