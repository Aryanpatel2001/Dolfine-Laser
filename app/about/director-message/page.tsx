"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Page = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20 dark:from-gray-900 dark:to-gray-950 mt-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <motion.div
          className="absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-blue-600/20 blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3 h-32 w-32 rounded-full bg-indigo-600/20 blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
            >
              Message from Our Director
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            >
              Guiding our vision with expertise and passion for innovation in
              laser technology
            </motion.p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -bottom-6 -right-6 top-6 w-full rounded-2xl border border-blue-200 bg-white/50 dark:border-blue-900/30 dark:bg-gray-800/20"></div>
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-800">
                <Image
                  src="/director-photo.webp"
                  alt="Mr. Viral Antala - Founder & CEO"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-5 -left-5 rounded-lg bg-blue-600 p-4 shadow-lg dark:bg-blue-700"
              >
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <span className="text-xl font-bold">15+</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Years of</p>
                    <p className="text-lg font-bold">Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative space-y-6"
            >
              <div className="absolute -left-8 top-0 text-6xl text-blue-600/20 dark:text-blue-500/20">
                <Quote size={80} />
              </div>

              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative rounded-xl bg-white/80 p-6 text-lg italic text-gray-700 shadow-lg  dark:bg-gray-800/80 dark:text-gray-300"
              >
                "Due To Expert in Laser Industries, I have started revolutionary
                laser machine manufacturing company. Our Clients are able to
                operate Their Business Tension Free because of our excellent
                innovative laser Machineries. With my knowledge & passion, I am
                guiding 10,000+ Business owners to grow their business. I love
                to have you as our dolphin family."
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="ml-auto flex max-w-xs flex-col items-end"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  MR. Viral Antala
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Founder & CEO
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="space-y-4 pt-4"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Our Vision
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  At Dolphin Laser Machine, we envision a future where
                  cutting-edge laser technology empowers businesses across
                  industries to achieve unprecedented precision, efficiency, and
                  innovation in their manufacturing processes.
                </p>

                <div className="grid gap-4 pt-2 sm:grid-cols-2">
                  {[
                    { number: "10,000+", label: "Businesses Guided" },
                    { number: "30+", label: "Countries Served" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <span className="text-lg font-bold">{stat.number}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
