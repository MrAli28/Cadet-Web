import PageBanner from "@/components/PageBanner";

const Contact = () => {
  return (
    <div className="page-block">
      <PageBanner title="Contact" subtitle="Campus address, inquiry form, and communication channels." />
      <section className="py-14 bg-bcs-light-gray">
        <div className="bcs-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Contact Information</h2>
            <div className="space-y-3 text-bcs-body-text text-sm md:text-base">
              <p><strong>Campus:</strong> Bahar Cadet School (BCS)</p>
              <p><strong>Phone:</strong> Add official helpline numbers</p>
              <p><strong>Email:</strong> Add official email address</p>
              <p><strong>Address:</strong> Add complete campus location</p>
            </div>
          </div>
          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-4">Office Hours</h3>
            <div className="space-y-2 text-bcs-body-text text-sm md:text-base">
              <p>Monday - Friday: 8:00 AM to 4:00 PM</p>
              <p>Saturday: 9:00 AM to 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <a href="#" className="bcs-btn-primary mt-6">Open Inquiry Form</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
