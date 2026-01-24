"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FrameworkCard from "./FrameworkCard";

// Platform URL
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";

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

// Placeholder Icons
const SwissIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" stroke="#46B886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16L28 10" stroke="#46B886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16V28" stroke="#46B886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16L4 10" stroke="#46B886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShariahIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4V28M4 16H28" stroke="#46B886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="10" stroke="#46B886" strokeWidth="2" />
  </svg>
);

const QualifiedIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="20" height="16" rx="2" stroke="#46B886" strokeWidth="2" />
    <path d="M6 14H26" stroke="#46B886" strokeWidth="2" />
    <path d="M10 20H14" stroke="#46B886" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const frameworkCards = [
  {
    id: "swiss",
    title: "Swiss-Anchored Structure",
    description:
      "World-class governance shaped by Switzerland's best-in-class institutions.",
    icon: <SwissIcon />,
  },
  {
    id: "shariah",
    title: "Sharia-Aligned Framework",
    description:
      "Designed to reflect Islamic finance principles across structural and operational elements.",
    icon: <ShariahIcon />,
  },
  {
    id: "qualified",
    title: "Qualified Participation Environment",
    description:
      "Developed within the L-QIF model, tailored for qualified participation in digital-asset strategies.",
    icon: <QualifiedIcon />,
  },
];

// Placeholder partner logos
const partners = [
  { id: 1, name: "Designership" },
  { id: 2, name: "Designership" },
  { id: 3, name: "Designership" },
  { id: 4, name: "Designership" },
  { id: 5, name: "Designership" },
  { id: 6, name: "Designership" },
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

export default function SwissFramework() {
  return (
    <section id="fund" className="w-full py-8 sm:py-10 md:py-12 lg:pt-16 xl:pt-10 2xl:pt-16 lg:pb-0">
      {/* Main Dark Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-2 sm:mx-4 md:mx-6 lg:mx-4 xl:mx-6 2xl:mx-4 rounded-lg sm:rounded-xl overflow-hidden backdrop-blur-md"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #111827 0%, #153830 100%)",
          border: "1px solid",
          borderImageSource:
            "linear-gradient(106.89deg, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0.00431373) 98.8%)",
          boxShadow: "0px 4px 4px 0px rgba(7, 19, 16, 0.25)",
        }}
      >
        {/* Light Effect - Top Left */}
        <motion.div
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none hidden lg:block"
          style={{
            width: "700px",
            height: "700px",
            top: "-300px",
            left: "-300px",
            background:
              "radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.5) 0%, rgba(21, 56, 47, 0) 77.4%)",
            transform: "rotate(-134.41deg)",
            borderRadius: "24px",
          }}
        />

        {/* Squares Pattern Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/squares.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-12 xl:pt-16 2xl:px-20 2xl:pt-18 xl:pb-4"
        >
          {/* Kicker Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6 xl:mb-4 2xl:mb-6">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(70,184,134,0.15)] border border-[rgba(70,184,134,0.3)]"
            >
              <motion.svg
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 3V5.5M3 4H5M4.5 11V13.5M3.5 12.25H5.5M8.5 3L10 7.5L14 9L10 10.5L8.5 15L7 10.5L3 9L7 7.5L8.5 3Z" stroke="#46B886" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
              <span className="text-[#46B886] text-xs font-medium tracking-wider uppercase">THE FUND</span>
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-[52px] font-semibold leading-tight text-center mb-5 sm:mb-6 md:mb-8 xl:mb-5 2xl:mb-8 max-w-4xl mx-auto"
            style={{
              background: 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, #6B7280 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            A Structured Swiss Framework <br /> for Qualified Participation.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[rgba(255,255,255,0.7)] text-sm sm:text-base md:text-lg xl:text-base 2xl:text-lg text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 xl:mb-10 2xl:mb-16"
          >
            Our flagship foundation, <br /> built to evolve within one of the world&apos;s most trusted financial jurisdictions.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-4 2xl:gap-6 mb-10 sm:mb-12 md:mb-16 xl:mb-8 2xl:mb-16 max-w-7xl mx-auto">
            {frameworkCards.map((card, index) => (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FrameworkCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12 sm:mb-16 md:mb-20 xl:mb-10 2xl:mb-20"
          >
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
              Review Fund Specifications
              <motion.span
                className="inline-flex"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Partners Marquee Bar */}
          <div id="partners" className="scroll-mt-[50vh]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-xl py-6 sm:py-8 xl:py-4 2xl:py-8"
            style={{
              // background: 'rgba(255, 255, 255, 0.05)',
              // backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              // border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Gradient Fades */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
            />

            {/* Animated Marquee */}
            <div className="flex animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`partner-1-${index}`}
                  className="flex items-center justify-center px-10 sm:px-16 xl:px-12 2xl:px-16 shrink-0"
                >
                  <Image
                    src="/partners.svg"
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="h-12 sm:h-16 lg:h-20 xl:h-14 2xl:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
