import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__container">
          {/* Logo */}
          <a href="#home" className="navbar__logo">
            <img src="/assets/logo.png" alt="Pathumi Garment Panda Logo" className="logo__img" />
            <span className="logo__text">
              Pathumi <span className="logo__sub">Garment</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
                <span className="navbar__link-dot" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="navbar__actions">
            <a href="#contact" className="btn btn--outline-gold navbar__cta">
              Get in Touch
              <ArrowRight size={16} className="btn__icon" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar__burger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="navbar__mobile-drawer"
          >
            <div className="navbar__mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn--gold mobile-drawer__cta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
                <ArrowRight size={16} className="btn__icon" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
