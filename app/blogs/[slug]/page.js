import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsPage({ params }) {
  const { slug } = params;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb & Tags Section */}
      <section className="w-full pt-8 pb-4 px-5">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-4">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] rounded-full w-fit">
            <Link
              href="/blogs"
              className="text-[#111827] text-sm font-medium hover:underline"
            >
              News
            </Link>
            <span className="text-[#6B7280] text-sm">/</span>
            <span className="text-[#10B981] text-sm font-medium italic">
              News details (How the flying fish swiftly flew by the space
              station.)
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 bg-[#F3F4F6] rounded-full text-[#374151] text-sm font-medium">
              Date: 05.03.2025 - today
            </span>
            <span className="px-4 py-2 bg-[#F3F4F6] rounded-full text-[#374151] text-sm font-medium">
              Bitcoin
            </span>
            <span className="px-4 py-2 bg-[#F3F4F6] rounded-full text-[#374151] text-sm font-medium">
              Crypto
            </span>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <article className="w-full py-8 sm:py-12 md:py-16 px-5">
        <div className="w-full mx-auto bg-[#F9FAFB] px-3">
          {/* Blog Header - Centered */}
          <header className="flex flex-col items-center gap-4 mb-8 text-center">
            {/* Title */}
            <h1 className="text-[#111827] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-[800px]">
              How the flying fish swiftly flew by the space station
            </h1>

            {/* Author Info - Centered */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/Avatar Base.png"
                  alt="Loki Bright"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[#111827] font-medium text-sm">
                  Loki Bright
                </span>
                <span className="text-[#6B7280] text-sm">October 20, 2023</span>
              </div>
            </div>

            {/* Engagement Stats */}
            <div className="flex items-center gap-4 text-[#6B7280]">
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66667 7.33333V13.3333M1.33333 8.66667V12C1.33333 12.7364 1.93029 13.3333 2.66667 13.3333H11.4627C12.3646 13.3333 13.1264 12.6874 13.2713 11.7977L13.9379 7.79771C14.1171 6.70048 13.2696 5.71429 12.1293 5.71429H9.33333V3.33333C9.33333 2.22876 8.4379 1.33333 7.33333 1.33333C7.05719 1.33333 6.82497 1.53907 6.78739 1.81278L6.31096 5.18609C6.19819 6.00662 5.49389 6.62857 4.66667 6.62857H4.66667C2.82572 6.62857 1.33333 7.53333 1.33333 8.66667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">5</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">3</span>
              </div>
            </div>
          </header>

          {/* Intro Paragraph */}
          <p className="text-[#374151] text-base leading-relaxed mb-8">
            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh
            scelerisque congue velit. Quam eget quisque interdum dictumst
            eleifend venenatis cras feugiat. Nunc diam risus sagittis in
            adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi
            sem id. Id commodo volutpat platea nisi, nec venenatis pulvinar
            neque, ac. Odio dolor id potenti aliquam mi in nunc at sollicitudin.
            Magna felis, leo sed nec.
          </p>

          {/* Featured Image */}
          <div className="mb-2">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <Image
                src="/blog1.png"
                alt="Blog featured image"
                fill
                className="object-cover"
              />
            </div>
            {/* Image Caption */}
            <p className="text-[#6B7280] text-sm mt-2">
              Image courtesy via{" "}
              <Link href="#" className="underline hover:text-[#111827]">
                Designership
              </Link>
            </p>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#E5E7EB] my-8" />

          {/* Blog Content */}
          <div className="max-w-none">
            {/* Section: Building the foundations */}
            <h2 className="text-[#111827] font-bold text-xl sm:text-2xl mb-4">
              Building the foundations
            </h2>

            <p className="text-[#374151] text-base leading-relaxed mb-6">
              Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh
              scelerisque congue velit. Quam eget quisque interdum dictumst
              eleifend venenatis cras feugiat. Nunc diam risus sagittis in
              adipiscing nunc. Pharetra aliquam gravida bibendum orci diam nisi
              sem id. Id commodo volutpat platea nisi, nec venenatis pulvinar
              neque, ac. Odio dolor id potenti aliquam mi in nunc at
              sollicitudin. Magna felis, leo sed nec.
            </p>

            <p className="text-[#374151] text-base leading-relaxed mb-4">
              Here&apos;s what dolor id potenti aliquam mi in nunc at
              sollicitudin:
            </p>

            {/* Bullet List */}
            <ul className="list-disc list-outside pl-5 space-y-3 mb-6">
              <li className="text-[#374151] text-base leading-relaxed">
                <span className="font-bold">Sit mauris proin:</span> The quam
                dignissim nisi gravida pellentesque porta. Scelerisque porta
                ipsum non mattis nisi.
              </li>
              <li className="text-[#374151] text-base leading-relaxed">
                <span className="font-bold">Sit mauris proin:</span> The quam
                dignissim nisi gravida pellentesque porta. Scelerisque porta
                ipsum non mattis nisi. The quam dignissim nisi gravida
                pellentesque porta.
              </li>
              <li className="text-[#374151] text-base leading-relaxed">
                <span className="font-bold">Sit mauris proin:</span> The quam
                dignissim nisi gravida pellentesque porta. Scelerisque porta
                ipsum non mattis nisi. Scelerisque porta ipsum non mattis nisi.
                The quam dignissim nisi gravida pellentesque porta. Scelerisque
                porta ipsum non mattis nisi.
              </li>
            </ul>

            <p className="text-[#374151] text-base leading-relaxed mb-8">
              Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh
              scelerisque congue velit. Quam eget quisque interdum dictumst
              eleifend venenatis cras feugiat. Nunc diam risus sagittis in
              adipiscing nunc.
            </p>

            {/* Section: How we managed to create a dark mode */}
            <h2 className="text-[#111827] font-bold text-xl sm:text-2xl mb-4">
              How we managed to create a dark mode
            </h2>

            <p className="text-[#374151] text-base leading-relaxed mb-6">
              Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh
              scelerisque congue velit. Quam eget quisque interdum dictumst
              eleifend venenatis cras feugiat. Nunc diam risus sagittis in
              adipiscing nunc.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-[#10B981] pl-6 py-2 mb-6">
              <p className="text-[#374151] text-base leading-relaxed italic mb-2">
                &quot;Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh
                scelerisque congue velit. Quam eget quisque interdum dictumst
                eleifend venenatis cras feugiat. Nunc diam risus sagittis in
                adipiscing nunc.&quot;
              </p>
              <cite className="text-[#6B7280] text-sm not-italic">
                -- By Loki Bright
              </cite>
            </blockquote>
          </div>

          {/* Comments Section */}
          <div className="mt-8 bg-[#F3F4F6] rounded-xl p-6">
            {/* Add Comment */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-[#10B981]">
                <Image
                  src="/Avatar Base.png"
                  alt="Your avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="flex-1 bg-white border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#374151] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
                <button className="px-6 py-3 bg-[#D4A853] text-white font-medium text-sm rounded-lg hover:bg-[#C49A48] transition-colors">
                  Post
                </button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/Avatar Base.png"
                    alt="Ralph Edwards"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[#111827] font-semibold text-base">
                      Ralph Edwards
                    </span>
                    <span className="text-[#6B7280] text-sm">Aug 19, 2021</span>
                  </div>
                  <p className="text-[#374151] text-base leading-relaxed mb-3">
                    In mauris porttitor tincidunt mauris massa sit lorem sed
                    scelerisque. Fringilla pharetra vel massa enim sollicitudin
                    cras. At pulvinar eget sociis adipiscing eget donec
                    ultricies nibh tristique.
                  </p>
                  <div className="flex items-center gap-4 text-[#6B7280] justify-end">
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66667 7.33333V13.3333M1.33333 8.66667V12C1.33333 12.7364 1.93029 13.3333 2.66667 13.3333H11.4627C12.3646 13.3333 13.1264 12.6874 13.2713 11.7977L13.9379 7.79771C14.1171 6.70048 13.2696 5.71429 12.1293 5.71429H9.33333V3.33333C9.33333 2.22876 8.4379 1.33333 7.33333 1.33333C7.05719 1.33333 6.82497 1.53907 6.78739 1.81278L6.31096 5.18609C6.19819 6.00662 5.49389 6.62857 4.66667 6.62857H4.66667C2.82572 6.62857 1.33333 7.53333 1.33333 8.66667Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm">5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm">3</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/Avatar Base.png"
                    alt="Ralph Edwards"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[#111827] font-semibold text-base">
                      Ralph Edwards
                    </span>
                    <span className="text-[#6B7280] text-sm">Aug 19, 2021</span>
                  </div>
                  <p className="text-[#374151] text-base leading-relaxed">
                    In mauris porttitor tincidunt mauris massa sit lorem sed
                    scelerisque. Fringilla pharetra vel massa enim sollicitudin
                    cras. At pulvinar eget sociis adipiscing eget donec
                    ultricies nibh tristique.
                  </p>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/Avatar Base.png"
                    alt="Ralph Edwards"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[#111827] font-semibold text-base">
                      Ralph Edwards
                    </span>
                    <span className="text-[#6B7280] text-sm">Aug 19, 2021</span>
                  </div>
                  <p className="text-[#374151] text-base leading-relaxed">
                    In mauris porttitor tincidunt mauris massa sit lorem sed
                    scelerisque. Fringilla pharetra vel massa enim sollicitudin
                    cras. At pulvinar eget sociis adipiscing eget donec
                    ultricies nibh tristique.
                  </p>
                </div>
              </div>
            </div>

            {/* See More Comments */}
            <button className="mt-6 text-[#6B7280] text-sm font-medium hover:text-[#111827] transition-colors">
              See 10 more comments
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
