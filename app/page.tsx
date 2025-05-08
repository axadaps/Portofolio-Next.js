'use client';

import { useState, useEffect } from 'react';
import TiltedCard from './components/TiltedCard/TiltedCard';
import Navbar from './components/Navbar/Navbar';
import Link from "next/link";
import Portofolio from './portofolio/portofolio';
import { motion } from "framer-motion";
import Kontak from './Contact/Contact';
import Particles from './components/Particles/Particles';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar 
        links={[
          { href: "#home", text: "Beranda" },
          { href: "#portofolio", text: "Portofolio" },
          { href: "#kontak", text: "Kontak" }
        ]}
      />
      <div className='absolute top-0 right-0 left-0 bottom-0 w-full h-full'>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Hero Section - Reduced padding from pt-32 to pt-16 */}
      <div id="home" className="container mx-auto pt-16 min-h-screen flex items-center justify-center px-4 sm:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          {/* KIRI - Foto Profil */}
          <motion.div 
            className="md:col-span-6 flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 md:mb-0 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl blur opacity-50 animate-pulse"></div>
              <TiltedCard
                imageSrc="/assets/photo/img.jpg"
                altText="Dimas Adhyaksa Pratama"
                captionText="Aksa"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-black bg-opacity-70 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-xl absolute top-2 left-2 transform translate-x-2 translate-y-2 whitespace-nowrap text-xs sm:text-base">
                    Dimas Adhyaksa Pratama
                  </p>
                }
              />
            </div>
          </motion.div>

          {/* KANAN - Teks Intro */}
          <motion.div 
            className="md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Hai, saya Dimas Adhyaksa Pratama
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300">
              Seorang Web Developer yang siap membangun website impian Anda dengan Next.js, Tailwind, dan Typescript.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#portofolio">
                <button className="mt-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl shadow hover:from-cyan-600 hover:to-teal-600 transition duration-300 transform">
                  Lihat Karya Saya
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Portofolio Section */}
      <div id="portofolio">
        <Portofolio />
      </div>

      {/* Kontak Section */}
      <div id="kontak">
        <Kontak />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 mt-16 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Dimas Adhyaksa Pratama. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/axadaps" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/dimas-adhyaksa-pratama-a3132a218/" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="https://instagram.com/axadap_" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}