import React from 'react';
import Timeline from '../components/Timeline';

export default function LearningJourney({ items }) {
  return (
    <section id="learning" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">Continuous Growth</span>
          <h2 className="text-section-title mt-2">Learning Repositories</h2>
          <div className="w-12 h-1 bg-apple-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Component wrapper */}
        <div className="px-2 md:px-6">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}
