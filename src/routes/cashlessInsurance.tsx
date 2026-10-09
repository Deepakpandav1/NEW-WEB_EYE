import React, { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import SEO from "../components/SEO";
import InsurerLogo from "../components/InsurerLogo";
import {
  generalInsurancePartners,
  healthInsurancePartners,
  insurancePartners,
} from "../utils/appUtils/insurancePartners";
import {
  cashlessFaq,
  cashlessIntro,
  documentsChecklist,
  goodToKnow,
  howCashlessWorks,
  understandingCashless,
} from "../utils/appUtils/cashlessInsuranceContent";
import { contactInfo } from "../utils/appUtils/constant";

function InsurerCard({
  slNo,
  name,
  logoDomain,
}: {
  slNo: number;
  name: string;
  logoDomain: string;
}) {
  return (
    <article className="group grid grid-cols-[2.75rem_minmax(0,auto)_minmax(0,1fr)] sm:grid-cols-[3.25rem_minmax(0,auto)_minmax(0,1fr)] gap-2.5 sm:gap-4 items-start rounded-xl bg-white ring-1 ring-slate-200/80 p-3.5 sm:p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:ring-teal-200/80 hover:shadow-[0_6px_16px_rgba(15,23,42,0.06)] transition-all duration-300 min-w-0">
      <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-100 py-2 px-1">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
          Sl.
        </span>
        <span className="text-base font-semibold text-slate-900 tabular-nums leading-none mt-1">
          {slNo}
        </span>
      </div>
      <InsurerLogo name={name} logoDomain={logoDomain} size="md" />
      <div className="min-w-0 pt-0.5">
        <h3 className="text-[0.9375rem] sm:text-base font-semibold text-slate-900 leading-snug break-words">
          {name}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed break-words">
          Cashless facility per hospital empanelment; subject to insurer network,
          policy terms, and approval at admission.
        </p>
      </div>
    </article>
  );
}

function SectionHeading({
  id,
  eyebrow,
  children,
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <header className="space-y-2">
      {eyebrow ? (
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
      >
        {children}
      </h2>
    </header>
  );
}

const easeOut = [0.22, 1, 0.36, 1] as const;

const tocLinks = [
  { href: "#understanding", label: "Understanding" },
  { href: "#how-it-works", label: "Process" },
  { href: "#documents", label: "Documents" },
  { href: "#good-to-know", label: "Essentials" },
  { href: "#faq", label: "FAQ" },
  { href: "#partners", label: "Partner list" },
];

const CashlessInsurancePage = () => {
  const telHref = `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`;
  const reduce = useReducedMotion();
  const dur = reduce ? 0.01 : 0.48;
  const durFast = reduce ? 0.01 : 0.36;
  const stagger = reduce ? 0 : 0.09;
  const staggerSm = reduce ? 0 : 0.06;

  const listVariants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: staggerSm, delayChildren: 0 },
      },
    }),
    [staggerSm]
  );

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: durFast, ease: easeOut },
      },
    }),
    [reduce, durFast]
  );

  const partnerListVariants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: staggerSm, delayChildren: reduce ? 0 : 0.08 },
      },
    }),
    [reduce, staggerSm]
  );

  const partnerItemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: durFast, ease: easeOut },
      },
    }),
    [reduce, durFast]
  );

  return (
    <div className="w-full min-w-0 bg-white">
      <SEO
        path="/cashless-insurance"
        title="Cashless Insurance Guide & Partner List | Dr. Preeti's Bright Eye Care — Pathankot"
        description="Cashless eye treatment in Pathankot: empanelled insurers, documents, pre-authorisation, and TPA steps at Dr. Preeti's Bright Eye Care. Full list of general & health insurance partners."
        keywords="cashless eye hospital Pathankot, insurance empanelment Pathankot, TPA eye hospital Punjab, health insurance cashless Pathankot, pre-authorisation eye surgery, Bright Eye Care insurance, cashless insurance Pathankot"
      />

      {/* —— Hero: split left / right (aligned with home section) —— */}
      <header className="insurance-hero relative overflow-x-clip bg-white border-b border-slate-200/90">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600" />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 max-w-xl bg-gradient-to-l from-teal-50/80 to-transparent"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: dur, ease: easeOut }}
            >
              <nav
                className="text-xs sm:text-sm text-slate-500 mb-6"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="hover:text-teal-800 transition-colors">
                  Home
                </Link>
                <span className="mx-2 text-slate-300" aria-hidden>
                  /
                </span>
                <span className="text-slate-900 font-medium">
                  Cashless insurance
                </span>
              </nav>

              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 mb-3">
                Billing &amp; insurance
              </p>
              <h1 className="text-3xl sm:text-4xl xl:text-[2.65rem] font-semibold text-slate-900 tracking-tight text-balance leading-[1.12]">
                {cashlessIntro.headline}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                {cashlessIntro.heroSub}
              </p>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: stagger,
                      delayChildren: reduce ? 0 : 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: durFast, ease: easeOut },
                    },
                  }}
                >
                  <a
                    href="#guide-main"
                    className="inline-flex items-center rounded-lg bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 hover:bg-slate-800 transition-colors"
                  >
                    Start reading
                  </a>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: durFast, ease: easeOut },
                    },
                  }}
                >
                  <a
                    href="#partners"
                    className="inline-flex items-center rounded-lg bg-white text-slate-800 text-sm font-semibold px-5 py-2.5 ring-1 ring-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    Jump to partner list
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-10 lg:mt-0"
              initial={reduce ? false : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: dur,
                ease: easeOut,
                delay: reduce ? 0 : 0.1,
              }}
            >
              <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-800">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-400/90 mb-6">
                  At a glance
                </p>
                <motion.div
                  className="grid grid-cols-1 gap-4"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: stagger,
                        delayChildren: reduce ? 0 : 0.25,
                      },
                    },
                  }}
                >
                  {[
                    {
                      n: insurancePartners.length,
                      l: "Empanelled insurers",
                      d: "General + standalone health",
                    },
                    {
                      n: generalInsurancePartners.length,
                      l: "General insurance",
                      d: "Motor-linked & composite insurers",
                    },
                    {
                      n: healthInsurancePartners.length,
                      l: "Standalone health",
                      d: "Dedicated health underwriters",
                    },
                  ].map((row) => (
                    <motion.div
                      key={row.l}
                      variants={{
                        hidden: { opacity: 0, x: 16 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: durFast, ease: easeOut },
                        },
                      }}
                      className="flex items-center justify-between gap-4 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-4"
                    >
                      <div>
                        <p className="text-2xl sm:text-3xl font-semibold tabular-nums text-white">
                          {row.n}
                        </p>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mt-1">
                          {row.l}
                        </p>
                      </div>
                      <p className="text-right text-xs text-slate-500 max-w-[9rem] leading-snug hidden sm:block">
                        {row.d}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* —— TOC —— */}
      <motion.div
        className="bg-slate-50/90 border-b border-slate-200/80"
        initial={reduce ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durFast, ease: easeOut, delay: reduce ? 0 : 0.15 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 sm:mb-0 sm:inline sm:mr-4">
            On this page
          </p>
          <nav className="flex flex-wrap gap-2" aria-label="Page sections">
            {tocLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-600 bg-white ring-1 ring-slate-200/80 hover:text-slate-900 hover:ring-teal-200/90 hover:shadow-sm transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* —— Main guide: left (long-form) | right (sticky sidebar) —— */}
      <div
        id="guide-main"
        className="relative bg-slate-50/40 border-b border-slate-200/80 scroll-mt-28 sm:scroll-mt-32"
      >
        <div
          className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl"
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
          <div className="relative">
            <div
              className="hidden lg:block pointer-events-none absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200/90 to-transparent"
              aria-hidden
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-0 lg:gap-y-0 items-start min-w-0">
              {/* LEFT COLUMN */}
              <motion.div
                className="lg:pr-10 xl:pr-14 pb-12 lg:pb-0 space-y-14 sm:space-y-[4.5rem] min-w-0"
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: dur, ease: easeOut }}
              >
                <section
                  className="space-y-5 scroll-mt-28 sm:scroll-mt-32"
                  id="intro"
                  aria-labelledby="intro-lead"
                >
                  <p
                    id="intro-lead"
                    className="text-[1.0625rem] text-slate-700 leading-[1.75]"
                  >
                    {cashlessIntro.lead}
                  </p>
                </section>

                <section
                  id="understanding"
                  aria-labelledby="understanding-heading"
                  className="space-y-5 scroll-mt-28 sm:scroll-mt-32"
                >
                  <SectionHeading id="understanding-heading" eyebrow="Fundamentals">
                    {understandingCashless.title}
                  </SectionHeading>
                  {understandingCashless.paragraphs.map((p, i) => (
                    <motion.p
                      key={i}
                      className="text-[1.0625rem] text-slate-700 leading-[1.75]"
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: durFast,
                        ease: easeOut,
                        delay: reduce ? 0 : i * 0.05,
                      }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </section>

                <section
                  id="how-it-works"
                  aria-labelledby="how-heading"
                  className="space-y-8 scroll-mt-28 sm:scroll-mt-32"
                >
                  <SectionHeading id="how-heading" eyebrow="Workflow">
                    How cashless usually works
                  </SectionHeading>
                  <p className="text-slate-600 leading-relaxed -mt-4">
                    Steps may vary by insurer. This reflects a typical inpatient
                    or planned procedure pathway.
                  </p>
                  <div className="relative pl-2 sm:pl-3">
                    <span
                      className="absolute left-[19px] sm:left-[21px] top-3 bottom-3 w-px bg-slate-200"
                      aria-hidden
                    />
                    <motion.ol
                      className="space-y-6 list-none m-0 p-0"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.12 }}
                      variants={listVariants}
                    >
                      {howCashlessWorks.map((item) => (
                        <motion.li
                          key={item.step}
                          variants={fadeUp}
                          className="relative flex gap-4 sm:gap-5 pl-0"
                        >
                          <span
                            className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white ring-4 ring-slate-50 tabular-nums"
                            aria-hidden
                          >
                            {item.step}
                          </span>
                          <div className="rounded-xl bg-white ring-1 ring-slate-200/80 px-4 sm:px-5 py-4 flex-1 min-w-0 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                            <h3 className="text-[0.9375rem] font-semibold text-slate-900">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                              {item.body}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ol>
                  </div>
                </section>

                <section
                  id="documents"
                  aria-labelledby="documents-heading"
                  className="space-y-5 scroll-mt-28 sm:scroll-mt-32"
                >
                  <SectionHeading id="documents-heading" eyebrow="Checklist">
                    {documentsChecklist.title}
                  </SectionHeading>
                  <p className="text-slate-700 leading-relaxed">
                    {documentsChecklist.intro}
                  </p>
                  <motion.ul
                    className="rounded-xl bg-white ring-1 ring-slate-200/80 divide-y divide-slate-100 m-0 p-0 list-none shadow-[0_2px_8px_rgba(15,23,42,0.04)] overflow-hidden"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={listVariants}
                  >
                    {documentsChecklist.items.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={fadeUp}
                        className="flex gap-3 px-4 sm:px-5 py-3.5 text-sm sm:text-[0.9375rem] text-slate-700 leading-relaxed"
                      >
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white"
                          aria-hidden
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </section>
              </motion.div>

              {/* RIGHT COLUMN — sticky sidebar */}
              <motion.div
                className="lg:pl-10 xl:pl-14 lg:sticky lg:top-[6.75rem] xl:top-28 space-y-6 min-w-0 self-start"
                initial={reduce ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: dur,
                  ease: easeOut,
                  delay: reduce ? 0 : 0.05,
                }}
              >
                <div className="rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.15)] ring-1 ring-slate-800">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-400/90 mb-3">
                    Billing assistance
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    For insurance or cashless queries, call{" "}
                    <a
                      href={telHref}
                      className="text-white font-medium underline decoration-teal-500/70 underline-offset-2 hover:decoration-teal-400"
                    >
                      {contactInfo.phone}
                    </a>{" "}
                    or{" "}
                    <Link
                      to="/ContactUs"
                      className="text-white font-medium underline decoration-teal-500/70 underline-offset-2 hover:decoration-teal-400"
                    >
                      contact the hospital online
                    </Link>
                    .
                  </p>
                  <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                    <a
                      href="#partners"
                      className="inline-flex text-xs font-semibold text-teal-300 hover:text-teal-200"
                    >
                      Partner directory →
                    </a>
                    <span className="text-slate-600">·</span>
                    <Link
                      to="/bookAnAppointment"
                      className="inline-flex text-xs font-semibold text-teal-300 hover:text-teal-200"
                    >
                      Book appointment →
                    </Link>
                  </div>
                </div>

                <div
                  id="good-to-know"
                  className="rounded-2xl bg-white ring-1 ring-slate-200/80 p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] scroll-mt-28 sm:scroll-mt-32"
                >
                  <SectionHeading
                    id="good-to-know-heading"
                    eyebrow="Policy notes"
                  >
                    {goodToKnow.title}
                  </SectionHeading>
                  <motion.ul
                    className="grid gap-3 m-0 p-0 list-none mt-5"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={listVariants}
                  >
                    {goodToKnow.items.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={fadeUp}
                        className="rounded-lg bg-slate-50/90 ring-1 ring-slate-100 px-4 py-3 text-sm text-slate-700 leading-relaxed flex gap-3"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600"
                          aria-hidden
                        />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div
                  id="faq"
                  className="rounded-2xl bg-white ring-1 ring-slate-200/80 p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] scroll-mt-28 sm:scroll-mt-32"
                >
                  <SectionHeading id="faq-heading" eyebrow="Support">
                    Frequently asked questions
                  </SectionHeading>
                  <div className="space-y-2 mt-5">
                    {cashlessFaq.map((item, i) => (
                      <details
                        key={i}
                        className="group rounded-lg bg-slate-50/80 ring-1 ring-slate-200/70 open:bg-white open:ring-slate-300/80 open:shadow-sm transition-all"
                      >
                        <summary className="cursor-pointer list-none flex items-center justify-between gap-3 px-4 py-3.5 font-semibold text-slate-900 text-sm [&::-webkit-details-marker]:hidden">
                          <span className="pr-1">{item.question}</span>
                          <svg
                            className="w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.75}
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </summary>
                        <div className="px-4 pb-3.5 pt-0 border-t border-slate-100">
                          <p className="text-sm text-slate-600 leading-relaxed pt-3">
                            {item.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* —— Partner directory —— */}
      <div
        id="partners"
        className="relative bg-white border-t border-slate-200/90 py-14 sm:py-20 scroll-mt-28 sm:scroll-mt-32"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-50/50 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.header
            className="max-w-3xl mb-10 sm:mb-14"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: durFast, ease: easeOut }}
          >
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-teal-800 mb-2">
              Directory
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Empanelled insurers — full list
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Serial numbers align with our official panel list. If your insurer
              is not shown, reimbursement under your policy may still be
              available—confirm with your insurer and our billing desk.
            </p>
          </motion.header>

          <section className="mb-14" aria-labelledby="general-insurers-heading">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6 pb-4 border-b border-slate-200/90">
              <h3
                id="general-insurers-heading"
                className="text-lg font-semibold text-slate-900"
              >
                General insurance companies
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {generalInsurancePartners.length} partners
              </span>
            </div>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3.5 min-w-0"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
              variants={partnerListVariants}
            >
              {generalInsurancePartners.map((p) => (
                <motion.div
                  key={p.slNo}
                  variants={partnerItemVariants}
                  whileHover={
                    reduce ? undefined : { y: -2, transition: { duration: 0.2 } }
                  }
                >
                  <InsurerCard
                    slNo={p.slNo}
                    name={p.name}
                    logoDomain={p.logoDomain}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mb-12" aria-labelledby="health-insurers-heading">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6 pb-4 border-b border-slate-200/90">
              <h3
                id="health-insurers-heading"
                className="text-lg font-semibold text-slate-900"
              >
                Standalone health insurance companies
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {healthInsurancePartners.length} partners
              </span>
            </div>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3.5 min-w-0"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
              variants={partnerListVariants}
            >
              {healthInsurancePartners.map((p) => (
                <motion.div
                  key={p.slNo}
                  variants={partnerItemVariants}
                  whileHover={
                    reduce ? undefined : { y: -2, transition: { duration: 0.2 } }
                  }
                >
                  <InsurerCard
                    slNo={p.slNo}
                    name={p.name}
                    logoDomain={p.logoDomain}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          <motion.div
            className="rounded-xl bg-slate-50 ring-1 ring-slate-200/80 p-5 sm:p-6 text-sm text-slate-600 leading-relaxed"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: durFast, ease: easeOut }}
          >
            <p className="mb-3">
              <span className="font-semibold text-slate-900">Disclaimer. </span>
              Partner names and empanelment reflect our records at publication.
              Networks, products, and cashless rules may change. Approval is
              confirmed only after verification with your TPA or insurer at the
              time of service.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">
              Logos are shown for recognition only; trademarks belong to the
              respective insurers.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-3"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : 0.1, duration: durFast }}
          >
            <Link
              to="/bookAnAppointment"
              className="inline-flex justify-center items-center rounded-xl bg-slate-900 text-white text-sm font-semibold px-6 py-3.5 shadow-sm hover:bg-slate-800 transition-colors"
            >
              Book appointment
            </Link>
            <Link
              to="/"
              className="inline-flex justify-center items-center rounded-xl bg-white text-slate-800 text-sm font-semibold px-6 py-3.5 ring-1 ring-slate-300 hover:bg-slate-50 transition-colors"
            >
              Return to home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CashlessInsurancePage;
