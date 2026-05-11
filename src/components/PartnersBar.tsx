const partners = [
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-5.png",
  "/images/partner-6.png",
];

const PartnersBar = () => {
  return (
    <section className="py-12 bg-background">
      <div className="bcs-container">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {partners.map((p, i) => (
            <img key={i} src={p} alt={`Partner ${i + 1}`} className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
