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
          className="fixed inset-0 z-[200] flex max-md:items-center max-md:justify-center max-md:p-2 items-center justify-center p-3 sm:p-5 md:p-8"
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
            className="relative flex w-full min-h-0 max-w-[min(100%,42rem)] max-md:max-h-[calc(100dvh-0.75rem)] max-h-[min(94dvh,720px)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_32px_120px_-20px_rgba(15,23,42,0.45)] ring-1 ring-white/20 md:max-h-[min(88vh,640px)] md:rounded-3xl"
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
            {/* Mobile: fitted column, no scroll; md: side‑by‑side + scroll in right pane */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden max-md:min-h-0 md:min-h-0 md:flex-1 md:flex-row">
            {/* —— Left panel: brand / welcome —— */}
            <div className="relative flex min-h-0 w-full shrink-0 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 px-3 pb-3 pt-4 text-white sm:px-6 sm:pb-6 sm:pt-8 md:w-[42%] md:min-h-0 md:shrink-0 md:px-7 md:py-9">
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
                className="relative z-10 -mt-1 ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 max-md:mb-0 md:absolute md:right-4 md:top-4 md:mt-0 md:h-10 md:w-10 md:rounded-xl"
                aria-label="Close"
              >
                <svg
                  className="h-4 w-4 md:h-5 md:w-5"
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

              <div className="relative z-10 mt-1 text-center md:mt-8 md:text-left">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200/90 md:text-[10px] md:tracking-[0.25em]">
                  Pathankot · Punjab
                </p>
                <div className="mx-auto mt-2 w-full max-w-[200px] md:mx-0 md:mt-4 md:max-w-none">
                  <img
                    src="/logo2.png"
                    alt="Dr. Preeti's Bright Eye Care Hospital"
                    className="block h-auto max-h-[52px] w-full max-w-full object-contain object-center md:max-h-none md:object-left rounded-xl bg-white px-2 py-1.5 shadow-lg shadow-black/20 ring-1 ring-white/30 md:rounded-2xl sm:px-4 sm:py-3.5"
                    decoding="async"
                  />
                </div>
                <h2
                  id={titleId}
                  className="mt-2 font-semibold text-xl leading-tight tracking-tight md:mt-4 md:text-3xl lg:text-4xl"
                >
                  Welcome
                </h2>
                <p className="mt-1 text-xs leading-snug text-cyan-100/90 md:mt-2 md:text-[0.9375rem] md:leading-relaxed">
                  Dr. Preeti&apos;s{" "}
                  <span className="font-semibold text-white">
                    Bright Eye Care
                  </span>
                </p>
                <p
                  id={descId}
                  className="mt-2 hidden text-xs leading-relaxed text-slate-300/95 sm:text-sm md:mt-4 md:block"
                >
                  Advanced eye care, cornea &amp; cataract expertise, and
                  patient-first service—every time you visit us online or at the
                  hospital.
                </p>
                <p className="mt-2 text-[11px] leading-snug text-slate-300/95 md:hidden">
                  Advanced eye care &amp; cataract expertise—patient-first on
                  every visit.
                </p>
              </div>

              <div className="relative z-10 mt-2 md:mt-8">
                <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-sm md:gap-2 md:rounded-xl md:px-3 md:py-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/20 text-amber-200 md:h-8 md:w-8 md:rounded-lg">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4"
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
                  <p className="text-left text-[10px] font-medium leading-snug text-cyan-50/90 md:text-[11px]">
                    First corneal transplant centre in Pathankot region
                  </p>
                </div>
              </div>
            </div>

            {/* —— Right panel: highlights —— */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-slate-50/50 max-md:min-h-0 md:overflow-hidden">
              <div className="min-h-0 flex-1 overflow-visible px-3 py-2 sm:px-7 sm:py-8 md:min-h-0 md:overflow-y-auto md:px-7 md:py-8">
                <p className="text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:text-left md:text-[11px] md:tracking-[0.2em]">
                  Why patients trust us
                </p>

                <div className="mt-2 space-y-2 sm:space-y-4 md:mt-5">
                  <div className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md max-md:text-left sm:p-5 md:rounded-2xl">
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-emerald-500 to-teal-600 md:rounded-l-2xl" />
                    <div className="pl-2.5 md:pl-3">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 md:h-9 md:w-9 md:rounded-xl">
                          <svg
                            className="h-3.5 w-3.5 md:h-4 md:w-4"
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
                        <h3 className="text-sm font-semibold leading-tight text-slate-900 md:text-base">
                          HOTA-approved hospital
                        </h3>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-snug text-slate-600 md:mt-2 md:text-sm md:leading-relaxed">
                        <span className="max-md:hidden">
                          Licensed by the Government of Punjab for organ / tissue
                          transplantation. Registration:{" "}
                        </span>
                        <span className="md:hidden">
                          Punjab Govt. licensed for organ &amp; tissue
                          transplant.{" "}
                        </span>
                        <code className="mt-0.5 inline-block max-w-full rounded bg-slate-100 px-1 py-0.5 font-mono text-[8px] leading-tight text-slate-800 max-md:block max-md:w-full md:mt-0 md:inline-block md:px-1.5 md:text-[11px]">
                          DPBECH(P)-CT(N)-PB-2025-5ME3/12737
                        </code>
                      </p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md sm:p-5 md:rounded-2xl">
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-cyan-500 to-blue-600 md:rounded-l-2xl" />
                    <div className="pl-2.5 md:pl-3">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100 md:h-9 md:w-9 md:rounded-xl">
                          <svg
                            className="h-3.5 w-3.5 md:h-4 md:w-4"
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
                        <h3 className="text-sm font-semibold leading-tight text-slate-900 md:text-base">
                          Cashless insurance hospital
                        </h3>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-snug text-slate-600 md:mt-2 md:text-sm md:leading-relaxed">
                        <span className="md:hidden">
                          {insurancePartners.length} insurers — cashless
                          treatment (per policy &amp; TPA).
                        </span>
                        <span className="hidden md:inline">
                          Empanelled with{" "}
                          <span className="font-semibold text-slate-800">
                            {insurancePartners.length}
                          </span>{" "}
                          insurers for cashless treatment where your policy and
                          TPA allow.
                        </span>
                      </p>
                      <Link
                        to="/cashless-insurance"
                        onClick={close}
                        className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-700 hover:text-cyan-900 max-md:py-0.5 md:mt-3 md:gap-1.5 md:text-sm"
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

              <div className="shrink-0 border-t border-slate-200/80 bg-white px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-7 md:py-4 md:pb-4">
                <div className="flex flex-row items-stretch gap-2 sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={close}
                    className="order-2 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 sm:order-1 sm:flex-initial sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    Close
                  </button>
                  <Link
                    to="/bookAnAppointment"
                    onClick={close}
                    className="order-1 flex-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-teal-900/20 transition-all hover:from-teal-500 hover:to-cyan-500 sm:order-2 sm:flex-initial sm:rounded-xl sm:px-6 sm:py-2.5 sm:text-sm"
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
