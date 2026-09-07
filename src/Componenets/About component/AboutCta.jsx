import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const AboutCta =() => {
  return (
    <div>     
      <section className="bg-[#F8F5EF] py-20 lg:py-28">
        <div className="max-padd-container">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="bg-[#0B1F3A] rounded-lg px-6 py-14 sm:px-10 lg:px-16 text-center"
          >

            <p className="text-[#B08D3C] text-xs font-semibold uppercase tracking-[0.2em]">
              Start Exploring
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-4">
              Find the right book
              <span className="block text-[#F8F5EF]">
                for your legal journey.
              </span>
            </h2>

            <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mt-5">
              Explore our collection of law books and discover resources
              built to support your learning and professional growth.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-7 bg-[#F8F5EF] text-[#0B1F3A] px-6 py-3 rounded-md text-sm font-semibold hover:bg-white transition"
            >
              Browse Law Books
              <FaArrowRight className="text-xs" />
            </Link>

          </motion.div>

        </div>
      </section>

    </div>
  );
};




export default AboutCta