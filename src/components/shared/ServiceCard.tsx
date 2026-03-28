// Professional Service Card - Modern Hospital Design
import React from "react";
import { Link } from "@tanstack/react-router";

const ServiceCard = ({ item }: { item: any }) => {
  return (
    <Link to="/services/$service" params={{ service: item.id }}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center p-6">
          <div className="relative w-40 h-40">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay Icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white drop-shadow-lg"
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
          </div>

          {/* Corner Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            View Details
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow p-5 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-cyan-700 transition-colors duration-300 leading-tight">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3 flex-grow">
            {item.description}
          </p>

          {/* Action Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full flex items-center justify-center gap-2 text-cyan-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
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
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
