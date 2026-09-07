import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-8">

      {/* Quick Links */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F8F5EF]">
          Quick Links
        </h3>

        <div className="flex flex-col gap-3 mt-5">

          <Link
            to="/"
            className="text-sm text-white/70 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-sm text-white/70 hover:text-white transition"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="text-sm text-white/70 hover:text-white transition"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-sm text-white/70 hover:text-white transition"
          >
            Contact
          </Link>

        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F8F5EF]">
          Customer Service
        </h3>

        <div className="flex flex-col gap-3 mt-5">

          <Link
            to="/cart"
            className="text-sm text-white/70 hover:text-white transition"
          >
            Shopping Cart
          </Link>

          <Link
            to="/login"
            className="text-sm text-white/70 hover:text-white transition"
          >
            My Account
          </Link>

          <Link
            to="/contact"
            className="text-sm text-white/70 hover:text-white transition"
          >
            Help & Support
          </Link>

          <Link
            to="/contact"
            className="text-sm text-white/70 hover:text-white transition"
          >
            Delivery Information
          </Link>

        </div>
      </div>

    </div>
  );
};

export default FooterLinks;