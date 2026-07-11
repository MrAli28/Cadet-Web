import { useState } from "react";
import { toast } from "sonner";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-block">
      <PageBanner title="Contact" subtitle="Campus address, inquiry form, and communication channels." />
      <section className="py-14 bg-bcs-light-gray">
        <div className="bcs-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Contact Information</h2>
            <div className="space-y-3 text-bcs-body-text text-sm md:text-base">
              <p><strong>Campus:</strong> Basic Concept School (BCS)</p>
              <p><strong>Phone:</strong> Add official helpline numbers</p>
              <p><strong>Email:</strong> Add official email address</p>
              <p><strong>Address:</strong> Add complete campus location</p>
            </div>
            
            <h3 className="text-xl font-bold text-bcs-dark-text mt-8 mb-4">Office Hours</h3>
            <div className="space-y-2 text-bcs-body-text text-sm md:text-base">
              <p>Monday - Friday: 8:00 AM to 4:00 PM</p>
              <p>Saturday: 9:00 AM to 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-4">Send us an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-bcs-body-text mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-bcs-green"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bcs-body-text mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-bcs-green"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bcs-body-text mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-bcs-green h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="bcs-btn-primary w-full" disabled={loading}>
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
