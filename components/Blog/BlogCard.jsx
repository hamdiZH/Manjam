import Image from "next/image";

export default function BlogCard({ image, title, description, author, date, readTime }) {
  return (
    <div className="flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]">
      {/* Image */}
      <div className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 sm:p-5 md:p-6 gap-3 sm:gap-4">
        {/* Title */}
        <h3 className="text-[#111827] text-base sm:text-lg font-semibold leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
          {/* Avatar */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Author Details */}
          <div className="flex flex-col">
            <span className="text-[#111827] text-xs sm:text-sm font-medium">{author.name}</span>
            <span className="text-[#6B7280] text-[10px] sm:text-xs">
              {date} • {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

