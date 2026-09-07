import React from 'react'
import { motion } from "framer-motion";

const AboutMission =() =>{
  return (
    <div>
        <section className= 'bg-[#0B1F3A] text-white py-24 lg:py-32'>
            <div className= 'max-padd-container'>
                <motion.div initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y:0}} viewport={{ once: true, amount:0.4}} transition={{ duration: 0.8}} className='max-w-5xl'>
                    <p className='text-[#B08D3C] text-xs font-semibold uppercase tracking-[0.25em]mb-6'>Our Mission</p>
                    <h2 className='text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight'>Make Legal Knowledge <span className='block text-[#F8F5EF]'>easier to find.</span></h2>
                    <p className='mt-8 text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed'>We believe access to the right legal resources can shape better students, stronger researchers, and more informeed professionals.</p>


                </motion.div>

            </div>

        </section>
    </div>
  )
}

export default AboutMission