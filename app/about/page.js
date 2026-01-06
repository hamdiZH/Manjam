import Image from "next/image";

// Lightning Icon
const LightningIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.66667 1.33334L2 9.33334H8L7.33333 14.6667L14 6.66668H8L8.66667 1.33334Z"
      stroke="#10B981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Star Icon
const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1.33334L10.06 5.50668L14.6667 6.18001L11.3333 9.42668L12.12 14.0133L8 11.8467L3.88 14.0133L4.66667 9.42668L1.33333 6.18001L5.94 5.50668L8 1.33334Z"
      fill="#F59E0B"
    />
  </svg>
);

// Arrow Right Icon
const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33333 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Feature Section Component
const FeatureSection = ({ reverse = false }) => (
  <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-[112px]">
    <div
      className={`w-full max-w-[1216px] mx-auto flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-16`}
    >
      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5">
        {/* Label */}
        <div className="flex items-center gap-2">
          <LightningIcon />
          <span className="text-[#10B981] font-medium text-sm">
            Overline section title
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[#111827] font-bold text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-[44px] tracking-[-0.02em]">
          A catchy heading that brings some interest to visitors
        </h2>

        {/* Description */}
        <p className="text-[#374151] font-normal text-sm sm:text-base leading-6">
          Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar
          risus. Cursus in odio aenean. Tortor interdum condimentum nunc
          molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.
        </p>

        {/* Trust Indicators */}
        <div className="flex items-center gap-4 mt-2">
          {/* Avatar Group */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                >
                  <Image
                    src="/Avatar Base.png"
                    alt={`User ${i}`}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="ml-2 text-[#10B981] font-medium text-sm">+6</span>
          </div>

          {/* Trust Text & Stars */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[#374151] text-sm font-medium">
              Trusted by 30+ members
            </span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-fit flex items-center gap-2 px-5 py-2.5 border border-[#E5E7EB] rounded-lg text-[#111827] font-medium text-sm hover:bg-gray-50 transition-colors mt-2">
          Primary Action
          <ArrowRightIcon />
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
          <Image
            src="/blog1.png"
            alt="Feature Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F9FAFB]">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[112px]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 lg:mb-12">
        <div className="flex flex-col gap-3">
          {/* Label with left accent */}
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#10B981] rounded-full"></div>
            <span className="text-[#10B981] font-medium text-sm">
              Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[#111827] font-bold text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-[44px] tracking-[-0.02em]">
            What are others saying about Manjam
          </h2>

          {/* Description */}
          <p className="text-[#374151] font-normal text-sm sm:text-base leading-6 max-w-[700px]">
            Quis neque, eu et ipsum amet, vel et. Varius integer enim
            pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
            nibh.
          </p>
        </div>

        {/* CTA Button */}
        <button className="w-fit px-6 py-3 bg-[#46B886] text-white font-medium text-sm rounded-lg hover:bg-[#3da677] transition-colors">
          Read all testimonials
        </button>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial Card 1 */}
        <div className="relative h-[450px] sm:h-[500px] rounded-xl overflow-hidden group">
          <Image
            src="/blog1.png"
            alt="Testimonial background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
            <p className="text-white font-medium text-lg sm:text-xl italic leading-relaxed">
              Quis neque, eu et ipsum amet, vel et. Varius integer enim
              pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
              nibh.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src="/Avatar Base.png"
                  alt="Loki Bright"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Loki Bright</p>
                <p className="text-white/70 text-sm">Founder, Bitcoin (BTC)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="relative h-[450px] sm:h-[500px] rounded-xl overflow-hidden group">
          <Image
            src="/blog2.png"
            alt="Testimonial background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
            <p className="text-white font-medium text-lg sm:text-xl italic leading-relaxed">
              Quis neque, eu et ipsum amet, vel et. Varius integer enim
              pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
              nibh.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src="/Avatar Base.png"
                  alt="Stephen Summers"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Stephen Summers
                </p>
                <p className="text-white/70 text-sm">Product Manager, Meta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className="relative h-[450px] sm:h-[500px] rounded-xl overflow-hidden group">
          <Image
            src="/blog3.png"
            alt="Testimonial background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
            <p className="text-white font-medium text-lg sm:text-xl italic leading-relaxed">
              Quis neque, eu et ipsum amet, vel et. Varius integer enim
              pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
              nibh.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src="/Avatar Base.png"
                  alt="Gweneth Macy"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Gweneth Macy</p>
                <p className="text-white/70 text-sm">
                  UI Designers, Booking.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-[112px]">
        <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-3 text-center">
          {/* Label */}
          <p className="text-[#46B886] font-semibold text-xs sm:text-sm leading-5 tracking-[1px] uppercase">
            WHY MANJAM
          </p>

          {/* Heading */}
          <h1 className="max-w-[624px] text-[#111827] font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[48px] tracking-[-0.02em]">
            A catchy heading that brings some interest to visitors
          </h1>

          {/* Description */}
          <p className="max-w-[1216px] text-[#374151] font-normal text-sm sm:text-base leading-6">
            Tortor interdum condimentum nunc molestie quam lectus euismod
            pulvinar risus. Cursus in odio aenean.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureSection />
      <FeatureSection reverse />
      <FeatureSection />

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
