'use client'

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative z-10 bg-gray-900 py-6 mt-16 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Dimas Adhyaksa Pratama. All rights reserved.</p>
        </div>
      </footer>
    );
}