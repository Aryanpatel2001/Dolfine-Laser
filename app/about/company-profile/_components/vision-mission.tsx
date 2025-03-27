"use client";

import { motion } from "framer-motion";
import { Eye, Target, Lightbulb } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-40 sm:w-80 h-40 sm:h-80 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-blue-100 rounded-full opacity-30"></div>

      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-block mb-4">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <div className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Philosophy
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"
          />

          <p className="max-w-3xl mx-auto text-slate-700 text-base sm:text-lg px-2">
            Our vision, mission, and commitment to client satisfaction form the
            foundation of everything we do at Dolphin Laser Machine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-10 group-hover:opacity-20"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-blue-100 overflow-hidden z-10">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-50 rounded-full -mt-8 sm:-mt-10 -mr-8 sm:-mr-10 opacity-70"></div>

              <div className="relative">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg sm:rounded-xl inline-block mb-4 sm:mb-6">
                  <Eye className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Our Vision
                </h3>

                <div className="w-12 h-1 bg-blue-100 mb-4 sm:mb-6"></div>

                <p className="text-slate-700 leading-relaxed text-base sm:text-xl">
                  To be acknowledged as the world's leading manufacturer and
                  supplier of industrial laser machines and to make a big
                  difference for our consumers, distributors, and communities.
                </p>

                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-blue-50 rounded-full opacity-50 -mb-8 sm:-mb-10 -mr-8 sm:-mr-10"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-10 group-hover:opacity-20"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-blue-100 overflow-hidden z-10">
              <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-50 rounded-full -mt-8 sm:-mt-10 -ml-8 sm:-ml-10 opacity-70"></div>

              <div className="relative">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg sm:rounded-xl inline-block mb-4 sm:mb-6">
                  <Target className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Our Mission
                </h3>

                <div className="w-12 h-1 bg-blue-100 mb-4 sm:mb-6"></div>

                <p className="text-slate-700 leading-relaxed text-base sm:text-xl">
                  To meet our customers' expectations of quality, delivery, and
                  cost by continuous development and customer interaction. We
                  strive for excellence in everything we do.
                </p>

                <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-blue-50 rounded-full opacity-50 -mb-8 sm:-mb-10 -ml-8 sm:-ml-10"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-10 group-hover:opacity-20"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-blue-100 overflow-hidden z-10">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-50 rounded-full -mt-8 sm:-mt-10 -mr-8 sm:-mr-10 opacity-70"></div>

              <div className="relative">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg sm:rounded-xl inline-block mb-4 sm:mb-6">
                  <Lightbulb className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Client Satisfaction
                </h3>

                <div className="w-12 h-1 bg-blue-100 mb-4 sm:mb-6"></div>

                <p className="text-slate-700 leading-relaxed text-base sm:text-xl">
                  Customer satisfaction is our priority. We're absolutely
                  delighted by the high quality of service we offer to our
                  clients, and we focus on exceeding their expectations. What
                  separates us from our competitors is our absolute dedication
                  to customer satisfaction.
                </p>

                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-blue-50 rounded-full opacity-50 -mb-8 sm:-mb-10 -mr-8 sm:-mr-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
