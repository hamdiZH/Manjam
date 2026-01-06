import ViewCard from "./ViewCard";

// Sparkles Icon
const SparklesIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L22 12L15.2857 14.1429L13 21L10.7143 14.1429L4 12L10.7143 9.85714L13 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const viewCards = [
  {
    id: "principles",
    title: "Principles First",
    description:
      "clarity, transparency, and alignment with Sharia foundations, forming the basis of every evaluation.",
  },
  {
    id: "analysis",
    title: "Structured Analysis",
    description:
      "A disciplined method that considers technology, utility, governance, and long-term relevance across digital assets.",
  },
  {
    id: "future",
    title: "Future Ready",
    description:
      "A forward-looking outlook shaped by emerging global regulations and evolving digital-asset trends.",
  },
  {
    id: "innovation",
    title: "Responsible Innovation",
    description:
      "Balancing modern digital-asset innovation with a focus on trust, structure, and sustainable long-term thinking",
  },
];

export default function OurView() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start xl:items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        {/* Left Side */}
        <div className="w-full lg:w-[280px] xl:w-[320px] 2xl:w-[380px] shrink-0 flex flex-col justify-center text-center lg:text-left">
          {/* Heading */}
          <h2 className="text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-semibold leading-tight mb-3 sm:mb-4">
            Our View on Digital Assets
          </h2>

          {/* Subtext */}
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 md:mb-8">
            A structured perspective that guides how we understand and navigate
            today&apos;s digital-asset landscape
          </p>

          {/* CTA Button */}
          <button className="w-full sm:w-fit mx-auto lg:mx-0 flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#46B886] text-white font-medium text-sm hover:bg-[#3da677] transition-colors">
            Start Securely
          </button>
        </div>

        {/* Right Side - Cards Grid */}
        <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 mt-4 lg:mt-0 lg:max-w-[750px] xl:max-w-[850px] 2xl:max-w-[900px]">
          {viewCards.map((card) => (
            <ViewCard
              key={card.id}
              icon={<SparklesIcon />}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

