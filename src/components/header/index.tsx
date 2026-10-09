import SiteImage from "../SiteImage";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  CalendarDays,
  Phone,
  Menu,
  X,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const links = [
  ["/", "Home"],
  ["/AboutUs", "About us"],
  ["/services", "Eye care"],
  ["/meetourteam", "Our doctors"],
  ["/facilityTour", "Our hospital"],
  ["/cashless-insurance", "Insurance"],
  ["/ContactUs", "Contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        
        <div className="site-container nav-inner">
          <Link to="/" aria-label="Bright Eye Care home" className="brand-logo">
            <SiteImage
              src="/logo2.png" loading="eager"
              alt="Dr. Preeti's Bright Eye Care Hospital"
              width="180"
              height="65"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                activeProps={{
                  className: "nav-active",
                  "aria-current": "page",
                }}
                className="nav-link"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link to="/bookAnAppointment" className="nav-book">
            Book a visit <ArrowUpRight size={16} />
          </Link>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                activeProps={{ "aria-current": "page" }}
              >
                {label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
            <Link to="/login">
              Patient login
              <ArrowUpRight size={16} />
            </Link>
            <Link to="/bookAnAppointment" className="btn-primary">
              Book an appointment
            </Link>
          </nav>
        )}
      </header>
      <nav className="mobile-actions" aria-label="Quick patient actions">
        <a href="tel:+916239507877">
          <Phone size={19} />
          <span>Call us</span>
        </a>
        <Link to="/ContactUs">
          <MapPin size={19} />
          <span>Find us</span>
        </Link>
        <Link to="/bookAnAppointment">
          <CalendarDays size={19} />
          <span>Book a visit</span>
        </Link>
      </nav>
    </>
  );
}
