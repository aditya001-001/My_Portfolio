import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-white border-t border-apple-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-apple-gray font-light">
        <p>
          Copyright © {currentYear} Aditya Sarapure. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          <span>Built with</span>
          <span className="font-medium text-apple-black">React</span>
          <span>+</span>
          <span className="font-medium text-apple-black">Tailwind CSS</span>
          <span>+</span>
          <span className="font-medium text-apple-black">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
