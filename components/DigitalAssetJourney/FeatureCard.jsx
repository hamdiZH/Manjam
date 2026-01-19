"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureCard({ title, imageSrc, imageAlt }) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        boxShadow: "0 30px 60px -15px rgba(70,184,134,0.25)"
      }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      className="group flex flex-col w-full rounded-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(106.81deg, rgba(240, 255, 249, 0.3) 10.74%, rgba(70, 184, 134, 0.15) 98.1%)",
        border: "1px solid rgba(229, 231, 235, 0.8)",
        boxShadow: "0 4px 20px rgba(16, 24, 40, 0.08)",
      }}
    >
      {/* Title */}
      <div className="p-5 sm:p-6">
        <motion.h3
          whileHover={{ color: "#46B886" }}
          transition={{ duration: 0.2 }}
          className="text-[#111827] text-lg sm:text-xl font-semibold leading-tight"
        >
          {title}
        </motion.h3>
      </div>

      {/* Image - Fixed aspect ratio container */}
      <div className="relative w-full aspect-4/2 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-center"
          />
        </motion.div>
        {/* Subtle gradient overlay for depth */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 30%)',
          }}
        />
        {/* Hover glow overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(70,184,134,0.15) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}
