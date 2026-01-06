export default function ViewCard({ icon, title, description }) {
  return (
    <div className="flex flex-col w-full h-auto min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[230px] xl:min-h-[252px] p-4 sm:p-5 md:p-6 gap-3 sm:gap-4 md:gap-5 bg-[rgba(243,244,246,0.5)] border border-[rgba(229,231,235,1)] rounded-lg shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] hover:shadow-lg transition-shadow">
      {/* Icon */}
      <div className="text-[#10B981]">{icon}</div>

      {/* Title */}
      <h3 className="text-[#111827] text-base sm:text-lg md:text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  );
}

