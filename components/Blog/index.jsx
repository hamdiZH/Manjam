"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Link from "next/link";

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

const blogPosts = [
  {
    id: 1,
    image: "/blog1.png",
    category: "Market Analysis",
    title: "Understanding Digital Asset Fundamentals",
    description:
      "A structured approach to evaluating blockchain projects and digital assets with clarity and discipline.",
    author: {
      name: "Manjam Team",
      avatar: "/Avatar Base.png",
    },
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: "/blog2.png",
    category: "Insights",
    title: "The Role of Governance in Digital Assets",
    description:
      "Why institutional-grade governance matters in building trust and long-term value in the digital asset space.",
    author: {
      name: "Manjam Team",
      avatar: "/Avatar Base.png",
    },
    date: "Jan 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    image: "/blog3.png",
    category: "Education",
    title: "Sharia-Compliant Digital Assets Explained",
    description:
      "How Islamic finance principles apply to modern digital assets and what qualified investors should know.",
    author: {
      name: "Manjam Team",
      avatar: "/Avatar Base.png",
    },
    date: "Jan 5, 2026",
    readTime: "6 min read",
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
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
    y: -2,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
  tap: { scale: 0.98, y: 0 },
};

export default function Blog() {
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12 md:mb-16">
          <motion.div variants={headerVariants} className="lg:max-w-2xl">
            {/* Kicker */}
            <p className="text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-4">
              INSIGHTS
            </p>

            {/* Heading */}
            <h2 className="text-[#111827] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              Latest from Manjam
            </h2>

            {/* Description */}
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              Practical updates, market perspectives, and Sharia-aligned analysis — built for professionals.
            </p>
          </motion.div>

          {/* View All Link - Desktop */}
          <motion.div variants={headerVariants}>
            <Link
              href="/blogs"
              className="hidden lg:inline-flex items-center gap-2 text-[#111827] font-medium text-sm group"
            >
              <motion.span
                whileHover={{ color: "#46B886" }}
                transition={{ duration: 0.2 }}
              >
                View all articles
              </motion.span>
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <BlogCard
                image={post.image}
                category={post.category}
                title={post.title}
                description={post.description}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Link - Mobile */}
        <motion.div
          variants={headerVariants}
          className="flex justify-center mt-10 lg:hidden"
        >
          <motion.a
            href="/blogs"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111827] text-white font-medium text-sm"
          >
            View all articles
            <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <ArrowRightIcon />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
