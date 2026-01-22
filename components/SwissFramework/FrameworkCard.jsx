"use client";

import { motion } from "framer-motion";

// Arrow Icon for Learn More link
const ArrowCircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 10H12M12 10L10 8M12 10L10 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FrameworkCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        backgroundColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 25px 50px -15px rgba(70,184,134,0.35)"
      }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      className="group flex flex-col h-full p-5 sm:p-6 md:p-7 rounded-2xl"
      style={{
        background: 'rgba(17, 24, 39, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Icon */}
      <motion.div
        className="mb-6"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed mb-6 flex-1">
        {description}
      </p>
    </motion.div>
  );
}
