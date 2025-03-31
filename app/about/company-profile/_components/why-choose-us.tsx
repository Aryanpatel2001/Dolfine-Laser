"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Globe,
  Shield,
  Clock,
  Users,
  ChevronRight,
} from "lucide-react";
import { QuoteForm } from "@/components/products/quote-form";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "98% Service-Free Operation",
      description:
        "Our machines are engineered for reliability, with 98% requiring no service interventions during their operational lifetime, minimizing downtime and maintenance costs.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assured Products",
      description:
        "Every laser machine undergoes rigorous quality control processes, ensuring precision, durability, and consistent performance that exceeds industry standards.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Distribution Network",
      description:
        "Our extensive distribution network ensures prompt delivery and service support worldwide, making our cutting-edge technology accessible to businesses of all sizes.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ethical Business Practices",
      description:
        "We maintain the highest standards of integrity in all our operations, from sustainable manufacturing processes to fair pricing and transparent customer relationships.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Extended Machine Lifespan",
      description:
        "Our laser machines are built to last, with robust components and future-proof designs that ensure a longer operational life and greater return on investment.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric Approach",
      description:
        "We prioritize your unique manufacturing needs, offering customized solutions and dedicated support to ensure your complete satisfaction and success.",
    },
  ];

  const stats = [
    { value: "98%", label: "Service-Free Machines" },
    { value: "15+", label: "Years Average Lifespan" },
    { value: "45+", label: "Countries Served" },
    { value: "24h", label: "Customer Support" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <section className=" sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decorative elements - adjusted sizes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-36 sm:w-72 h-36 sm:h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Decorative dots - adjusted positions */}
        <div className="absolute top-1/4 right-1/4 w-1 sm:w-2 h-1 sm:h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        <div className="absolute top-1/3 left-1/5 w-1.5 sm:w-3 h-1.5 sm:h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 sm:w-2 h-1 sm:h-2 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header section */}
        <motion.div className="text-center mb-12 sm:mb-20">
          <div className="inline-block relative">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-6 left-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
            ></motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Why Choose Us
            </h2>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"
            ></motion.span>
          </div>
          <p className="text-base sm:text-lg font-semibold text-gray-600 max-w-3xl mx-auto mt-6 sm:mt-8 px-2">
            Precision Engineering for Tomorrow's Manufacturing
          </p>
        </motion.div>

        {/* Description paragraph */}
        <motion.p className="text-center max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-12 sm:mb-20 bg-white/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
          With over two decades of experience in laser technology, we've
          established ourselves as industry leaders through our commitment to
          innovation, quality, and customer satisfaction. Our cutting-edge laser
          machines are designed to transform your manufacturing processes with
          unparalleled precision and reliability.
        </motion.p>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white/80 rounded-xl sm:rounded-2xl overflow-hidden relative group border border-blue-50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <div className="relative z-10 p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg transform -translate-y-2 group-hover:rotate-3 transition-all duration-300">
                  <div className="text-white scale-75 sm:scale-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 sm:mb-4 text-center group-hover:text-blue-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-12 border border-blue-100"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div className="text-center mt-12 sm:mt-20">
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm sm:text-base"
            onClick={() => setQuoteDialogOpen(true)}
          >
            Request a Quote
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
      <QuoteForm open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />

      {/* Add custom animation for the blob effect */}
      <style jsx>
        {`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 25s infinite alternate;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseUs;
