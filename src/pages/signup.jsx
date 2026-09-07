import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContextProvider";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { API_URL } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully! Please login.");
        navigate("/login");
      } else {
        setError(data.error || "Registration failed. Try again.");
      }
    } catch (err) {
      setError("Server connection failed.");
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="max-w-md w-full bg-white rounded-xl border border-[#0B1F3A]/10 p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 text-center">Create Account</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Join JustLaw to order law textbooks</p>

        {error && <p className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                placeholder="Ese"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Malemi"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="e.g. student@unilag.edu.ng"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0B1F3A] hover:bg-[#16365f] text-white py-3 rounded-md font-semibold text-sm transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0B1F3A] font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;