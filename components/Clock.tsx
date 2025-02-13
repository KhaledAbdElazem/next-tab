'use client';

import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <div className="text-center mb-8">
      {/* Clock with AM/PM */}
      <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent drop-shadow-lg">
        {formattedTime}
      </div>
      {/* Date */}
      <div className="text-xl text-neon-pink">
        {time.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </div>
  );
}