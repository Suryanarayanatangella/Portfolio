import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-gray-800 sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between animate-fade-in">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <h1 className="font-dm-sans text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#113e59] to-[#f6b519] dark:from-[#1a5a7f] dark:to-[#ffc940] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              UiTECH
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="relative text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors font-source-sans group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="relative text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors font-source-sans group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/services" className="relative text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors font-source-sans group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/portfolio" className="relative text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors font-source-sans group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="relative text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors font-source-sans group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark group-hover:w-full transition-all duration-300"></span>
            </Link>
            <ThemeToggle />
            <Link
              to="/quote"
              className="bg-accent-light dark:bg-accent-dark text-primary-light dark:text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 shine"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-primary-light dark:text-gray-200 focus:outline-none"
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 bg-white dark:bg-gray-900 rounded-lg p-4">
            <Link
              to="/"
              className="block text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-accent-dark transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="block bg-accent-light dark:bg-accent-dark text-primary-light dark:text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors text-center"
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
