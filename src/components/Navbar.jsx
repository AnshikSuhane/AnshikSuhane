import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, FileText } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#Home" className="text-white hover:text-gray-900 transition-colors font-bold">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-900 transition-colors font-bold">
              About Us
            </a>
            <a href="#Skills" className="text-white hover:text-gray-900 transition-colors font-bold">
              Skills
            </a>
            <a href="#Projects" className="text-white hover:text-gray-900 transition-colors font-bold">
              Projects
            </a>
            <a href="#contact" className="text-white hover:text-gray-900 transition-colors font-bold">
              Contact
            </a>
            <a href="#stats" className="text-white hover:text-gray-900 transition-colors font-bold">
              Stats
            </a>
            <a
              href="https://drive.google.com/file/d/1fuAMfxnv3BLfPDvoC-p80sYX78Fawflp/view?usp=sharing"
              download="resume.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors font-bold"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {menuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#Home"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#Skills"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="\assets\resume.pdf"
            download="resume"
            className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </span>
          </a>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } fixed bottom-4 right-4 p-2 bg-indigo-600 text-white rounded-full shadow-lg transition-opacity duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navbar;