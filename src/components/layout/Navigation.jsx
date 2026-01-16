import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ currentPage, goToPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Services', page: 2 },
    { name: 'Works', page: 3 },
    { name: 'About', page: 4 },
    { name: 'Contact', page: 5 }
  ];

  const handleLinkClick = (page) => {
    goToPage(page);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [currentPage]);

  return (
    <>
      <motion.nav 
        className={`navigation ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="nav-brand">
          <button onClick={() => goToPage(1)} className="brand-button">
            Web Developer & Designer
          </button>
        </div>

        <div className="nav-links desktop">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page)}
              className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleLinkClick(link.page)}
                  className={`mobile-nav-link ${currentPage === link.page ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
