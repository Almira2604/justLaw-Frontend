import React from 'react'
import { motion } from 'framer-motion'

const AboutLegalMind = () => {
    return (
        <div>
            <section className='bg-[#F8F5EF] py-20 lg:py-28'>
                <div className='max-padd-container'>
                    <div className="text-center max-w-2xl mx-auto mb-14">

                        <p className="text-[#0B1F3A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                            Who We Serve
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F3A] mb-5">
                            Legal Minds, Students, and Professionals
                        </h2>

                        <p className="text-gray-600 mt-4 text-sm sm:text-base">
                            Whatever stage of your legal journey you're in, LAW helps you find the
                            resources to keep learning and growing.
                        </p>

                    </div>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {[
                            {
                                number: '01',
                                title: 'Students',
                                description: 'Build a stong foundation with textbooks and materials designed to support your legal studies.'
                            },
                            {
                                number: '02',
                                title: 'Researchers',
                                description: 'Discover the latest legal resources that support deeper research, academic work, and legal exploration.'
                            },
                            {
                                number: '03',
                                title: 'Professionals',
                                description: 'Access useful legal literature for continued learning, refrences, and professional development.'
                            }
                        ].map((item, index) => (
                            <motion.div key={item.number} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.15 }} className='bg-white p-7 sm:p-8 border border-[#0B1F3A]/10 hover:shadow-lg transition-shadow' >
                                <span className='text-[#B08D3C] text-sm font-semibold'>
                                    {item.number}
                                </span>
                                <h3 className="text-xl font-semibold text-[#0B1F3A] mt-5">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mt-3">{item.text}</p>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>
        </div>
    )
}

export default AboutLegalMind