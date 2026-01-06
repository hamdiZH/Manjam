"use client";

import { useEffect, useRef, useState } from "react";
import RegulatedInfrastructure from "./WhyManjam/RegulatedInfrastructure";
import ShariahCompliant from "./WhyManjam/ShariahCompliant";
import InstitutionalSecurity from "./WhyManjam/InstitutionalSecurity";
import HybridOperatingModel from "./WhyManjam/HybridOperatingModel";

const tabs = [
  {
    id: "regulated",
    label: "Regulated Infrastructure",
    component: RegulatedInfrastructure,
  },
  {
    id: "sharia",
    label: "Sharia-Compliant",
    component: ShariahCompliant,
  },
  {
    id: "security",
    label: "Institutional-Grade Security & Compliance",
    component: InstitutionalSecurity,
  },
  {
    id: "hybrid",
    label: "Hybrid Operating Model",
    component: HybridOperatingModel,
  },
];

export default function WhyManjam() {
  const [activeTab, setActiveTab] = useState("regulated");
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll-based navigation (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled into the section
      const scrollProgress = -sectionTop / (sectionHeight - windowHeight);

      // Determine which tab should be active based on scroll progress
      if (scrollProgress <= 0) {
        setActiveTab("regulated");
      } else if (scrollProgress < 0.25) {
        setActiveTab("regulated");
      } else if (scrollProgress < 0.5) {
        setActiveTab("sharia");
      } else if (scrollProgress < 0.75) {
        setActiveTab("security");
      } else {
        setActiveTab("hybrid");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const ActiveComponent = activeTabData?.component;

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: isMobile ? 'auto' : `${100 * tabs.length}vh` }}
    >
      <div
        ref={contentRef}
        className={`${isMobile ? 'relative py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-10' : 'sticky top-0 flex items-center py-10 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-10'}`}
      >
        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Side */}
          <div className="w-full lg:w-[45%] xl:w-[40%]">
            {/* Label */}
            <p className="text-[#10B981] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3 md:mb-4">
              WHY MANJAM?
            </p>

            {/* Heading */}
            <h2 className="text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-semibold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              Designed for safety, clarity, and long-term growth.
            </h2>

            {/* Tabs - Horizontal scroll on mobile, vertical on desktop */}
            <div className="relative">
              {/* Mobile: Horizontal tabs */}
              <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-4 px-4">
                {tabs.map((tab, index) => {
                  const isActive = index === activeTabIndex;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-[#10B981] text-white"
                          : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Desktop: Vertical tabs with progress line */}
              <div className="hidden lg:block">
                {/* Background vertical line (gray) */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E5E7EB]" style={{ height: '200px' }}></div>
                
                {/* Filled vertical line (green) - grows based on active tab */}
                <div 
                  className="absolute left-0 top-0 w-[2px] bg-[#10B981] transition-all duration-300"
                  style={{ height: `${((activeTabIndex + 1) / tabs.length) * 200}px` }}
                ></div>

                <div className="flex flex-col">
                  {tabs.map((tab, index) => {
                    const isPassed = index < activeTabIndex;
                    const isActive = index === activeTabIndex;
                    
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative pl-4 lg:pl-5 xl:pl-6 py-2 lg:py-2.5 xl:py-3 text-left transition-all duration-300 text-sm lg:text-base ${
                          isActive
                            ? "text-[#111827] font-semibold"
                            : isPassed
                            ? "text-[#6B7280] font-normal"
                            : "text-[#9CA3AF] font-normal hover:text-[#6B7280]"
                        }`}
                      >
                        {/* Dot indicator for active item */}
                        {isActive && (
                          <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#10B981] rounded-full transition-all duration-300"></div>
                        )}
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Card */}
          <div className="w-full lg:w-[55%] xl:w-[60%] mt-6 lg:mt-0">
            <div className="transition-opacity duration-500">
              {ActiveComponent && <ActiveComponent />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
