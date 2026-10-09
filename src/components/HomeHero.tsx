import SiteImage from "./SiteImage";
import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Clock3, MapPin, Phone } from "lucide-react";
export default function HomeHero() {
  return (
    <>
      <section className="home-hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              DR. PREETI'S BRIGHT EYE CARE HOSPITAL
            </span>
            <h1>
              Expert care.
              <br />
              For a <em>brighter</em>
              <br />
              tomorrow.
            </h1>
            <p>
              Cornea &amp; Phaco Center — world-class eye care with cutting-edge
              technology in Pathankot, Punjab.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary" to="/bookAnAppointment">
                Book an appointment <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" to="/services">
                Explore eye care <ArrowUpRight size={18} />
              </Link>
            </div>
            <a className="hero-certification" href="#nabh-certification">
              <ShieldCheck size={24} />
              <span>
                <strong>NABH Entry Level Certified</strong>
                <small>ELCP-2026-18028 · Quality &amp; patient safety</small>
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-visual">
            <SiteImage
              src="/images/hospital/entrance-2026.jpeg"
              alt="Entrance of Dr. Preeti's Bright Eye Care Hospital"
              fetchPriority="high"
              className="hero-hospital"
            />
            <div className="hero-photo-caption">
              <span className="eyebrow">WELCOME TO OUR HOSPITAL</span>
              <span>Thoughtful care, from the moment you arrive.</span>
              <Link to="/facilityTour" aria-label="Explore our hospital">
                <ArrowUpRight />
              </Link>
            </div>
            <div className="hero-doctor">
              <SiteImage src="/Dr_preeti.jpeg" alt="Dr. Preeti" />
              <div>
                <strong>Dr. Preeti</strong>
                <span>
                  Cornea, Cataract &amp;
                  <br />
                  Refractive Surgeon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-trust">
        <div className="site-container trust-grid">
          <div>
            <strong>HOTA approved</strong>
            <span>Punjab Government registered</span>
          </div>
          <div>
            <strong>15+ specialties</strong>
            <span>Comprehensive eye care</span>
          </div>
          <div>
            <strong>5+ expert doctors</strong>
            <span>Dedicated to your vision</span>
          </div>
          <div>
            <strong>32+ insurance partners</strong>
            <span>Cashless treatment support</span>
          </div>
        </div>
      </div>
      <section
        className="visit-strip site-container"
        aria-label="Plan your visit"
      >
        <div>
          <Clock3 size={22} />
          <span>
            <strong>Consultation hours</strong>
            <small>Mon–Sat, 9:00 AM – 6:00 PM</small>
          </span>
        </div>
        <div>
          <MapPin size={22} />
          <span>
            <strong>Visit us in Pathankot</strong>
            <Link to="/ContactUs">Get directions &amp; contact details →</Link>
          </span>
        </div>
        <div>
          <Phone size={22} />
          <span>
            <strong>24/7 emergency helpline</strong>
            <a href="tel:+916239507877">+91 62395 07877</a>
          </span>
        </div>
      </section>
    </>
  );
}
