// Professional Facility Tour Page - Modern Gallery Design
import React, { useState } from "react";
import Slider from "react-slick";
import { galleryItems, departments } from "../utils/appUtils/galleryData";
import SEO from "../components/SEO";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FacilityTour = () => {
  const [selectedDept, setSelectedDept] = useState<string>("");

  const mainSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    speed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const departmentSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const filteredItems = selectedDept
    ? galleryItems.filter((item) => item.dept === selectedDept)
    : galleryItems;

  return (
    <>
      <SEO
        path="/facilityTour"
        title="Facility Tour | Dr. Preeti's Bright Eye Care Hospital Pathankot"
        description="Virtual tour of our Pathankot eye hospital: OTs, diagnostics, consultation suites, and patient areas at Dr. Preeti's Bright Eye Care."
        keywords="hospital facility pathankot, eye hospital tour, operation theater, diagnostic lab, modern hospital pathankot, Bright Eye Care facility"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🏥 Virtual Hospital Tour
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Explore Our{" "}
            <span className="text-cyan-300">World-Class Facilities</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art hospital equipped with
            the latest technology and modern amenities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Slider */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Slider {...mainSliderSettings}>
                {galleryItems.map((item, index) => (
                  <div key={index}>
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                      <div
                        className="absolute inset-0 z-0 blur-2xl scale-110 bg-center bg-cover opacity-30"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="relative z-10 object-contain max-h-full max-w-full p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-6 z-20">
                        <h3 className="text-2xl font-bold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-cyan-300 text-sm font-semibold">
                          {item.dept}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Department Filters */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Browse by Department
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              <button
                className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  selectedDept === ""
                    ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-500 hover:text-cyan-700"
                }`}
                onClick={() => setSelectedDept("")}
              >
                All Facilities
              </button>
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    selectedDept === dept
                      ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-500 hover:text-cyan-700"
                  }`}
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Department Slider */}
          {selectedDept && (
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-cyan-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                {selectedDept} Department
              </h3>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <Slider {...departmentSliderSettings}>
                  {filteredItems.map((item, index) => (
                    <div key={index}>
                      <div className="relative h-[350px] sm:h-[450px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                        <div
                          className="absolute inset-0 z-0 blur-2xl scale-110 bg-center bg-cover opacity-30"
                          style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="relative z-10 object-contain max-h-full max-w-full p-4"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4 z-20">
                          <h4 className="text-xl font-bold">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                State-of-the-Art Equipment
              </h4>
              <p className="text-gray-700 text-sm">
                Latest medical technology for accurate diagnosis and treatment
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Hygienic & Safe Environment
              </h4>
              <p className="text-gray-700 text-sm">
                Maintaining highest standards of cleanliness and safety
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Comfortable Patient Care
              </h4>
              <p className="text-gray-700 text-sm">
                Spacious waiting areas and comfortable treatment rooms
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SampleNextArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 w-12 h-12 bg-white text-cyan-700 text-2xl rounded-full shadow-xl hover:shadow-2xl focus:outline-none transition-all duration-200 hover:scale-110 flex items-center justify-center"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

const SamplePrevArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 w-12 h-12 bg-white text-cyan-700 text-2xl rounded-full shadow-xl hover:shadow-2xl focus:outline-none transition-all duration-200 hover:scale-110 flex items-center justify-center"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default FacilityTour;
