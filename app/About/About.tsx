'use client';

import { motion } from 'framer-motion';
import CircularText from '../components/CircularText/CircularText';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-20 py-32 bg-gradient-to-b from-gray-900 via-black to-gray-950 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto z-10"
      >
        {/* LEFT - DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 text-opacity-90 mb-4">
            I'm <span className="text-cyan-400 font-semibold">Dimas Adhyaksa Pratama</span>, a graduate in <span className="text-cyan-400 font-semibold">Informatics Engineering</span> from UMSIDA (2021–2025).
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 text-opacity-90 mb-4">
            I specialize in <span className="text-cyan-400 font-semibold">web development</span>, <span className="text-cyan-400 font-semibold">mobile apps</span>, and <span className="text-cyan-400 font-semibold">UI/UX design</span>, building impactful solutions through technology.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 text-opacity-90">
            With a passion for collaboration and learning, I aim to craft meaningful digital experiences.
          </p>
        </motion.div>

        {/* RIGHT - PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <Image
              src="/assets/photo/img2.jpg"
              alt="Graduation Photo"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* CIRCULAR TEXT DECORATION */}
      <div className="absolute hidden md:block bottom-12 left-12 z-0 opacity-30">
        <CircularText
          text="About Me • Let's Collaborate • "
          onHover="speedUp"
          spinDuration={30}
          className="w-[220px] h-[220px]"
        />
      </div>

      {/* BACKGROUND PULSE EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400 opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-teal-400 opacity-10 rounded-full filter blur-2xl animate-pulse"></div>
      </div>
    </section>
  );
}
