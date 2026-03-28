// Professional Doctor Profile Card - Compact & Proper Image Display
import React from "react";
import { Link } from "@tanstack/react-router";

const ProfileCard = React.memo(({ url, name, description, description1 }) => {
  return (
    <div className="group min-w-[220px] sm:min-w-[260px] max-w-[320px] flex-shrink-0 gpu-accelerated">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden h-full flex flex-col transform-gpu">
        {/* Doctor Image Section - Compact */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-50">
          <img
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
            src={url}
            alt={`${name} - Eye Specialist at Dr. Preeti's Bright Eye Care Hospital`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-700">
              Available
            </span>
          </div>

          {/* Doctor Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          </div>
        </div>

        {/* Information Section - Compact */}
        <div className="flex-grow p-5 space-y-3">
          {/* Specialization */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-cyan-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h4 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Specialization
              </h4>
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {description}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          {description1 && (
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-700"
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
                <h4 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Expertise
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">
                  {description1}
                </p>
              </div>
            </div>
          )}

          {/* Trust Badge */}
          <div className="flex items-center gap-2 py-2 border-t border-gray-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-600">
              Patient Trusted
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/bookAnAppointment"
              className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
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
              Book Appointment
            </Link>
            <Link
              to="/meetourteam"
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

ProfileCard.displayName = "ProfileCard";

export default ProfileCard;
