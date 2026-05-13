import PageBanner from "@/components/PageBanner";

const Alumni = () => {
  return (
    <div className="page-block">
      <PageBanner title="Alumni" subtitle="Our distinguished alumni and their achievements." />
      <section className="py-14 bg-bcs-light-gray">
        <div className="bcs-container grid grid-cols-1 gap-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Alumni</h2>
            <p className="text-bcs-body-text mb-4">
              Bahar Cadet School alumni have gone on to excel in academics, public
              service, and professional careers worldwide. This page highlights
              notable alumni, reunion news, and ways to stay connected with the
              BCS community.
            </p>
            <div className="space-y-3 text-bcs-body-text text-sm md:text-base">
              <p><strong>Join the Alumni Network:</strong> Email us to subscribe to alumni updates.</p>
              <p><strong>Share Your Story:</strong> Send news about your achievements or events.</p>
              <p><strong>Reunions & Events:</strong> Find upcoming alumni gatherings and registration links here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
