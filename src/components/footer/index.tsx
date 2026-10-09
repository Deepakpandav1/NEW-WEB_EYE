import SiteImage from "../SiteImage";
import React from "react";
import { Link } from "@tanstack/react-router";
import { footerLinks } from "../../utils/appUtils/constant";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer bg-slate-900 text-white">

      {/* Emergency Banner */}
      <div className="bg-red-600 py-3.5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center shrink-0">
              <FaPhoneAlt className="text-white text-base" />
            </div>
            <div>
              <div className="text-xs font-semibold text-red-100 uppercase tracking-wide">24/7 Emergency Helpline</div>
              <div className="text-lg font-bold">{footerLinks.contact.emergency}</div>
            </div>
          </div>
          <Link
            to="/bookAnAppointment"
            className="px-5 py-2 bg-white text-red-600 font-bold text-sm rounded-full hover:bg-red-50 transition-colors shadow-sm"
          >
            Book Emergency Appointment
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="py-12 md:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <SiteImage src="/logo2.png" alt="Dr. Preeti's Bright Eye Care" className="h-14 w-auto bg-white p-2 rounded-xl" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Pathankot's first HOTA-approved hospital for corneal transplantation — delivering world-class eye care with compassion and cutting-edge technology.
            </p>
            <a href="/certificates/nabh-elcp-2026-18028.jpeg" target="_blank" rel="noopener noreferrer" className="block text-sm text-cyan-300 hover:text-cyan-200 mb-5">
              <span className="font-semibold">NABH Entry Level Certified</span><br />
              Registration No. ELCP-2026-18028<br />
              <span className="text-xs">View certificate (opens in new tab)</span>
            </a>
            <div className="flex items-center gap-2.5">
              {[
                { label: "Facebook", href: "https://www.facebook.com/", icon: <FaFacebookF className="text-white text-sm" />, hover: "hover:bg-blue-600" },
                { label: "Instagram", href: "https://www.instagram.com/", hover: "hover:bg-pink-600",
                  icon: <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                },
                { label: "YouTube", href: "https://www.youtube.com/", icon: <FaYoutube className="text-white text-base" />, hover: "hover:bg-red-600" },
                { label: "WhatsApp", href: `https://wa.me/${footerLinks.contact.phone.replace(/[^0-9]/g, "")}`, icon: <FaWhatsapp className="text-white text-base" />, hover: "hover:bg-green-600" },
              ].map((s, i) => (
                <a key={i} aria-label={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 bg-slate-700 ${s.hover} rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/login" className="text-slate-400 hover:text-cyan-400 text-sm">Patient login</Link></li>
              {footerLinks.quickLinks[0]?.submenu?.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path || "#"} className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-2 group transition-colors">
                    <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
              {footerLinks.quickLinks[1]?.submenu?.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path || "#"} className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-2 group transition-colors">
                    <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks[2]?.submenu?.slice(0, 6).map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path || "#"} className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-2 group transition-colors">
                    <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-cyan-500 hover:text-cyan-400 text-sm font-semibold flex items-center gap-1.5 group transition-colors mt-1">
                  View All Services
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt className="text-cyan-400 text-sm" />, label: "Visit Us", content: <><div>{footerLinks.contact.address}</div><div>{footerLinks.contact.address1}</div></> },
                { icon: <FaPhoneAlt className="text-cyan-400 text-sm" />, label: "Call Us", content: <a href={`tel:${footerLinks.contact.phone}`} className="text-slate-400 hover:text-cyan-400 transition-colors">{footerLinks.contact.phone}</a> },
                { icon: <FaEnvelope className="text-cyan-400 text-sm" />, label: "Email Us", content: <a href={`mailto:${footerLinks.contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors break-all">{footerLinks.contact.email}</a> },
                { icon: <FaClock className="text-cyan-400 text-sm" />, label: "Working Hours", content: <><div className="text-slate-400">Mon–Sat: 9:00 AM – 6:00 PM</div><div className="text-slate-500">Sunday: Closed</div></> },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">{row.icon}</div>
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-0.5">{row.label}</div>
                    {row.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 font-medium">Dr. Preeti's Bright Eye Care Hospital</span>
            <span className="mx-2 text-slate-700">·</span>
            <Link to="/termsofservices" className="hover:text-cyan-400 transition-colors">Terms</Link>
            <span className="mx-2 text-slate-700">·</span>
            <Link to="/privacyPolicy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
          </div>
          <div className="text-slate-600 text-xs">Made with <span className="text-red-500">♥</span> for Better Vision</div>
        </div>
      </div>

      {/* Floating emergency button — desktop */}
      <a
        href={`tel:${footerLinks.contact.emergency}`}
        className="hidden lg:flex fixed bottom-8 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full shadow-xl items-center gap-2.5 transition-all duration-200 hover:scale-105 z-40"
      >
        <FaPhoneAlt className="text-sm" />
        <div className="text-xs leading-tight">
          <div className="font-bold">24/7 Emergency</div>
          <div className="text-red-200">{footerLinks.contact.emergency}</div>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
