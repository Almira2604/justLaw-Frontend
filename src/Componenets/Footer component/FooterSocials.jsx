import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const FooterBrand = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white"> Law Books </h2>

      <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">
        Your trusted source for quality law books, textbooks,
        statutes, and legal reference materials.
      </p>

      <div className="flex items-center gap-3 mt-6">

        <a
          href="#"
          aria-label="Facebook"
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition"
        >
          <FaFacebookF size={13} />
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition"
        >
          <FaInstagram size={14} />
        </a>

        <a
          href="#"
          aria-label="Twitter"
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition"
        >
          <FaTwitter size={13} />
        </a>

        <a
          href="#"
          aria-label="WhatsApp"
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition"
        >
          <FaWhatsapp size={14} />
        </a>

      </div>
    </div>
  );
};

export default FooterBrand;