import React from 'react';
import { motion } from 'framer-motion';
// import Muanim from './muanim';
function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white py-20 h-[20vh] flex items-center justify-center shadow-2xl shadow-amber-200 relative bottom-30">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Faster. Smarter.
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Start to use in a few seconds. Let us find the best competitors and most relevant keywords for you.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-md">Get Started</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold shadow-md">GitHub</button>
        </motion.div>
      </div>
      {/* <Muanim /> */}
    </div>
  );
}

export default Hero;
