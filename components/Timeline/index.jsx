import TimelineCard from "./TimelineCard";

const timelineData = [
  {
    id: "2020",
    year: "2020",
    title: "Founded in 2020",
    description:
      "Manjam Capital is shaping the region's first structured, Sharia-Compliant digital-asset ecosystem.",
  },
  {
    id: "2021",
    year: "2021",
    title: "Sharia board formed",
    description:
      "Create pages, drop in images, and tell your own story to engage visitors.",
  },
  {
    id: "2022",
    year: "2022",
    title: "Swiss-compliant framework approved",
    description:
      "Go live and share your business website with the outside world.",
  },
];

export default function Timeline() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-16 lg:pb-20 lg:pt-8 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        {/* Label */}
        <p className="text-[#6B7280] text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
          READY, SET, SHIP
        </p>

        {/* Heading */}
        <h2 className="max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1034px] mx-auto text-[#111827] text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold leading-tight sm:leading-snug md:leading-[44px] tracking-[-0.02em] text-center">
          Founded in 2020, Manjam Capital is shaping the region&apos;s first
          structured, Sharia-Compliant digital-asset ecosystem.
        </h2>
      </div>

      {/* Timeline Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1367px] mx-auto">
        {timelineData.map((item) => (
          <TimelineCard
            key={item.id}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

