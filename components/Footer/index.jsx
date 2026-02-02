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

// X (formerly Twitter) Icon
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
  </svg>
);

// YouTube Icon
const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988787 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// TikTok Icon
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12V4C15 4 17 8 21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12C15 16.4183 11.4183 20 7 20C6.64936 20 6.30381 19.9793 5.96465 19.9387" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12C15 9.23858 12.7614 7 10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Instagram Icon
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="6" r="1" fill="currentColor" />
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
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:mt-10">
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
                  href="https://x.com/Manjamcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white/50"
                  aria-label="X (Twitter)"
                >
                  <XIcon />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@manjamcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white/50"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/manjamcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white/50"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@manjamcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white/50"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white/50"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
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
                    className="w-10 h-10 rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/manjam-icon.jpg"
                      alt="Manjam"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="text-white text-sm font-semibold">Newsletter</p>
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
