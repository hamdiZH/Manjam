"use client";

import { motion } from "framer-motion";
import AcademyCard from "./AcademyCard";

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
const CurriculumIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8H26M6 16H26M6 24H18" stroke="#46B886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="22" y="20" width="6" height="6" rx="1" stroke="#46B886" strokeWidth="2" />
  </svg>
);

const MajlisIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="12" r="4" stroke="#46B886" strokeWidth="2" />
    <circle cx="8" cy="20" r="3" stroke="#46B886" strokeWidth="2" />
    <circle cx="24" cy="20" r="3" stroke="#46B886" strokeWidth="2" />
    <path d="M16 16V20M8 23V26M24 23V26" stroke="#46B886" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WorkshopIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="16" rx="2" stroke="#46B886" strokeWidth="2" />
    <path d="M4 12H28" stroke="#46B886" strokeWidth="2" />
    <path d="M12 26H20" stroke="#46B886" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 22V26" stroke="#46B886" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const academyCards = [
  {
    id: "curriculum",
    title: "Structured Curriculum",
    description:
      "Clear learning paths in blockchain and digital assets, built for practical understanding.",
    icon: <CurriculumIcon />,
  },
  {
    id: "majlis",
    title: "Majlis Manjam",
    description:
      "Live interactive sessions that turn complex topics into clear, actionable takeaways.",
    icon: <MajlisIcon />,
  },
  {
    id: "workshops",
    title: "Hands On Workshops",
    description:
      "Focused training on high demand topics with applied practice and real examples.",
    icon: <WorkshopIcon />,
  },
];

// Placeholder collaborative partners
const partners = [
  { id: 1, name: "Partner" },
  { id: 2, name: "Partner" },
  { id: 3, name: "Partner" },
  { id: 4, name: "Partner" },
  { id: 5, name: "Partner" },
  { id: 6, name: "Partner" },
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
  hover: {
    scale: 1.05,
    y: -3,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
  tap: { scale: 0.98, y: 0 },
};

export default function ManjamAcademy() {
  return (
    <section id="academy" className="w-full py-8 sm:py-10 md:py-12 lg:pt-16 lg:pb-0">
      {/* Main Dark Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-2 sm:mx-4 md:mx-6 lg:mx-4 rounded-lg sm:rounded-xl overflow-hidden backdrop-blur-md"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #111827 0%, #153830 100%)",
          border: "1px solid",
          borderImageSource:
            "linear-gradient(106.89deg, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0.00431373) 98.8%)",
          boxShadow: "0px 4px 4px 0px rgba(7, 19, 16, 0.25)",
        }}
      >
        {/* Animated Light Effect - Top Left */}
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
          className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-28"
        >
          {/* Kicker Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
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
              <span className="text-[#46B886] text-xs font-medium tracking-wider uppercase">THE ACADEMY</span>
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight text-center mb-5 sm:mb-6 md:mb-8 max-w-4xl mx-auto"
          >
            Practical education for digital assets
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[rgba(255,255,255,0.7)] text-sm sm:text-base md:text-lg text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            Structured learning that builds clarity in blockchain and digital assets.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16 max-w-5xl mx-auto">
            {academyCards.map((card, index) => (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <AcademyCard
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
            className="flex justify-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.a
              href="/academy"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#46B886] text-white font-medium text-sm rounded-lg"
              style={{
                boxShadow: "0 4px 20px -5px rgba(70, 184, 134, 0.4)",
              }}
            >
              Explore the Academy
              <motion.span
                className="inline-flex"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Partners Marquee Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-xl py-6 sm:py-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Gradient Fades */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(17, 24, 39, 0.9), transparent)' }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(17, 24, 39, 0.9), transparent)' }}
            />

            {/* Animated Marquee */}
            <div className="flex animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`partner-${index}`}
                  className="flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-12 shrink-0"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium text-sm sm:text-base text-white/70 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
