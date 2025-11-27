import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#113e59] dark:bg-gray-900 text-white dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-dm-sans text-xl font-bold mb-4">UiTECH</h3>
            <p className="font-source-sans text-gray-300 dark:text-gray-400 mb-4">
              Professional React web development services for small and medium businesses. Modern, responsive websites delivered fast.
            </p>
            <p className="font-source-sans text-sm text-gray-400 dark:text-gray-500">
              Hyderabad, Telangana, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-dm-sans text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-dm-sans text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#packages" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  Pricing Packages
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  Maintenance Plans
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-dm-sans text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:narayana0249766@gmail.com" className="hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors">
                  narayana0249766@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact: +91-9494549004</span>
              </li>
            </ul>
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/narayana-t-a8765930a/" className="text-gray-300 dark:text-gray-400 hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} UiTECH. All rights reserved. | 
            <Link to="/privacy" className="hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-[#f6b519] dark:hover:text-[#ffc940] transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
