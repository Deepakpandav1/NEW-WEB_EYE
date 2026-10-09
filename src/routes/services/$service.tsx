import { Link, useParams } from "@tanstack/react-router";
import React from "react";
import { useMemo } from "react";
import { servicesDetails } from "../../utils/appUtils/servicePageConst";
import ServicePageCard from "../../components/shared/ServicePageCard";
// import ChildServiceCard from "../../components/shared/ChildServiceCard";

export default function Service() {
  const { service } = useParams({ from: "/services/$service" });
  const currentService = useMemo(
    () => servicesDetails.filter((item) => item.id === service),
    [service]
  );
  const servicePath = `/services/${encodeURIComponent(service)}`;

  return (
    <div className="">
      {!currentService.length && <section className="site-container py-16"><h1 className="section-title">Find the right eye care</h1><p className="my-5">This treatment page could not be found. Explore our services or contact our team for help.</p><Link to="/services" className="btn-primary">Browse eye care services</Link></section>}
      {currentService.map((node) => (
        <div key={node.id}>
          <ServicePageCard item={node} path={servicePath} />
        </div>
      ))}
    </div>
  );
}
