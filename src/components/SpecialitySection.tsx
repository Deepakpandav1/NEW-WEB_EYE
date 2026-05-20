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
    <section className="bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="section-badge mb-4 inline-flex">Our Specialties</span>
          <h2 className="section-title">
            Centre of{" "}
            <span className="text-teal-gradient">Excellence</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle mt-3 text-sm sm:text-base">
            Advanced treatments across every area of eye care.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-linear-to-r from-white to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="px-2 sm:px-4 md:px-8">
            <div
              ref={scrollRef}
              className="flex justify-start items-stretch gap-3 sm:gap-4 overflow-x-scroll py-2 no-scrollbar gpu-accelerated"
              style={{ scrollBehavior: "auto" }}
            >
              {servicesData.map((item, index) => (
                <SliderCard
                  key={`svc-${index}`}
                  url={item.image}
                  title={item.title}
                  description={item.description}
                  serviceId={item.id}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-l from-white to-transparent z-10 pointer-events-none hidden md:block" />
        </div>

        {/* Scroll hint */}
        <p className="text-center mt-4 text-xs text-slate-400 flex items-center justify-center gap-1.5 select-none">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Swipe or scroll to explore
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </p>
      </div>
    </section>
  );
}

export default Services;
