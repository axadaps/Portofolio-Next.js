'use client';

import { motion } from 'framer-motion';

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
        Punya ide, proyek, atau ingin bekerja sama? Kirim pesan saja!
      </p>
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800">
        <form
          action="https://formspree.io/f/your-form-id" // Ganti dengan Formspree ID kamu
          method="POST"
          className="space-y-4"
        >
          <div className="transition-all duration-300 hover:translate-y-[-2px]">
            <input
              type="text"
              name="nama"
              required
              placeholder="Nama"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-700 transition-all duration-300"
            />
          </div>
          <div className="transition-all duration-300 hover:translate-y-[-2px]">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-700 transition-all duration-300"
            />
          </div>
          <div className="transition-all duration-300 hover:translate-y-[-2px]">
            <textarea
              name="pesan"
              required
              placeholder="Pesan"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-700 transition-all duration-300"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:from-cyan-600 hover:to-teal-600 transition duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Kirim Pesan
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
