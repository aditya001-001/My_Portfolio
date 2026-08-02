import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp, AlertCircle, Sparkles, Cpu, Layers, HelpCircle, CheckCircle } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-apple-gray-100 rounded-apple-lg p-6 md:p-8 shadow-apple-card hover:shadow-apple-hover hover:border-apple-gray-200 transition-all duration-300 flex flex-col text-left"
    >
      {/* Top Section: Title & Badges */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-xs text-apple-blue font-semibold tracking-wider uppercase">Featured Project</span>
          <h3 className="text-2xl font-bold text-apple-black tracking-tight mt-1">{project.title}</h3>
        </div>
        
        {/* GitHub Link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto flex items-center space-x-2 px-4 py-2 bg-apple-gray-50 text-apple-black hover:bg-apple-black hover:text-white rounded-full transition-all duration-300 text-sm font-medium border border-apple-gray-100"
        >
          <Github size={16} />
          <span>Codebase</span>
        </a>
      </div>

      {/* Tags (Highlights) */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.highlights.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-apple-blue/5 text-apple-blue text-xs font-semibold rounded-full border border-apple-blue/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Condensed Solution Description */}
      <p className="text-apple-gray text-base leading-relaxed mb-6 font-light">
        {project.solution}
      </p>

      {/* Toggle Details Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center space-x-2 py-3 bg-apple-gray-50 hover:bg-apple-gray-100 rounded-apple transition-colors duration-200 text-sm font-medium text-apple-black border border-apple-gray-100"
      >
        <span>{isExpanded ? 'Hide Deep Dive' : 'Expand Case Study & Workflow'}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      {/* Expandable Details Container */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-apple-gray-100 space-y-6">
              
              {/* Problem Statement */}
              <div>
                <h4 className="text-sm font-bold text-apple-black uppercase tracking-wider mb-2 flex items-center gap-2">
                  <HelpCircle size={16} className="text-red-500" />
                  <span>The Problem</span>
                </h4>
                <p className="text-sm text-apple-gray font-light leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Workflow / Architecture */}
              <div>
                <h4 className="text-sm font-bold text-apple-black uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Layers size={16} className="text-apple-blue" />
                  <span>Workflow & Implementation</span>
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-sm text-apple-gray font-light pl-1">
                  {project.workflow.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-apple-black font-normal ml-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Technical Stack */}
              <div>
                <h4 className="text-sm font-bold text-apple-black uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu size={16} className="text-orange-500" />
                  <span>Tech Stack Details</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 pl-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-apple-gray-50 text-apple-gray-400 text-xs font-semibold rounded border border-apple-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold text-apple-black uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Key Features</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-apple-gray font-light pl-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-apple-black ml-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-sm font-bold text-apple-black uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertCircle size={16} className="text-amber-500" />
                  <span>Engineering Challenges</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-apple-gray font-light pl-1">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-apple-black ml-1">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div>
                <h4 className="text-sm font-bold text-apple-black uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-purple-500" />
                  <span>Future Roadmap</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-apple-gray font-light pl-1">
                  {project.futureImprovements.map((improvement, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-apple-black ml-1">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
