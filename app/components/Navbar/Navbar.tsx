'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Aurora from '../Aurora/Aurora';

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
              Dimas AP
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
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 bg-gray-900/90 backdrop-blur-lg border-t border-white/10">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-gray-300 hover:text-white text-base font-medium transition-all duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
