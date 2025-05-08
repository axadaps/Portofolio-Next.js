'use client';

import Navbar from "../components/Navbar/Navbar";

const projects = [
  {
    title: "Website Portofolio",
    desc: "Situs pribadi dibangun dengan Next.js, Tailwind, dan Typescript.",
    link: "#"
  },
  {
    title: "Landing Page Produk",
    desc: "Halaman promosi responsive untuk startup teknologi.",
    link: "#"
  },
  {
    title: "Dashboard Admin",
    desc: "Antarmuka admin dengan chart, table, dan autentikasi.",
    link: "#"
  }
];

export default function Portofolio() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Navbar />
      <div className="pt-32 px-6 sm:px-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Beberapa Proyek Keren Saya
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold group-hover:text-white text-gray-200 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 group-hover:text-gray-200 transition">
                {project.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
