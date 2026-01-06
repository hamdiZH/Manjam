import Image from "next/image";

export default function FeatureCard({ id, title, imageSrc, imageAlt }) {
  return (
    <div
      className="flex flex-col w-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px] p-4 sm:p-5 md:p-6 lg:p-[30px] gap-4 sm:gap-6 md:gap-8 lg:gap-[41px] rounded-lg overflow-hidden"
      style={{
        background:
          "linear-gradient(106.81deg, rgba(240, 255, 249, 0.2) 10.74%, rgba(70, 184, 134, 0.2) 98.1%)",
        border: "1px solid rgba(229, 231, 235, 1)",
        boxShadow: "10px 12px 24px 0px rgba(16, 24, 40, 0.12)",
      }}
    >
      {/* Title */}
      <h3 className="text-[#111827] text-base sm:text-lg md:text-xl font-semibold leading-tight">
        {title}
      </h3>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={id === "control" ? 176 : id === "security" ? 292 : 310}
          height={id === "control" ? 200 : id === "security" ? 220 : 200}
          className="object-contain w-auto h-auto max-w-full max-h-[150px] sm:max-h-[180px] md:max-h-[200px] lg:max-h-[220px]"
        />
      </div>
    </div>
  );
}

