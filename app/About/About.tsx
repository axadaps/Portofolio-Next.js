'use client'

import { motion } from 'framer-motion';
import CircularText from '../components/CircularText/CircularText';
import Link from 'next/link';

export default function About() {
    return (
        <div id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-16 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          {/* LEFT - ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Tentang Saya
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
              Saya <span className="font-semibold text-cyan-400">Dimas Adhyaksa Pratama</span>, fresh graduate <span className="font-semibold text-cyan-400">S1 Informatika</span> dari Universitas X (2021-2025).
              Memiliki minat mendalam pada <span className="font-semibold text-cyan-400">web development</span>, <span className="font-semibold text-cyan-400">mobile app development</span>, dan <span className="font-semibold text-cyan-400">UI/UX design</span>.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
              Selama kuliah, saya aktif di proyek freelance & organisasi kampus yang memperkuat soft skill leadership dan teamwork. Saya percaya bahwa teknologi mampu menjadi solusi inovatif untuk tantangan zaman.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Saya siap berkontribusi di dunia profesional dengan semangat belajar dan terus berkembang.
            </p>
            <div className="mt-6">
              <Link href="#kontak">
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl shadow hover:from-cyan-600 hover:to-teal-600 transition duration-300 transform hover:scale-105">
                  Hubungi Saya
                </button>
              </Link>
            </div>
          </motion.div>
          
          {/* RIGHT - TEXT */}
          <CircularText
            text="Tentang Saya * About Me * "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
            />
        </motion.div>

        {/* BACKGROUND DECORATION */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-teal-500 opacity-20 rounded-full filter blur-2xl animate-pulse"></div>
        </div>
      </div>
    );
}