'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search the web..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleSearch}
        className="w-full px-6 py-4 bg-black/30 border-2 border-neon-blue/30 rounded-full 
                 text-white placeholder-white/60 focus:outline-none focus:border-neon-blue/80 
                 focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
      />
    </div>
  );
}