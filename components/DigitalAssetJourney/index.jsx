"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

// Brand Arrow Icon
const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const featureCards = [
  {
    id: "onboarding",
    title: "Integrated Onboarding",
    imageSrc: "/digital-asset-1.png",
    imageAlt: "Integrated Onboarding",
  },
  {
    id: "operations",
    title: "Disciplined Operations",
    imageSrc: "/digital-asset-2.png",
    imageAlt: "Disciplined Operations",
  },
  {
    id: "oversight",
    title: "Ongoing Oversight",
    imageSrc: "/digital-asset-3.png",
    imageAlt: "Ongoing Oversight",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.15,
    },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    y: -3,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
  tap: { scale: 0.98, y: 0 },
};

export default function DigitalAssetJourney() {
  return (
    <section id="platform" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-lg overflow-hidden mb-10 sm:mb-12 md:mb-16 p-6 sm:p-8 md:p-10 lg:p-12"
        style={{
          background:
            "linear-gradient(106.81deg, rgba(240, 255, 249, 0.2) 10.74%, rgba(70, 184, 134, 0.2) 98.1%)",
          border: "1px solid rgba(229, 231, 235, 1)",
          boxShadow: "-10px 12px 24px 0px rgba(16, 24, 40, 0.12)",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Kicker */}
          <motion.p
            variants={itemVariants}
            className="text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-3"
          >
            THE PLATFORM
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-[#111827] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl mx-auto"
          >
            One secure platform for end-to-end access
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto mb-8"
          >
            Onboarding, eligibility checks, secure access, and reporting in one controlled workflow.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/platform"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#111827] text-white font-medium text-sm"
            style={{
              boxShadow: "0 4px 20px -5px rgba(17, 24, 39, 0.4)",
            }}
          >
            Explore the platform
            <motion.span
              className="inline-flex"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[1920px] mx-auto">
        {featureCards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FeatureCard
              title={card.title}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
