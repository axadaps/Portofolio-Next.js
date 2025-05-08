'use client';

import { motion } from 'framer-motion';
import Particles from "../components/Particles/Particles";

const projects = [
  {
    title: "Website Portofolio",
    desc: "Situs pribadi dibangun dengan Next.js, Tailwind, dan Typescript.",
    link: "#",
    tags: ["Next.js", "Tailwind", "TypeScript"]
  },
  {
    title: "Landing Page Produk",
    desc: "Halaman promosi responsive untuk startup teknologi.",
    link: "#",
    tags: ["HTML", "Tailwind", "Marketing"]
  },
  {
    title: "Dashboard Admin",
    desc: "Antarmuka admin dengan chart, table, dan autentikasi.",
    link: "#",
    tags: ["React", "Chart.js", "Firebase"]
  }
];

export default function Portofolio() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Particles Background */}
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>

      {/* Content */}
      <div className="pt-32 px-6 sm:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
          Beberapa Proyek Keren Saya
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-cyan-500/20 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
