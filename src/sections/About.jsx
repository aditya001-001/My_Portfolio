import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cpu, GraduationCap, Briefcase } from 'lucide-react';

const icons = [
  <GraduationCap className="text-apple-blue" size={24} />,
  <Cpu className="text-purple-500" size={24} />,
  <Code2 className="text-green-500" size={24} />,
  <Award className="text-orange-500" size={24} />,
  <Briefcase className="text-amber-500" size={24} />,
];

export default function About({ aboutFacts }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-apple-gray-50 border-t border-b border-apple-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">A Little About Me</span>
          <h2 className="text-section-title mt-2">Professional Summary</h2>
          <div className="w-12 h-1 bg-apple-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Fact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aboutFacts.map((fact, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-white border border-apple-gray-100 p-6 rounded-apple shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex flex-col text-left ${
                index === aboutFacts.length - 1 && aboutFacts.length % 3 !== 0
                  ? 'md:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              {/* Card Icon */}
              <div className="p-3 bg-apple-gray-50 rounded-apple w-fit mb-4">
                {icons[index % icons.length]}
              </div>
              
              {/* Fact Text */}
              <p className="text-apple-black text-base font-light leading-relaxed">
                {fact}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
