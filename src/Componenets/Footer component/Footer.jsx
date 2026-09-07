import React from "react";
import FooterSocials from "./FooterSocials"
import FooterLinks from "./FooterLinks"
import FooterContact from "./FooterContact"


const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white mx-auto px-6 sm:px-10">

      <div className="max-padd-container py-12 lg:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-28">

          <FooterSocials />

          <FooterLinks />

          <FooterContact />

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="max-padd-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} Law Books. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a href="#" className="text-xs text-white/50 hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="text-xs text-white/50 hover:text-white transition" >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;