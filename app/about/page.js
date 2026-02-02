"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Stats data
const stats = [
  { value: "$500M+", label: "Assets Under Advisory" },
  { value: "2020", label: "Year Founded" },
  { value: "100%", label: "Shariah Compliant" },
  { value: "24/7", label: "Platform Access" },
];

// Values data
const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Security First",
    description:
      "Bank-grade security protocols protect every transaction and asset under our management.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Transparency",
    description:
      "Complete visibility into operations, fees, and performance with real-time reporting.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Consistency",
    description:
      "Disciplined processes ensure reliable execution across all market conditions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Client Focus",
    description:
      "Every decision is made with our clients' best interests at the forefront.",
  },
];

// Arrow Icon
const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-hover"
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

// Team data
const team = [
  { name: "Ahmad Al-Rashid", role: "Founder & CEO", image: "/Avatar Base.png" },
  {
    name: "Sarah Chen",
    role: "Chief Investment Officer",
    image: "/Avatar Base.png",
  },
  {
    name: "Michael Weber",
    role: "Head of Compliance",
    image: "/Avatar Base.png",
  },
  { name: "Fatima Hassan", role: "Shariah Advisor", image: "/Avatar Base.png" },
];

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.02,
    y: -2,
    boxShadow:
      "0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)",
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
  },
};

// Feature Section Component
const FeatureSection = ({
  reverse = false,
  kicker,
  title,
  description,
  image,
}) => (
  <section className="w-full py-16 sm:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12 lg:gap-20`}
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#46B886]" />
            <span className="text-[#46B886] font-semibold text-sm uppercase tracking-wider">
              {kicker}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#0F172A] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[#64748B] text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {[
              "Swiss-regulated framework",
              "Shariah-compliant investments",
              "Institutional-grade security",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#46B886"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[#374151] font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0 25px 80px -20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="relative w-full aspect-4/3">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#14352D]/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F9FAFB]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#46B886]" />
            <span className="text-[#46B886] font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-[#0F172A] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            What our clients say
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl">
            Hear from qualified investors who trust Manjam with their digital
            asset journey.
          </p>
        </div>
      </motion.div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Ahmad Al-Farsi",
            role: "Family Office Principal",
            quote:
              "Manjam provides the institutional rigor we require with full Shariah compliance. Their transparent approach sets them apart.",
          },
          {
            name: "Sarah Mitchell",
            role: "Investment Manager",
            quote:
              "The platform's security and reporting capabilities exceed what we've seen from other digital asset managers.",
          },
          {
            name: "Omar Hassan",
            role: "Private Investor",
            quote:
              "Finally, a digital asset solution that aligns with my values without compromising on professional standards.",
          },
        ].map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl overflow-hidden h-[400px]"
          >
            <Image
              src={`/blog${idx + 1}.png`}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              {/* Quote Icon */}
              <svg
                className="w-8 h-8 text-[#46B886] mb-4 opacity-50"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-white text-lg leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#46B886]/50">
                  <Image
                    src="/Avatar Base.png"
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] -translate-y-1/2">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(70, 184, 134, 0.08) 0%, transparent 60%)",
                filter: "blur(80px)",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Kicker */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 text-[#14352D] text-sm font-medium tracking-[0.2em] uppercase">
                <span className="w-8 h-[2px] bg-[#46B886]" />
                About Manjam
                <span className="w-8 h-[2px] bg-[#46B886]" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6"
            >
              <span className="text-[#0F172A]">Building the future of</span>
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "linear-gradient(135deg, #14352D 0%, #46B886 50%, #14352D 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ethical investing
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-[#64748B] text-lg sm:text-xl max-w-2xl mx-auto mb-10"
            >
              Manjam Capital combines Swiss institutional standards with
              Shariah-compliant principles to deliver a trusted digital asset
              ecosystem for qualified investors.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://platform.manjamcapital.com/register/account-type"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-[#1C4A3F] bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-white font-medium text-xs md:text-sm transition-all hover:opacity-90 cursor-pointer whitespace-nowrap"
              >
                Become a Client
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#mission"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#E2E8F0] text-[#0F172A] font-semibold rounded-full hover:bg-[#F9FAFB] transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="w-full py-12 border border-[#1C4A3F] bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-white font-medium text-xs md:text-sm transition-all hover:opacity-90 cursor-pointer whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-[#ffffff] text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/70 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section id="mission" className="w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 25px 80px -20px rgba(0, 0, 0, 0.2)" }}
              >
                <Image
                  src="/about-our-mission.PNG"
                  alt="Manjam"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white hidden sm:block"
                style={{ boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#ECFDF5] flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                        stroke="#14352D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 4L12 14.01l-3-3"
                        stroke="#46B886"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0F172A] font-bold text-xl">100%</p>
                    <p className="text-[#64748B] text-sm">Shariah Compliant</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-[#46B886]" />
                <span className="text-[#46B886] font-semibold text-sm uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="text-[#0F172A] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Bridging tradition with innovation
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-6">
                We believe digital assets can be built and operated at
                institutional benchmarks. Manjam Capital exists to make digital
                assets institution-grade under real fiduciary conditions; not
                interesting, not fast, not hyped, but structurally ready.
              </p>
              <p className="text-[#64748B] text-lg leading-relaxed">
                THE Manjam benchmark is built on three pillars: Swiss-governed
                architecture, operational rigor, and reporting discipline with
                Shariah compliance by design. Governance isn’t a constraint;
                it’s the multiplier that converts headline risk into manageable
                risk, and manageable risk is what institutions can actually
                hold.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-linear-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#46B886]" />
              <span className="text-[#46B886] font-semibold text-sm uppercase tracking-wider">
                Our Values
              </span>
              <span className="w-8 h-[2px] bg-[#46B886]" />
            </div>
            <h2 className="text-[#0F172A] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              What drives us forward
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Our core values guide every decision we make and every service we
              provide.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-2xl bg-white"
                style={{
                  boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] flex items-center justify-center text-[#14352D] mb-5 group-hover:bg-[#14352D] group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-[#0F172A] font-bold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        kicker="Our Approach"
        title="Institutional standards for the digital age"
        description="We combine decades of traditional finance expertise with cutting-edge blockchain technology to deliver a platform that meets the highest standards of security, compliance, and performance."
        image="/blog1.png"
      />

      <FeatureSection
        reverse
        kicker="Swiss Excellence"
        title="Regulated by design, trusted by choice"
        description="Operating within Switzerland's renowned financial framework, we provide the regulatory certainty and operational transparency that qualified investors demand."
        image="/blog2.png"
      />

      {/* Team Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#46B886]" />
              <span className="text-[#46B886] font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
              <span className="w-8 h-[2px] bg-[#46B886]" />
            </div>
            <h2 className="text-[#0F172A] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              Meet the team
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Our leadership brings together expertise from traditional finance,
              blockchain technology, and Islamic finance.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-[#F1F5F9] group-hover:ring-[#46B886]/30 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-[#64748B] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            className="relative p-10 sm:p-16 rounded-3xl overflow-hidden text-center"
            style={{
              background: "linear-gradient(135deg, #0F172A 0%, #14352D 100%)",
            }}
          >
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                Ready to start your journey?
              </h3>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                Join qualified investors who trust Manjam Capital for their
                digital asset needs.
              </p>
              <motion.a
                href="https://platform.manjamcapital.com/register/account-type"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-6 py-2.5 sm:py-3 lg:py-2.5 rounded-2xl text-white font-medium text-sm sm:text-base cursor-pointer mb-3 sm:mb-4 lg:mb-3"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.1)",
                }}
              >
                Become a client
                <motion.span
                  className="inline-flex"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRightIcon />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
