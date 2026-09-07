import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser, API_URL } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        if (data.token) localStorage.setItem("token", data.token);
        navigate("/shop");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Server connection failed. Make sure Django is running.");
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="max-w-md w-full bg-white rounded-xl border border-[#0B1F3A]/10 p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 text-center">Welcome Back</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Sign in to your JustLaw account</p>

        {error && <p className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="e.g. student@unilag.edu.ng"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0B1F3A] hover:bg-[#16365f] text-white py-3 rounded-md font-semibold text-sm transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0B1F3A] font-bold hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;