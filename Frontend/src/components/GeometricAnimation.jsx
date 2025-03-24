import React, { useState, useEffect } from 'react'

const GeometricAnimation = () => {
    const [isAnimating, setIsAnimating] = useState(true);
  
    // Toggle animation state (optional interactivity)
    useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating((prev) => !prev);
      }, 3000); // Toggle every 3 seconds (optional)
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex justify-center items-center h-64">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="animate-spin-slow" // Custom animation class
        >
          {/* Outer Circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#4f46e5" // Indigo-600 from Tailwind
            strokeWidth="4"
            className="animate-pulse"
          />
          {/* Inner Hexagon */}
          <polygon
            points="100,20 160,60 160,140 100,180 40,140 40,60"
            fill="none"
            stroke="#10b981" // Emerald-500 from Tailwind
            strokeWidth="4"
            className={`${isAnimating ? 'animate-scale' : ''}`}
          />
          {/* Center Dot */}
          <circle
            cx="100"
            cy="100"
            r="10"
            fill="#ec4899" // Pink-500 from Tailwind
            className="animate-pulse"
          />
        </svg>
      </div>
    );
  };
export default GeometricAnimation
