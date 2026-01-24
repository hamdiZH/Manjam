"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const sections = [
  {
    id: "regulated",
    label: "Regulated Infrastructure",
    description: "Built on Swiss standards, operated through a GCC hub; a regulatory-first framework with clear rules and oversight at scale.",
  },
  {
    id: "shariah",
    label: "Shariah Alignment",
    description: "Shariah-aligned by design; bringing transparency, ethical alignment, and disciplined practices to digital assets in a market that rarely prioritizes it.",
  },
  {
    id: "integrity",
    label: "Institutional Integrity",
    description: "Layered security protocols and operational controls built on proven institutional standards to ensure maximum resilience and risk mitigation.",
  },
  {
    id: "hybrid",
    label: "Hybrid Operating Model",
    description: "A structured operating model that combines institutional discipline with modern digital-asset efficiency, turning standards into consistent execution.",
  },
];

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const contentVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

const pulseVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function WhyManjam() {
  const [activeSection, setActiveSection] = useState("regulated");
  const [isMobile, setIsMobile] = useState(false);
  const [prevSection, setPrevSection] = useState("regulated");
  const sectionRef = useRef(null);

  // Scroll progress for the line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll-based navigation (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = -sectionTop / (sectionHeight - windowHeight);

      let newSection = "regulated";
      if (scrollProgress <= 0 || scrollProgress < 0.25) {
        newSection = "regulated";
      } else if (scrollProgress < 0.5) {
        newSection = "shariah";
      } else if (scrollProgress < 0.75) {
        newSection = "integrity";
      } else {
        newSection = "hybrid";
      }

      if (newSection !== activeSection) {
        setPrevSection(activeSection);
        setActiveSection(newSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, activeSection]);

  const activeData = sections.find((s) => s.id === activeSection);
  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  console.log("sections.length: ", sections.length);

  return (
    <section
      id="why-manjam"
      ref={sectionRef}
      className="relative w-full"
      style={{ height: isMobile ? 'auto' : `${100 * sections.length}vh` }}
    >
      <div
        className={`${isMobile ? 'relative py-12 sm:py-16' : 'sticky top-0 min-h-screen flex items-start py-16 lg:py-20 xl:py-10 2xl:py-20'} px-4 sm:px-6 md:px-8 lg:px-10`}
      >
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-10 lg:mb-16 xl:mb-8 2xl:mb-16"
          >

            {/* Kicker */}
            <motion.div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#46B886]" />
              <span className="text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase">WHY MANJAM</span>
              <span className="w-8 h-[2px] bg-[#46B886]" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={headerVariants}
              className="text-[#111827] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl 2xl:text-7xl font-bold leading-tight mb-4 xl:mb-2 2xl:mb-4"
            >
              Built to last
            </motion.h2>
          </motion.div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-8 2xl:gap-16">
            {/* Left - Navigation */}
            <div className="w-full lg:w-[280px] xl:w-[240px] 2xl:w-[320px] shrink-0">
              {/* Mobile: Horizontal scroll */}
              <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-4 px-4">
                {sections.map((section, index) => {
                  const isActive = section.id === activeSection;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => {
                        setPrevSection(activeSection);
                        setActiveSection(section.id);
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
                        ? "bg-[#111827] text-white"
                        : "bg-white text-[#6B7280] hover:bg-[#F3F4F6] border border-[#E5E7EB]"
                        }`}
                    >
                      {section.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Desktop: Vertical line stepper navigation */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="hidden lg:flex"
              >
                {/* Vertical Line */}
                <div className="relative mr-4 shrink-0">
                  {/* Background line */}
                  <div className="absolute left-[9px] top-3 bottom-3 w-px bg-[#E5E7EB]" />
                  {/* Animated progress line */}
                  <motion.div
                    className="absolute left-[9px] top-3 w-px bg-[#14352D]"
                    style={{
                      height: `${((activeIndex + 1) / sections.length) * 100}%`,
                    }}
                    initial={{ height: "0%" }}
                    animate={{ height: `${((activeIndex + 1) / sections.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>

                {/* Labels only */}
                <div className="flex flex-col">
                  {sections.map((section, index) => {
                    const isActive = section.id === activeSection;
                    const isPast = index < activeIndex;
                    return (
                      <motion.button
                        key={section.id}
                        variants={navItemVariants}
                        onClick={() => {
                          setPrevSection(activeSection);
                          setActiveSection(section.id);
                        }}
                        className="text-left py-4 xl:py-2.5 2xl:py-4 cursor-pointer flex items-center gap-3 group -ml-4"
                      >
                        {/* Bullet indicator */}
                        <div className="relative shrink-0 w-5 flex justify-center items-center">
                          {/* Background circle for active state */}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="absolute w-5 h-5 rounded-full bg-[#E5E7EB]"
                            />
                          )}
                          {/* Small dot */}
                          <motion.div
                            animate={{
                              backgroundColor: isActive || isPast ? "#14352D" : "#D1D5DB",
                            }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10 w-1.5 h-1.5 rounded-full"
                          />
                        </div>

                        {/* Label */}
                        <motion.span
                          animate={{
                            color: isActive ? "#111827" : isPast ? "#6B7280" : "#9CA3AF",
                            fontWeight: isActive ? 600 : 400,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-lg xl:text-sm 2xl:text-lg"
                        >
                          {section.label}
                        </motion.span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right - Content Panel (Liquid Glass) */}
            <div className="flex-1">
              <motion.div
                layout
                className="rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-5 2xl:p-10 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {/* Section Icon/Header */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 mb-6 xl:mb-4 2xl:mb-6"
                    >
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#46B886" strokeWidth="1.5" />
                          <path d="M3 9H21" stroke="#46B886" strokeWidth="1.5" />
                          <path d="M9 9V20" stroke="#46B886" strokeWidth="1.5" />
                          <path d="M6 6.5H7" stroke="#46B886" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </motion.div>
                      <h3 className="text-[#111827] text-xl sm:text-2xl xl:text-lg 2xl:text-2xl font-semibold">
                        {activeData?.label}
                      </h3>
                    </motion.div>

                    {/* Regulated Infrastructure Content */}
                    {activeSection === "regulated" && (
                      <>
                        {/* Stats Cards Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-2 2xl:gap-4 mb-6 xl:mb-3 2xl:mb-6">
                          {[
                            { label: "Total portfolio value:", value: "$12,480", change: "00%", icon: "wallet" },
                            { label: "Today's Change:", value: "+$134.20", change: "1.09%", icon: "arrow" },
                            { label: "Risk Profile:", value: "Balanced", icon: "chart" },
                          ].map((card, i) => (
                            <motion.div
                              key={card.label}
                              custom={i}
                              variants={cardVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(28, 74, 63, 0.3)" }}
                              className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-5 xl:p-3 2xl:p-5 text-white"
                              style={{
                                background: 'radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)',
                              }}
                            >
                              <p className="text-white/70 text-xs sm:text-sm xl:text-xs 2xl:text-sm mb-2 xl:mb-1 2xl:mb-2">{card.label}</p>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl sm:text-3xl xl:text-xl 2xl:text-3xl font-bold">{card.value}</span>
                              </div>
                              {card.change && (
                                <div className="flex items-center gap-1 text-[#46B886] text-sm xl:text-xs 2xl:text-sm">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9V3M6 3L3 6M6 3L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  <span>{card.change}</span>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>

                        {/* Asset Allocation Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          whileHover={{ boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
                          className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(229, 231, 235, 0.8)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <p className="text-[#111827] text-lg sm:text-xl xl:text-base 2xl:text-xl font-medium mb-2 xl:mb-1 2xl:mb-2">Asset allocation</p>
                          <motion.p
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                            className="text-[#111827] text-4xl sm:text-5xl lg:text-6xl xl:text-3xl 2xl:text-6xl font-bold mb-3 xl:mb-2 2xl:mb-3"
                          >
                            78,909.72
                          </motion.p>
                          <div className="flex items-center gap-2 text-[#46B886] xl:text-sm 2xl:text-base">
                            <motion.svg
                              animate={{ y: [0, -3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                            <span className="font-medium">4.5%</span>
                            <span className="text-[#6B7280]">from last week</span>
                          </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed mt-6 xl:mt-3 2xl:mt-6"
                        >
                          {activeData?.description}
                        </motion.p>
                      </>
                    )}

                    {/* Shariah Alignment Content */}
                    {activeSection === "shariah" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8"
                        style={{
                          background: 'rgba(255, 255, 255, 0.9)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        {[
                          { label: "Asset", value: "Bitpay", hasIcon: true },
                          { label: "Type", value: "Crypto" },
                          { label: "Balance", value: "0.045" },
                          { label: "In Use", value: "0.045" },
                          { label: "Available", value: "0.045" },
                          { label: "Value (USD)", value: "$2300.00" },
                        ].map((row, i) => (
                          <motion.div
                            key={row.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center justify-between py-4 xl:py-2 2xl:py-4 border-b border-[#F3F4F6] last:border-0"
                          >
                            <span className="text-[#9CA3AF] text-base sm:text-lg xl:text-sm 2xl:text-lg">{row.label}</span>
                            <div className="flex items-center gap-3 xl:gap-2 2xl:gap-3">
                              {row.hasIcon && (
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="w-10 h-10 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
                                >
                                  <span className="text-[#111827] text-xs xl:text-[10px] 2xl:text-xs font-bold">bitpay</span>
                                </motion.div>
                              )}
                              <span className="text-[#111827] text-base sm:text-lg xl:text-sm 2xl:text-lg font-semibold">{row.value}</span>
                            </div>
                          </motion.div>
                        ))}

                        {/* Filter Button */}
                        <div className="flex justify-end pt-4 xl:pt-2 2xl:pt-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 xl:px-3 xl:py-1.5 2xl:px-4 2xl:py-2 rounded-lg bg-[#F3F4F6] text-[#6B7280] text-sm xl:text-xs 2xl:text-sm font-medium"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 4H14M4 8H12M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Filter
                          </motion.button>
                        </div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed mt-6 xl:mt-3 2xl:mt-6"
                        >
                          {activeData?.description}
                        </motion.p>
                      </motion.div>
                    )}

                    {/* Institutional Integrity Content - 2FA Security */}
                    {activeSection === "integrity" && (
                      <div className="space-y-6 xl:space-y-3 2xl:space-y-6">
                        {/* Main Heading */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center"
                        >
                          <h3 className="text-[#111827] text-2xl sm:text-3xl md:text-4xl xl:text-2xl 2xl:text-4xl font-bold mb-3 xl:mb-2 2xl:mb-3">
                            Secure your account<br />with 2FA
                          </h3>
                          <p className="text-[#9CA3AF] text-sm sm:text-base xl:text-xs 2xl:text-base">
                            Choose your preferred method for two-factor authentication.
                          </p>
                        </motion.div>

                        {/* Google Authenticator Option - Selected */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(70, 184, 134, 0.3)" }}
                          className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-5 sm:p-6 xl:p-3 2xl:p-6 flex items-center justify-between cursor-pointer"
                          style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            border: '2px solid #46B886',
                            boxShadow: '0 2px 12px rgba(70, 184, 134, 0.15)',
                          }}
                        >
                          <div className="flex items-center gap-4 xl:gap-3 2xl:gap-4">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-5 h-5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full border-2 border-[#1C4A3F] flex items-center justify-center"
                            >
                              <div className="w-2.5 h-2.5 xl:w-2 xl:h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-[#1C4A3F]" />
                            </motion.div>
                            <div>
                              <p className="text-[#111827] text-base sm:text-lg xl:text-sm 2xl:text-lg font-semibold">Google Authenticator</p>
                              <p className="text-[#9CA3AF] text-sm xl:text-xs 2xl:text-sm">Use an authenticator app.</p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-12 h-12 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 flex items-center justify-center"
                          >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-8 xl:h-8 2xl:w-10 2xl:h-10">
                              <path d="M20 8L20 20L32 20" stroke="#FBBC04" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M20 20L12 32" stroke="#34A853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M20 20L28 32" stroke="#4285F4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M20 20L8 20" stroke="#EA4335" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </motion.div>
                        </motion.div>

                        {/* Phone Number (SMS) Option - Not Selected */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ opacity: 0.8 }}
                          className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-5 sm:p-6 xl:p-3 2xl:p-6 flex items-center justify-between cursor-pointer opacity-60"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(229, 231, 235, 0.8)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <div className="flex items-center gap-4 xl:gap-3 2xl:gap-4">
                            <div className="w-5 h-5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full border-2 border-[#D1D5DB]" />
                            <div>
                              <p className="text-[#6B7280] text-base sm:text-lg xl:text-sm 2xl:text-lg font-semibold">Phone Number (SMS)</p>
                              <p className="text-[#9CA3AF] text-sm xl:text-xs 2xl:text-sm">Receive a 6-digit code by SMS<br />every time you log in.</p>
                            </div>
                          </div>
                          <div className="w-12 h-12 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 rounded-xl bg-[#D1FAE5] flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6">
                              <path d="M21 11.5C21 16.75 16.75 21 11.5 21C9.81 21 8.21 20.58 6.8 19.84L3 21L4.16 17.2C3.42 15.79 3 14.19 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 22 7.25 22 12.5" stroke="#46B886" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed"
                        >
                          {activeData?.description}
                        </motion.p>
                      </div>
                    )}

                    {/* Hybrid Operating Model Content - Wallet Balance */}
                    {activeSection === "hybrid" && (
                      <div className="space-y-4 xl:space-y-2 2xl:space-y-4">
                        {/* Total Wallet Balance Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02, boxShadow: "0 15px 40px -10px rgba(28, 74, 63, 0.4)" }}
                          className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 xl:gap-3 2xl:gap-4"
                          style={{
                            background: 'radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)',
                          }}
                        >
                          <div className="flex items-center gap-4 xl:gap-3 2xl:gap-4">
                            <motion.svg
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                              className="xl:w-6 xl:h-6 2xl:w-8 2xl:h-8"
                            >
                              <rect x="4" y="8" width="24" height="18" rx="3" stroke="white" strokeWidth="2" />
                              <path d="M4 14H28" stroke="white" strokeWidth="2" />
                              <rect x="8" y="4" width="16" height="4" rx="1" stroke="white" strokeWidth="2" />
                            </motion.svg>
                            <span className="text-white/80 text-base sm:text-lg xl:text-sm 2xl:text-lg">Total wallet balance:</span>
                          </div>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                            className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-2xl 2xl:text-5xl font-bold"
                          >
                            $2,915.42
                          </motion.span>
                        </motion.div>

                        {/* Available Balance Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          whileHover={{ boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
                          className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8"
                          style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(229, 231, 235, 0.5)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-3 xl:gap-2 2xl:gap-3">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-10 h-10 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full border-2 border-[#6B7280] flex items-center justify-center"
                              >
                                <span className="text-[#6B7280] text-lg xl:text-sm 2xl:text-lg font-semibold">$</span>
                              </motion.div>
                              <span className="text-[#6B7280] text-base sm:text-lg xl:text-sm 2xl:text-lg">Available:</span>
                            </div>
                            <span className="text-[#111827] text-2xl sm:text-3xl md:text-4xl xl:text-xl 2xl:text-4xl font-bold">$1,700.00</span>
                          </div>
                        </motion.div>

                        {/* Sort/Transaction Indicator */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-4 sm:p-5 xl:p-2 2xl:p-5"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(229, 231, 235, 0.5)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-2 text-[#6B7280]"
                          >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-4 xl:h-4 2xl:w-5 2xl:h-5">
                              <path d="M7 4V16M7 4L4 7M7 4L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M13 16V4M13 16L10 13M13 16L16 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </motion.div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed"
                        >
                          {activeData?.description}
                        </motion.p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
