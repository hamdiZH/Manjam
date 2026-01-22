"use client";

import { motion } from "framer-motion";

export default function TimelineCard({ year, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      className="group relative flex flex-col w-full h-full"
    >
      {/* Year Badge with Dot */}
      <div className="flex items-center gap-3 mb-6">
        {/* Timeline Dot with pulse animation on hover */}
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            className="w-4 h-4 rounded-full bg-[#46B886] flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-white"
            />
          </motion.div>
          {/* Ping animation on hover */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 2, opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-4 h-4 rounded-full bg-[#46B886]"
          />
        </div>

        {/* Year */}
        <motion.span
          whileHover={{ letterSpacing: "0.1em" }}
          transition={{ duration: 0.3 }}
          className="text-[#46B886] text-sm font-semibold tracking-wider"
        >
          {year}
        </motion.span>
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{
          boxShadow: "0 25px 50px -15px rgba(0,0,0,0.15)",
          borderColor: "rgba(70, 184, 134, 0.3)",
        }}
        transition={{ duration: 0.3 }}
        className="flex-1 p-6 sm:p-8 rounded-xl min-h-[180px] flex flex-col"
        style={{
          background: 'rgba(249, 250, 251, 0.9)',
          border: '1px solid rgba(229, 231, 235, 0.8)',
        }}
      >
        {/* Title */}
        <motion.h3
          whileHover={{ color: "#46B886" }}
          transition={{ duration: 0.2 }}
          className="text-[#111827] md:text-md xl:text-lg sm:text-xl font-semibold mb-3 leading-tight"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed flex-1">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}
