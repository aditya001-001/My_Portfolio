import React from 'react';
import { motion } from 'framer-motion';
import { Github, FolderGit2 } from 'lucide-react';

export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-apple-gray-100 ml-4 md:ml-6 space-y-12 py-4">
      {items.map((item, index) => (
        <motion.div
          key={item.repo}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative pl-8 md:pl-10 group"
        >
          {/* Timeline Node */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-apple-blue bg-white group-hover:bg-apple-blue group-hover:scale-125 transition-all duration-300 shadow-sm z-10" />

          {/* Timeline Card */}
          <div className="bg-white border border-apple-gray-100 rounded-apple p-5 md:p-6 shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-start space-x-3.5">
              {/* Repository Icon */}
              <div className="p-3 bg-apple-blue/5 text-apple-blue rounded-apple mt-0.5">
                <FolderGit2 size={20} />
              </div>
              
              <div className="flex flex-col text-left">
                <h4 className="text-lg font-bold text-apple-black group-hover:text-apple-blue transition-colors tracking-tight">
                  {item.repo}
                </h4>
                <p className="text-sm text-apple-gray font-light mt-1 max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* GitHub Link Button */}
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto flex items-center space-x-1.5 px-4 py-2 bg-apple-gray-50 text-apple-black hover:bg-apple-black hover:text-white rounded-full transition-all duration-300 text-xs font-semibold border border-apple-gray-100"
            >
              <Github size={14} />
              <span>Explore Repo</span>
            </a>

          </div>
        </motion.div>
      ))}
    </div>
  );
}
