"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ProductShowcase } from "@/components/Product";
import TestimonialsSection from "@/components/TestimonialsSection";
import { FloatingContactButtons } from "@/components/floating-contact-button";
import AwardsSection from "@/components/AwardSection";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative h-[50vh] sm:h-[70vh] md:h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.dolphinlasermachine.com/video/1440X900-dolphin-laser-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-8 md:grid-cols-2 md:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="order-2 md:order-1 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-[#1a5f7a]/10 to-transparent blur-3xl"></div>
              <Image
                src="https://www.dolphinlasermachine.com/images/about-us/about-us.webp"
                alt="About Dolphin Laser Machine"
                width={600}
                height={400}
                className="rounded-xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-1 bg-[#1a5f7a]/10 rounded-full">
                <span className="text-sm font-medium text-[#1a5f7a]">
                  About Us
                </span>
              </div>
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#1a5f7a] md:text-4xl lg:text-5xl leading-tight">
                India's Largest & Leading Manufacturing Company
              </h2>
              <p className="mb-6 text-lg sm:text-xl font-semibold text-gray-700">
                Ahmedabad-Based Innovator Pioneering Precision in Laser
                Technology
              </p>
              <p className="mb-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                In the heart of Ahmedabad, a trailblazing venture, DOLPHIN LASER
                MACHINE PVT. LTD. established in 2015, stands as a premier
                Manufacturer and Exporter of all types of Industrial Laser
                Machines like Marking, Cutting, Engraving, Welding, and
                Cleaning. With a dedicated in-house R&D team and rigorous
                quality control adhering to ISO & CE standards, Dolphin Laser
                excels in crafting advanced systems using state-of-the-art
                technologies.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="default"
                  className="bg-[#1a5f7a] hover:bg-[#1a5f7a]/90 text-white rounded-full px-6 py-6 h-auto text-sm sm:text-base"
                >
                  Learn More About Us
                </Button>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[#1a5f7a]/20 flex items-center justify-center border-2 border-white"
                      >
                        <span className="text-xs font-medium">🏆</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ISO & CE Certified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ProductShowcase />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">
                Global Reach
              </span>
            </div>
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-primary">Global</span> Presence
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-base sm:text-lg">
              With installations in over 20 countries and more than 4000
              machines deployed worldwide, including for the Indian Government,
              our reach continues to expand.
            </p>
          </motion.div>

          <motion.div
            className="mb-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
            <div className="relative mx-auto max-w-4xl p-4 sm:p-8">
              <Image
                src="https://www.dolphinlasermachine.com/images/map/global-presence.webp?ver=1742448659"
                alt="India Map with Presence"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-lg"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    20+
                  </p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    4000+
                  </p>
                  <p className="text-sm text-gray-600">Machines</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    100+
                  </p>
                  <p className="text-sm text-gray-600">Partners</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    8+
                  </p>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AwardsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Floating Contact Buttons (Chat, WhatsApp, Email) */}
      <FloatingContactButtons />
      <style jsx global>{`
        /* Responsive typography */
        @media (max-width: 640px) {
          h1,
          h2,
          h3 {
            letter-spacing: -0.025em;
          }
        }

        /* Responsive spacing */
        @media (max-width: 640px) {
          section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Better image handling */
        img {
          max-width: 100%;
          height: auto;
        }

        /* Improved mobile touch targets */
        @media (max-width: 640px) {
          button,
          [role="button"],
          a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Enhanced animations */
        * {
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform;
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #1a5f7a;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #154d63;
        }

        /* Text selection */
        ::selection {
          background: rgba(26, 95, 122, 0.2);
          color: #1a5f7a;
        }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(90deg, #1a5f7a, #2a8db8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* Card hover effects */
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .mobile-stack {
            flex-direction: column;
          }

          .mobile-full {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
