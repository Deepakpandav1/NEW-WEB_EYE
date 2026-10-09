import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import SiteImage from "./SiteImage";
export default function HospitalStory() {
  return <section className="hospital-story"><div className="site-container story-grid"><div className="story-photo"><SiteImage src="/images/hospital/reception-2026.jpeg" alt="Our reception and billing counter with hospital certificates on display" /><div className="story-photo-note"><span>01 / A WARM WELCOME</span><p>Here for you,<br />from the very first visit.</p></div></div><div className="story-copy"><span className="eyebrow">A PERSONAL APPROACH TO EYE CARE</span><h2>Visionaries in eye care.<br /><em>Dedicated to you.</em></h2><p>Our highly trained eye specialists are committed to restoring and protecting your vision with precision and compassion — combining multi-specialty collaboration, innovation, and patient-centered care.</p><ul>{["Advanced Technology", "Expert Team", "Patient-Centered", "HOTA Approved"].map(tag=><li key={tag}><Check size={16} />{tag}</li>)}</ul><Link to="/AboutUs" className="text-link">Get to know our hospital <ArrowUpRight size={18} /></Link></div></div></section>;
}
