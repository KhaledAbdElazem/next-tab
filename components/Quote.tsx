'use client';
import { useState, useEffect } from "react";

const animeQuotes = [
  "I’ll leave tomorrow’s problems to tomorrow’s me. - Saitama, One Punch Man",
  "People’s lives don’t end when they die, it ends when they lose faith. - Itachi Uchiha, Naruto",
  "If you don’t take risks, you can’t create a future! - Monkey D. Luffy, One Piece",
  "The moment you think of giving up, think of the reason why you held on so long. - Natsu Dragneel, Fairy Tail",
  "No matter how deep the night, it always turns to day, eventually. - Brook, One Piece"
];

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = animeQuotes[Math.floor(Math.random() * animeQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-lg shadow-lg animate-pulse">
      <p className="font-mono text-white text-xl text-shadow-lg animate-flicker">{quote}</p>
    </div>
  );
};

export default Quote;