"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const baseFolder = "/Manjam Website Galery | Website galary Compressed";

const galleryCategories = [
  {
    id: "Doha Islamic Conference 2025 _ WG",
    folder: "Doha Islamic Conference 2025 _ WG",
    images: [
      "DSC02919.jpg",
      "DSC02924.jpg",
      "DSC02939.jpg",
      "DSC02944.jpg",
      "DSC02966.jpg",
      "DSC02975.jpg",
    ],
  },
  {
    id: "Hamad bin khalifa _ WG",
    folder: "Hamad bin khalifa _ WG",
    images: ["DSC09762.jpg", "DSC09790.jpg", "DSC09807.jpg", "DSC09823.jpg"],
  },
  {
    id: "Jordan University _ WG",
    folder: "Jordan University _ WG",
    images: ["DSC05161.jpg", "DSC05162.jpg", "DSC05811.jpg"],
  },
  {
    id: "Manjam Courses _ WG",
    folder: "Manjam Courses _ WG",
    images: [
      "5L9A8159.jpg",
      "DSC00607.jpg",
      "DSC00636.jpg",
      "IMG_7137.jpg",
      "IMG_7175.jpg",
      "IMG_7627.jpg",
      "IMG_7641.jpg",
      "IMG_7688.jpg",
      "IMG_7730.jpg",
      "NKJ02371.jpg",
      "NKJ02455.jpg",
      "NKJ06621.jpg",
    ],
  },
  {
    id: "MENA fintech festival 2025 _ WG",
    folder: "MENA fintech festival 2025 _ WG",
    images: [
      "_B_N0706.jpg",
      "_B_N0734.jpg",
      "_B_N0758.jpg",
      "_B_N0794.jpg",
      "DSC07453.jpg",
      "DSC07458.jpg",
    ],
  },
  {
    id: "Qatar University _ WG",
    folder: "Qatar University _ WG",
    images: [
      "DSC09501.jpg",
      "DSC09512.jpg",
      "DSC09524.jpg",
      "DSC09533.jpg",
      "DSC09573.jpg",
    ],
  },
  {
    id: "Web Summit 2025 _ WG",
    folder: "Web Summit 2025 _ WG",
    images: ["DSC01917.jpg", "DSC01945.jpg", "DSC01993.jpg"],
  },
  {
    id: "اجتماعات متفرقة _ WG",
    folder: "اجتماعات متفرقة _ WG",
    images: ["IMG_6480.jpg", "IMG_6518.jpg"],
  },
  {
    id: "بيت المشورة _ WG",
    folder: "بيت المشورة _ WG",
    images: [
      "DSC00004.jpg",
      "DSC00014.jpg",
      "DSC00032.jpg",
      "DSC09917.jpg",
      "DSC09924.jpg",
      "DSC09980 (1).jpg",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.2 } },
};

const getTileClass = (index) => {
  if (index % 12 === 0) return "sm:col-span-2 sm:row-span-2";
  if (index % 9 === 0) return "md:col-span-2";
  if (index % 7 === 0) return "sm:row-span-2";
  return "";
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const imageItems = useMemo(
    () =>
      galleryCategories.flatMap((category) =>
        category.images.map((image) => ({
          id: `${category.id}-${image}`,
          category: category.id,
          src: encodeURI(`${baseFolder}/${category.folder}/${image}`),
        }))
      ),
    []
  );

  const categoryList = useMemo(
    () => ["All", ...galleryCategories.map((category) => category.id)],
    []
  );

  const categoryCounts = useMemo(() => {
    const counts = imageItems.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
    counts.All = imageItems.length;
    return counts;
  }, [imageItems]);

  const filteredItems =
    activeCategory === "All"
      ? imageItems
      : imageItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative overflow-hidden bg-[#F7F8F6]">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#6BAA7A]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-[#1C4A3F]/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-linear-to-b from-white via-white/80 to-transparent" />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-6xl px-6 pb-8 pt-28 sm:px-10 lg:px-12"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#1C4A3F]/70">
            <span className="h-px w-8 bg-[#1C4A3F]/30" />
            Manjam Gallery
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1
                className="text-4xl font-semibold text-[#0F1F19] sm:text-5xl lg:text-6xl"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0F1F19 0%, #14352D 45%, #6B7280 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Moments that shaped our journey
              </h1>
              <p className="mt-4 text-base text-[#4B5C55] sm:text-lg">
                A curated visual archive of Manjam&apos;s engagements, academic
                collaborations, and institutional milestones across the region.
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/70 px-5 py-4 text-sm text-[#1C4A3F] shadow-[0_24px_60px_rgba(15,31,25,0.08)] backdrop-blur">
              <div className="text-xs uppercase tracking-[0.3em] text-[#6B7A74]">
                Collection
              </div>
              <div className="mt-1 text-2xl font-semibold text-[#0F1F19]">
                {imageItems.length} images
              </div>
              <div className="mt-1 text-[#6B7A74]">
                {galleryCategories.length} categories
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-20 z-20 mx-auto w-full max-w-6xl px-6 pb-6 sm:px-10 lg:px-12"
      >
        <div className="flex flex-wrap items-center gap-2 rounded-3xl border border-white/70 bg-white/70 p-3 shadow-[0_18px_50px_rgba(15,31,25,0.08)] backdrop-blur">
          {categoryList.map((category) => {
            const isActive = category === activeCategory;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? "bg-[#14352D] text-white shadow-[0_10px_30px_rgba(20,53,45,0.35)]"
                    : "bg-white/80 text-[#14352D] hover:bg-white"
                }`}
              >
                <span className="relative z-10">{category}</span>
                <span className="ml-2 text-[10px] font-medium text-white/80">
                  {categoryCounts[category]}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="gallery-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#14352D]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <motion.section
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 lg:px-12"
      >
        <div className="grid auto-rows-[180px] grid-cols-1 gap-5 sm:auto-rows-[200px] sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_24px_60px_rgba(15,31,25,0.12)] ${getTileClass(
                  index
                )}`}
              >
                <Image
                  src={item.src}
                  alt={`${item.category} photo`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F1F19]/70 via-[#0F1F19]/30 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                      Category
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white backdrop-blur transition duration-300 group-hover:scale-105">
                    ↗
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}
