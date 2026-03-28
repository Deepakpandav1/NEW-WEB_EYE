import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import InsurerLogo from "./InsurerLogo";
import {
  generalInsurancePartners,
  healthInsurancePartners,
} from "../utils/appUtils/insurancePartners";
import { homeSectionSummary } from "../utils/appUtils/cashlessInsuranceContent";
import { contactInfo } from "../utils/appUtils/constant";

function shortInsurerLabel(name: string): string {
  return name
    .replace(/ Company Limited$/i, "")
    .replace(/ Limited$/i, "")
    .replace(/ General Insurance Company Limited$/i, "")
    .replace(/ Health Insurance Company Limited$/i, "")
    .replace(/ Health & Allied Insurance Company Limited$/i, "")
    .trim();
}

const homePreviewPartners = [
  ...generalInsurancePartners.slice(0, 6),
  ...healthInsurancePartners.slice(0, 6),
];

function IconSteps(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function IconDoc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
      />
    </svg>
  );
}

const easeOut = [0.22, 1, 0.36, 1] as const;

const CashlessInsuranceSection: React.FC = () => {
  const telHref = `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`;
  const total =
    generalInsurancePartners.length + healthInsurancePartners.length;
  const reduce = useReducedMotion();

  const dur = reduce ? 0.01 : 0.5;
  const durFast = reduce ? 0.01 : 0.38;
  const stagger = reduce ? 0 : 0.07;

  return (
    <section
      className="relative overflow-hidden bg-slate-50/40 border-y border-slate-200/90"
      aria-labelledby="cashless-insurance-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
        {/* —— Two-column split: information | panel directory —— */}
        <div className="relative">
          <div
            className="hidden lg:block pointer-events-none absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200/90 to-transparent"
            aria-hidden
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-start">
          {/* LEFT */}
          <motion.div
            className="lg:pr-12 xl:pr-16 pb-12 lg:pb-0"
            initial={reduce ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: dur, ease: easeOut }}
          >
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 mb-3">
              Patient services
            </p>
            <h2
              id="cashless-insurance-heading"
              className="text-3xl sm:text-4xl xl:text-[2.35rem] font-semibold text-slate-900 tracking-tight text-balance leading-[1.12]"
            >
              Cashless insurance &amp; TPA partners
            </h2>
            <p className="mt-5 text-base sm:text-[1.0625rem] text-slate-600 leading-[1.65] max-w-xl">
              We maintain empanelments with{" "}
              <span className="text-slate-900 font-medium">{total} insurers</span>{" "}
              for cashless hospitalisation, subject to policy terms and insurer
              approval. The column on the right shows a sample of our panel; the
              full guide lists every partner with serial numbers.
            </p>

            <motion.div
              className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-md"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.12 },
                },
              }}
            >
              {[
                { n: total, l: "Partners" },
                { n: generalInsurancePartners.length, l: "General" },
                { n: healthInsurancePartners.length, l: "Health" },
              ].map((s) => (
                <motion.div
                  key={s.l}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: durFast, ease: easeOut },
                    },
                  }}
                  className="rounded-xl bg-white ring-1 ring-slate-200/90 px-3 sm:px-4 py-3 sm:py-4 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-xl sm:text-2xl font-semibold tabular-nums text-slate-900">
                    {s.n}
                  </p>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">
                    {s.l}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 space-y-6">
              <motion.div
                className="rounded-xl bg-white ring-1 ring-slate-200/90 p-6 sm:p-7 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: durFast, ease: easeOut, delay: reduce ? 0 : 0.05 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 ring-1 ring-teal-100 text-teal-800">
                    <IconSteps className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Process overview
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">
                      Typical cashless pathway
                    </p>
                  </div>
                </div>
                <div className="space-y-0">
                  {homeSectionSummary.howItWorksShort.map((step, i) => (
                    <motion.div
                      key={i}
                      className="relative flex gap-4 pb-8 last:pb-0"
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: durFast,
                        ease: easeOut,
                        delay: reduce ? 0 : i * 0.06,
                      }}
                    >
                      {i < homeSectionSummary.howItWorksShort.length - 1 && (
                        <span
                          className="absolute left-[15px] top-8 bottom-0 w-px bg-slate-200"
                          aria-hidden
                        />
                      )}
                      <span className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white tabular-nums">
                        {i + 1}
                      </span>
                      <div className="pt-0.5">
                        <p className="font-semibold text-slate-900 text-[0.9375rem]">
                          {step.title}
                        </p>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-xl bg-slate-900 text-slate-100 p-6 sm:p-7 shadow-lg shadow-slate-900/10"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: durFast, ease: easeOut, delay: reduce ? 0 : 0.08 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15 text-teal-300">
                    <IconDoc className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Documents to carry
                    </h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      For cashless admission
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 m-0 p-0 list-none">
                  {homeSectionSummary.documentsShort.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/90 text-white">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10 text-sm text-slate-400 leading-relaxed">
                  <span className="font-medium text-slate-200">Assistance: </span>
                  <a
                    href={telHref}
                    className="text-white font-medium hover:text-teal-200 underline decoration-teal-500/60 underline-offset-2"
                  >
                    {contactInfo.phone}
                  </a>
                  <span className="mx-1.5 text-slate-600">·</span>
                  <Link
                    to="/cashless-insurance"
                    className="text-white font-medium hover:text-teal-200 underline decoration-teal-500/60 underline-offset-2"
                  >
                    Full insurance guide
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="lg:pl-12 xl:pl-16 lg:sticky lg:top-28"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: dur, ease: easeOut, delay: reduce ? 0 : 0.08 }}
          >
            <div className="rounded-2xl bg-white ring-1 ring-slate-200/90 p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
              <div className="flex items-start gap-3 mb-6 pb-6 border-b border-slate-100">
                <motion.span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm"
                  initial={reduce ? false : { scale: 0.92, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: durFast, ease: easeOut }}
                >
                  <IconBuilding className="w-5 h-5" />
                </motion.span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    Panel directory
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Sample of empanelled insurers. Open the guide for the complete
                    list, process steps, and FAQs.
                  </p>
                </div>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: stagger,
                      delayChildren: reduce ? 0 : 0.15,
                    },
                  },
                }}
              >
                {homePreviewPartners.map((p) => (
                  <motion.div
                    key={p.slNo}
                    variants={{
                      hidden: { opacity: 0, y: 16, scale: 0.97 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: durFast, ease: easeOut },
                      },
                    }}
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -3, transition: { duration: 0.2 } }
                    }
                    className="group flex flex-col items-center text-center rounded-xl bg-slate-50/80 ring-1 ring-slate-200/80 px-3 py-4 min-h-[128px] justify-center hover:bg-white hover:ring-teal-200/90 hover:shadow-[0_8px_20px_rgba(15,23,42,0.07)] transition-shadow duration-300"
                  >
                    <InsurerLogo
                      name={p.name}
                      logoDomain={p.logoDomain}
                      size="md"
                      className="mb-3"
                    />
                    <p className="text-xs font-medium text-slate-800 leading-snug line-clamp-3 px-0.5">
                      {shortInsurerLabel(p.name)}
                    </p>
                    <span className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-teal-700 transition-colors">
                      {p.category === "general" ? "General" : "Health"}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 pt-6 border-t border-slate-100"
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : 0.25, duration: durFast }}
              >
                <Link
                  to="/cashless-insurance"
                  className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold px-6 py-3.5 shadow-md hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                  View complete guide &amp; full list
                  <svg
                    className="w-4 h-4 opacity-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  Eligibility and authorisation are determined by your insurer at
                  the time of admission.
                </p>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashlessInsuranceSection;
