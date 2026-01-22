"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Platform URL
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";

// Arrow Icon
const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-hover"
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const dashboardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.6,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.02,
    y: -2,
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)',
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
  },
};

const glowVariants = {
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="w-full py-2 sm:py-3 md:py-4 lg:py-3 xl:py-2 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Hero Container with Dark Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1C4A3F 100%)",
        }}
      >
        {/* Squares Pattern Overlay */}
        <Image
          src="/squares.svg"
          alt="Squares Pattern"
          fill
          className="absolute inset-0 opacity-30 z-0 object-cover"
        />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-12 pb-6 md:pb-8 lg:pb-6"
        >
          {/* Main Heading - Horizontal White to Gray Gradient */}
          <motion.h1 variants={itemVariants} className="mb-3 sm:mb-4 md:mb-5 lg:mb-4">
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight"
              style={{
                background: 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, #6B7280 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Professional standards
            </span>
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight"
              style={{
                background: 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, #6B7280 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              for digital assets
            </span>
          </motion.h1>

          {/* Subheadline - Glassy */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-normal mb-4 sm:mb-6 lg:mb-5 tracking-wide"
          >
            World&apos;s #1 Swiss Shariah-compliant digital asset ecosystem 🇨🇭
          </motion.p>

          {/* Primary CTA Button - iOS Liquid Glass Style */}
          <motion.a
            href={PLATFORM_REGISTER_URL}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-6 py-2.5 sm:py-3 lg:py-2.5 rounded-2xl text-white font-medium text-sm sm:text-base cursor-pointer mb-3 sm:mb-4 lg:mb-3"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.1)',
            }}
          >
            Become a client
            <motion.span
              className="inline-flex"
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon />
            </motion.span>
          </motion.a>

          {/* Disclaimer Line */}
          <motion.p
            variants={itemVariants}
            className="text-white/50 text-xs sm:text-sm font-normal"
          >
            Exclusively structured for qualified investors.
          </motion.p>
        </motion.div>

        {/* Dashboard Image with float animation */}
        <motion.div
          variants={dashboardVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-6 xl:px-8 pb-0"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[850px] xl:max-w-[900px] 2xl:max-w-[1100px]"
          >
            <Image
              src="/dashboard.png"
              alt="Manjam Dashboard"
              width={1200}
              height={750}
              className="object-cover rounded-t-xl w-full h-auto"
            />
            {/* Subtle shine overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-t-xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
