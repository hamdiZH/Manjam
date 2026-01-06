import FeatureCard from "./FeatureCard";

const DocumentIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.586C12.8512 3 13.1055 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
      stroke="#1C4A3F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FilterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.66667 4H13.3333M4.66667 8H11.3333M6.66667 12H9.33333"
      stroke="#6B7280"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tableData = [
  {
    label: "Asset",
    value: "Bitpay",
    hasIcon: true,
  },
  {
    label: "Type",
    value: "Crypto",
  },
  {
    label: "Balance",
    value: "0.045",
  },
  {
    label: "In Use",
    value: "0.045",
  },
  {
    label: "Available",
    value: "0.045",
  },
  {
    label: "Value (USD)",
    value: "$2300.00",
  },
];

export default function ShariahCompliant() {
  return (
    <FeatureCard
      icon={<DocumentIcon />}
      title="Sharia-Compliant"
      description="Guided by the principles of Islamic finance, ensuring transparency, and ethical alignment across the digital-asset environment."
    >
      {/* Asset Table */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {tableData.map((row, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              <span className="text-[#6B7280] text-sm sm:text-base">{row.label}</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {row.hasIcon && (
                  <span className="text-[#3B82F6] text-[10px] sm:text-xs font-medium bg-[#EFF6FF] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    bitpay
                  </span>
                )}
                <span className="text-[#111827] text-sm sm:text-base font-medium">
                  {row.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Button */}
        <div className="flex justify-end mt-3 sm:mt-4">
          <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#E5E7EB] rounded-lg text-[#6B7280] text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
            <FilterIcon />
            Filter
          </button>
        </div>
      </div>
    </FeatureCard>
  );
}
