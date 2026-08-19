import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Github, Linkedin, ArrowDown } from 'lucide-react';
import profileImage from '../assets/profile.png';

export default function Hero({ personalInfo }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-24 pb-16 px-6 bg-white overflow-hidden">
      {/* Premium background grid & blur */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f5f5f7_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-apple-blue/5 rounded-full filter blur-[80px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-purple-500/5 rounded-full filter blur-[90px] pointer-events-none animate-pulse-slow" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center flex flex-col items-center relative z-10"
      >
        {/* Profile Image Frame */}
        <motion.div 
          variants={itemVariants}
          className="relative w-40 h-40 md:w-48 md:h-48 mb-8 rounded-full p-1 bg-gradient-to-tr from-apple-blue to-purple-500 shadow-apple-hover"
        >
          <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
            <img
              src={profileImage}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Name Title */}
        <motion.span 
          variants={itemVariants}
          className="text-apple-blue font-semibold text-sm uppercase tracking-widest mb-2"
        >
          Welcome to my portfolio
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="text-hero-title text-apple-black mb-4 font-display font-bold leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-blue-600">Aditya Sarapure</span>
        </motion.h1>

        {/* Headline */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl text-apple-black font-semibold tracking-tight mb-6 font-display"
        >
          {personalInfo.headline.split('|')[0].trim()}
        </motion.h2>

        {/* Short description */}
        <motion.p 
          variants={itemVariants}
          className="text-body-lg max-w-2xl mb-10"
        >
          {personalInfo.description}
        </motion.p>

        {/* Buttons / CTAs */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Download Resume */}
          <a
            href={`${import.meta.env.BASE_URL}01_Aditya_Sarapure.pdf`}
            download="Aditya_Sarapure_Resume.pdf"
            className="flex items-center space-x-2 px-6 py-3 bg-apple-blue hover:bg-apple-blue-hover text-white rounded-full transition-all duration-300 font-medium shadow-sm hover:shadow-apple-card hover:scale-[1.02]"
          >
            <FileDown size={18} />
            <span>Download Resume</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="px-6 py-3 bg-apple-gray-50 hover:bg-apple-gray-100 text-apple-black rounded-full transition-all duration-300 font-medium border border-apple-gray-100 hover:scale-[1.02]"
          >
            Contact
          </a>

          {/* Social Icons */}
          <div className="flex items-center space-x-2.5 ml-2 border-l border-apple-gray-200 pl-4 py-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-apple-gray-50 text-apple-gray hover:text-apple-black hover:bg-apple-gray-100 rounded-full transition-all duration-300 border border-apple-gray-50"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-apple-gray-50 text-apple-gray hover:text-apple-black hover:bg-apple-gray-100 rounded-full transition-all duration-300 border border-apple-gray-50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Animated Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-40 cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById('about');
            if (nextSec) window.scrollTo({ top: nextSec.offsetTop - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider mb-2 text-apple-gray">Explore More</span>
          <ArrowDown size={16} className="text-apple-gray" />
        </motion.div>
      </motion.div>
    </section>
  );
}
