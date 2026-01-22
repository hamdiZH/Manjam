"use client";

import { useState, useRef } from "react";
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
  {
    id: "2023",
    year: "2023",
    title: "Platform development",
    description:
      "Launched development of the integrated digital platform for seamless onboarding and portfolio management.",
  },
  {
    id: "2024",
    year: "2024",
    title: "Academy launch",
    description:
      "Introduced Manjam Academy to provide structured education in blockchain and digital assets.",
  },
  {
    id: "2025",
    year: "2025",
    title: "Regional expansion",
    description:
      "Expanded operations across GCC markets with strategic partnerships and institutional collaborations.",
  },
  {
    id: "2026",
    year: "2026",
    title: "Full ecosystem integration",
    description:
      "Complete integration of fund, platform, and academy into a unified digital-asset ecosystem.",
  },
];

// Arrow Icons
const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
      delay: 0.2 + i * 0.1,
    },
  }),
};

export default function Timeline() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('[data-timeline-card]');
      if (cards.length === 0) return;

      // Get the width of one card plus gap
      const cardWidth = cards[0].offsetWidth;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 350);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-20 2xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1600px] mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 xl:mb-12 2xl:mb-20">
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
            className="max-w-4xl mx-auto text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-6"
          >
            Building the future of digital assets
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={headerVariants}
            className="max-w-2xl mx-auto text-[#6B7280] text-base sm:text-lg xl:text-base 2xl:text-lg leading-relaxed"
          >
            Founded in 2020, Manjam Capital is shaping the region&apos;s first structured, Sharia-Compliant digital-asset ecosystem.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-3 mb-6">
            <motion.button
              onClick={() => scroll('left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${canScrollLeft
                ? 'bg-[#14352D] text-white shadow-lg'
                : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
                }`}
              disabled={!canScrollLeft}
              style={{
                boxShadow: canScrollLeft ? '0 4px 20px rgba(20, 53, 45, 0.3)' : 'none',
              }}
            >
              <ArrowLeftIcon />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${canScrollRight
                ? 'bg-[#14352D] text-white shadow-lg'
                : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
                }`}
              disabled={!canScrollRight}
              style={{
                boxShadow: canScrollRight ? '0 4px 20px rgba(20, 53, 45, 0.3)' : 'none',
              }}
            >
              <ArrowRightIcon />
            </motion.button>
          </div>

          {/* Horizontal Line (Animated) */}
          <motion.div
            variants={lineVariants}
            className="hidden lg:block absolute top-[calc(3rem+48px+24px)] left-0 right-0 h-px bg-linear-to-r from-transparent via-[#E5E7EB] to-transparent origin-left"
          />

          {/* Timeline Cards - Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex items-stretch gap-6 sm:gap-8 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory pt-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                data-timeline-card
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="shrink-0 w-[300px] sm:w-[340px] lg:w-[calc(33.333%-16px)] h-full snap-start"
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
