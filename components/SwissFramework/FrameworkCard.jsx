const SparklesIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L22 12L15.2857 14.1429L13 21L10.7143 14.1429L4 12L10.7143 9.85714L13 3Z"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FrameworkCard({ title, description }) {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-transparent rounded-lg backdrop-blur-sm"
      style={{
        border: "0.5px solid",
        borderImage: "linear-gradient(92.87deg, #FFFFFF 4.19%, #999999 130.18%) 1",
      }}
    >
      {/* Icon */}
      <div>
        <SparklesIcon />
      </div>

      {/* Title */}
      <h3 className="text-white text-base sm:text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-[rgba(255,255,255,0.7)] text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

