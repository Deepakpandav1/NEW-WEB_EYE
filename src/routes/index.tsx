import HospitalStory from "../components/HospitalStory";
import HomeHero from "../components/HomeHero";
import NabhCertification from "../components/NabhCertification";
import React from "react";
import { Link } from "@tanstack/react-router";
import DoctorSection from "../components/DoctorSection";
import FaqSection from "../components/FaqSection";
import CashlessInsuranceSection from "../components/CashlessInsuranceSection";
import ContactSection from "../components/ContactSection";
import CareModel from "../components/CareModel";
import Services from "../components/SpecialitySection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SEO from "../components/SEO";
import HomeWelcomeModal from "../components/HomeWelcomeModal";

export const Landing = () => {
  return (
    <>
      <HomeWelcomeModal />
      <SEO
        path="/"
        title={
          "Dr Preeti's Bright Eye Care Hospital-NABH Approved"
        }
        description={
          "NABH Entry Level Certified and HOTA-approved eye hospital in Pathankot, Punjab. Cataract, LASIK, cornea & retina care by Dr. Preeti. Cashless insurance with 32+ partners. Book your eye appointment today."
        }
        keywords={
          "NABH entry level certified eye hospital Pathankot, best eye hospital Pathankot, eye specialist Pathankot, cataract surgery Pathankot, LASIK surgery Pathankot, retina specialist Punjab, corneal transplant Pathankot, eye doctor Pathankot, eye care Punjab, ophthalmologist Pathankot, eye treatment Pathankot, Dr Preeti eye hospital, bright eye care Pathankot, eye surgery Pathankot, vision care Pathankot, eye clinic Pathankot, eye hospital Punjab, HOTA approved eye hospital, organ transplant Pathankot, Dr Preeti Pathankot, Dr Preeti eye specialist, Dr Preeti cataract surgeon, Dr Preeti cornea specialist, Dr Manju Kumari Pathankot, Dr Ashima Monga Pathankot, Dr Mohit Mahajan Pathankot, Dr Raghuraj Sharma Pathankot, best eye doctor Pathankot, top ophthalmologist Pathankot, eye surgeon Pathankot, cornea transplant surgeon Pathankot, cataract surgeon Pathankot, LASIK surgeon Pathankot, retina surgeon Pathankot, pediatric ophthalmologist Pathankot, oculoplastic surgeon Pathankot"
        }
      />
      <div className="landing-page-div">

        <HomeHero />

        {/* Services Section */}
        <Services />

        <HospitalStory />

        <CareModel />
        <DoctorSection />
        <NabhCertification />
        <CashlessInsuranceSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
};
