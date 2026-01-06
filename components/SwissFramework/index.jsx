import FrameworkCard from "./FrameworkCard";

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

const frameworkCards = [
  {
    id: "swiss",
    title: "Swiss-Anchored Structure",
    description:
      "Built through licensed Swiss partners to ensure clarity, governance, and professional oversight.",
  },
  {
    id: "principles",
    title: "Principles First",
    description:
      "Designed to reflect Islamic financial principles across all operational and structural elements.",
  },
  {
    id: "lqif",
    title: "Principles First",
    description:
      "Developed within Switzerland's L-QIF model, tailored for qualified participants in digital-asset strategies.",
  },
];

// Placeholder partner logos
const partners = [
  { id: 1, name: "Designership" },
  { id: 2, name: "Designership" },
  { id: 3, name: "Designership" },
  { id: 4, name: "Designership" },
  { id: 5, name: "Designership" },
  { id: 6, name: "Designership" },
];

export default function SwissFramework() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:pt-16 lg:pb-0">
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
        {/* Light Effect - Top Left - Hidden on small screens */}
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
        <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          {/* Heading */}
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-semibold leading-tight text-center mb-4 sm:mb-5 md:mb-6 max-w-4xl mx-auto">
            A Structured Swiss Framework for Qualified Participation
          </h2>

          {/* Subtext */}
          <p className="text-[rgba(255,255,255,0.7)] text-sm sm:text-base md:text-lg text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
            our first flagship foundation for our long-term roadmap, enabling us
            to build and evolve within one of the world&apos;s most trusted
            financial jurisdictions..
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto">
            {frameworkCards.map((card) => (
              <FrameworkCard
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1C4A3F] font-medium text-sm rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#6B7280]"
            >
              {/* Placeholder icon */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

