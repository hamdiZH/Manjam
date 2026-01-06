import Image from "next/image";

// Badge Icons
const ShariahIcon = () => (
  <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-[#F3F4F6] rounded-md flex items-center justify-center">
    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="#6B7280" strokeWidth="1.5"/>
      <path d="M8 4V8L10.5 10.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
);

export default function Hero() {
  return (
    <section className="w-full py-4 sm:py-6 md:py-8">
      {/* Hero Container with Dark Background */}
      <div
        className="relative w-full rounded-xl md:rounded-2xl overflow-hidden"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, #111827 0%, #153830 100%)",
        }}
      >
        {/* Squares Pattern Overlay */}
        <Image
          src="/squares.svg"
          alt="Squares Pattern"
          fill
          className="absolute inset-0 opacity-50 z-0 object-cover"
        />

        {/* Light Effect Top Left */}
        <div
          className="absolute z-0 hidden sm:block"
          style={{
            width: '300px',
            height: '300px',
            top: '-150px',
            left: '-150px',
            background: 'radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.3) 0%, rgba(21, 56, 47, 0) 77.4%)',
            borderRadius: '24px',
          }}
        />
        <div
          className="absolute z-0 hidden md:block"
          style={{
            width: '400px',
            height: '400px',
            top: '-180px',
            left: '-180px',
            background: 'radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.3) 0%, rgba(21, 56, 47, 0) 77.4%)',
            borderRadius: '24px',
          }}
        />
        <div
          className="absolute z-0 hidden lg:block"
          style={{
            width: '500px',
            height: '500px',
            top: '-200px',
            left: '-200px',
            background: 'radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.3) 0%, rgba(21, 56, 47, 0) 77.4%)',
            borderRadius: '24px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 pb-6 md:pb-8">
          {/* Main Heading */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
            Invest in the future — safely
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mb-6 md:mb-8 leading-relaxed">
            The first integrated Arab ecosystem for Sharia-compliant digital assets. Swiss-regulated structure. GCC-anchored operations. Designed for safety.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
            {/* Swiss-regulated Badge */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full min-w-[190px] h-[45px]">
              <Image src="/swiss-icon.svg" alt="Swiss" width={32} height={32} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              <span className="text-white text-xs sm:text-sm">Swiss-regulated</span>
            </div>

            {/* Sharia-aligned Badge */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full min-w-[190px] h-[45px]">
              {/* <ShariahIcon /> */}
              <span className="text-white text-xs sm:text-sm">Sharia-aligned</span>
            </div>

            {/* Institutional security Badge */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full min-w-[190px] h-[45px]">
              <Image src="/security-icon.svg" alt="Security" width={32} height={32} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              <span className="text-white text-xs sm:text-sm whitespace-nowrap">Institutional security</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 md:mb-10 lg:mb-12 w-full sm:w-auto">
            {/* Learn More Button */}
            <button className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-white text-[#1C4A3F] font-medium text-sm rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </button>

            {/* Start Securely Button */}
            <button className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-[#46B886] text-white font-medium text-sm rounded-lg hover:bg-[#3da677] transition-colors">
              Start Securely
            </button>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative z-10 px-2 sm:px-4 md:px-6 lg:px-8 pb-0">
          <div className="relative mx-auto max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1200px]">
            <Image
              src="/dashboard.png"
              alt="Manjam Dashboard"
              width={1200}
              height={750}
              className="object-contain rounded-t-lg md:rounded-t-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
