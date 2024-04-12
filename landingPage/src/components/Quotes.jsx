import React, { useState, useEffect } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "Believe and achieve your dreams.",
      "Stay strong, never give up.",
      "You are unstoppable, believe it.",
      "Keep going, you're closer.",
      "Dream big, work hard.",
      "Success starts with self-belief.",
      "Embrace the journey, enjoy success.",
      "Hard work beats talent always.",
      "You're capable of amazing things.",
      "Every setback is a setup.",
      "Stay focused, stay positive.",
      "Make it happen, no excuses.",
      "Your attitude determines everything.",
      "Keep pushing, never settle.",
      "Chase your dreams relentlessly.",
      "Failure is just a detour.",
      "You're stronger than you think.",
      "Turn obstacles into opportunities.",
      "Strive for progress, not perfection.",
      "Dream it, believe it, achieve it.",
      "Your potential is limitless.",
      "Never stop learning, growing.",
      "Opportunities are everywhere, seize them.",
      "Rise above the storm, shine.",
      "Believe you can, you will.",
      "Stay hungry, stay humble.",
      "Be fearless in the pursuit.",
      "You're destined for greatness.",
      "Every day is a new chance.",
      "Trust the process, keep going.",
      "Success begins with a choice.",
      "Think big, start small.",
      "You are the architect of your life.",
      "Make your own luck.",
      "Great things take time.",
      "Success is a journey, enjoy.",
      "Work hard, stay humble.",
    ];

    const getRandomQuote = () => {
      const index = Math.floor(Math.random() * quotes.length);
      return quotes[index];
    };
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="quotes">
      "{quote}"
    </div>
  );
}
