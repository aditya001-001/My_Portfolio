import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, LineChart, MessageSquareCode, Palette, Database, Terminal } from 'lucide-react';

const categoryIcons = {
  "Programming": <Code size={20} className="text-apple-blue" />,
  "Machine Learning": <Cpu size={20} className="text-purple-500" />,
  "Data Analysis": <LineChart size={20} className="text-green-500" />,
  "Generative AI": <MessageSquareCode size={20} className="text-pink-500" />,
  "Visualization": <Palette size={20} className="text-orange-500" />,
  "Database": <Database size={20} className="text-indigo-500" />,
  "Tools": <Terminal size={20} className="text-amber-500" />
};

export default function Skills({ skills }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="skills" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">Expertise</span>
          <h2 className="text-section-title mt-2">Technical Skill Set</h2>
          <div className="w-12 h-1 bg-apple-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="bg-white border border-apple-gray-100 p-6 rounded-apple shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex flex-col text-left"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-apple-gray-50">
                <div className="p-2.5 bg-apple-gray-50 rounded-apple w-fit">
                  {categoryIcons[category] || <Code size={20} />}
                </div>
                <h3 className="text-base font-bold text-apple-black uppercase tracking-wider">{category}</h3>
              </div>

              {/* Skills Badges list */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-apple-gray-50 text-apple-black text-sm font-medium rounded-full hover:bg-apple-blue/5 hover:text-apple-blue transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
