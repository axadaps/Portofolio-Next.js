'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Aurora from '../Aurora/Aurora';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  href: string;
  text: string;
}

interface NavbarProps {
  links: NavLink[];
}

export default function Navbar({ links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 shadow-md backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              MyPortofolio
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="group relative text-sm font-medium text-gray-300 hover:text-white transition duration-300"
              >
                <span>{link.text}</span>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white transition-transform duration-300 focus:outline-none"
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 py-4 space-y-3 bg-gray-900/80 backdrop-blur-lg border-t border-white/10 rounded-b-xl shadow-lg"
          >
            {links.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-gray-300 hover:text-cyan-400 text-base font-semibold transition-all duration-300"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
