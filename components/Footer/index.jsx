"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Social Media Icons
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Navigation Links
const servicesLinks = [
  { label: "The Fund", href: "/#fund" },
  { label: "The Platform", href: "/#platform" },
  { label: "The Academy", href: "/#academy" },
];

const insightsLinks = [
  { label: "Weekly Digest", href: "/blogs" },
  { label: "Articles", href: "/blogs" },
  { label: "Market Updates", href: "/blogs" },
];

const exploreLinks = [
  { label: "Why Manjam?", href: "/#why-manjam" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/about#team" },
  { label: "Partners", href: "/#partners" },
  { label: "Gallery", href: "/#gallery" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Legal Notice", href: "/legal" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
  tap: { scale: 0.98, y: 0 },
};

const socialVariants = {
  hover: {
    scale: 1.2,
    color: "#FFFFFF",
    transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
  },
  tap: { scale: 0.9 },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe:", { email, firstName });
  };

  return (
    <footer className="w-full bg-[#111827]">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[1400px] mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Left Side - Disclaimer */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <Image
                  src="/manjam-logo.png"
                  alt="Manjam"
                  width={140}
                  height={45}
                  className="object-contain brightness-0 invert"
                />
              </motion.div>

              {/* Disclaimer */}
              <p className="text-white/50 text-xs leading-relaxed mb-6">
                Information provided is for informational purposes only and directed exclusively at qualified/professional investors. The fund operates within the Swiss regulated framework, and Manjam provides its services under the qualified-investor regime.
              </p>

              {/* Copyright */}
              <p className="text-white/70 text-sm font-medium">
                © 2026 Manjam Capital AG. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                <motion.a
                  href="#"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white/50"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href="#"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white/50"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </motion.a>
              </div>
            </motion.div>

            {/* Middle - Navigation Categories */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Services */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
                <ul className="flex flex-col gap-3">
                  {servicesLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors inline-block"
                      >
                        <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                          {link.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Insights */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white text-sm font-semibold mb-4">Insights</h4>
                <ul className="flex flex-col gap-3">
                  {insightsLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors inline-block"
                      >
                        <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                          {link.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Explore */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white text-sm font-semibold mb-4">Explore</h4>
                <ul className="flex flex-col gap-3">
                  {exploreLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors inline-block"
                      >
                        <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                          {link.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
                <ul className="flex flex-col gap-3">
                  {legalLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.35 }}
                    >
                      <Link
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors inline-block"
                      >
                        <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                          {link.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Side - Newsletter Subscription */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <motion.div
                whileHover={{
                  boxShadow: "0 20px 40px -15px rgba(70, 184, 134, 0.2)",
                  borderColor: "rgba(70, 184, 134, 0.3)"
                }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-lg bg-[#46B886] flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-lg">M</span>
                  </motion.div>
                  <div>
                    <p className="text-white text-sm font-semibold">Al Bidaya Weekly</p>
                    <p className="text-white/50 text-xs">Sunday by Manjam Capital</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Your weekly starting point in digital assets: a focused summary of what matters; clear, concise, and built for professionals.
                </p>

                {/* Social Proof */}
                <div className="flex items-center gap-2 mb-4">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-2">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="w-6 h-6 rounded-full bg-[#46B886] border-2 border-[#111827]"
                    />
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                      className="w-6 h-6 rounded-full bg-[#3B82F6] border-2 border-[#111827]"
                    />
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                      className="w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-[#111827]"
                    />
                  </div>
                  <span className="text-[#46B886] text-sm font-medium">Join +1000 professionals</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-4"></div>

                {/* Form */}
                <form onSubmit={handleSubscribe} className="space-y-3">
                  {/* Email Field */}
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    placeholder="Email address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#46B886] focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(70,184,134,0.15)] transition-all duration-300"
                  />

                  {/* First Name Field */}
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="First name *"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#46B886] focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(70,184,134,0.15)] transition-all duration-300"
                  />

                  {/* Subscribe Button */}
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full px-4 py-3 rounded-lg bg-[#46B886] text-white font-medium text-sm"
                    style={{
                      boxShadow: "0 4px 15px -5px rgba(70, 184, 134, 0.4)",
                    }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
