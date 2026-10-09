import SiteImage from "./SiteImage";
import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { doctorData } from "../utils/appUtils/constant";
export default function DoctorSection() {
  return (
    <section className="doctors-section">
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">THE PEOPLE BEHIND YOUR CARE</span>
            <h2 className="section-title">Expertise you can turn to.</h2>
          </div>
          <Link to="/meetourteam" className="text-link">
            Meet the full team <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="doctor-grid">
          {doctorData.map(({ name, url, description, description1 }) => (
            <article className="doctor-card" key={name}>
              <SiteImage src={url} alt={name} loading="lazy" />
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <small>{description1}</small>
                <Link to="/meetourteam" className="text-link">
                  Meet our team <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
