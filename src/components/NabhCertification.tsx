import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import SiteImage from "./SiteImage";

export default function NabhCertification() {
  return <section id="nabh-certification" aria-labelledby="nabh-heading" className="certification-section">
    <div className="site-container certification-panel">
      <div className="certification-copy"><span className="eyebrow"><ShieldCheck size={17} /> OUR COMMITMENT TO QUALITY</span><h2 id="nabh-heading">Care you can trust.<br /><span>NABH Entry Level Certified.</span></h2><p>Dr. Preeti's Bright Eye Care Hospital has been assessed and found to comply with the NABH Entry Level Certification Program (ELCP) for Hospitals, 2nd Edition.</p><dl><div><dt>REGISTRATION NUMBER</dt><dd>ELCP-2026-18028</dd></div><div><dt>CERTIFICATE VALIDITY</dt><dd><time dateTime="2026-08-04">4 August 2026</time> – <time dateTime="2028-08-03">3 August 2028</time></dd></div></dl><a className="certificate-link" href="/certificates/nabh-elcp-2026-18028.jpeg" target="_blank" rel="noopener noreferrer">View our certificate <ArrowUpRight size={18} /><span className="sr-only"> (opens in new tab)</span></a></div>
      <a className="certificate-frame" href="/certificates/nabh-elcp-2026-18028.jpeg" target="_blank" rel="noopener noreferrer" aria-label="View NABH certificate ELCP-2026-18028 (opens in new tab)"><SiteImage src="/certificates/nabh-elcp-2026-18028.jpeg" alt="NABH Entry Level certificate for Dr. Preeti's Bright Eye Care Hospital, ELCP-2026-18028" /><span>Certified with care. Committed to you.</span></a>
    </div>
  </section>;
}
