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
    id: "principles",
    title: "Principles First",
    description:
      "clarity, transparency, and alignment with Sharia foundations, forming the basis of every evaluation.",
    icon: <StandardsIcon />,
  },
  {
    id: "analysis",
    title: "Structured Analysis",
    description:
      "A disciplined method that considers technology, utility, governance, and long-term relevance across digital assets.",
    icon: <EvaluationIcon />,
  },
  {
    id: "future",
    title: "Future Ready",
    description:
      "A forward-looking outlook shaped by emerging global regulations and evolving digital-asset trends.",
    icon: <MarketIcon />,
  },
  {
    id: "innovation",
    title: "Responsible Innovation",
    description:
      "Balancing modern digital-asset innovation with a focus on trust, structure, and sustainable long-term thinking.",
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
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto"
      >
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Header */}
          <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 lg:sticky lg:top-32">
            {/* Kicker */}
            <motion.p
              variants={itemVariants}
              className="text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-4"
            >
              THE MANJAM STANDARD
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-[#111827] text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-5xl font-bold leading-[1.1] mb-5"
            >
              Our View on<br />Digital Assets
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-base sm:text-lg leading-relaxed mb-8"
            >
              A structured perspective that guides how we understand and navigate today's digital-asset landscape
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="https://platform.manjamcapital.com/register/account-type"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#46B886] text-white font-medium text-sm"
              style={{
                boxShadow: "0 4px 20px -5px rgba(70, 184, 134, 0.4)",
              }}
            >
              Start Securely
              <motion.span
                className="inline-flex"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon />
              </motion.span>
            </motion.a>
          </div>

          {/* Right Column - 2x2 Card Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
