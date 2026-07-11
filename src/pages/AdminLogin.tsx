import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PageBanner from "@/components/PageBanner";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        localStorage.setItem("bcs_admin_token", data.token);
        navigate("/admin/dashboard");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      toast.error("Failed to connect to the server");
    }
  };

  return (
    <div className="page-block min-h-screen">
      <PageBanner title="Admin Panel" subtitle="Secure access for administrators." />
      <section className="py-14 bg-bcs-light-gray flex justify-center items-center">
        <div className="page-surface p-8 max-w-md w-full shadow-lg rounded-sm border border-border">
          <h2 className="text-2xl font-bold text-bcs-dark-text mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-bcs-body-text mb-1">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-bcs-green"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-bcs-body-text mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-bcs-green"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bcs-btn-primary w-full mt-4">
              Login to Dashboard
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
