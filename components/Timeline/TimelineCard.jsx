export default function TimelineCard({ year, title, description }) {
  return (
    <div className="flex flex-col w-full gap-3 sm:gap-4 md:gap-5">
      {/* Year */}
      <span className="text-[#10B981] text-xs sm:text-sm font-medium">{year}</span>

      {/* Title */}
      <h3 className="text-[#111827] text-base sm:text-lg md:text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}

