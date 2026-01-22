"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Categories
const categories = [
  { name: "All", active: true },
  { name: "Bitcoin", active: false },
  { name: "Blockchain", active: false },
  { name: "DeFi", active: false },
  { name: "NFTs", active: false },
  { name: "Regulation", active: false },
];

// Featured Blog Card
const FeaturedBlogCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    whileHover={{ y: -8 }}
    className="group relative rounded-3xl overflow-hidden h-full"
    style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #14352D 100%)',
      minHeight: '500px',
    }}
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <Image
        src="/blog1.png"
        alt="Featured blog"
        fill
        className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#46B886]/20 border border-[#46B886]/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#46B886] animate-pulse" />
          <span className="text-[#46B886] text-xs font-semibold uppercase tracking-wider">Featured</span>
        </span>
      </motion.div>

      {/* Title */}
      <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 group-hover:text-[#46B886] transition-colors">
        Flying fish swiftly flew by the space station — A deep dive into crypto markets
      </h2>

      {/* Description */}
      <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
        Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu.
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#46B886]/50">
            <Image src="/Avatar Base.png" alt="Loki Bright" width={48} height={48} className="object-cover" />
          </div>
          <div>
            <p className="text-white font-semibold">Loki Bright</p>
            <p className="text-white/50 text-sm">Oct 19, 2021 • 5 min read</p>
          </div>
        </div>

        {/* Read More Arrow */}
        <motion.div
          whileHover={{ x: 5 }}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#46B886] transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

// Small Blog Card
const SmallBlogCard = ({ image = "/blog1.png", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ x: 5 }}
    className="group flex gap-5 items-start p-4 rounded-2xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
  >
    {/* Thumbnail */}
    <div className="relative w-32 sm:w-40 h-24 sm:h-28 shrink-0 rounded-xl overflow-hidden">
      <Image src={image} alt="Blog thumbnail" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2 flex-1">
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-[#ECFDF5] text-[#14352D] rounded-md text-[10px] font-semibold uppercase">Bitcoin</span>
        <span className="text-[#94A3B8] text-xs">5 min read</span>
      </div>
      <h3 className="text-[#0F172A] font-bold text-base sm:text-lg leading-snug group-hover:text-[#14352D] transition-colors line-clamp-2">
        Flying fish swiftly flew by the space station.
      </h3>
      <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2 hidden sm:block">
        Quis neque, eu et ipsum amet, vel et.
      </p>
      <p className="text-[#94A3B8] text-xs mt-auto">Oct 19, 2021</p>
    </div>
  </motion.div>
);

// Grid Blog Card
const GridBlogCard = ({ image = "/blog1.png", index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group rounded-2xl overflow-hidden bg-white cursor-pointer"
    style={{
      boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Image */}
    <div className="relative w-full aspect-4/3 overflow-hidden">
      <Image src={image} alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#14352D] rounded-full text-xs font-semibold">
          Blockchain
        </span>
      </div>

      {/* Read Time */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs">
          5 min read
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-[#0F172A] font-bold text-lg leading-snug mb-3 group-hover:text-[#14352D] transition-colors line-clamp-2">
        How the flying fish swiftly flew by the space station.
      </h3>
      <p className="text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-2">
        Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra.
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <Image src="/Avatar Base.png" alt="Loki Bright" width={36} height={36} className="object-cover" />
          </div>
          <div>
            <p className="text-[#0F172A] font-medium text-sm">Loki Bright</p>
            <p className="text-[#94A3B8] text-xs">Oct 19, 2021</p>
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileHover={{ x: 5 }}
          className="w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] group-hover:bg-[#14352D] group-hover:text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative w-full pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(70, 184, 134, 0.08) 0%, transparent 60%)',
                filter: 'blur(60px)',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[#14352D] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#46B886]" />
              Insights & News
              <span className="w-8 h-[2px] bg-[#46B886]" />
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mb-4">
              Latest from Manjam
            </h1>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Stay informed with expert insights on digital assets, blockchain technology, and market trends.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 flex-wrap mb-12"
          >
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  cat.active
                    ? 'bg-[#14352D] text-white'
                    : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Featured Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Featured Post */}
            <FeaturedBlogCard />

            {/* Right - Small Posts Stack */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0F172A] font-semibold text-lg mb-4 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#46B886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Trending Now
              </h3>
              <SmallBlogCard image="/blog1.png" delay={0.1} />
              <SmallBlogCard image="/blog2.png" delay={0.2} />
              <SmallBlogCard image="/blog3.png" delay={0.3} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <h2 className="text-[#0F172A] font-bold text-2xl sm:text-3xl mb-2">All Articles</h2>
              <p className="text-[#64748B] text-sm">Explore our complete collection of insights</p>
            </div>
            
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <GridBlogCard image="/blog1.png" index={0} />
            <GridBlogCard image="/blog2.png" index={1} />
            <GridBlogCard image="/blog3.png" index={2} />
            <GridBlogCard image="/blog1.png" index={3} />
            <GridBlogCard image="/blog2.png" index={4} />
            <GridBlogCard image="/blog3.png" index={5} />
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#14352D] text-white font-semibold hover:bg-[#1C4A3F] transition-colors">
              Load More Articles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}
