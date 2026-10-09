import SiteImage from "../SiteImage";
import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
export default function ServiceCard({ item }: { item: any }) {
  return (
    <Link
      to="/services/$service"
      params={{ service: item.id }}
      className="service-directory-card"
    >
      <SiteImage src={item.image} alt={item.title} loading="lazy" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span>
          Explore treatment <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
