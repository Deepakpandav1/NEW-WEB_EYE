import React, { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { insurancePartners } from "../utils/appUtils/insurancePartners";

const OPEN_DELAY_MS = 140;

/**
 * Homepage welcome dialog — opens on every visit / refresh to `/`.
 * Dismiss only hides until the next load; no session storage.
 */
const HomeWelcomeModal: React.FC = () => {
  const reduce = useReducedMotion();
  const titleId = useId();
  const descId = useId();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!mounted) return null;

  const ease = [0.22, 1, 0.36, 1] as const;

  const panel = (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="welcome-overlay"
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 md:p-8"
          role="presentation"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: reduce ? 0.01 : 0.22 }}
        >
          <motion.button
            type="button"
            aria-label="Close welcome message"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            onClick={close}
          />

          <motion.div
            key="welcome-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="relative flex w-full min-h-0 max-w-[min(100%,42rem)] max-h-[min(94dvh,720px)] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_32px_120px_-20px_rgba(15,23,42,0.45)] ring-1 ring-white/20 md:max-h-[min(88vh,640px)]"
            initial={
              reduce
                ? undefined
                : { opacity: 0, scale: 0.94, y: 20 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              reduce
                ? undefined
                : { opacity: 0, scale: 0.97, y: 12 }
            }
            transition={{ duration: reduce ? 0.01 : 0.38, ease }}
          >
            {/* Mobile: outer column scrolls entire main+footer; md: side‑by‑side */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] md:min-h-0 md:flex-1 md:flex-row md:overflow-hidden">
            {/* —— Left panel: brand / welcome —— */}
            <div className="relative flex min-h-0 w-full shrink-0 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 px-4 pb-5 pt-6 text-white sm:px-6 sm:pb-6 sm:pt-8 md:w-[42%] md:min-h-0 md:shrink-0 md:px-7 md:py-9">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-teal-500/15 blur-3xl"
                aria-hidden
              />

              <button
                type="button"
                onClick={close}
                className="relative z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:absolute md:right-4 md:top-4"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative z-10 mt-4 md:mt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
                  Pathankot · Punjab
                </p>
                <div className="mt-3 w-full max-w-[280px] mx-auto md:mx-0 md:mt-4 md:max-w-none">
                  <img
                    src="/logo2.png"
                    alt="Dr. Preeti's Bright Eye Care Hospital"
                    className="block w-full h-auto max-h-[100px] max-w-full object-contain object-center md:max-h-none md:object-left rounded-2xl bg-white px-2.5 py-2 sm:px-4 sm:py-3.5 shadow-lg shadow-black/20 ring-1 ring-white/30"
                    decoding="async"
                  />
                </div>
                <h2
                  id={titleId}
                  className="mt-3 font-semibold text-2xl leading-[1.1] tracking-tight sm:mt-4 sm:text-3xl md:text-4xl"
                >
                  Welcome
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-cyan-100/85 sm:text-[0.9375rem]">
                  Dr. Preeti&apos;s{" "}
                  <span className="font-semibold text-white">
                    Bright Eye Care
                  </span>
                </p>
                <p
                  id={descId}
                  className="mt-4 text-xs leading-relaxed text-slate-300/95 sm:text-sm"
                >
                  Advanced eye care, cornea &amp; cataract expertise, and
                  patient-first service—every time you visit us online or at the
                  hospital.
                </p>
              </div>

              <div className="relative z-10 mt-6 md:mt-8">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/20 text-amber-200">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-[11px] font-medium leading-snug text-cyan-50/90">
                    First corneal transplant centre in Pathankot region
                  </p>
                </div>
              </div>
            </div>

            {/* —— Right panel: highlights —— */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-slate-50/50 md:overflow-hidden">
              <div className="min-h-0 flex-1 overflow-visible px-4 py-5 sm:px-7 sm:py-8 md:min-h-0 md:overflow-y-auto">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Why patients trust us
                </p>

                <div className="mt-5 space-y-4">
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-emerald-500 to-teal-600" />
                    <div className="pl-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                            />
                          </svg>
                        </span>
                        <h3 className="text-base font-semibold text-slate-900">
                          HOTA-approved hospital
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Licensed by the Government of Punjab for organ / tissue
                        transplantation. Registration:{" "}
                        <code className="inline-block max-w-full break-all rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-mono text-slate-800 sm:break-normal sm:text-[11px]">
                          DPBECH(P)-CT(N)-PB-2025-5ME3/12737
                        </code>
                      </p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-500 to-blue-600" />
                    <div className="pl-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m0-12.75H21"
                            />
                          </svg>
                        </span>
                        <h3 className="text-base font-semibold text-slate-900">
                          Cashless insurance hospital
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Empanelled with{" "}
                        <span className="font-semibold text-slate-800">
                          {insurancePartners.length}
                        </span>{" "}
                        insurers for cashless treatment where your policy and TPA
                        allow.
                      </p>
                      <Link
                        to="/cashless-insurance"
                        onClick={close}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                      >
                        View partner list &amp; guide
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shrink-0 border-t border-slate-200/80 bg-white px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-7 sm:pb-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={close}
                    className="order-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 sm:order-1 sm:py-2.5"
                  >
                    Close
                  </button>
                  <Link
                    to="/bookAnAppointment"
                    onClick={close}
                    className="order-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition-all hover:from-teal-500 hover:to-cyan-500 sm:order-2 sm:py-2.5"
                  >
                    Book appointment
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(panel, document.body);
};

export default HomeWelcomeModal;
