import React from "react";
import { contactInfo } from "../utils/appUtils/constant";

const ContactSection: React.FC = () => {
  return (
    <section className="visit-section bg-white py-12 sm:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="section-badge mb-4 inline-flex">Get In Touch</span>
          <h2 className="section-title">
            Visit Our{" "}
            <span className="text-teal-gradient">Location</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">

          {/* Address */}
          <a
            href="https://maps.google.com/?q=Dr+Preeti's+Bright+Eye+Care+Pathankot"
            target="_blank"
            rel="noopener noreferrer"
            className="card-modern flex items-center gap-3 px-5 py-4 min-w-45 group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Address</div>
              <div className="text-sm font-semibold text-slate-800">Pathankot, Punjab</div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="card-modern flex items-center gap-3 px-5 py-4 min-w-45 group"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Phone</div>
              <div className="text-sm font-semibold text-slate-800">{contactInfo.phone}</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="card-modern flex items-center gap-3 px-5 py-4 min-w-45 group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Email</div>
              <div className="text-sm font-semibold text-slate-800">Email Us</div>
            </div>
          </a>

          {/* Emergency */}
          <a
            href={`tel:${contactInfo.emergency}`}
            className="card-modern flex items-center gap-3 px-5 py-4 min-w-45 group border-red-100 hover:border-red-200"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Emergency</div>
              <div className="text-sm font-bold text-red-600">24/7 Helpline</div>
            </div>
          </a>

          {/* Hours */}
          <div className="card-modern flex items-center gap-3 px-5 py-4 min-w-45">
            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Hours</div>
              <div className="text-sm font-semibold text-slate-800">Mon–Sat 9AM–6PM</div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-52 sm:h-72 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.5281002304146!2d75.59315747624416!3d32.27077680968403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c79b8206d5865%3A0x28c9bd5c3b140d53!2sDr%20Preeti&#39;s%20Bright%20Eye%20Care!5e0!3m2!1sen!2sin!4v1753252141504!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Preeti's Bright Eye Care Hospital Location"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
