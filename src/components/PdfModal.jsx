import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PdfModal({ pdfUrl, title, onClose }) {
  if (!pdfUrl) return null;

  // Prefix URL with base if needed (since it is placed in public directory)
  const fullPdfUrl = `${import.meta.env.BASE_URL}${pdfUrl}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay Backdrop Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="bg-white rounded-apple-lg shadow-apple-modal w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden relative z-10 border border-apple-gray-100"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-apple-gray-50 border-b border-apple-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-apple-gray uppercase font-semibold tracking-wider">Document Preview</span>
            <h3 className="text-lg font-bold text-apple-black truncate pr-4">{title}</h3>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Open in New Tab fallback (useful for mobile) */}
            <a
              href={fullPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-apple-gray hover:text-apple-blue hover:bg-apple-blue/10 rounded-full transition-all duration-200"
              title="Open in new tab"
            >
              <ExternalLink size={20} />
            </a>
            
            {/* Download Button */}
            <a
              href={fullPdfUrl}
              download
              className="p-2 text-apple-gray hover:text-apple-blue hover:bg-apple-blue/10 rounded-full transition-all duration-200"
              title="Download PDF"
            >
              <Download size={20} />
            </a>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-apple-gray hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Iframe */}
        <div className="flex-1 bg-apple-gray-100 relative">
          <iframe
            src={`${fullPdfUrl}#view=FitH`}
            title={title}
            className="w-full h-full border-none"
            type="application/pdf"
          />
          
          {/* Mobile Fallback Instruction */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-6 bg-white/90 opacity-0 hover:opacity-100 transition-opacity duration-300 md:hidden text-center">
            <p className="text-sm text-apple-black mb-4 font-medium">
              If the PDF preview did not load automatically on your device, you can view or download it directly.
            </p>
            <a
              href={fullPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto px-5 py-2.5 bg-apple-blue text-white rounded-full font-medium hover:bg-apple-blue-hover transition-colors shadow-sm text-sm inline-flex items-center space-x-2"
            >
              <ExternalLink size={16} />
              <span>Open Document in New Tab</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
