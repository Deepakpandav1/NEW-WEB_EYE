import React, { useId, useState } from "react";
import { faqCategories, FAQCategory, FAQItem } from "../utils/appUtils/constant";

const FaqSection: React.FC = () => {
  const sectionId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section className="bg-slate-50/60 py-12 sm:py-16" aria-labelledby={`${sectionId}-heading`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="section-badge mb-4 inline-flex">Patient Resources</span>
          <h2 id={`${sectionId}-heading`} className="section-title">
            Frequently Asked{" "}
            <span className="text-teal-gradient">Questions</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle mt-4 text-sm sm:text-base">
            Quick answers about appointments, billing, admission, and reports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {faqCategories.map((category: FAQCategory, catIdx: number) => (
            <div key={catIdx} className="card-modern p-5 sm:p-6">

              {/* Category header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-xl">
                  {category.emoji}
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{category.title}</h3>
              </div>

              <ul className="space-y-1.5 list-none m-0 p-0">
                {category.items.map((item: FAQItem, idx: number) => {
                  const itemKey = `${catIdx}-${idx}`;
                  const isOpen = openKey === itemKey;
                  const panelId = `${sectionId}-panel-${itemKey}`;
                  const buttonId = `${sectionId}-btn-${itemKey}`;

                  return (
                    <li key={itemKey}>
                      <div className={`rounded-xl border transition-colors duration-150 overflow-hidden ${isOpen ? "border-cyan-200 bg-cyan-50/40" : "border-slate-100 bg-slate-50/50 hover:bg-white"}`}>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggle(itemKey)}
                          className="w-full flex items-start gap-3 text-left px-4 py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl"
                        >
                          <span className="text-base shrink-0 mt-0.5 opacity-80" aria-hidden>{item.icon}</span>
                          <span className="flex-1 text-sm text-slate-800 font-medium leading-snug pr-2">{item.question}</span>
                          <span className={`shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200 ${isOpen ? "bg-cyan-600 text-white rotate-180" : "bg-white border border-slate-200 text-slate-400"}`} aria-hidden>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </button>

                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={`grid transition-[grid-template-rows] duration-250 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <div className="px-4 pb-4 pt-0 border-t border-slate-100/80">
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line pt-3">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
