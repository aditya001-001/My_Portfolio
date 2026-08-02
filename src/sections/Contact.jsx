import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact({ personalInfo }) {
  const contactCards = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail size={24} className="text-apple-blue" />,
      color: 'bg-apple-blue/5 border-apple-blue/10 hover:border-apple-blue/30',
      label: 'Send an email'
    },
    {
      name: 'LinkedIn',
      value: 'Aditya Sarapure',
      href: personalInfo.linkedin,
      icon: <Linkedin size={24} className="text-indigo-600" />,
      color: 'bg-indigo-50 border-indigo-100 hover:border-indigo-300',
      label: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      value: 'aditya001-001',
      href: personalInfo.github,
      icon: <Github size={24} className="text-apple-black" />,
      color: 'bg-apple-gray-50 border-apple-gray-100 hover:border-apple-gray-300',
      label: 'View repositories'
    }
  ];

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
    <section id="contact" className="py-20 md:py-28 px-6 bg-apple-gray-50 border-t border-b border-apple-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">Get In Touch</span>
          <h2 className="text-section-title mt-2">Contact Channels</h2>
          <div className="w-12 h-1 bg-apple-blue mx-auto mt-4 rounded-full" />
          <p className="text-sm text-apple-gray font-light max-w-md mx-auto mt-6 leading-relaxed">
            I'm seeking full-time opportunities or projects where I can apply my ML and AI skills. Feel free to reach out on any channel!
          </p>
        </div>

        {/* Contact Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.name}
              href={card.href}
              target={card.name !== 'Email' ? "_blank" : undefined}
              rel={card.name !== 'Email' ? "noopener noreferrer" : undefined}
              variants={cardVariants}
              className={`bg-white border p-6 rounded-apple shadow-apple-card hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between text-left group ${card.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Icon */}
                  <div className="p-3 bg-white rounded-apple shadow-sm w-fit group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  
                  {/* Arrow Indicator */}
                  <ArrowUpRight 
                    size={16} 
                    className="text-apple-gray opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" 
                  />
                </div>

                <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">{card.name}</span>
                <h3 className="text-lg font-bold text-apple-black mt-1 break-all truncate">{card.value}</h3>
              </div>

              <span className="text-xs text-apple-blue font-medium mt-6 group-hover:underline">
                {card.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
