"use client";

import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden ">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Main background image with parallax effect */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1635348729202-07471f1ae5c9?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
          className="absolute inset-0"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white/70 to-white/90"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        {/* Animated laser beams */}
        <motion.div
          className="absolute h-[2px] bg-blue-400/30 w-full top-1/3 left-0"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute h-[1px] bg-blue-300/40 w-full top-2/3 left-0"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        />

        {/* Animated circles that follow mouse */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 pointer-events-none"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/5 pointer-events-none"
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 80,
            delay: 0.05,
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mx-auto border border-blue-100">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-20 h-20 rounded-full border-t-2 border-r-2 border-blue-400"
                />
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-16 h-16 rounded-full border-b-2 border-l-2 border-blue-300 absolute"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    DL
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-4"
          >
            DOLPHIN LASER
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-light text-slate-800 mb-8"
          >
            MACHINE PVT. LTD
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8"
          />

          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-light tracking-wide"
          >
            Ahmedabad-Based Innovator Pioneering Precision in Laser Technology
          </motion.h3>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(37, 99, 235, 1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3  bg-blue-400 text-white rounded-full cursor-pointer font-medium tracking-wide shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-xl"
              onClick={() => redirect("/about/infrastructure")}
            >
              Check Our InfraStructure
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute  bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
