'use client';

import { useState, useEffect } from 'react';
import TiltedCard from './components/TiltedCard/TiltedCard';
import Navbar from './components/Navbar/Navbar';
import Link from "next/link";
import Portofolio from './portofolio/portofolio';
import { motion } from "framer-motion";
import Contact from './Contact/Contact';
import About from './About/About';
import Experience from './Experienece/Experience';
import Footer from './footer/footer';
import Particles from './components/Particles/Particles';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-auto relative bg-gradient-to-b from-black to-gray-900 text-white scrollbar-hide">
      <Navbar 
        links={[
          { href: "#home", text: "Home" },
          { href: "#about", text: "About Me" },
          { href: "#experience", text: "Experience" },
          { href: "#portofolio", text: "Portfolio" },
          { href: "#contact", text: "Contact" }
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

      <div id="home" className="container mx-auto pt-16 min-h-screen flex items-center justify-center px-4 sm:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          {/* LEFT - Profile Photo */}
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

          {/* RIGHT - Intro Text */}
          <motion.div 
            className="md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Hi There, I'm Dimas Adhyaksa Pratama
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cyan-300 font-medium tracking-wide text-shadow bg-black bg-opacity-10 rounded-md px-2 py-1">
              Integrated Technology | Effective Leadership | Meaningful Impact
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#portofolio">
                <button className="mt-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl shadow hover:from-cyan-600 hover:to-teal-600 transition duration-300 transform">
                  See My Works
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      {/* Portfolio Section */}
      <div id="portofolio">
        <Portofolio />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
