import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
function Muanim() {
  return (
    <div>
     
      <AnimationShowcase />
    </div>
  );
}

const AnimatedCard = ({ title, description, icon }) => {
  return (
    
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      
      <div className="w-16 h-16 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const AnimationShowcase = () => {
  const cards = [
    {
      title: "Seasonality",
      description: "Spot when any keywords' seasonality is trending and when losing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400 w-full h-full"
        >
          <path d="M3 12h18M12 3v18" />
        </svg>
      ),
    },
    {
      title: "Mobile Issue Detector",
      description:
        "When you have issues on mobile pages, we find them out by ranking differences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-400 w-full h-full"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      title: "Best Rank Spotter",
      description:
        "Analyzes the history of ranking and lets you know when you spot the best rank.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-400 w-full h-full"
        >
          <path d="M12 2l7 12H5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 min-h-screen flex flex-col justify-center items-center px-4">
      <Hero/>
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        AI Shopping Assistant Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <AnimatedCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Muanim;
