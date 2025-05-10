'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaRocket } from 'react-icons/fa';

export default function Experience() {
  return (
    <div
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-16 py-16 bg-cover bg-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        {/* EXPERIENCE SECTION */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative border-l-2 border-dashed border-cyan-400 pl-20 space-y-12">
          {/* Graduation */}
          <div className="relative">
            <div className="absolute -left-5 top-0">
              <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 ml-10">April 2025</p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg text-gray-200">
              <h3 className="font-semibold text-lg mb-1">
                Bachelor of Informatics, UMSIDA – Cum Laude
              </h3>
              <p className="text-sm mb-2">
                GPA 3.91. Focused on software engineering and system integration. Developed a student attendance system integrated with WhatsApp Gateway.
              </p>
              <div className="bg-white/5 rounded-lg p-3 mt-2">
                <h4 className="font-semibold text-sm mb-1">
                  Final Project:{' '}
                  <span className="italic">
                    "Web-Based Attendance System Integrated with WhatsApp"
                  </span>
                </h4>
                <ul className="list-disc ml-4 text-sm mt-2 space-y-1">
                  <li>Auto-send attendance reports to parents via WhatsApp</li>
                  <li>Real-time holiday detection system</li>
                  <li>Developed using CodeIgniter 4, MySQL, Fonnte API</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full">HTML</span>
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">CSS</span>
                <span className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-purple-700 text-white text-sm px-3 py-1 rounded-full">PHP</span>
                <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full">CodeIgniter 4</span>
                <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">Bootstrap 5</span>
              </div>
            </div>
          </div>
          
          {/* IT Support Internship */}
          <div className="relative">
            <div className="absolute -left-5 top-0">
              <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <FaRocket />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 ml-10">july – August 2023</p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg text-gray-200">
              <h3 className="font-semibold text-lg mb-1">IT Support Intern – Bank Rakyat Indonesia</h3>
              <p className="text-sm mb-2">
                Troubleshot hardware/network issues, monitored daily systems, and reported incidents using internal ticketing and Remote Desktop tools.
              </p>
              <div className="flex gap-2 flex-wrap mt-2">
                <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full">IT Support</span>
                <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">Troubleshooting</span>
                <span className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full">Remote Desktop</span>
                <span className="bg-yellow-700 text-white text-sm px-3 py-1 rounded-full">LAN</span>
                <span className="bg-purple-800 text-white text-sm px-3 py-1 rounded-full">Microsoft Excel</span>
              </div>
            </div>
          </div>
        </div>

        {/* ORGANIZATIONAL EXPERIENCE */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-24 mb-12 text-center bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
          Organizational Experience
        </h2>

        <div className="relative border-l-2 border-dashed border-teal-400 pl-20 space-y-12">
          {/* Wakil Ketua Umum */}
          <div className="relative">
            <div className="absolute -left-5 top-0">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <FaRocket />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 ml-10">2022 – 2023</p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg text-gray-200">
              <h3 className="font-semibold text-lg mb-1">
                Vice President – Ikatan Band Mahasiswa UMSIDA
              </h3>
              <p className="text-sm mb-2">
                Coordinated over 50 members, led music events and workshops, and built an internal documentation system that improved workflow by 30%.
              </p>
            </div>
          </div>

          {/* I'Konfest */}
          <div className="relative">
            <div className="absolute -left-5 top-0">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <FaRocket />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 ml-10">2022</p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg text-gray-200">
              <h3 className="font-semibold text-lg mb-1">
                Sponsorship Division – Ikabama Concert and Festival
              </h3>
              <p className="text-sm mb-2">
                Responsible for securing sponsorships by drafting proposals, establishing partnerships with external organizations, and maintaining professional communication to support the event's financial and logistical needs.
              </p>
            </div>
          </div>

          {/* FPIP Fair */}
          <div className="relative">
            <div className="absolute -left-5 top-0">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <FaRocket />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 ml-10">2023</p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg text-gray-200">
              <h3 className="font-semibold text-lg mb-1">Event Division – FPIP Fair 2K23</h3>
              <p className="text-sm mb-2">
                Managed concert technical needs, coordinated with vendors and talents, and ensured smooth transitions during live performances.
              </p>
            </div>
          </div>
        </div>

        {/* SOFT SKILLS */}
        <h2 className="text-2xl font-semibold text-center mt-24 mb-6 text-white">
          Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Communication',
            'Problem Solving',
            'Leadership',
            'Time Management',
            'Adaptability',
            'Team Work',
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white/10 text-white text-sm px-4 py-1 rounded-full border border-white/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
