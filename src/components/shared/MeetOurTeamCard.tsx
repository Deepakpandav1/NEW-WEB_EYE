import SiteImage from "../SiteImage";
// Professional Doctor Team Card - Full Information Display
import React from "react";
import { Link } from "@tanstack/react-router";

function MeetOurTeamCard({
  url,
  name,
  description,
  description2,
  description3,
}) {
  return (
    <div className="team-directory-card group w-full h-full">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-50">
          <SiteImage
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy" src={url}
            alt={`${name} - Eye Specialist at Dr. Preeti's Bright Eye Care Hospital`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-700">
              Available
            </span>
          </div>

          {/* Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            {description3 && (
              <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {description3}
              </span>
            )}
          </div>
        </div>

        {/* Information Section */}
        <div className="flex-grow p-6 space-y-4">
          {/* Specialization */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-cyan-700"
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
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Specialization
              </h4>
              <p className="text-base font-semibold text-gray-900 leading-tight">
                {description}
              </p>
            </div>
          </div>

          {/* About */}
          {description2 && (
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  About Doctor
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {description2}
                </p>
              </div>
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-3 py-3 border-t border-gray-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-600">
              5.0{" "}
              <span className="text-gray-400 font-normal">(250+ Patients)</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/bookAnAppointment"
              className="w-full px-5 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
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
              to="/ContactUs"
              className="w-full px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact Doctor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeamCard;
