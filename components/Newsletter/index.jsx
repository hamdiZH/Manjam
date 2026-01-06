import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="w-full pb-10 sm:pb-12 md:pb-16 bg-[#F3F4F6] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-start gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Left Side - Phone Mockups */}
        <div className="relative w-full lg:w-[45%] xl:w-[50%] min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px]">
          <div className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0">
            <Image
              src="/Content.svg"
              alt="Phone Mockups"
              width={700}
              height={800}
              className="object-contain w-[320px] sm:w-[450px] md:w-[550px] lg:w-[600px] xl:w-[700px] max-w-none"
            />
          </div>
        </div>

        {/* Right Side - Newsletter Form */}
        <div className="w-full lg:w-[55%] xl:w-[50%] max-w-[600px] px-4 sm:px-6 md:px-8 lg:px-0 lg:pr-8 xl:pr-[73px]">
          {/* Heading */}
          <h2 className="text-[#111827] text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-3 sm:mb-4 text-center lg:text-left">
            Stay Connected with our{" "}
            <span className="text-[#10B981]">newsletters</span>
          </h2>

          {/* Subtext */}
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 md:mb-8 text-center lg:text-left">
            Get the latest updates, insights, and announcements delivered directly to your
            inbox.
          </p>

          {/* Email Input Form */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 mb-3 sm:mb-4">
            <input
              type="email"
              placeholder="Enter Email address"
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#10B981] transition-colors"
            />
            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-[#46B886] text-white font-medium text-sm rounded-lg hover:bg-[#3da677] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-[#6B7280] text-xs sm:text-sm text-center lg:text-left">
            Your data is in the safe hands. Check out our{" "}
            <a href="#" className="text-[#10B981] hover:underline">
              Privacy policy
            </a>{" "}
            for more info.
          </p>
        </div>
      </div>
    </section>
  );
}

