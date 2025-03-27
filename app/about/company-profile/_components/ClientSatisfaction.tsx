"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

export default function ClientSatisfaction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto text-center bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-100"
        >
          <div className="bg-blue-50 p-3 sm:p-4 rounded-full inline-block mb-4 sm:mb-6">
            <Users className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
            Our Global Presence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                25+
              </h3>
              <p className="text-sm sm:text-base text-slate-700">
                Branches across India
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                7+
              </h3>
              <p className="text-sm sm:text-base text-slate-700">
                International branches
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                3500+
              </h3>
              <p className="text-sm sm:text-base text-slate-700">
                Satisfied customers worldwide
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We take pride in serving renowned names such as Aditya Birla,
            Reliance, L&T, Tata Steel, and many more, reinforcing our commitment
            to excellence in the laser technology domain.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors duration-300 text-sm sm:text-base"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
