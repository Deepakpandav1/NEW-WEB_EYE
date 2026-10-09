import SiteImage from "../components/SiteImage";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, departments } from "../utils/appUtils/galleryData";
import SEO from "../components/SEO";

const FacilityTour = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDept, setSelectedDept] = useState<string>("");
  const [isPaused, setIsPaused] = useState(false);
  const [previewImage, setPreviewImage] = useState(galleryItems[0]);
  const preview = useRef<HTMLDialogElement>(null);
  const openPreview = (item: typeof galleryItems[number]) => {
    setPreviewImage(item);
    setIsPaused(true);
    preview.current?.showModal();
  };

  const filteredItems = selectedDept
    ? galleryItems.filter((item) => item.dept === selectedDept)
    : galleryItems;

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % galleryItems.length);
  }, []);

  const prev = () => {
    setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [isPaused, next]);

  return (
    <>
      <SEO
        path="/facilityTour"
        title="Facility Tour | Dr. Preeti's Bright Eye Care Hospital Pathankot"
        description="Virtual tour of our Pathankot eye hospital: OTs, diagnostics, consultation suites, and patient areas at Dr. Preeti's Bright Eye Care."
        keywords="hospital facility pathankot, eye hospital tour, operation theater, diagnostic lab, modern hospital pathankot, Bright Eye Care facility"
      />

      <dialog ref={preview} className="facility-preview" aria-label={previewImage.title} onClick={event => { if (event.target === preview.current) preview.current?.close(); }} onClose={() => setIsPaused(false)}>
        <div className="facility-preview-toolbar"><h2>{previewImage.title}</h2><button type="button" autoFocus onClick={() => preview.current?.close()} aria-label="Close photo">✕</button></div>
        <SiteImage src={previewImage.image} alt={previewImage.title} loading="eager" />
        <p>{previewImage.description}</p>
        <a href={previewImage.image} target="_blank" rel="noopener noreferrer">Open original photo (new tab) ↗</a>
      </dialog>
      {/* Hero */}
      <div className="page-hero relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)",
          backgroundSize: "36px 36px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge mb-5 inline-flex" style={{ background: "rgba(255,255,255,0.15)", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
            Virtual Hospital Tour
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Explore Our{" "}
            <span className="text-cyan-100">World-Class Facilities</span>
          </h1>
          <p className="text-base sm:text-lg text-cyan-50/90 max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art hospital — equipped with the latest technology and modern amenities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Slider */}
          <div className="mb-12 sm:mb-16">
            <div
              className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-modern"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slide */}
              <div className="relative h-70 sm:h-105 md:h-130 bg-slate-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    {/* Blurred background */}
                    <div
                      className="absolute inset-0 scale-110 blur-2xl opacity-30"
                      style={{ backgroundImage: `url(${galleryItems[activeIndex].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                    {/* Main image */}
                    <SiteImage
                      src={galleryItems[activeIndex].image}
                      alt={galleryItems[activeIndex].title}
                      className="relative z-10 w-full h-full object-contain p-4"
                      loading="eager"
                    />
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 bg-linear-to-t from-black/80 to-transparent px-6 py-5">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{galleryItems[activeIndex].title}</h3>
                      <p className="text-cyan-300 text-sm font-semibold">{galleryItems[activeIndex].dept}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <button
                  onClick={prev}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-cyan-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-150 hover:scale-105"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-cyan-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-150 hover:scale-105"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-1.5 py-3 bg-slate-50 border-t border-slate-100">
                {galleryItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-200 ${i === activeIndex ? "w-5 h-2 bg-cyan-600" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Department Filter */}
          <div className="mb-10 sm:mb-12">
            <div className="text-center mb-6">
              <span className="section-badge mb-4 inline-flex">Browse by Department</span>
              <h2 className="section-title">
                Explore Our{" "}
                <span className="text-teal-gradient">Departments</span>
              </h2>
              <div className="section-divider"></div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8">
              <button
                onClick={() => setSelectedDept("")}
                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-150 ${
                  selectedDept === ""
                    ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-700"
                }`}
              >
                All Facilities
              </button>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-150 ${
                    selectedDept === dept
                      ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-700"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.image}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="card-modern overflow-hidden group"
                >
                  <button type="button" className="facility-image-button relative aspect-[4/3] w-full overflow-hidden bg-slate-100" onClick={() => openPreview(item)} aria-label={`View ${item.title} full size`}>
                    <SiteImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                      <span className="text-white text-xs font-semibold leading-tight">{item.title}</span>
                    </div>
                  </button>
                  <div className="px-3 py-2.5">
                    <p className="text-xs font-semibold text-slate-800 leading-tight truncate">{item.title}</p>
                    <p className="text-[11px] text-cyan-600 font-medium mt-0.5">{item.dept}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: "State-of-the-Art Equipment",
                desc: "Latest medical technology for accurate diagnosis and treatment",
                color: "text-cyan-600",
                bg: "bg-cyan-50 border-cyan-100",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
                title: "Hygienic & Safe Environment",
                desc: "Maintaining highest standards of cleanliness and patient safety",
                color: "text-teal-600",
                bg: "bg-teal-50 border-teal-100",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                title: "Comfortable Patient Care",
                desc: "Spacious waiting areas and comfortable treatment rooms",
                color: "text-indigo-600",
                bg: "bg-indigo-50 border-indigo-100",
              },
            ].map((card, i) => (
              <div key={i} className={`card-modern p-6 text-center border ${card.bg}`}>
                <div className={`w-12 h-12 rounded-2xl ${card.bg} border flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-6 h-6 ${card.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilityTour;
