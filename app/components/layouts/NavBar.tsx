"use client";
import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';

interface NavBarProps {
  variant?: 'hero' | 'default';
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ variant = 'default', className = '' }) => {
  const isHeroVariant = variant === 'hero';

  const navClasses = isHeroVariant
    ? "relative z-10 flex items-center justify-between px-6 lg:px-12 py-6"
    : "bg-white shadow-sm border-b border-gray-200 px-6 lg:px-12 py-4";

  const linkClasses = isHeroVariant
    ? "text-white hover:text-blue-200 transition-colors"
    : "text-gray-700 hover:text-blue-600 transition-colors";

  const buttonClasses = isHeroVariant
    ? "border border-white backdrop-blur-sm text-white px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-opacity-30 transition-all"
    : "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 transition-colors";

  return (
    <nav className={`${navClasses} ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
          <div className="text-white font-bold text-lg">B</div>
        </div>
        <span className={`font-semibold text-lg ${isHeroVariant ? 'text-white' : 'text-gray-900'}`}>
          BÉNIN TOUR
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className={linkClasses}>Accueil</a>
        <a href="#" className={linkClasses}>Destinations</a>
        <a href="#" className={linkClasses}>Circuits Touristiques</a>
        <a href="#" className={linkClasses}>Artisanat</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className={buttonClasses}>
          <span className="hidden sm:inline">Nous contacter</span>
          <BsArrowRightCircleFill size={16} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;