'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Kontak() {
  return (
    <motion.div
      id="kontak"
      className="mt-32 px-6 sm:px-16 pb-16 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
        Hubungi Saya
      </h2>
      <p className="text-gray-300 mb-8 text-center">
        Tertarik untuk berkolaborasi atau sekadar ingin menyapa? Langsung hubungi saya melalui platform di bawah ini!
      </p>
      <div className="relative z-10 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 flex justify-center space-x-8">
        {/* Opsi Kontak Langsung */}
        <motion.a
          href="https://github.com/axadaps" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="GitHub"
        >
          <FaGithub size={32} />
        </motion.a>
        <motion.a
          href="https://wa.me/6282231909498" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={32} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/dimas-adhyaksa-pratama-a3132a218/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a
          href="https://instagram.com/axadap_" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-500 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Instagram"
        >
          <FaInstagram size={32} />
        </motion.a>
        <motion.a
          href="mailto:dimasadhyaksapratama@gmail.com" 
          className="text-white hover:text-yellow-500 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Email"
        >
          <MdEmail size={32} />
        </motion.a>
      </div>
    </motion.div>
  );
}