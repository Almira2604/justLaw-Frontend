import React from 'react'
import { motion } from "framer-motion";

const AboutWhyLaw =()=> {
  return (
    <div>     
      <section className="bg-white py-20 lg:py-28">
        <div className="max-padd-container">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">

            <div className="lg:sticky lg:top-32 lg:self-start">

              <p className="text-[#B08D3C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Why LAW
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F3A] leading-tight">
                Knowledge that
                <span className="block">
                  moves with you.
                </span>
              </h2>

              <p className="text-gray-600 mt-5 text-sm sm:text-base leading-relaxed max-w-md">
                We focus on making the process of finding useful legal
                literature simple, clear, and accessible.
              </p>

            </div>

            <div className="space-y-12">

              {[
                {
                  number: "01",
                  title: "Curated Resources",
                  text: "Explore books across different areas of law, selected to support learning and legal research."
                },
                {
                  number: "02",
                  title: "Easy Discovery",
                  text: "Browse legal disciplines and search for the books you need without unnecessary complexity."
                },
                {
                  number: "03",
                  title: "Built Around Learning",
                  text: "LAW is designed around the people who use legal knowledge — students, researchers, and professionals."
                }
              ].map((item) => (

                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  className="border-l-2 border-[#B08D3C] pl-6 sm:pl-8"
                >

                  <span className="text-xs font-semibold text-[#B08D3C]">
                    {item.number}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1F3A] mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3 max-w-lg">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section></div>
  )
}

export default AboutWhyLaw