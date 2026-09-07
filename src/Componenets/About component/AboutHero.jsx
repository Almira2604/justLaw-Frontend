import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Aboutlawimg from "../../assets/Images/Aboutlawimg.jpg";

const AboutHero = () => {
  return (
    <div>
      <section className="min-h-[85vh] flex items-center py-16 lg:py-20">
        <div className="max-padd-container w-full">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT - TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#0B1F3A] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-5">
                About Just Law
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-[#0B1F3A]">
                Knowledge.
                <br />
                Law.
                <br />
                <span className="text-[#B08D3C]">Power.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mt-7">
                A trusted destination for law books and legal resources,
                created to help students, professionals, researchers, and
                anyone interested in the field of law access the knowledge
                and information they need to succeed.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-7 bg-[#0B1F3A] text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-[#16365f] transition"
              >
                Explore Our Books
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>

            {/* RIGHT - IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Aboutlawimg}
                  alt="Law books"
                  className="w-full h-[420px] sm:h-[500px] object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
