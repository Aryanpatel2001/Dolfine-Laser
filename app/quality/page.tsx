"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Shield, CheckCircle, Award, FileCheck } from "lucide-react";

export default function page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  const certificates = [
    {
      image:
        "https://www.dolphinlasermachine.com/images/certificate/Indiamart.webp",
      name: "IndiaMart Verified",
    },
    {
      image:
        "https://www.dolphinlasermachine.com/images/certificate/be-vocal-about-local.webp",
      name: "Vocal for Local",
    },
    {
      image: "https://www.dolphinlasermachine.com/images/certificate/tabu.webp",
      name: "TABU Certified",
    },
  ];

  const qualityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Strict Quality Control",
      description:
        "Comprehensive quality checks at every stage of manufacturing",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precision manufacturing",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Standards",
      description: "Adherence to international quality benchmarks",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Expert Verification",
      description: "Dedicated quality experts for thorough testing",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTJoMXYxaC0xdi0xem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bS0yIDJ2LTFoLTF2MWgxem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bS0yIDJ2LTFoLTF2MWgxem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <div className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M8 11l3 3 5-5"></path>
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Quality Assurance
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 sm:mb-8"
          />

          <p className="max-w-3xl mx-auto text-slate-700 text-base sm:text-lg">
            Our firm's topmost priority is quality, and we stick to
            industry-specific standards to ensure that it is maintained.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            style={{ opacity, scale, y }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://www.dolphinlasermachine.com/images/quality.webp"
                alt="Dolphin Laser Machine Quality"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />

              {/* Overlay with animated laser effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-xl"
                ></motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-100"></div>
            <div className="absolute top-1/4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-200"></div>
            <div className="absolute bottom-1/3 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-700 space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              To ensure compliance with the established industry standards, all
              of the offered products are manufactured using advanced technology
              and high-tech machines. Throughout the whole manufacturing
              process, a strict quality control system is in place.
            </p>

            <div className="pl-4 sm:pl-5 border-l-4 border-blue-100">
              <p className="italic text-slate-600 text-sm sm:text-base">
                "To ensure the accuracy and efficiency of each laser machine, we
                strictly monitor and prohibit any non-compliant parts from
                entering the site."
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed">
              We also have quality experts, who help us in testing our products
              on parameters like, durability, performance, strength and service
              life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-blue-50"
                >
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-blue-50 p-1.5 sm:p-2 rounded-md text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Our Certifications
            </h3>
            <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
              We are proud to be recognized by these prestigious organizations
              for our commitment to quality and excellence.
            </p>
          </div>

          <div className="relative">
            {/* Animated glow effect */}
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-200/30 to-blue-100/30 rounded-2xl blur-xl"
            ></motion.div>

            <div className="relative bg-white/80 rounded-2xl p-4 sm:p-6 lg:p-10 shadow-lg border border-blue-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 place-items-center">
                {certificates.slice(0, 3).map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="flex flex-col items-center justify-center bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-blue-50 transition-all duration-300 w-full max-w-[200px]"
                  >
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 mb-2 sm:mb-3">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                      {cert.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quality Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Our Quality Process
            </h3>
            <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
              Every Dolphin Laser machine undergoes a rigorous quality assurance
              process before delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "1",
                title: "Raw Material Inspection",
                description:
                  "Thorough inspection of all incoming materials and components",
              },
              {
                step: "2",
                title: "In-Process Quality Checks",
                description:
                  "Multiple quality checkpoints during the assembly process",
              },
              {
                step: "3",
                title: "Performance Testing",
                description:
                  "Comprehensive testing of all machine functions and capabilities",
              },
              {
                step: "4",
                title: "Final Inspection",
                description:
                  "Detailed final inspection before packaging and shipping",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-blue-50 z-10"
              >
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold">
                  {process.step}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 mt-2">
                  {process.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
