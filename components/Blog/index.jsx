import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    image: "/blog1.png",
    title: "How the flying fish swiftly flew by the space station.",
    description:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
    author: {
      name: "Loki Bright",
      avatar: "/Avatar Base.png",
    },
    date: "Oct 19, 2021",
    readTime: "5min read",
  },
  {
    id: 2,
    image: "/blog2.png",
    title: "How the flying fish swiftly flew by the space station.",
    description:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
    author: {
      name: "Loki Bright",
      avatar: "/Avatar Base.png",
    },
    date: "Oct 19, 2021",
    readTime: "5min read",
  },
  {
    id: 3,
    image: "/blog3.png",
    title: "How the flying fish swiftly flew by the space station.",
    description:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
    author: {
      name: "Loki Bright",
      avatar: "/Avatar Base.png",
    },
    date: "Oct 19, 2021",
    readTime: "5min read",
  },
];

export default function Blog() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[35px]">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        {/* Label */}
        <p className="text-[#6B7280] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">
          LATEST FROM THE BLOG
        </p>

        {/* Heading */}
        <h2 className="text-[#111827] font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight sm:leading-snug md:leading-[44px] tracking-[-0.02em] text-center mx-auto max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1034px]">
          Practical updates, market perspectives, and Sharia-aligned analysis — weekly. We never share your data.
        </h2>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
          />
        ))}
      </div>
    </section>
  );
}

