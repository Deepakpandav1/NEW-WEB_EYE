import SiteImage from "./SiteImage";
// src/components/ServiceModal.jsx
import React from "react";
import { motion } from "framer-motion";

const ServiceModal = ({ service, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg- bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white rounded-2xl p-6 w-full max-w-3xl shadow-lg overflow-y-auto max-h-[90vh]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600 transition"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-6 w-full items-center">
          <SiteImage
            src={service.image}
            alt={service.title}
            className="w-48 h-48 object-contain mx-auto md:mx-0"
          />
          <div>
            <h2 className="text-4xl font-bold text-teal-600">
              {service.title}
            </h2>
            <p className="text-gray-700 mt-2 text-lg   leading-relaxed">
              {service.description}
            </p>

            {service.features?.length > 0 && (
              <ul className="list-disc pl-4 mt-4 text-sm text-gray-600 space-y-1">
                {service.features.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceModal;
