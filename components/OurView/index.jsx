"use client";

import { motion } from "framer-motion";
import ViewCard from "./ViewCard";

// Arrow Right Icon (Brand-Adopted Arrow)
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

// Placeholder Icons for each card
const StandardsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EvaluationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17H15M9 13H15M9 9H10M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MarketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 15L8 10L12 14L21 5M21 5H15M21 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClarityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const viewCards = [
  {
    id: "standards",
    title: "Standards and Alignment",
    description:
      "Clear criteria that shape how we filter opportunities and stay disciplined.",
    icon: <StandardsIcon />,
  },
  {
    id: "evaluation",
    title: "Structured Evaluation",
    description:
      "A consistent framework that weighs governance, utility, risk, and long-term relevance.",
    icon: <EvaluationIcon />,
  },
  {
    id: "market",
    title: "Market and Regulation Read",
    description:
      "Context-driven thinking that tracks policy shifts and structural market signals.",
    icon: <MarketIcon />,
  },
  {
    id: "clarity",
    title: "Clarity and Education",
    description:
      "Professional insights explained simply, built to turn complexity into confident understanding.",
    icon: <ClarityIcon />,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
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

export default function OurView() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-full mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-16">
          {/* Kicker */}
          <motion.p
            variants={itemVariants}
            className="text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-3"
          >
            THE MANJAM STANDARD
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-[#111827] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8"
          >
            Assets, Redefined by Discipline.
          </motion.h2>

          {/* CTA Button */}
          <motion.a
            href="https://platform.manjamcapital.com/register/account-type"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#46B886] text-white font-medium text-sm"
            style={{
              boxShadow: "0 4px 20px -5px rgba(70, 184, 134, 0.4)",
            }}
          >
            Enter the Ecosystem
            <motion.span
              className="inline-flex"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon />
            </motion.span>
          </motion.a>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {viewCards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ViewCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
