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

export default function BlogDetailsPage({ params }) {
  const { slug } = params;

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-[#FAFAFA] to-white">
      {/* Hero Section with Featured Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-[#F0FDF9] to-transparent h-[500px] -z-10" />
        
        <div className="max-w-5xl mx-auto px-5 pt-8 pb-12">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 text-sm">
              <Link href="/blogs" className="text-[#6B7280] hover:text-[#14352D] transition-colors">
                ← Back to News
              </Link>
            </div>
          </motion.div>

          {/* Article Header */}
          <motion.header 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-10"
          >
            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-[#ECFDF5] text-[#14352D] rounded-full text-xs font-medium">
                Bitcoin
              </span>
              <span className="px-3 py-1.5 bg-[#ECFDF5] text-[#14352D] rounded-full text-xs font-medium">
                Crypto
              </span>
              <span className="px-3 py-1.5 bg-[#F3F4F6] text-[#6B7280] rounded-full text-xs font-medium">
                5 min read
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6 max-w-3xl mx-auto"
            >
              How the flying fish swiftly flew by the space station
            </motion.h1>

            {/* Author & Date */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#46B886] ring-offset-2">
                    <Image
                      src="/Avatar Base.png"
                      alt="Loki Bright"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#46B886] rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-[#0F172A] font-semibold">Loki Bright</p>
                  <p className="text-[#6B7280] text-sm">October 20, 2023</p>
                </div>
              </div>

              <div className="w-px h-10 bg-[#E5E7EB]" />

              {/* Engagement */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-[#6B7280] hover:text-[#46B886] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-medium">128</span>
                </button>
                <button className="flex items-center gap-1.5 text-[#6B7280] hover:text-[#46B886] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-medium">24</span>
                </button>
                <button className="flex items-center gap-1.5 text-[#6B7280] hover:text-[#46B886] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-12"
            style={{
              boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div className="relative w-full aspect-video">
              <Image
                src="/blog1.png"
                alt="Blog featured image"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent">
              <p className="text-white/80 text-sm">
                Image courtesy via{" "}
                <Link href="#" className="underline hover:text-white transition-colors">
                  Designership
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-5 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          {/* Intro */}
          <motion.p variants={fadeInUp} className="text-[#4B5563] text-lg sm:text-xl leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#14352D] first-letter:mr-2 first-letter:float-left">
            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi sem id.
          </motion.p>

          {/* Section */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-[#0F172A] font-bold text-2xl sm:text-3xl mb-4 mt-12 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#46B886] rounded-full" />
              Building the foundations
            </h2>
            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-6">
              Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi sem id.
            </p>
          </motion.div>

          {/* Key Points Card */}
          <motion.div 
            variants={fadeInUp}
            className="my-10 p-6 sm:p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(236, 253, 245, 0.8) 0%, rgba(240, 253, 250, 0.6) 100%)',
              border: '1px solid rgba(70, 184, 134, 0.2)',
            }}
          >
            <h3 className="text-[#14352D] font-semibold text-lg mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#14352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              {[
                { title: "Sit mauris proin", desc: "The quam dignissim nisi gravida pellentesque porta." },
                { title: "Scelerisque porta", desc: "The quam dignissim nisi gravida pellentesque porta ipsum non mattis nisi." },
                { title: "Adipiscing nunc", desc: "Pharetra aliquam gravida bibendum orci diam nisi sem id." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#14352D] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-[#0F172A]">{item.title}:</span>
                    <span className="text-[#4B5563]"> {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-[#0F172A] font-bold text-2xl sm:text-3xl mb-4 mt-12 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#46B886] rounded-full" />
              How we managed to create a dark mode
            </h2>
            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-6">
              Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat.
            </p>
          </motion.div>

          {/* Blockquote */}
          <motion.blockquote 
            variants={fadeInUp}
            className="relative my-10 pl-8 pr-6 py-6 rounded-r-2xl"
            style={{
              background: 'linear-gradient(90deg, rgba(70, 184, 134, 0.1) 0%, transparent 100%)',
              borderLeft: '4px solid #46B886',
            }}
          >
            <svg className="absolute top-4 right-4 w-8 h-8 text-[#46B886]/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-[#1E293B] text-lg sm:text-xl italic leading-relaxed mb-3">
              &quot;Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat.&quot;
            </p>
            <cite className="text-[#64748B] text-sm not-italic flex items-center gap-2">
              <span className="w-6 h-px bg-[#64748B]" />
              Loki Bright, Author
            </cite>
          </motion.blockquote>

          <motion.p variants={fadeInUp} className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum dictumst eleifend venenatis cras feugiat. Nunc diam risus sagittis in adipiscing nunc.
          </motion.p>
        </motion.div>

        {/* Comments Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-[#0F172A] font-bold text-2xl mb-8 flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#14352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Comments (24)
          </h3>

          {/* Add Comment */}
          <div className="flex items-start gap-4 mb-10 p-6 rounded-2xl bg-[#F9FAFB]">
            <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden ring-2 ring-[#46B886]">
              <Image src="/Avatar Base.png" alt="Your avatar" width={48} height={48} className="object-cover" />
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Write a comment..."
                rows={3}
                className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#374151] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#46B886] focus:border-transparent resize-none"
              />
              <div className="flex items-center justify-end gap-3 mt-3">
                <button className="px-4 py-2 text-[#6B7280] text-sm font-medium hover:text-[#0F172A] transition-colors">
                  Cancel
                </button>
                <button className="px-6 py-2.5 bg-[#14352D] text-white font-medium text-sm rounded-full hover:bg-[#1C4A3F] transition-colors">
                  Post Comment
                </button>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {[1, 2, 3].map((comment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-2xl hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden">
                    <Image src="/Avatar Base.png" alt="Ralph Edwards" width={48} height={48} className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#0F172A] font-semibold">Ralph Edwards</span>
                        <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                        <span className="text-[#94A3B8] text-sm">Aug 19, 2021</span>
                      </div>
                    </div>
                    <p className="text-[#4B5563] text-base leading-relaxed mb-4">
                      In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#46B886] transition-colors text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>12</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#46B886] transition-colors text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E5E7EB] text-[#6B7280] text-sm font-medium hover:bg-[#F9FAFB] hover:border-[#14352D] hover:text-[#14352D] transition-all">
              <span>Load more comments</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.section>
      </article>
    </div>
  );
}
