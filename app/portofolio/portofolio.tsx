'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal site built with Next.js, Tailwind, and TypeScript.",
    link: "https://porto-aksa.vercel.app/",
    image: "/assets/images/portofolio.png", 
    tags: ["Next.js", "Tailwind", "TypeScript"]
  },
  {
    title: "Integrated Attendance System",
    desc: "A web-based attendance system integrated with WhatsApp API for real-time notifications.",
    link: "#",
    image: "/assets/images/WhatsApp.png", 
    tags: ["CodeIgniter", "CSS", "PHP"]
  },
  {
    title: "Admin Dashboard",
    desc: "An admin interface to manage student data within the attendance system.",
    link: "#",
    image: "/assets/images/dashboard.png", 
    tags: ["CodeIgniter", "CSS", "PHP"]
  }
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="pt-32 pb-28 px-6 sm:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
          Some of My Awesome Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <div className="p-6">
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
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
