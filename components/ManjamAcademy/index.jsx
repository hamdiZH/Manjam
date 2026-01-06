import AcademyCard from "./AcademyCard";

const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const academyCards = [
  {
    id: "courses",
    title: "Certified Courses",
    description:
      "Structured programs in blockchain, digital assets, and Islamic finance—designed for clear, practical learning.",
  },
  {
    id: "community",
    title: "Community Learning",
    description:
      "Live Majlis Manjam sessions, expert discussions that build a connected, knowledge-driven community.",
  },
  {
    id: "workshops",
    title: "Certified Workshops",
    description:
      "Focused, hands-on training on specialized and high-demand topics within the digital-asset space.",
  },
  {
    id: "integration",
    title: "Seamless Integration",
    description:
      "A unified ecosystem that links education with real-world digital-asset tools for continuous, applied learning.",
  },
];

export default function ManjamAcademy() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
      {/* Main Dark Section */}
      <div
        className="relative mx-2 sm:mx-4 md:mx-6 lg:mx-4 rounded-lg sm:rounded-xl overflow-hidden backdrop-blur-md"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #111827 0%, #153830 100%)",
          border: "1px solid",
          borderImageSource:
            "linear-gradient(106.89deg, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0.00431373) 98.8%)",
          boxShadow: "0px 4px 4px 0px rgba(7, 19, 16, 0.25)",
        }}
      >
        {/* Light Effect - Top Left - Responsive sizes */}
        <div
          className="absolute pointer-events-none hidden sm:block"
          style={{
            width: "400px",
            height: "400px",
            top: "-200px",
            left: "-200px",
            background:
              "radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.5) 0%, rgba(21, 56, 47, 0) 77.4%)",
            transform: "rotate(-134.41deg)",
            borderRadius: "24px",
          }}
        ></div>
        <div
          className="absolute pointer-events-none hidden md:block"
          style={{
            width: "550px",
            height: "550px",
            top: "-250px",
            left: "-250px",
            background:
              "radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.5) 0%, rgba(21, 56, 47, 0) 77.4%)",
            transform: "rotate(-134.41deg)",
            borderRadius: "24px",
          }}
        ></div>
        <div
          className="absolute pointer-events-none hidden lg:block"
          style={{
            width: "700px",
            height: "700px",
            top: "-300px",
            left: "-300px",
            background:
              "radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.5) 0%, rgba(21, 56, 47, 0) 77.4%)",
            transform: "rotate(-134.41deg)",
            borderRadius: "24px",
          }}
        ></div>

        {/* Squares Pattern Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/squares.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-20">
          {/* Heading */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold leading-tight text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Manjam Academy
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto">
            {academyCards.map((card) => (
              <AcademyCard
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-[#46B886] text-[#46B886] font-medium text-sm rounded-lg hover:bg-[#46B886] hover:text-white transition-colors">
              Learn More
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

