'use client';

import { useState } from 'react';
import { bookmarkCategories } from '@/data/bookmarks';
import Modal from './Modal';
import { Category } from '@/types';

export default function BookmarkGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {Object.entries(bookmarkCategories).map(([category, links]) => (
          <div
            key={category}
            onClick={() => setSelectedCategory({ category, links })}
            className="group bg-black/20 backdrop-blur-md rounded-xl p-6 cursor-pointer
                     border-2 border-neon-blue/30 transition-all duration-300
                     hover:-translate-y-2 hover:border-neon-blue/70
                     hover:shadow-lg hover:shadow-neon-blue/40"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 flex items-center justify-center 
                            bg-neon-blue/20 rounded-xl group-hover:bg-neon-blue/40 
                            transition-colors duration-300">
                <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-neon-blue 
                           transition-colors duration-300">
                {category}
              </h3>
              <span className="text-neon-pink text-sm">
                {links.length} items
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory?.category}
        links={selectedCategory?.links}
      />
    </>
  );
}