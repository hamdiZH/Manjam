import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import StatsSlider from "./StatsSlider";

// Icons
const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12L11 14L15 10M20.618 5.984C17.456 6.151 14.347 5.065 12 3C9.653 5.065 6.544 6.151 3.382 5.984C3.128 6.967 3 7.993 3 9.05C3 14.549 6.82 19.227 12 20.777C17.18 19.227 21 14.549 21 9.05C21 7.993 20.872 6.967 20.618 5.984Z"
      stroke="#1C4A3F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WalletIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 6.66667V5C17.5 4.08333 16.75 3.33333 15.8333 3.33333H4.16667C3.25 3.33333 2.5 4.08333 2.5 5V15C2.5 15.9167 3.25 16.6667 4.16667 16.6667H15.8333C16.75 16.6667 17.5 15.9167 17.5 15V13.3333M17.5 6.66667H10.8333C9.91667 6.66667 9.16667 7.41667 9.16667 8.33333V11.6667C9.16667 12.5833 9.91667 13.3333 10.8333 13.3333H17.5M17.5 6.66667V13.3333M13.3333 10H13.3417"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpDownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83333 14.1667V5.83333M5.83333 5.83333L3.33333 8.33333M5.83333 5.83333L8.33333 8.33333M14.1667 5.83333V14.1667M14.1667 14.1667L11.6667 12.1667M14.1667 14.1667L16.6667 12.1667"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3333 5L10.8333 12.5L7.5 9.16667L1.66667 15M18.3333 5H13.3333M18.3333 5V10"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 5V10L13.3333 11.6667M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PortfolioIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33333 6.66667L6.66667 10L10 6.66667M3.33333 6.66667V13.3333L6.66667 16.6667M3.33333 6.66667L6.66667 3.33333L10 6.66667M10 6.66667V13.3333M10 6.66667L13.3333 3.33333L16.6667 6.66667M10 13.3333L6.66667 16.6667M10 13.3333L13.3333 16.6667M6.66667 16.6667L10 13.3333M16.6667 6.66667L13.3333 10L10 13.3333M16.6667 6.66667V13.3333L13.3333 16.6667M13.3333 16.6667L10 13.3333"
      stroke="#10B981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowTrendUp = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 4L8 10L5.33333 7.33333L2 10.6667M14 4H10M14 4V8"
      stroke="#10B981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function RegulatedInfrastructure() {
  return (
    <FeatureCard
      icon={<ShieldIcon />}
      title="Regulated Infrastructure"
      description="Built on Swiss standards that delivers clarity, and future-aligned structure for the digital-asset ecosystem."
    >
      {/* Stats Cards Slider */}
      <StatsSlider>
        {/* Total Portfolio Value */}
        <StatCard
          icon={<WalletIcon />}
          label="Total portfolio value:"
          value="$12,480"
          subValue="↑ 00%"
        />

        {/* Today's Change */}
        <StatCard
          icon={<ArrowUpDownIcon />}
          label="Today's Change:"
          value="+$134.20"
          subValue="↑ 1.09%"
        />

        {/* Risk Profile */}
        <StatCard
          icon={<TrendingUpIcon />}
          label="Risk Profile:"
          value="Balanced"
        />

        {/* Last Sync */}
        <StatCard
          icon={<ClockIcon />}
          label="Last Sync:"
          value="5 mins ago"
        />

        {/* Portfolio Type */}
        <StatCard
          icon={<PortfolioIcon />}
          label="Portfolio Type:"
          value="Active"
        />
      </StatsSlider>

      {/* Asset Allocation */}
      <div className="relative w-full max-w-[660px] h-auto min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:h-[222px] p-4 sm:p-5 md:p-6 lg:p-8 gap-6 md:gap-10 bg-[linear-gradient(355.47deg,#EEEEF0_14.32%,rgba(235,235,237,0)_96.61%)] border border-[#E5E7EB] rounded-lg md:rounded-xl shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08)] overflow-hidden">
        <p className="text-[#6B7280] text-xs sm:text-sm mb-1">Asset allocation</p>
        <p className="text-[#111827] text-2xl sm:text-3xl md:text-4xl font-bold mb-2">78,909.72</p>
        <div className="flex items-center gap-2">
          <ArrowTrendUp />
          <span className="text-[#10B981] text-xs sm:text-sm font-medium">4.5%</span>
          <span className="text-[#9CA3AF] text-xs sm:text-sm">from last week</span>
        </div>
        {/* Bottom fade effect */}
        <div className="absolute -bottom-[40px] left-1/2 -translate-x-1/2 w-[200px] sm:w-[250px] md:w-[300px] h-[60px] sm:h-[70px] md:h-[80px] bg-[rgba(156,163,175,0.08)] rounded-[50%] blur-sm"></div>
      </div>
    </FeatureCard>
  );
}
