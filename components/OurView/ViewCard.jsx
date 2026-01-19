"use client";

import { motion } from "framer-motion";

export default function ViewCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: "0 25px 50px -15px rgba(70,184,134,0.25)"
      }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      className="group flex flex-col w-full h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] p-5 sm:p-6 gap-4 rounded-xl"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid rgba(229, 231, 235, 0.8)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 8,
          backgroundColor: "#46B886",
          color: "#FFFFFF"
        }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center text-[#46B886]"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-[#111827] text-lg sm:text-xl font-semibold leading-tight"
        whileHover={{ color: "#46B886" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Description / Subtitle */}
      <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
