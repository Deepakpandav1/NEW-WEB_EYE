import SiteImage from "./SiteImage";
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { servicesData } from "../utils/appUtils/servicesConstants";
export default function Services() {
  const [query, setQuery] = useState("");
  const results = servicesData.filter((item) =>
    `${item.title} ${item.description}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  return (
    <section className="specialties-section">
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">OUR SPECIALTIES</span>
            <h2 className="section-title">
              Focused on your vision.
              <br />
              <span>At every stage of life.</span>
            </h2>
          </div>
          <p>
            Advanced treatments across every area of eye care, from routine eye
            exams to specialist procedures.
          </p>
        </div>
        <label className="service-search">
          <Search size={19} />
          <span className="sr-only">Search eye care services</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find eye care: cataract, cornea, glaucoma…"
          />
        </label>
        <div className="specialty-grid">
          {(query ? results : results.slice(0, 6)).map((item) => (
            <Link
              key={item.id}
              to="/services/$service"
              params={{ service: item.id }}
              className="specialty-card"
            >
              <SiteImage src={item.image} alt="" loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>
                  Explore treatment <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        {query && (
          <p role="status" className="search-status">
            {results.length
              ? `${results.length} services found`
              : "No matching services. Try another search or contact our team for help."}
          </p>
        )}
        <div className="section-bottom">
          <p>Not sure where to start? Our team can help.</p>
          <Link to="/services" className="btn-secondary">
            Explore all specialties <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
