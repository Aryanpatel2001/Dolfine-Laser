"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Page = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-12 sm:py-16 md:py-20 dark:from-gray-900 dark:to-gray-950 mt-4 sm:mt-6 md:mt-10">
      {/* Animated background elements - adjusted sizes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-16 sm:-left-32 -top-16 sm:-top-32 h-32 sm:h-64 w-32 sm:w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-48 sm:h-96 w-48 sm:w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <motion.div
          className="absolute left-1/4 top-1/3 h-16 sm:h-24 w-16 sm:w-24 rounded-full bg-blue-600/20 blur-2xl"
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
          className="absolute bottom-1/4 right-1/3 h-16 sm:h-32 w-16 sm:w-32 rounded-full bg-indigo-600/20 blur-2xl"
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

      <div className=" mt-10 container relative z-10 mx-auto px-4">
        <motion.div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-12 text-center sm:mt-10 md:mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl  sm:mt-10 md:mt-10 sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white "
            >
              Message from Our Director
            </motion.h2>
            <motion.div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-24 rounded-full bg-blue-600"></motion.div>
            <motion.p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
              Guiding our vision with expertise and passion for innovation in
              laser technology
            </motion.p>
          </div>

          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:items-center">
            <motion.div className="relative">
              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 top-3 sm:top-6 w-full rounded-xl sm:rounded-2xl border border-blue-200 bg-white/50 dark:border-blue-900/30 dark:bg-gray-800/20"></div>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-blue-100 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-800">
                <Image
                  src="/director-photo.webp"
                  alt="Mr. Viral Antala - Founder & CEO"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 rounded-lg bg-blue-600 p-3 sm:p-4 shadow-lg dark:bg-blue-700">
                <div className="flex items-center gap-2 sm:gap-3 text-white">
                  <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-white/20">
                    <span className="text-lg sm:text-xl font-bold">15+</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Years of</p>
                    <p className="text-base sm:text-lg font-bold">Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="relative space-y-4 sm:space-y-6">
              <div className="absolute -left-4 sm:-left-8 top-0 text-4xl sm:text-6xl text-blue-600/20 dark:text-blue-500/20">
                <Quote size={48} className="sm:w-20 sm:h-20" />
              </div>

              <motion.blockquote className="relative rounded-xl bg-white/80 p-4 sm:p-6 text-base sm:text-lg italic text-gray-700 shadow-lg dark:bg-gray-800/80 dark:text-gray-300">
                "Due To Expert in Laser Industries, I have started revolutionary
                laser machine manufacturing company. Our Clients are able to
                operate Their Business Tension Free because of our excellent
                innovative laser Machineries. With my knowledge & passion, I am
                guiding 10,000+ Business owners to grow their business. I love
                to have you as our dolphin family."
              </motion.blockquote>

              <motion.div className="ml-auto flex max-w-xs flex-col items-end">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  MR. Viral Antala
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Founder & CEO
                </p>
              </motion.div>

              <motion.div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Our Vision
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  At Dolphin Laser Machine, we envision a future where
                  cutting-edge laser technology empowers businesses across
                  industries to achieve unprecedented precision, efficiency, and
                  innovation in their manufacturing processes.
                </p>

                <div className="grid gap-3 sm:gap-4 pt-2 sm:grid-cols-2">
                  {[
                    { number: "10,000+", label: "Businesses Guided" },
                    { number: "30+", label: "Countries Served" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className="flex h-15 sm:h-13 w-15 sm:w-17 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <span className="text-base sm:text-lg font-bold p-2">
                          {stat.number}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
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
