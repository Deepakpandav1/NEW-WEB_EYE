import React from "react";
import { servicesData } from "../utils/appUtils/servicesConstants";
import SliderCard from "../components/shared/SliderCard";
import useAutoScroll from "../hooks/useAutoScroll";

function Services() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  useAutoScroll(scrollRef as React.RefObject<HTMLElement>, {
    speed: 1,
    pauseOnHover: true,
    direction: "right",
  });

  return (
    <div className="relative bg-gradient-to-b from-white to-slate-50 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Compact Section Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
              Our Specialties
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Center of{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
        </div>

        {/* Horizontal Scroll Container - Compact */}
        <div className="relative">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>

          {/* Scroll Container */}
          <div className="px-2 sm:px-4 md:px-8">
            <div
              ref={scrollRef}
              className="flex justify-start items-stretch gap-3 sm:gap-4 overflow-x-scroll py-2 no-scrollbar gpu-accelerated"
              style={{ scrollBehavior: "auto" }}
            >
              {servicesData.map((item, index) => (
                <SliderCard
                  key={`original-${index}`}
                  url={item.image}
                  title={item.title}
                  description={item.description}
                  serviceId={item.id}
                />
              ))}
            </div>
          </div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
        </div>

        {/* Compact Scroll Indicator */}
        <div className="text-center mt-3">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <svg
              className="w-4 h-4 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Scroll for more
            <svg
              className="w-4 h-4 animate-pulse"
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
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
