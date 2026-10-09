import React, { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  X,
  ArrowUpRight,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { insurancePartners } from "../utils/appUtils/insurancePartners";

export default function HomeWelcomeModal() {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const timer = window.setTimeout(() => dialog.current?.showModal(), 180);
    return () => {
      window.clearTimeout(timer);
      dialog.current?.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="welcome-dialog"
      aria-labelledby="welcome-title"
      aria-describedby="welcome-description"
      onClick={(event) => {
        if (event.target === dialog.current) close();
      }}
    >
      <div className="welcome-content">
        <button
          type="button"
          autoFocus
          className="welcome-close"
          onClick={close}
          aria-label="Close welcome message"
        >
          <X size={22} />
        </button>
        <div className="welcome-intro">
          <span className="eyebrow">WELCOME TO BRIGHT EYE CARE</span>
          <h2 id="welcome-title">
            Your vision.
            <br />
            <em>Our commitment.</em>
          </h2>
          <p id="welcome-description">
            Advanced eye care, cornea &amp; cataract expertise, and
            patient-first service in Pathankot.
          </p>
        </div>
        <div className="welcome-certification">
          <ShieldCheck size={30} />
          <div>
            <span className="eyebrow">A MILESTONE IN OUR CARE</span>
            <h3>NABH Entry Level Certified</h3>
            <p>Entry Level Certification Program for Hospitals, 2nd Edition</p>
            <strong>Registration No. ELCP-2026-18028</strong>
            <p>Valid: 4 August 2026 – 3 August 2028</p>
            <a
              href="/certificates/nabh-elcp-2026-18028.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View certificate <ArrowUpRight size={15} />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
        <div className="welcome-highlights">
          <div>
            <CheckCircle2 size={20} />
            <h3>HOTA-approved hospital</h3>
            <p>
              Punjab Govt. licensed for organ &amp; tissue transplantation.
              First corneal transplant centre in the Pathankot region.
            </p>
            <small>DPBECH(P)-CT(N)-PB-2025-5ME3/12737</small>
          </div>
          <div>
            <CreditCard size={20} />
            <h3>Cashless care</h3>
            <p>
              {insurancePartners.length} insurance partners. Treatment subject
              to your policy and TPA approval.
            </p>
            <Link to="/cashless-insurance" onClick={close}>
              Explore insurance partners →
            </Link>
          </div>
        </div>
        <div className="welcome-actions">
          <button type="button" className="btn-secondary" onClick={close}>
            Explore the website
          </button>
          <Link to="/bookAnAppointment" onClick={close} className="btn-primary">
            Book an appointment <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </dialog>
  );
}
