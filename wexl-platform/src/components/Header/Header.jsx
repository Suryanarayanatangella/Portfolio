import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between animate-fade-in">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <h1 className="font-dm-sans text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              UiTECH
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="relative text-textPrimary hover:text-primary transition-colors font-source-sans group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="relative text-textPrimary hover:text-primary transition-colors font-source-sans group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/services" className="relative text-textPrimary hover:text-primary transition-colors font-source-sans group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/portfolio" className="relative text-textPrimary hover:text-primary transition-colors font-source-sans group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="relative text-textPrimary hover:text-primary transition-colors font-source-sans group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/quote"
              className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 shine"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-textPrimary hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-textPrimary hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-textPrimary hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block text-textPrimary hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block text-textPrimary hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="block bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
              onClick={toggleMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
