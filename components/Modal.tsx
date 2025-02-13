'use client';

import { Bookmark } from '@/types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
  links?: Bookmark[];
}

export default function Modal({ isOpen, onClose, category, links }: ModalProps) {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = links?.length || 0;
  const isLoading = imagesLoaded < totalImages;

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 
                     flex items-center justify-center p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-[#1E1E3E]/95 rounded-xl w-full max-w-4xl p-6 
                       border-2 border-neon-blue/30"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className="flex justify-between items-center mb-6 
                          border-b border-neon-blue/30 pb-4">
              <h2 className="text-2xl font-bold text-neon-blue">{category}</h2>
              <button
                onClick={onClose}
                className="text-3xl text-neon-pink hover:text-neon-blue 
                         transition-colors duration-300"
              >
                &times;
              </button>
            </div>

            {isLoading && (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-neon-blue"></div>
              </div>
            )}

            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
                          max-h-[60vh] overflow-y-auto custom-scrollbar
                          ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
              {links?.map((link, index) => (
                <div
                  key={link.url}
                  className="group relative"
                  title={link.description} // Basic tooltip
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-black/30 rounded-lg
                              transition-all duration-300 hover:-translate-y-1
                              hover:bg-neon-blue/20 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=64`}
                      alt={link.name}
                      onLoad={handleImageLoad}
                      className="w-8 h-8 mb-2 group-hover:scale-110 
                                transition-transform duration-300"
                    />
                    <span className="text-sm text-center text-white 
                                  group-hover:text-neon-blue transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}