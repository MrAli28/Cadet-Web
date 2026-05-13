type PageBannerProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
};

const backgroundClassMap: Record<string, string> = {
  "/images/faculty-banner.jpg": "bg-[url('/images/faculty-banner.jpg')]",
  "/images/group-picture.jpg": "bg-[url('/images/group-picture.jpg')]",
  "/images/gallery-1.jpg": "bg-[url('/images/gallery-1.jpg')]",
  "/images/gallery-2.jpg": "bg-[url('/images/gallery-2.jpg')]",
};

const PageBanner = ({
  title,
  subtitle,
  backgroundImage = "/images/hero2.JPG",
}: PageBannerProps) => {
  const backgroundClass = "bg-[url('/images/hero2.JPG')]";

  return (
    <section className="relative h-[260px] md:h-[320px] bg-bcs-dark-navy overflow-hidden">
      <div
        className={`absolute inset-0 ${backgroundClass} bg-cover bg-center opacity-35`}
        style={{ backgroundPosition: "center 35%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bcs-dark-navy/90 to-bcs-navy/65" />

      <div className="relative z-10 bcs-container h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-lufga uppercase tracking-wide">{title}</h1>
        {subtitle ? (
          <p className="text-white/85 text-sm md:text-base mt-3 max-w-3xl leading-relaxed">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
};

export default PageBanner;
