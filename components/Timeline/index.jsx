"use client";

import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

const timelineData = [
  {
    id: "2020",
    year: "2020",
    title: "Founded in 2020",
    description:
      "Manjam Capital is shaping the region's first structured, Sharia-Compliant digital-asset ecosystem.",
  },
  {
    id: "2021",
    year: "2021",
    title: "Sharia board formed",
    description:
      "Established an independent Sharia board to ensure compliance and ethical alignment across all operations.",
  },
  {
    id: "2022",
    year: "2022",
    title: "Swiss-compliant framework approved",
    description:
      "Secured regulatory approval within Switzerland's trusted financial framework for qualified participation.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4 + i * 0.2,
    },
  }),
};

export default function Timeline() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Kicker */}
          <motion.p
            variants={headerVariants}
            className="text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-4"
          >
            ROADMAP
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={headerVariants}
            className="max-w-4xl mx-auto text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Building the future of digital assets
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={headerVariants}
            className="max-w-2xl mx-auto text-[#6B7280] text-base sm:text-lg leading-relaxed"
          >
            Founded in 2020, Manjam Capital is shaping the region&apos;s first structured, Sharia-Compliant digital-asset ecosystem.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Line - Desktop Only (Animated) */}
          <motion.div
            variants={lineVariants}
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#E5E7EB] to-transparent origin-left"
          />

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <TimelineCard
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  isFirst={index === 0}
                  isLast={index === timelineData.length - 1}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
