import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 bg-apple-gray-50 border-t border-b border-apple-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">Featured Work</span>
          <h2 className="text-section-title mt-2">Projects & Case Studies</h2>
          <div className="w-12 h-1 bg-apple-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
