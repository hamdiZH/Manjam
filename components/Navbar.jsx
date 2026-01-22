"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

// Platform URLs - Update these with actual URLs
const PLATFORM_LOGIN_URL = "https://platform.manjamcapital.com";
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";

const ChevronDown = ({ className, isOpen }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
  >
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const serviceItems = [
  {
    id: "academy",
    title: "Academy",
    description: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    image: "/manjam dropdown.png",
  },
  {
    id: "fund",
    title: "Fund",
    description: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    image: "/manjam dropdown.png",
    badge: "Start your voyage",
  },
  {
    id: "platform",
    title: "Platform",
    description: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    image: "/manjam dropdown.png",
  },
];

const insightsItems = [
  { id: "articles", title: "Articles", description: "Tortor interdum condimentum nunc molestie", href: "/blogs" },
  { id: "news", title: "News", description: "Tortor interdum condimentum nunc molestie" },
  { id: "newsletter", title: "Newsletter", description: "Tortor interdum condimentum nunc molestie" },
];

const insightsLearnMore = [
  { id: "learn1", title: "Learn More", description: "Tortor interdum condimentum nunc molestie" },
  { id: "learn2", title: "Learn More", description: "Tortor interdum condimentum nunc molestie" },
  { id: "learn3", title: "Learn More", description: "Tortor interdum condimentum nunc molestie" },
];

const exploreItemsLeft = [
  { id: "why", title: "Why Manjam ?", description: "Tortor interdum condimentum nunc molestie" },
  { id: "about", title: "About", description: "Tortor interdum condimentum nunc molestie", href: "/about" },
  { id: "gallery", title: "Gallery", description: "Tortor interdum condimentum nunc molestie" },
];

const exploreItemsRight = [
  { id: "team", title: "Team", description: "Tortor interdum condimentum nunc molestie" },
  { id: "partners", title: "Partners", description: "Tortor interdum condimentum nunc molestie" },
  { id: "learnmore", title: "Learn More", description: "Tortor interdum condimentum nunc molestie" },
];

// Team members data
const teamMembers = [
  { id: 1, name: "Koray Okumus", role: "Sr. Developer", image: "/team.png" },
  { id: 2, name: "Nicolas Jesus", role: "Sr. Product Manager", image: "/team.png" },
  { id: 3, name: "Ava Wright", role: "Jr. Product Designer", image: "/team.png" },
  { id: 4, name: "Noah Pierre", role: "Sr. Product Designer", image: "/team.png" },
  { id: 5, name: "Lana Steiner", role: "Sr. Product Designer", image: "/team.png" },
  { id: 6, name: "Emma Wilson", role: "Frontend Developer", image: "/team.png" },
];

// Social Icons for Team Modal
const FacebookIconTeam = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 1.66667H12.5C11.395 1.66667 10.3352 2.10566 9.55376 2.88706C8.77236 3.66846 8.33337 4.72827 8.33337 5.83334V8.33334H5.83337V11.6667H8.33337V18.3333H11.6667V11.6667H14.1667L15 8.33334H11.6667V5.83334C11.6667 5.61232 11.7545 5.40036 11.9108 5.24408C12.0671 5.0878 12.279 5 12.5 5H15V1.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TwitterIconTeam = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.1667 2.5C18.3687 3.06288 17.4851 3.49338 16.55 3.775C16.0481 3.19788 15.3809 2.78893 14.6392 2.60328C13.8975 2.41763 13.1164 2.46434 12.4018 2.73704C11.6872 3.00974 11.0737 3.49533 10.6442 4.12809C10.2147 4.76086 9.99049 5.51028 10 6.275V7.10833C8.53559 7.14631 7.08439 6.82151 5.77584 6.16288C4.46729 5.50424 3.34191 4.53221 2.50004 3.33334C2.50004 3.33334 -0.833292 10.8333 6.66671 14.1667C4.9506 15.3317 2.90614 15.9158 0.833374 15.8333C8.33337 20 17.5 15.8333 17.5 6.25C17.4993 6.01788 17.4769 5.78633 17.4334 5.55834C18.2839 4.71958 18.884 3.66064 19.1667 2.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedInIconTeam = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3333 6.66667C14.6594 6.66667 15.9312 7.19346 16.8689 8.13114C17.8066 9.06882 18.3333 10.3406 18.3333 11.6667V17.5H15V11.6667C15 11.2246 14.8244 10.8007 14.5118 10.4882C14.1993 10.1756 13.7754 10 13.3333 10C12.8913 10 12.4674 10.1756 12.1548 10.4882C11.8423 10.8007 11.6667 11.2246 11.6667 11.6667V17.5H8.33333V11.6667C8.33333 10.3406 8.86012 9.06882 9.7978 8.13114C10.7355 7.19346 12.0073 6.66667 13.3333 6.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.00004 7.5H1.66671V17.5H5.00004V7.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.33337 5C4.25385 5 5.00004 4.25381 5.00004 3.33334C5.00004 2.41286 4.25385 1.66667 3.33337 1.66667C2.4129 1.66667 1.66671 2.41286 1.66671 3.33334C1.66671 4.25381 2.4129 5 3.33337 5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstagramIconTeam = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1667 1.66667H5.83337C3.53219 1.66667 1.66671 3.53215 1.66671 5.83334V14.1667C1.66671 16.4679 3.53219 18.3333 5.83337 18.3333H14.1667C16.4679 18.3333 18.3334 16.4679 18.3334 14.1667V5.83334C18.3334 3.53215 16.4679 1.66667 14.1667 1.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3333 9.475C13.4362 10.1685 13.3177 10.8769 12.9948 11.4992C12.6719 12.1215 12.1609 12.6262 11.5347 12.9414C10.9084 13.2566 10.1987 13.3663 9.50653 13.2549C8.81439 13.1436 8.17478 12.8167 7.67904 12.321C7.18331 11.8252 6.85645 11.1856 6.74511 10.4935C6.63377 9.80132 6.74343 9.09162 7.05862 8.46536C7.3738 7.83909 7.87854 7.32812 8.50085 7.00523C9.12315 6.68234 9.83156 6.56383 10.525 6.66667C11.2324 6.77158 11.8874 7.10122 12.3931 7.60691C12.8988 8.1126 13.2285 8.76757 13.3333 9.475Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5834 5.41667H14.5917" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIconLarge = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar() {
  const [language, setLanguage] = useState("EN");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const teamSliderRef = useRef(null);
  const pathname = usePathname();

  // Handle logo click - scroll to top if on homepage, otherwise navigate to homepage
  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleTeamClick = () => {
    setTeamModalOpen(true);
    setExploreOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSubscribeClick = () => {
    setSubscribeModalOpen(true);
    closeAllDropdowns();
    setMobileMenuOpen(false);
  };

  const scrollTeamSlider = (direction) => {
    if (teamSliderRef.current) {
      const scrollAmount = 320;
      if (direction === 'left') {
        teamSliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        teamSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: "Services", hasDropdown: true, id: "services" },
    { label: "Insights", hasDropdown: true, id: "insights" },
    { label: "Explore Manjam", hasDropdown: true, id: "explore" },
  ];

  const handleMouseEnter = (id) => {
    if (id === "services") {
      setServicesOpen(true);
      setInsightsOpen(false);
      setExploreOpen(false);
    } else if (id === "insights") {
      setInsightsOpen(true);
      setServicesOpen(false);
      setExploreOpen(false);
    } else if (id === "explore") {
      setExploreOpen(true);
      setServicesOpen(false);
      setInsightsOpen(false);
    }
  };

  const handleMouseLeave = (id) => {
    if (id === "services") setServicesOpen(false);
    if (id === "insights") setInsightsOpen(false);
    if (id === "explore") setExploreOpen(false);
  };

  // Close all dropdowns - used when navigating to a new page
  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setInsightsOpen(false);
    setExploreOpen(false);
  };

  const isActive = (id) => {
    if (id === "services") return servicesOpen;
    if (id === "insights") return insightsOpen;
    if (id === "explore") return exploreOpen;
    return false;
  };

  const toggleMobileDropdown = (id) => {
    setMobileActiveDropdown(mobileActiveDropdown === id ? null : id);
  };

  return (
    <nav className="w-full bg-white relative">
      <div className="flex items-center justify-between h-[60px] md:h-[70px] lg:h-[80px] px-4 md:px-6 lg:px-0 relative z-60 bg-white">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#1C4A3F] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Left - Navigation Menu (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 w-auto xl:w-[336px] h-5">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <button
                className={`flex items-center gap-1 font-medium text-xs xl:text-sm transition-all whitespace-nowrap font-(family-name:--font-space-grotesk) px-3 py-2 rounded-t-xl ${isActive(item.id)
                  ? "text-[#10B981] bg-white"
                  : "text-[#1C4A3F] hover:opacity-80"
                  }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={isActive(item.id) ? "text-[#10B981]" : "text-[#1C4A3F]"}
                    isOpen={isActive(item.id)}
                  />
                )}
              </button>

              {/* Services Dropdown */}
              {item.id === "services" && (
                <div
                  className={`absolute left-0 top-full rounded-b-2xl rounded-tr-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden ${servicesOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-[0.98]'
                    } transition-all duration-300 ease-out origin-top rounded-tl-2xl`}
                  style={{
                    width: '580px',
                    background: 'linear-gradient(135deg, #111827 0%, #1C4A3F 100%)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="p-5">
                    {/* Services Grid - 2 columns */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* The Fund */}
                      <Link
                        href="/#fund"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">The Fund</h3>
                        <p className="text-white/70 text-sm font-normal mb-2">Manjam Capital&apos;s Innovation Fund</p>
                        <p className="text-white/50 text-xs font-normal leading-relaxed">World class governance, shaped by Switzerland&apos;s best-in-class institutions.</p>
                      </Link>

                      {/* The Platform */}
                      <Link
                        href="/#platform"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">The Platform</h3>
                        <p className="text-white/70 text-sm font-normal mb-2">Manjam Capital&apos;s digital backbone</p>
                        <p className="text-white/50 text-xs font-normal leading-relaxed">One secure platform designed for a seamless end-to-end experience.</p>
                      </Link>

                      {/* The Academy */}
                      <Link
                        href="/#academy"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">The Academy</h3>
                        <p className="text-white/70 text-sm font-normal mb-2">Manjam Capital&apos;s education arm</p>
                        <p className="text-white/50 text-xs font-normal leading-relaxed">Leading the next era of specialized digital-asset and blockchain education.</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Insights Dropdown */}
              {item.id === "insights" && (
                <div
                  className={`absolute left-0 top-full rounded-b-2xl rounded-tr-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden ${insightsOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-[0.98]'
                    } transition-all duration-300 ease-out origin-top rounded-tl-2xl`}
                  style={{
                    width: '520px',
                    background: 'linear-gradient(135deg, #111827 0%, #1C4A3F 100%)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="p-5">
                    {/* Hero Card - Weekly Digest with Subscribe */}
                    <div
                      className="group relative p-5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-3 overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(70, 184, 134, 0.15) 0%, rgba(28, 74, 63, 0.2) 100%)'
                      }}
                    >
                      <div className="flex gap-4">
                        {/* Thumbnail */}
                        <div className="w-20 h-20 rounded-lg bg-linear-to-br from-[#46B886] to-[#1C4A3F] flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-2xl">M</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-1">Weekly Digest</h3>
                          <p className="text-white/70 text-sm font-normal mb-2">What matters most in digital assets this week.</p>
                          <p className="text-white/50 text-xs font-normal mb-3">Concise, clear, and built for professionals; a 4–5 minute read.</p>
                          <button
                            onClick={handleSubscribeClick}
                            className="flex items-center gap-2 px-4 py-2 bg-[#46B886] text-white text-sm font-medium rounded-lg hover:bg-[#3da677] transition-colors cursor-pointer"
                          >
                            Subscribe
                            <ArrowRightIcon />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Cards Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Articles */}
                      <Link
                        href="/blogs"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">Articles</h3>
                        <p className="text-white/60 text-sm font-normal leading-relaxed">Deep dives, frameworks, and professional-grade perspectives</p>
                      </Link>

                      {/* Market Updates */}
                      <Link
                        href="/blogs"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">Market Updates</h3>
                        <p className="text-white/60 text-sm font-normal leading-relaxed">Key moves, signals, and context; explained simply</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Explore Manjam Dropdown */}
              {item.id === "explore" && (
                <div
                  className={`absolute left-0 top-full rounded-b-2xl rounded-tr-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden ${exploreOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-[0.98]'
                    } transition-all duration-300 ease-out origin-top rounded-tl-2xl`}
                  style={{
                    width: '520px',
                    background: 'linear-gradient(135deg, #111827 0%, #1C4A3F 100%)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="p-5">
                    {/* Hero Card - Why Manjam with Photo */}
                    <Link
                      href="/#why-manjam"
                      onClick={closeAllDropdowns}
                      className="group relative flex gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-3 overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(70, 184, 134, 0.15) 0%, rgba(28, 74, 63, 0.2) 100%)'
                      }}
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-20 rounded-lg bg-linear-to-br from-[#46B886] to-[#1C4A3F] flex items-center justify-center shrink-0 overflow-hidden">
                        <Image
                          src="/manjam-logo.png"
                          alt="Manjam"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">Why Manjam?</h3>
                        <p className="text-white/70 text-sm font-normal leading-relaxed">The mission, the model, and what makes us different.</p>
                      </div>
                    </Link>

                    {/* Text-only Cards Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* About */}
                      <Link
                        href="/about"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">About</h3>
                        <p className="text-white/60 text-sm font-normal leading-relaxed">Who we are, what we build, and how we&apos;re structured.</p>
                      </Link>

                      {/* Team */}
                      <button
                        onClick={handleTeamClick}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-left w-full"
                      >
                        <h3 className="text-white font-bold text-base mb-1">Team</h3>
                        <p className="text-white/60 text-sm font-normal leading-relaxed">The people behind everything and the expertise we bring.</p>
                      </button>

                      {/* Partners */}
                      <Link
                        href="/#partners"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">Partners</h3>
                        <p className="text-white/60 text-sm font-normal leading-relaxed">Trusted institutions and collaborators we work with.</p>
                      </Link>

                      {/* Gallery */}
                      <Link
                        href="/#gallery"
                        onClick={closeAllDropdowns}
                        className="group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                      >
                        <h3 className="text-white font-bold text-base mb-1">Gallery</h3>
                        <p className="text-white/60 text-sm font-normal leading-relaxed">Highlights from events, releases, and visual insights.</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="block cursor-pointer"
            aria-label="Go to homepage"
          >
            <Image
              src="/manjam-logo.png"
              alt="Manjam Logo"
              width={130.2}
              height={42}
              priority
              className="object-contain w-[100px] md:w-[115px] lg:w-[130px]"
            />
          </Link>
        </div>

        {/* Right - Language Selector & Buttons */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 text-[#1C4A3F] font-medium text-xs md:text-sm hover:opacity-80 transition-opacity"
            >
              <span>{language}</span>
              <ChevronDown className="text-[#1C4A3F]" />
            </button>
            {langDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 min-w-[60px] z-50">
                <button
                  onClick={() => {
                    setLanguage("EN");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${language === "EN"
                    ? "text-[#1C4A3F] font-medium"
                    : "text-gray-600"
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLanguage("AR");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${language === "AR"
                    ? "text-[#1C4A3F] font-medium"
                    : "text-gray-600"
                    }`}
                >
                  AR
                </button>
              </div>
            )}
          </div>

          {/* Login Button - Outlined (Hidden on mobile) */}
          <a
            href={PLATFORM_LOGIN_URL}
            className="hidden md:flex items-center justify-center w-auto md:w-[100px] lg:w-[113px] h-[38px] md:h-[42px] lg:h-[46px] py-2 md:py-[14px] px-3 md:px-5 gap-2 rounded-lg border border-[#1C4A3F] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-[#1C4A3F] font-medium text-xs md:text-sm transition-all hover:bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] hover:text-white cursor-pointer"
          >
            Log in
          </a>

          {/* Become a Client Button - Primary CTA */}
          <a
            href={PLATFORM_REGISTER_URL}
            className="flex items-center justify-center w-auto h-[38px] md:h-[42px] lg:h-[46px] py-2 md:py-[14px] px-3 md:px-5 gap-2 rounded-lg border border-[#1C4A3F] bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-white font-medium text-xs md:text-sm transition-all hover:opacity-90 cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Become a Client</span>
            <span className="sm:hidden">Client</span>
          </a>
        </div>
      </div >

      {/* Mobile Menu */}
      < div
        className={`lg:hidden fixed inset-0 top-[60px] md:top-[70px] bg-white z-50 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`
        }
      >
        <div className="flex flex-col p-4 h-full overflow-y-auto">
          {/* Mobile Nav Items */}
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-[#E5E7EB]">
              <button
                onClick={() => toggleMobileDropdown(item.id)}
                className={`flex items-center justify-between w-full py-4 font-medium text-base ${mobileActiveDropdown === item.id ? "text-[#10B981]" : "text-[#1C4A3F]"
                  }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={mobileActiveDropdown === item.id ? "text-[#10B981]" : "text-[#1C4A3F]"}
                  isOpen={mobileActiveDropdown === item.id}
                />
              </button>

              {/* Mobile Dropdown Content */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileActiveDropdown === item.id ? 'max-h-[500px] pb-4' : 'max-h-0'
                }`}>
                {item.id === "services" && (
                  <div className="flex flex-col gap-4 pl-4">
                    {serviceItems.map((service) => (
                      <div key={service.id} className="flex flex-col gap-2">
                        <h4 className="text-[#111827] font-semibold">{service.title}</h4>
                        <p className="text-[#6B7280] text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                {item.id === "insights" && (
                  <div className="flex flex-col gap-4 pl-4">
                    {insightsItems.map((insight) => (
                      <div key={insight.id} className="flex flex-col gap-1">
                        {insight.href ? (
                          <Link href={insight.href} onClick={() => setMobileMenuOpen(false)} className="text-[#10B981] font-semibold italic hover:underline">
                            {insight.title}
                          </Link>
                        ) : (
                          <h4 className="text-[#10B981] font-semibold italic">{insight.title}</h4>
                        )}
                        <p className="text-[#6B7280] text-sm">{insight.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                {item.id === "explore" && (
                  <div className="flex flex-col gap-4 pl-4">
                    {exploreItemsLeft.map((explore) => (
                      <div key={explore.id} className="flex flex-col gap-1">
                        {explore.href ? (
                          <Link
                            href={explore.href}
                            className="text-[#10B981] font-semibold italic"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {explore.title}
                          </Link>
                        ) : (
                          <h4 className="text-[#10B981] font-semibold italic">{explore.title}</h4>
                        )}
                        <p className="text-[#6B7280] text-sm">{explore.description}</p>
                      </div>
                    ))}
                    {exploreItemsRight.map((explore) => (
                      <div
                        key={explore.id}
                        className="flex flex-col gap-1"
                        onClick={explore.id === "team" ? handleTeamClick : undefined}
                      >
                        <h4 className={`text-[#10B981] font-semibold ${explore.id === "team" ? "cursor-pointer" : ""}`}>{explore.title}</h4>
                        <p className="text-[#6B7280] text-sm">{explore.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Mobile Login Button */}
          <a
            href={PLATFORM_LOGIN_URL}
            className="md:hidden mt-4 flex items-center justify-center w-full h-[46px] py-[14px] px-5 gap-2 rounded-lg border border-[#1C4A3F] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-[#1C4A3F] font-medium text-sm transition-all hover:bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] hover:text-white cursor-pointer"
          >
            Log in
          </a>
        </div>
      </div >

      {/* Team Modal */}
      {
        teamModalOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-100 flex items-center justify-center p-4"
            onClick={() => setTeamModalOpen(false)}
          >
            <div
              className="bg-[#F9FAFB] rounded-2xl w-full max-w-[1200px] max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 md:p-12 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-[#111827] text-2xl sm:text-3xl md:text-4xl font-bold">
                    Meet our team
                  </h2>
                  <button
                    onClick={() => setTeamModalOpen(false)}
                    className="text-[#6B7280] hover:text-[#111827] transition-colors p-2"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <p className="text-[#6B7280] text-sm sm:text-base max-w-xl">
                  The Designership&apos;s team is made up of some of the best global talents
                </p>
              </div>

              {/* Team Cards Slider */}
              <div className="px-6 sm:px-8 md:px-12 pb-4">
                <div
                  ref={teamSliderRef}
                  className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="shrink-0 w-[220px] sm:w-[260px] md:w-[280px]"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      {/* Member Image */}
                      <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Member Info */}
                      <h3 className="text-[#111827] text-base sm:text-lg font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#6B7280] text-sm mb-3">
                        {member.role}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center gap-3">
                        <a href="#" className="text-[#6B7280] hover:text-[#111827] transition-colors">
                          <FacebookIconTeam />
                        </a>
                        <a href="#" className="text-[#6B7280] hover:text-[#111827] transition-colors">
                          <TwitterIconTeam />
                        </a>
                        <a href="#" className="text-[#6B7280] hover:text-[#111827] transition-colors">
                          <LinkedInIconTeam />
                        </a>
                        <a href="#" className="text-[#6B7280] hover:text-[#111827] transition-colors">
                          <InstagramIconTeam />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 flex items-center gap-4">
                <button
                  onClick={() => scrollTeamSlider('left')}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#111827] hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={() => scrollTeamSlider('right')}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#111827] hover:bg-gray-50 transition-colors"
                >
                  <ArrowRightIconLarge />
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* Subscribe Modal */}
      {
        subscribeModalOpen && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4"
            onClick={() => setSubscribeModalOpen(false)}
          >
            {/* Backdrop with high blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Modal Container - Liquid Glass */}
            <div
              className="relative w-full max-w-[500px] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.98) 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255,255,255,0.8)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSubscribeModalOpen(false)}
                className="absolute top-4 right-4 text-[#6B7280] hover:text-[#111827] transition-colors z-10 cursor-pointer"
              >
                <CloseIcon />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Header with Thumbnail */}
                <div className="flex gap-4 mb-4">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[#1C4A3F] to-[#111827] flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <div>
                    <h2 className="text-[#111827] font-bold text-xl mb-1">Al Bidaya Weekly</h2>
                    <p className="text-[#6B7280] text-sm flex items-center gap-2">
                      <span>Sunday by</span>
                      <span className="text-[#1C4A3F] font-medium">Manjam Capital</span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
                  Your weekly starting point in digital assets: a focused summary of what matters; clear, concise, and built for professionals.
                </p>

                {/* Social Proof */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-[#E5E7EB] border-2 border-white flex items-center justify-center">
                      <span className="text-[#6B7280] text-xs">👤</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#D1FAE5] border-2 border-white flex items-center justify-center">
                      <span className="text-[#10B981] text-xs">👤</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#FEF3C7] border-2 border-white flex items-center justify-center">
                      <span className="text-[#F59E0B] text-xs">👤</span>
                    </div>
                  </div>
                  <span className="text-[#46B886] text-sm font-medium">+1000 professionals</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#E5E7EB] mb-6" />

                {/* Form */}
                <form onSubmit={(e) => { e.preventDefault(); setSubscribeModalOpen(false); }} className="space-y-4">
                  {/* Email Field */}
                  <div>
                    <label className="block text-[#111827] text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="hello@manjam.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#46B886] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* First Name Field */}
                  <div>
                    <label className="block text-[#111827] text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#46B886] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Subscribe Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 border-[#1C4A3F] bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-white md:text-sm hover:opacity-90 whitespace-nowrap font-medium text-sm rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <ArrowRightIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      }
    </nav >
  );
}

