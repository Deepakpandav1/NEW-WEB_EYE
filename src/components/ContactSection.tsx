// src/components/ContactSection.tsx

import React from "react";
import { contactInfo } from "../utils/appUtils/constant";

const ContactSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Compact Section Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Visit Our{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Location
            </span>
          </h2>
        </div>

        {/* Compact Contact Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Address Badge */}
          <a
            href="https://maps.google.com/?q=Dr+Preeti's+Bright+Eye+Care+Pathankot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-900">
              Pathankot, Punjab
            </span>
          </a>

          {/* Phone Badge */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
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
            </div>
            <span className="text-xs font-semibold text-slate-900">
              {contactInfo.phone}
            </span>
          </a>

          {/* Email Badge */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-900 hidden sm:inline">
              Email Us
            </span>
          </a>

          {/* Emergency Badge */}
          <a
            href={`tel:${contactInfo.emergency}`}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xs font-bold">24/7 Emergency</span>
          </a>

          {/* Hours Badge */}
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-900">
              Mon-Sat 9AM-6PM
            </span>
          </div>
        </div>

        {/* Compact Map */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-xl h-48 sm:h-64 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.5281002304146!2d75.59315747624416!3d32.27077680968403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c79b8206d5865%3A0x28c9bd5c3b140d53!2sDr%20Preeti&#39;s%20Bright%20Eye%20Care!5e0!3m2!1sen!2sin!4v1753252141504!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Preeti's Bright Eye Care Hospital Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
