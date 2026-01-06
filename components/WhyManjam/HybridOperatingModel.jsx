import FeatureCard from "./FeatureCard";

const LayersIcon = () => (
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

const WalletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z"
      fill="white"
    />
    <path
      d="M3 9V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V9"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DollarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#1C4A3F" strokeWidth="1.5" />
    <path
      d="M12 6V18M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
      stroke="#1C4A3F"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowUpDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17V7M7 7L4 10M7 7L10 10M17 7V17M17 17L14 14M17 17L20 14"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HybridOperatingModel() {
  return (
    <FeatureCard
      icon={<LayersIcon />}
      title="Hybrid Operating Model"
      description="Strengthened through a GCC operational base, unites traditional structural rigor with the efficiency and innovation of modern digital-asset technologies."
    >
      {/* Total Wallet Balance Card */}
      <div className="bg-[radial-gradient(100%_100%_at_0%_0%,#1C4A3F_0%,#0F2A24_100%)] rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <WalletIcon />
            <span className="text-white/80 text-sm sm:text-base">Total wallet balance:</span>
          </div>
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold">$2,915.42</p>
        </div>
      </div>

      {/* Available Balance Card */}
      <div className="bg-white border border-[#E5E7EB] rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2 sm:gap-3">
            <DollarIcon />
            <span className="text-[#6B7280] text-sm sm:text-base">Available:</span>
          </div>
          <p className="text-[#111827] text-lg sm:text-xl md:text-2xl font-bold">$1,700.00</p>
        </div>
      </div>

      {/* Faded Transaction Card */}
      <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 opacity-60">
        <div className="flex items-center gap-2 sm:gap-3">
          <ArrowUpDownIcon />
        </div>
      </div>
    </FeatureCard>
  );
}
