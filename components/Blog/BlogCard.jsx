"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Arrow Icon
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12L12 4M12 4H6M12 4V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BlogCard({ image, category, title, description, author, date, readTime }) {
  return (
    <Link href="/blogs" className="group block">
      <motion.article
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px -15px rgba(0,0,0,0.15)"
        }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className="flex flex-col h-full bg-white rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(229, 231, 235, 0.8)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Image */}
        <div className="relative aspect-16/10 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Gradient overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#111827] text-xs font-medium shadow-sm"
            >
              {category}
            </motion.span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          {/* Title */}
          <motion.h3
            whileHover={{ color: "#46B886" }}
            transition={{ duration: 0.2 }}
            className="text-[#111827] text-lg sm:text-xl font-semibold leading-tight mb-3 line-clamp-2 min-h-[56px]"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-2 mb-6 min-h-[40px]">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#F3F4F6] mt-auto">
            {/* Author Info */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-[#F3F4F6]"
              >
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Author Details */}
              <div className="flex flex-col">
                <span className="text-[#111827] text-sm font-medium">{author.name}</span>
                <span className="text-[#9CA3AF] text-xs">
                  {date} • {readTime}
                </span>
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              whileHover={{
                scale: 1.15,
                backgroundColor: "#46B886",
                color: "#FFFFFF"
              }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280]"
            >
              <motion.span
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowIcon />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
