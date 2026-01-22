"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Platform URL
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";

// Brand Arrow Icon
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Feature data
const features = [
  {
    id: "onboarding",
    number: "01",
    title: "Integrated Onboarding",
    description: "Seamless KYC/AML verification with automated eligibility checks for qualified investors.",
    metric: "24h",
    metricLabel: "Average Verification",
  },
  {
    id: "operations",
    number: "02",
    title: "Disciplined Operations",
    description: "Institutional-grade processes ensuring consistent execution and compliance at scale.",
    metric: "99.9%",
    metricLabel: "Platform Uptime",
  },
  {
    id: "oversight",
    number: "03",
    title: "Ongoing Oversight",
    description: "Real-time monitoring, comprehensive reporting, and transparent audit trails.",
    metric: "24/7",
    metricLabel: "Active Monitoring",
  },
];

export default function DigitalAssetJourney() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20, 53, 45, 0.8) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/2 translate-x-1/3"
          style={{
            background: 'radial-gradient(circle, rgba(70, 184, 134, 0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-18">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#ECFDF5] text-[#14352D] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#46B886] animate-pulse" />
                The Platform
              </span>
            </motion.div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
              <span className="text-[#0F172A]">One platform.</span>
              <br />
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background: 'linear-gradient(135deg, #14352D 0%, #46B886 50%, #14352D 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Infinite possibilities.
              </motion.span>
            </h2>

            {/* Description */}
            <p className="text-[#64748B] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Onboarding, eligibility, secure access, and reporting — unified in one institutional-grade workflow.
            </p>

            {/* CTA Button */}
            <motion.a
              href={PLATFORM_REGISTER_URL}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 bg-[#14352D] text-white px-7 py-4 rounded-full font-semibold text-base"
              style={{ boxShadow: '0 4px 20px rgba(20, 53, 45, 0.3)' }}
            >
              Start Your Journey
              <motion.span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10"
                whileHover={{ x: 4 }}
              >
                <ArrowRightIcon />
              </motion.span>
            </motion.a>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 mt-10 pt-10 border-t border-[#E2E8F0]">
              {[
                { value: "24h", label: "Verification" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <p className="text-[#14352D] text-2xl sm:text-3xl font-bold">{stat.value}</p>
                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="absolute -inset-10 rounded-3xl -z-10"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(70, 184, 134, 0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            {/* Main Dashboard */}
            <motion.div
              style={{
                y: imageY,
                boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/dashboard.png"
                alt="Manjam Platform Dashboard"
                width={800}
                height={500}
                className="w-full h-auto"
              />

              {/* Floating Badge - Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-4 right-4 px-3 py-2 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-[#0F172A] text-xs font-semibold">Live</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="absolute -bottom-6 -left-6 p-4 rounded-2xl hidden sm:block"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#14352D] to-[#46B886] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F172A] font-bold">Verified</p>
                  <p className="text-[#64748B] text-xs">KYC Complete</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section - Horizontal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-[#0F172A] text-2xl sm:text-3xl font-bold mb-2">How it works</h3>
              <p className="text-[#64748B] text-sm">Three steps to get started</p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className="relative p-6 sm:p-8 rounded-2xl h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(229, 231, 235, 0.8)',
                  }}
                >
                  {/* Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                      style={{
                        background: 'linear-gradient(135deg, #14352D 0%, #1C4A3F 100%)',
                      }}
                    >
                      {feature.number}
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="h-[2px] bg-linear-to-r from-[#46B886] to-transparent"
                    />
                  </div>

                  {/* Content */}
                  <h4 className="text-[#0F172A] text-lg font-bold mb-3 group-hover:text-[#14352D] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Metric */}
                  <div className="pt-4 border-t border-[#E2E8F0]/60">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[#14352D] text-3xl font-bold">{feature.metric}</p>
                        <p className="text-[#94A3B8] text-[10px] uppercase tracking-wider">{feature.metricLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: '2px solid rgba(70, 184, 134, 0.3)',
                    background: 'linear-gradient(135deg, rgba(70, 184, 134, 0.03) 0%, transparent 100%)',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
