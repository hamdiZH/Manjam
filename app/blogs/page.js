import Image from "next/image";

// Featured Blog Card (Left side - large)
const FeaturedBlogCard = () => (
  <div className="flex flex-col gap-4">
    {/* Featured Image */}
    <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
      <Image
        src="/blog1.png"
        alt="Featured blog"
        fill
        className="object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-3">
      <h2 className="text-[#111827] font-bold text-xl sm:text-2xl md:text-[28px] leading-tight">
        Flying fish swiftly flew by the space station.
      </h2>
      <p className="text-[#6B7280] font-normal text-sm sm:text-base leading-relaxed">
        Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque
        ornare pharetra faucibs arcu. Mauris blandit egestas nibh.
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 mt-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/Avatar Base.png"
            alt="Loki Bright"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#111827] font-medium text-sm">
            Loki Bright
          </span>
          <span className="text-[#6B7280] text-sm">
            Oct 19, 2021 • 5min read
          </span>
        </div>
      </div>
    </div>
  </div>
);

// Small Blog Card (Right side - stacked)
const SmallBlogCard = ({ image = "/blog1.png" }) => (
  <div className="flex gap-4 items-start">
    {/* Thumbnail */}
    <div className="relative w-[140px] sm:w-[160px] h-[100px] sm:h-[110px] shrink-0 rounded-lg overflow-hidden">
      <Image src={image} alt="Blog thumbnail" fill className="object-cover" />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2">
      <h3 className="text-[#111827] font-bold text-base sm:text-lg leading-snug">
        Flying fish swiftly flew by the space station.
      </h3>
      <p className="text-[#6B7280] font-normal text-sm leading-relaxed line-clamp-2">
        Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque
        ornare pharetra fau.
      </p>
    </div>
  </div>
);

// Grid Blog Card
const GridBlogCard = ({ image = "/blog1.png" }) => (
  <div
    className="rounded-xl overflow-hidden bg-white"
    style={{
      boxShadow: "0px 6px 15px -2px rgba(16, 24, 40, 0.08)",
    }}
  >
    {/* Image */}
    <div
      className="relative w-full aspect-4/3 m-4 mb-0 rounded-lg overflow-hidden"
      style={{ width: "calc(100% - 32px)" }}
    >
      <Image src={image} alt="Blog" fill className="object-cover" />
    </div>

    {/* Content */}
    <div className="p-4 pt-5 flex flex-col gap-3">
      <h3 className="text-[#111827] font-bold text-lg leading-snug">
        How the flying fish swiftly flew by the space station.
      </h3>
      <p className="text-[#6B7280] font-normal text-sm leading-relaxed">
        Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque
        ornare pharetra faucibs arcu. Mauris blandit egestas nibh.
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 mt-1">
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <Image
            src="/Avatar Base.png"
            alt="Loki Bright"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#111827] font-medium text-sm">
            Loki Bright
          </span>
          <span className="text-[#6B7280] text-xs">
            Oct 19, 2021 • 5min read
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Featured Posts */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-[112px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Featured Post */}
            <div className="w-full lg:w-1/2">
              <FeaturedBlogCard />
            </div>

            {/* Right - Small Posts Stack */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <SmallBlogCard image="/blog1.png" />
              <SmallBlogCard image="/blog2.png" />
              <SmallBlogCard image="/blog3.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-[112px] bg-[#F9FAFB]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <GridBlogCard image="/blog1.png" />
            <GridBlogCard image="/blog2.png" />
            <GridBlogCard image="/blog3.png" />
            <GridBlogCard image="/blog1.png" />
            <GridBlogCard image="/blog2.png" />
            <GridBlogCard image="/blog3.png" />
          </div>
        </div>
      </section>
    </div>
  );
}
