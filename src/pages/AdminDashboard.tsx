import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PageBanner from "@/components/PageBanner";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchMessages = async () => {
    const token = localStorage.getItem("bcs_admin_token");
    if (!token) {
      toast.error("Unauthorized access. Please login.");
      navigate("/admin");
      return;
    }

    try {
      const response = await fetch("/api/admin/messages", {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        toast.error("Session expired or invalid.");
        localStorage.removeItem("bcs_admin_token");
        navigate("/admin");
      }
    } catch (error) {
      toast.error("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("bcs_admin_token");
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    const token = localStorage.getItem("bcs_admin_token");
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (response.ok) {
        toast.success("Message deleted");
        setMessages(messages.filter(msg => msg.id !== id));
      } else {
        toast.error("Failed to delete message");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };


  return (
    <div className="page-block min-h-screen">
      <PageBanner title="Dashboard" subtitle="Manage incoming inquiries and forms." />
      <section className="py-14 bg-background">
        <div className="bcs-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-bcs-dark-text">Inquiry Messages</h2>
            <button onClick={handleLogout} className="bcs-btn-primary bg-red-600 hover:bg-red-700">
              Logout
            </button>
          </div>

          {loading ? (
            <p>Loading messages...</p>
          ) : messages.length === 0 ? (
            <div className="page-surface p-8 text-center text-bcs-body-text">
              No messages found.
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="page-surface p-6 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-bcs-dark-text">{msg.name}</h3>
                      </div>
                      <p className="text-sm text-bcs-body-text">{msg.email}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs text-bcs-body-text bg-bcs-light-gray px-2 py-1 rounded">
                        {new Date(msg.created_at).toLocaleString()}
                      </span>
                      <div className="flex gap-2">

                        <button 
                          onClick={() => handleDelete(msg.id)}
                          className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-bcs-dark-text whitespace-pre-wrap">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
