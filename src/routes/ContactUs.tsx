// Professional Contact Us Page - Modern Form Design
import React, { useState } from "react";
import SEO from "../components/SEO";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/drpreetisbrighteyecare@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccessMessage(
          "✅ Your message has been sent successfully! We'll get back to you soon."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch {
      alert("❌ Network error. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <>
      <SEO
        path="/ContactUs"
        title="Contact Us | Dr. Preeti's Bright Eye Care Hospital Pathankot"
        description="Contact Dr. Preeti's Bright Eye Care in Pathankot: address, phone, email, and enquiry form for appointments and eye care questions."
        keywords="contact eye hospital pathankot, dr preeti contact, eye hospital phone number pathankot, hospital address pathankot, Bright Eye Care Pathankot"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-900 via-cyan-900 to-teal-900 text-white py-20 md:py-24 overflow-hidden">
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
              📞 Get In Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-cyan-300">Our Team</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to us and we'll
            respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you have a question about our services, need to
                  schedule an appointment, or just want to say hello, we'd love
                  to hear from you.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+916239507877"
                  className="block bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-2xl p-6 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-cyan-100">
                        Call Us Anytime
                      </div>
                      <div className="text-xl font-bold">+91 62395 07877</div>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:drpreetisbrighteyecare@gmail.com"
                  className="block bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-cyan-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600">
                        Email Us
                      </div>
                      <div className="text-base font-bold text-gray-900 break-all">
                        drpreetisbrighteyecare@gmail.com
                      </div>
                    </div>
                  </div>
                </a>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 mb-1">
                        Visit Us
                      </div>
                      <div className="text-sm text-gray-900 leading-relaxed">
                        Durga Market, Chhoti Nehar to Sarna Road
                        <br />
                        Near Flyover, Pathankot, Punjab 145025
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-orange-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 mb-1">
                        Working Hours
                      </div>
                      <div className="text-sm text-gray-900 leading-relaxed">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  disabled={submitting}
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {successMessage && (
                <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 text-green-700 rounded-xl text-center font-semibold">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
