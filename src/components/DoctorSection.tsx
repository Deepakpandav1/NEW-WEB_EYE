import React from "react";
import ProfileCard from "./shared/ProfileCard";
import { doctorData } from "../utils/appUtils/constant";
import { Link } from "@tanstack/react-router";
import useAutoScroll from "../hooks/useAutoScroll";

export default function DoctorSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  useAutoScroll(scrollRef as React.RefObject<HTMLElement>, {
    speed: 0.8,
    pauseOnHover: true,
    direction: "right",
  });

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Compact Section Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
              Expert Medical Team
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Expert Doctors
            </span>
          </h2>
        </div>

        {/* Doctors Scroll Container - Compact */}
        <div className="relative">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden lg:block"></div>

          {/* Scroll Container */}
          <div className="px-2 sm:px-4 md:px-8">
            <div
              ref={scrollRef}
              className="flex items-stretch gap-3 sm:gap-4 overflow-x-scroll py-2 no-scrollbar gpu-accelerated"
              style={{ scrollBehavior: "auto" }}
            >
              {doctorData.map(
                ({ name, url, description, description1 }, index) => (
                  <ProfileCard
                    url={url}
                    name={name}
                    description={description}
                    description1={description1}
                    key={`original-${index}`}
                  />
                )
              )}
            </div>
          </div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden lg:block"></div>
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-3 flex items-center justify-center gap-4">
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
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
          <Link
            to="/meetourteam"
            className="px-4 py-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-semibold rounded-full hover:shadow-lg transition-all duration-200 inline-flex items-center gap-1.5"
          >
            View Full Team
            <svg
              className="w-3 h-3"
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
      </div>
    </div>
  );
}
