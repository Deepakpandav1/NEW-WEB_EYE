// Professional Service Card Component - Compact & Fitted Design
import React from "react";
import { Link } from "@tanstack/react-router";

const SliderCard = React.memo(({ url, title, description, serviceId }) => {
  return (
    <div className="group min-w-[240px] sm:min-w-[280px] max-w-[320px] flex-shrink-0 gpu-accelerated">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden h-full flex flex-col transform-gpu">
        {/* Image Section - Compact */}
        <div className="relative h-32 sm:h-36 overflow-hidden">
          <img
            src={url}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Floating Icon */}
          <div className="absolute top-3 right-3 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <svg
              className="w-5 h-5 text-cyan-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/95 backdrop-blur-sm text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Eye Care Service
            </span>
          </div>
        </div>

        {/* Content Section - Compact */}
        <div className="flex-grow p-3 sm:p-4 flex flex-col">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 leading-tight group-hover:text-cyan-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow mb-3">
            {description}
          </p>

          {/* Learn More Link - Compact */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            {serviceId ? (
              <Link
                to="/services/$service"
                params={{ service: serviceId }}
                className="flex items-center gap-1.5 text-cyan-600 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300"
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            ) : (
              <Link
                to="/services"
                className="flex items-center gap-1.5 text-cyan-600 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300"
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            )}

            {/* Quick Action Icon */}
            <Link
              to="/bookAnAppointment"
              className="w-8 h-8 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 duration-300"
              title="Book Appointment"
            >
              <svg
                className="w-4 h-4"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

SliderCard.displayName = "SliderCard";

export default SliderCard;
