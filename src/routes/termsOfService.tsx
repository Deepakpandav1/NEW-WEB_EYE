// components/TermsOfService.js

import React from "react";
import { termsOfServiceContent } from "../utils/appUtils/constant";
import SEO from "../components/SEO";

const TermsOfService = () => {
  return (
    <>
      <SEO
        path="/termsofservices"
        title="Terms of Service | Dr. Preeti's Bright Eye Care Hospital"
        description="Terms and conditions for using Dr. Preeti's Bright Eye Care website and services. Effective date and hospital policies for patients and visitors."
        keywords="terms of service eye hospital, website terms Bright Eye Care, patient terms Pathankot"
      />
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed">
      <div className=" max-w-5xl mx-auto px-4 p-10 mt-20 h-dvh overflow-scroll border-2-gray-200 border-solid rounded-3xl bg-white drop-shadow-lg mb-1.5">
        <h1 className="text-4xl font-bold mb-4">Terms of Services</h1>
        <p className="italic mb-6">
          <strong>Effective Date:</strong>
          {""}
          {termsOfServiceContent.effectiveDate}
        </p>
        <h2 className="text-2xl font-semibold mb-8 text-justify">
          {termsOfServiceContent.hospitalName}
        </h2>

        {termsOfServiceContent.sections.map((section, index) => (
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

export default TermsOfService;
