import Image from "next/image";
import FeatureCard from "./FeatureCard";

const featureCards = [
  {
    id: "control",
    title: "control your digital-asset journey",
    imageSrc: "/digital-asset-2.png",
    imageAlt: "Digital Asset Control",
  },
  {
    id: "security",
    title: "Security That Never Sleeps",
    imageSrc: "/digital-asset-3.png",
    imageAlt: "Security Robot",
  },
  {
    id: "connect",
    title: "Connect Smoothly, Act Seamlessly",
    imageSrc: "/digital-asset-4.png",
    imageAlt: "Seamless Connection",
  },
];

export default function DigitalAssetJourney() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
      {/* Hero Banner */}
      <div
        className="relative min-h-[400px] sm:min-h-[350px] md:min-h-[350px] lg:h-[350px] rounded-lg overflow-hidden mb-4 sm:mb-5 md:mb-6 p-4 sm:p-5 md:p-6 lg:p-[30px]"
        style={{
          background:
            "linear-gradient(106.81deg, rgba(240, 255, 249, 0.2) 10.74%, rgba(70, 184, 134, 0.2) 98.1%)",
          border: "1px solid rgba(229, 231, 235, 1)",
          boxShadow: "-10px 12px 24px 0px rgba(16, 24, 40, 0.12)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-[120px] h-full">
          {/* Left Content */}
          <div className="w-full lg:max-w-[50%] text-center lg:text-left">
            <h2 className="text-[#111827] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-3 sm:mb-4">
              control your digital-asset journey
            </h2>

            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 md:mb-8">
              Manjam Platform brings together Sharia-aligned structure, secure
              architecture, and seamless interaction giving you a clear, modern
              experience across every step.
            </p>

            <button className="w-full sm:w-auto flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#46B886] text-white font-medium text-sm hover:bg-[#3da677] transition-colors mx-auto lg:mx-0">
              Explore the platform
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <Image
              src="/digital-asset-1.png"
              alt="Digital Asset Platform"
              width={500}
              height={400}
              className="object-contain w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {featureCards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            id={card.id}
          />
        ))}
      </div>
    </section>
  );
}

