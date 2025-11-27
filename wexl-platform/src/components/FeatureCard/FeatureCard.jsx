import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Feature Card component for displaying platform features
 * @param {ReactNode} icon - Icon component for the feature
 * @param {string} title - Feature title
 * @param {string} description - Feature description
 * @param {string} link - Optional link to feature details
 */
const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <div className="relative bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-lg dark:shadow-gray-900 hover:shadow-2xl dark:hover:shadow-gray-950 transition-all duration-500 group h-full flex flex-col overflow-hidden hover-lift border-2 border-[#113e59]/10 dark:border-[#1a5a7f]/20 hover:border-[#f6b519]/30 dark:hover:border-[#ffc940]/30">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6b519]/10 via-transparent to-[#113e59]/10 dark:from-[#ffc940]/10 dark:to-[#1a5a7f]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#113e59] via-[#f6b519] to-[#113e59] dark:from-[#1a5a7f] dark:via-[#ffc940] dark:to-[#1a5a7f]"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Icon Container with Glow */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-[#f6b519]/20 dark:bg-[#ffc940]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#113e59] via-[#113e59] to-[#f6b519] dark:from-[#1a5a7f] dark:via-[#1a5a7f] dark:to-[#ffc940] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
            <div className="text-white group-hover:scale-110 transition-transform duration-300">{icon}</div>
          </div>
        </div>

        <h3 className="font-dm-sans text-xl font-bold text-[#113e59] dark:text-[#1a5a7f] mb-3 group-hover:text-[#f6b519] dark:group-hover:text-[#ffc940] transition-colors duration-300">
          {title}
        </h3>

        <p className="font-source-sans text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
          {description}
        </p>

        {link && (
          <Link
            to={link}
            className="inline-flex items-center text-[#113e59] dark:text-[#1a5a7f] font-bold hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-all duration-300 mt-auto group/link"
          >
            <span className="relative">
              Learn More
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f6b519]/30 dark:bg-[#ffc940]/30 group-hover/link:bg-[#f6b519] dark:group-hover/link:bg-[#ffc940] transition-all duration-300"></span>
            </span>
            <svg
              className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        )}
      </div>

      {/* Decorative Corner with Gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#f6b519]/20 dark:from-[#ffc940]/20 to-transparent rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f6b519]/50 dark:via-[#ffc940]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default FeatureCard;
