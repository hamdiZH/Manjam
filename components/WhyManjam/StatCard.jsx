export default function StatCard({ icon, label, value, subValue, className = "" }) {
  return (
    <div
      className={`shrink-0 bg-[radial-gradient(100%_100%_at_0%_0%,#1C4A3F_0%,#0F2A24_100%)] rounded-lg md:rounded-xl p-3 sm:p-4 min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[225px] ${className}`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
        {icon}
        <span className="text-white/80 text-[10px] sm:text-xs">{label}</span>
      </div>
      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1">{value}</p>
      {subValue && <p className="text-[#10B981] text-[10px] sm:text-xs">{subValue}</p>}
    </div>
  );
}

