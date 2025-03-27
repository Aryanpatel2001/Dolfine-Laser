"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section
      className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden mt-8 sm:mt-12"
      ref={containerRef}
    >
      {/* Decorative elements - adjusted sizes */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-50 rounded-full opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 px-2">
            WELCOME TO DOLPHIN LASER MACHINE PVT.LTD
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div
            style={{ scale: imageScale, opacity: imageOpacity }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.dolphinlasermachine.com/images/about-us/about-us.webp"
                alt="Dolphin Laser Machine Facility"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 w-40 sm:w-64 h-40 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="https://www.dolphinlasermachine.com/images/company-profile/about.webp"
                alt="Dolphin Laser Machine Products"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </motion.div>

            {/* Decorative elements - adjusted sizes */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-blue-100"></div>
            <div className="absolute top-1/4 -left-4 sm:-left-8 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-200"></div>
            <div className="absolute bottom-1/3 -left-3 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-blue-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-700 space-y-4 sm:space-y-6"
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              In the heart of Ahmedabad, a trailblazing venture,{" "}
              <span className="font-semibold text-blue-700">
                DOLPHIN LASER MACHINE PVT. LTD.
              </span>{" "}
              established in 2015, stands as a premier Manufacturer and Exporter
              of all types of Industrial Laser Machines like Marking, Cutting,
              Engraving, Welding, and Cleaning.
            </p>

            <div className="pl-3 sm:pl-5 border-l-2 sm:border-l-4 border-blue-100">
              <p className="italic text-base sm:text-lg text-slate-600">
                "With a dedicated in-house R&D team and rigorous quality control
                adhering to ISO & CE standards, Dolphin Laser excels in crafting
                advanced systems using state-of-the-art technologies."
              </p>
            </div>

            <p className="leading-relaxed text-lg sm:text-xl">
              Under the leadership of{" "}
              <span className="font-semibold">Viral Antala</span>, the Founder
              and CEO, Dolphin Laser empowers clients with seamless operations.
              The company's success is attributed to a well-equipped
              infrastructure with specialized divisions, employing the latest
              technology for efficient workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 sm:my-8">
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
                  Our Products
                </h4>
                <ul className="text-sm sm:text-base space-y-1">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Fiber Laser Marking
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Laser Cutting Machines
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Welding Machines
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Cleaning Machines
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
                  Industries Served
                </h4>
                <ul className="text-sm sm:text-base space-y-1">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Automobiles
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Jewellery
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Engineering
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Pharma
                  </li>
                </ul>
              </div>
            </div>

            <p className="leading-relaxed text-lg sm:text-xl">
              With 25 branches spread across India for local service support and
              7 branches internationally, Dolphin has established a strong
              presence. The company takes pride in serving over 3500 plus
              successful customers worldwide, including renowned names such as
              Aditya Birla, Reliance, L&T, Tata Steel, and many more.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium tracking-wide shadow-lg transition-all duration-300 flex items-center text-sm sm:text-base"
            >
              Learn More About Us
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
