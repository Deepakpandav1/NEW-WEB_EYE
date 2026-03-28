// components/PrivacyPolicy.js

import React from "react";
import { privacyPolicyContent } from "../utils/appUtils/constant";
import SEO from "../components/SEO";

const privacyPolicy = () => {
  return (
    <>
      <SEO
        path="/privacypolicy"
        title="Privacy Policy | Dr. Preeti's Bright Eye Care Hospital"
        description="How Dr. Preeti's Bright Eye Care collects, uses, and protects your personal information when you use our website and services in Pathankot."
        keywords="privacy policy eye hospital, patient data protection, Bright Eye Care privacy, Pathankot hospital privacy"
      />
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed">
      <div className="max-w-5xl mx-auto px-4 p-10 mt-20 h-dvh overflow-scroll border-2-gray-200 border-solid rounded-3xl bg-white drop-shadow-lg mb-1.5">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="italic mb-6">
          <strong>Last Updated:</strong> {privacyPolicyContent.lastUpdated}
        </p>
        <h2 className="text-2xl font-semibold mb-8 text-justify">
          {privacyPolicyContent.hospitalName}
        </h2>

        {privacyPolicyContent.sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-justify">
              {section.title}
            </h3>
            <p className="text-base leading-relaxed whitespace-pre-line text-gray-700 text-justify">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default privacyPolicy;
