import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

export default function Education({ education }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="education" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">Academic Record</span>
          <h2 className="text-section-title mt-2">Education</h2>
          <div className="w-12 h-1 bg-apple-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* BE Card (Flagship Education - span 2 columns) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-2 bg-white border border-apple-gray-100 rounded-apple-lg p-6 md:p-8 shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3.5 bg-apple-blue/5 text-apple-blue rounded-apple">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs text-apple-blue font-semibold tracking-wider uppercase">Undergraduate Degree</span>
                  <h3 className="text-xl font-bold text-apple-black tracking-tight mt-0.5">{education.be.degree}</h3>
                </div>
              </div>
              
              <div className="space-y-4 font-light text-apple-gray">
                <p className="text-base text-apple-black font-normal">
                  {education.be.institution}
                </p>
                <p className="text-sm">
                  Graduation Year: <span className="font-semibold text-apple-black">{education.be.year}</span>
                </p>
                <p className="text-sm max-w-xl">
                  Acquired key foundations in computer systems, database design, statistical models, artificial intelligence agents, data pipelines, and deep neural architectures.
                </p>
              </div>
            </div>

            {/* Score Display Badge */}
            <div className="mt-8 pt-6 border-t border-apple-gray-50 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-apple-gray font-semibold">Cumulative Score</span>
              <span className="text-2xl font-extrabold text-apple-blue">{education.be.score} CGPA / Percentage</span>
            </div>
          </motion.div>

          {/* Sibling Cards (PUC and SSLC - stacked vertically) */}
          <div className="flex flex-col gap-6">
            
            {/* PUC Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white border border-apple-gray-100 rounded-apple p-6 shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex-1 flex flex-col justify-between text-left"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-purple-50 text-purple-500 rounded-apple mt-0.5">
                  <BookOpen size={18} />
                </div>
                <div>
                  <span className="text-xs text-purple-500 font-semibold tracking-wider uppercase">Pre-University (PUC)</span>
                  <h4 className="text-base font-bold text-apple-black mt-1 leading-snug">{education.puc.degree}</h4>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-apple-gray-50 flex items-center justify-between">
                <span className="text-xs text-apple-gray font-semibold uppercase">Percentage</span>
                <span className="text-xl font-bold text-apple-black">{education.puc.score}</span>
              </div>
            </motion.div>

            {/* SSLC Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white border border-apple-gray-100 rounded-apple p-6 shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex-1 flex flex-col justify-between text-left"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-green-50 text-green-500 rounded-apple mt-0.5">
                  <School size={18} />
                </div>
                <div>
                  <span className="text-xs text-green-500 font-semibold tracking-wider uppercase">Secondary School (SSLC)</span>
                  <h4 className="text-base font-bold text-apple-black mt-1 leading-snug">{education.sslc.degree}</h4>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-apple-gray-50 flex items-center justify-between">
                <span className="text-xs text-apple-gray font-semibold uppercase">Percentage</span>
                <span className="text-xl font-bold text-apple-black">{education.sslc.score}</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
