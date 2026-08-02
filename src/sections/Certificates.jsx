import React from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, Calendar, Building2 } from 'lucide-react';

export default function Certificates({ certificates, onPreviewPdf }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="certificates" className="py-20 md:py-28 px-6 bg-apple-gray-50 border-t border-b border-apple-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">Achievements</span>
          <h2 className="text-section-title mt-2">Certifications</h2>
          <div className="w-12 h-1 bg-apple-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className="bg-white border border-apple-gray-100 rounded-apple p-6 shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Cert Badge Icon */}
                <div className="p-3 bg-apple-blue/5 text-apple-blue rounded-apple w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Award size={22} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-apple-black leading-snug tracking-tight mb-4 min-h-[3rem]">
                  {cert.title}
                </h3>

                {/* Meta details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-apple-gray font-light">
                    <Building2 size={14} className="mr-2" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-xs text-apple-gray font-light">
                    <Calendar size={14} className="mr-2" />
                    <span>Issued: {cert.date}</span>
                  </div>
                </div>
              </div>

              {/* View PDF Button */}
              <button
                onClick={() => onPreviewPdf(cert.pdfPath, cert.title)}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-apple-gray-50 hover:bg-apple-blue hover:text-white rounded-apple text-apple-black transition-all duration-300 text-xs font-semibold border border-apple-gray-100 group-hover:border-apple-blue/20"
              >
                <Eye size={14} />
                <span>Verify & Preview PDF</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
