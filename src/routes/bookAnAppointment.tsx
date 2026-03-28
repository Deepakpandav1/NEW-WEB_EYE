// Professional Book Appointment Page - Modern Form Design
import React, { useState } from "react";
import jsPDF from "jspdf";
import bwipjs from "bwip-js";
import SEO from "../components/SEO";
import Toast from "../components/Toast";

const BookAppointment = () => {
  const appointmentTypes = [
    "Telephonic Consultation",
    "Video Call Consultation",
    "Visit Hospital",
  ];

  const purposesOfVisit = [
    "Cataract Evaluation",
    "Glaucoma Screening",
    "Vision Problem",
    "Regular Checkup",
    "Follow-up Visit",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    date: "",
    appointmentType: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    time: "",
    agree: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "agree") {
      setShowSubmit(checked);
    }
  };

  const generateBarcode = async (data) => {
    const canvas = document.createElement("canvas");
    try {
      bwipjs.toCanvas(canvas, {
        bcid: "code128",
        text: data,
        scale: 3,
        height: 10,
      });
      return canvas.toDataURL("image/png");
    } catch (err) {
      console.error("Barcode generation error", err);
      return null;
    }
  };

  const generatePDF = async () => {
    const doc = new jsPDF({ format: "a5" });
    const barcode = await generateBarcode(formData.mobile);

    doc.setFontSize(12);
    doc.text("Appointment Receipt", 10, 10);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Purpose: ${formData.purpose}`, 10, 30);
    doc.text(`Date: ${formData.date}`, 10, 40);
    doc.text(`Appointment Type: ${formData.appointmentType}`, 10, 50);
    if (formData.mobile) doc.text(`Mobile: ${formData.mobile}`, 10, 60);
    if (formData.email) doc.text(`Email: ${formData.email}`, 10, 70);
    if (formData.time) doc.text(`Preferred Time: ${formData.time}`, 10, 80);

    if (barcode) doc.addImage(barcode, "PNG", 10, 90, 100, 20);

    doc.setFontSize(10);
    doc.text("Terms & Conditions:", 10, 120);
    doc.text("- Booking Amount is Non-Refundable.", 10, 130);
    doc.text("- If Patient is not available at scheduled time,", 10, 135);
    doc.text("  the appointment will be cancelled with no refund.", 10, 140);
    doc.text("- Patient will get a call from the appointment team.", 10, 145);

    doc.save("appointment-receipt.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await generatePDF();

    fetch("https://formsubmit.co/ajax/drpreetisbrighteyecare@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setToast({
            message: "Your appointment has been booked successfully.",
            type: "success",
            visible: true,
          });
          setFormData({
            name: "",
            purpose: "",
            date: "",
            appointmentType: "",
            mobile: "",
            alternateMobile: "",
            email: "",
            time: "",
            agree: false,
          });
          setShowSubmit(false);
        } else {
          setToast({
            message: "Something went wrong. Please try again.",
            type: "error",
            visible: true,
          });
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setToast({
          message: "Network error. Please try again.",
          type: "error",
          visible: true,
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  const getTimeSlots = (): string[] => {
    const slots: string[] = [];
    const periods = ["AM", "PM"];
    for (let i = 1; i <= 12; i++) {
      periods.forEach((p) => {
        slots.push(`${i < 10 ? "0" + i : i}:00 ${p}`);
        slots.push(`${i < 10 ? "0" + i : i}:30 ${p}`);
      });
    }
    return slots;
  };

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={() => setToast((p) => ({ ...p, visible: false }))}
      />
      <SEO
        path="/bookAnAppointment"
        title="Book Appointment | Dr. Preeti's Bright Eye Care Hospital Pathankot"
        description="Book an eye appointment at Dr. Preeti's Bright Eye Care, Pathankot: phone, video, or in-person visits. Cataract, LASIK, cornea & general ophthalmology."
        keywords="book eye appointment pathankot, eye consultation online, video call eye doctor, eye checkup appointment pathankot, Dr Preeti appointment"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-900 via-pink-900 to-purple-900 text-white py-20 md:py-24 overflow-hidden">
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
              📅 Schedule Your Visit
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Book Your <span className="text-orange-300">Appointment</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Choose your preferred consultation method and schedule a convenient
            time with our expert doctors
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">
                Schedule Your Appointment
              </h2>
              <p className="text-orange-100">
                Fill in your details and we'll get back to you shortly
              </p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  name="name"
                  required
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Purpose of Visit */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Purpose of Visit *
                </label>
                <select
                  name="purpose"
                  required
                  onChange={handleChange}
                  value={formData.purpose}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                >
                  <option value="">Select purpose of visit</option>
                  {purposesOfVisit.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Appointment Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Appointment Type *
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {appointmentTypes.map((type, i) => (
                    <label
                      key={i}
                      className={`flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.appointmentType === type
                          ? "border-orange-500 bg-orange-50 text-orange-700 font-semibold"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="appointmentType"
                        value={type}
                        onChange={handleChange}
                        checked={formData.appointmentType === type}
                        className="hidden"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  min={getToday()}
                  onChange={handleChange}
                  value={formData.date}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Mobile Number (Conditional) */}
              {(formData.appointmentType === "Telephonic Consultation" ||
                formData.appointmentType === "Visit Hospital") && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    name="mobile"
                    required
                    placeholder="+91 98765 43210"
                    onChange={handleChange}
                    value={formData.mobile}
                    pattern="^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{10}[)]?$"
                    title="Enter a valid 10-digit Indian mobile number (e.g., 9876543210 or +91 9876543210)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors invalid:border-red-200"
                  />
                </div>
              )}

              {/* Alternate Mobile (Telephonic Only) */}
              {formData.appointmentType === "Telephonic Consultation" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Alternate Number (Optional)
                  </label>
                  <input
                    name="alternateMobile"
                    placeholder="Alternate contact number"
                    onChange={handleChange}
                    value={formData.alternateMobile}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
              )}

              {/* Email (Video Call Only) */}
              {formData.appointmentType === "Video Call Consultation" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
              )}

              {/* Time Slot (Telephonic & Video Call) */}
              {(formData.appointmentType === "Telephonic Consultation" ||
                formData.appointmentType === "Video Call Consultation") && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    required
                    onChange={handleChange}
                    value={formData.time}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="">Select a time slot</option>
                    {getTimeSlots().map((t, i) => (
                      <option key={i} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Terms & Conditions */}
              {(formData.appointmentType === "Telephonic Consultation" ||
                formData.appointmentType === "Video Call Consultation") && (
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      I understand that{" "}
                      <strong>Telephonic/Video Consultations</strong> are
                      available with a nominal fee charged by the hospital. I
                      agree to proceed with the booking.
                    </span>
                  </label>
                </div>
              )}

              {/* Submit Button */}
              {(showSubmit ||
                formData.appointmentType === "Visit Hospital") && (
                <button
                  disabled={submitting}
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Booking Appointment...
                    </>
                  ) : (
                    <>
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Book Appointment
                    </>
                  )}
                </button>
              )}
            </form>

            {/* Info Footer */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Note:</strong> After booking, our appointment team
                  will contact you to confirm your appointment details. Please
                  keep your phone accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;
