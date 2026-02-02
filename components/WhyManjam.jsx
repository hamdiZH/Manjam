"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "regulated",
    label: "Regulated Infrastructure",
    shortLabel: "Regulated",
    description: "Built on Swiss standards, operated through a GCC hub; a regulatory-first framework with clear rules and oversight at scale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "shariah",
    label: "Shariah Alignment",
    shortLabel: "Shariah",
    description: "Shariah-aligned by design; bringing transparency, ethical alignment, and disciplined practices to digital assets in a market that rarely prioritizes it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7V9M12 15V17M7 12H9M15 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "integrity",
    label: "Institutional Integrity",
    shortLabel: "Integrity",
    description: "Layered security protocols and operational controls built on proven institutional standards to ensure maximum resilience and risk mitigation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "hybrid",
    label: "Hybrid Operating Model",
    shortLabel: "Hybrid",
    description: "A structured operating model that combines institutional discipline with modern digital-asset efficiency, turning standards into consistent execution.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 6V10C4 10 4 12 12 12C20 12 20 10 20 10V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 10V14C4 14 4 16 12 16C20 16 20 14 20 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 14V18C4 18 4 20 12 20C20 20 20 18 20 18V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// Bubble positions for organic floating layout - adjusted for visual balance
const bubblePositions = [
  { x: 35, y: 8, size: 110 },   // top center
  { x: 8, y: 38, size: 120 },   // left middle
  { x: 62, y: 45, size: 115 },  // right middle
  { x: 32, y: 75, size: 125 },  // bottom center
];

export default function WhyManjam() {
  const [activeSection, setActiveSection] = useState("regulated");
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeData = sections.find((s) => s.id === activeSection);
  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <section
      id="why-manjam"
      ref={containerRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 xl:py-16 2xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#46B886] opacity-20"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16 xl:mb-10 2xl:mb-16"
        >
          {/* Kicker */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="w-8 h-[2px] bg-[#46B886]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <span className="text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase">WHY MANJAM</span>
            <motion.span
              className="w-8 h-[2px] bg-[#46B886]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[#111827] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl 2xl:text-7xl font-bold leading-tight"
          >
            Built to last
          </motion.h2>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-24">

          {/* Left - Floating Bubbles (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-[500px] xl:max-w-[420px] 2xl:max-w-[500px] mx-auto">

              {/* Connection Lines - SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {/* Animated connection paths */}
                <motion.path
                  d={`M ${bubblePositions[0].x + 5} ${bubblePositions[0].y + 12} 
                      Q ${bubblePositions[0].x - 10} ${bubblePositions[1].y} 
                      ${bubblePositions[1].x + 12} ${bubblePositions[1].y + 6}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path
                  d={`M ${bubblePositions[1].x + 12} ${bubblePositions[1].y + 12} 
                      Q ${bubblePositions[1].x + 25} ${bubblePositions[3].y - 10} 
                      ${bubblePositions[3].x + 6} ${bubblePositions[3].y}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                />
                <motion.path
                  d={`M ${bubblePositions[0].x + 12} ${bubblePositions[0].y + 12} 
                      Q ${bubblePositions[2].x} ${bubblePositions[0].y + 15} 
                      ${bubblePositions[2].x + 5} ${bubblePositions[2].y}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                />
                <motion.path
                  d={`M ${bubblePositions[2].x + 5} ${bubblePositions[2].y + 12} 
                      Q ${bubblePositions[2].x - 5} ${bubblePositions[3].y - 5} 
                      ${bubblePositions[3].x + 12} ${bubblePositions[3].y + 6}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 1.1 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#46B886" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1C4A3F" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Bubbles */}
              {sections.map((section, index) => {
                const isActive = section.id === activeSection;
                const pos = bubblePositions[index];

                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    onMouseEnter={() => !isMobile && setActiveSection(section.id)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: mousePosition.x * (index % 2 === 0 ? 8 : -8),
                      y: mousePosition.y * (index % 2 === 0 ? 8 : -8),
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      opacity: { duration: 0.5, delay: index * 0.15 },
                      scale: { duration: 0.5, delay: index * 0.15 },
                      x: { duration: 0.3 },
                      y: { duration: 0.3 },
                    }}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      width: `${pos.size}px`,
                      height: `${pos.size}px`,
                    }}
                  >
                    {/* Outer Glow Ring */}
                    <motion.div
                      animate={{
                        scale: isActive ? [1, 1.15, 1] : 1,
                        opacity: isActive ? [0.3, 0.5, 0.3] : 0,
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(70, 184, 134, 0.4) 0%, transparent 70%)',
                        transform: 'scale(1.3)',
                      }}
                    />

                    {/* Main Bubble */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className="relative w-full h-full rounded-full flex flex-col items-center justify-center p-4 transition-all duration-500"
                      style={{
                        background: isActive
                          ? 'linear-gradient(135deg, #1C4A3F 0%, #14352D 50%, #0F2922 100%)'
                          : 'linear-gradient(135deg, #374151 0%, #1F2937 50%, #111827 100%)',
                        boxShadow: isActive
                          ? '0 20px 60px -15px rgba(28, 74, 63, 0.6), 0 0 40px rgba(70, 184, 134, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                          : '0 15px 40px -10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                        border: isActive ? '2px solid rgba(70, 184, 134, 0.5)' : '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {/* Icon */}
                      <motion.div
                        animate={{
                          rotate: isActive ? [0, 5, -5, 0] : 0,
                          scale: isActive ? 1.1 : 1,
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`mb-2 ${isActive ? 'text-[#46B886]' : 'text-gray-400'}`}
                      >
                        {section.icon}
                      </motion.div>

                      {/* Label */}
                      <span className={`text-xs sm:text-sm font-semibold text-center leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'
                        }`}>
                        {section.shortLabel}
                      </span>

                      {/* Active Indicator Dot */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#46B886]"
                        />
                      )}
                    </motion.div>
                  </motion.button>
                );
              })}

              {/* Center Decorative Element */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: 'radial-gradient(circle, rgba(70, 184, 134, 0.3) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>

          {/* Mobile: Horizontal Tabs */}
          <div className="lg:hidden w-full">
            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-4 px-4">
              {sections.map((section, index) => {
                const isActive = section.id === activeSection;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
                      ? "bg-[#1C4A3F] text-white shadow-lg"
                      : "bg-white text-[#6B7280] hover:bg-[#F3F4F6] border border-[#E5E7EB]"
                      }`}
                  >
                    {section.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right - Content Panel */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Decorative Background Shape */}
                <motion.div
                  className="absolute -inset-4 sm:-inset-8 rounded-3xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    boxShadow: '0 20px 60px -20px rgba(0,0,0,0.1)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10 xl:p-8 2xl:p-12">
                  {/* Step Indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 mb-4"
                  >
                    <span className="text-[#46B886] text-sm font-semibold">
                      0{activeIndex + 1}
                    </span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-400 text-sm">04</span>
                    <div className="ml-4 flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-[#46B886] to-[#1C4A3F] rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((activeIndex + 1) / 4) * 100}%` }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="text-[#111827] text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-6"
                  >
                    {activeData?.label}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-[#6B7280] text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl leading-relaxed mb-8"
                  >
                    {activeData?.description}
                  </motion.p>

                  {/* Feature Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {activeSection === "regulated" && (
                      <>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Swiss Standards</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">GCC Hub</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Regulatory-First</span>
                      </>
                    )}
                    {activeSection === "shariah" && (
                      <>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Ethical Alignment</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Transparency</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Disciplined Practices</span>
                      </>
                    )}
                    {activeSection === "integrity" && (
                      <>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Security Protocols</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Risk Mitigation</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Institutional Standards</span>
                      </>
                    )}
                    {activeSection === "hybrid" && (
                      <>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Digital Efficiency</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Institutional Discipline</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#E8F5F0] text-[#1C4A3F] text-sm font-medium">Consistent Execution</span>
                      </>
                    )}
                  </motion.div>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 h-px bg-linear-to-r from-[#46B886] via-[#1C4A3F] to-transparent origin-left"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <motion.div
          className="hidden lg:flex justify-center items-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              onMouseEnter={() => setActiveSection(section.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative cursor-pointer p-1"
            >
              <motion.div
                animate={{
                  width: section.id === activeSection ? 32 : 8,
                  backgroundColor: section.id === activeSection ? '#1C4A3F' : '#D1D5DB',
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
