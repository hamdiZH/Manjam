export default function FeatureCard({ icon, title, description, children }) {
  return (
    <div className="flex flex-col w-full max-w-[700px] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:h-[593px] p-4 sm:p-5 md:p-6 gap-4 sm:gap-5 md:gap-6 bg-[rgba(243,244,246,0.5)] border border-[rgba(229,231,235,1)] rounded-2xl md:rounded-3xl shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]">
      {/* Card Header */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#E6F7F1] rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h3 className="text-[#111827] font-semibold text-base sm:text-lg">{title}</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>

      {/* Description */}
      <p className="text-[#1C4A3F] text-sm sm:text-base md:text-lg font-medium italic leading-relaxed">
        {description}
      </p>
    </div>
  );
}

