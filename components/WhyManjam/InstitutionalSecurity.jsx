import Image from "next/image";

export default function InstitutionalSecurity() {
  return (
    <div className="flex flex-col w-full max-w-[700px] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] xl:h-[593px] p-4 sm:p-5 md:p-6 gap-4 sm:gap-5 md:gap-6 rounded-2xl md:rounded-3xl">
      {/* Image Container */}
      <div className="relative flex-1 overflow-hidden rounded-lg md:rounded-xl">
        {/* Security Image */}
        <Image
          src="/Institutional-Grade Security & Compliance.svg"
          alt="Institutional-Grade Security & Compliance"
          width={842}
          height={526}
          className="object-contain object-top w-full h-full rounded-[7.02px]"
        />
        
        {/* Bottom blur overlay */}
        <div className="absolute bottom-12 sm:bottom-14 md:bottom-18 left-0 right-0 h-[150px] sm:h-[200px] md:h-[250px] bg-linear-to-b from-transparent via-[rgba(229,231,235,0.8)] to-[rgba(229,231,235,1)] backdrop-blur-[93.55]"></div>
        
        {/* Description - positioned above blur */}
        <div className="absolute bottom-12 sm:bottom-14 md:bottom-18 left-0 right-0 h-[180px] sm:h-[230px] md:h-[300px] bg-linear-to-b from-transparent via-[rgba(229,231,235,0.8)] to-[#ffffff] backdrop-blur-[93.55]">
          <p className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 text-[#1C4A3F] text-sm sm:text-base md:text-lg font-medium italic leading-relaxed z-10">
            A multilayered security architecture rooted in global best practices
            ensures resilient operations, strong governance, and trusted standards.
          </p>
        </div>
      </div>
    </div>
  );
}
