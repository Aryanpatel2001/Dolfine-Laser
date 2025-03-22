// "use client";

// import { motion } from "framer-motion";

// const features = [
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//         <path d="M8 11l3 3 5-5"></path>
//       </svg>
//     ),
//     title: "98% Maintenance-Free",
//     description:
//       "Our laser machines operate reliably with minimal maintenance requirements",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <circle cx="12" cy="8" r="7"></circle>
//         <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
//         <circle cx="12" cy="8" r="3"></circle>
//       </svg>
//     ),
//     title: "ISO & CE Certified",
//     description: "All machines meet international quality and safety standards",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//         <circle cx="12" cy="10" r="3"></circle>
//       </svg>
//     ),
//     title: "Global Service Network",
//     description:
//       "25 branches in India and 7 international locations for quick support",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
//         <path d="M2 17l10 5 10-5"></path>
//         <path d="M2 12l10 5 10-5"></path>
//       </svg>
//     ),
//     title: "Advanced Technology",
//     description: "State-of-the-art laser systems with cutting-edge features",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <circle cx="12" cy="12" r="10"></circle>
//         <polyline points="12 6 12 12 16 14"></polyline>
//       </svg>
//     ),
//     title: "Extended Lifespan",
//     description:
//       "Machines designed for durability with longer operational life",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//         <circle cx="9" cy="7" r="4"></circle>
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//       </svg>
//     ),
//     title: "Dedicated Support Team",
//     description:
//       "Expert technicians available for training and troubleshooting",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <rect x="2" y="4" width="20" height="16" rx="2"></rect>
//         <path d="M12 8v8"></path>
//         <path d="M18 12H6"></path>
//       </svg>
//     ),
//     title: "Flexible Payment Options",
//     description: "Customized financial solutions to fit your business needs",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <line x1="12" y1="1" x2="12" y2="23"></line>
//         <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
//       </svg>
//     ),
//     title: "Competitive Pricing",
//     description: "Best-in-class technology at industry-leading prices",
//   },
//   {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-10 w-10"
//       >
//         <rect x="1" y="3" width="15" height="13"></rect>
//         <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
//         <circle cx="5.5" cy="18.5" r="2.5"></circle>
//         <circle cx="18.5" cy="18.5" r="2.5"></circle>
//       </svg>
//     ),
//     title: "Fast Delivery",
//     description: "Quick manufacturing and shipping to minimize downtime",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6 },
//   },
// };

// export default function WhyChooseUs() {
//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//       <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <div className="inline-block mb-4">
//             <div className="relative">
//               <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
//                 <div className="w-10 h-10 text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                   </svg>
//                 </div>
//               </div>
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-4 h-4"
//                 >
//                   <polyline points="20 6 9 17 4 12"></polyline>
//                 </svg>
//               </motion.div>
//             </div>
//           </div>

//           <h2 className="text-4xl font-bold text-slate-900 mb-4">
//             Why Choose Us
//           </h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"
//           />

//           <p className="max-w-3xl mx-auto text-slate-700 text-lg">
//             Because of the high quality of our products, we have been able to
//             gain a significant market share. We have a dedicated team of experts
//             who help us in providing the highest quality products to our valued
//             clients in accordance with their needs.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{
//                 y: -5,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className="bg-white rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer"
//             >
//               <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
//               <div className="p-8">
//                 <div className="mb-6 relative">
//                   <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 group-hover:text-blue-600 group-hover:bg-blue-100 transition-all duration-300">
//                     {feature.icon}
//                   </div>
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.3, delay: 0.2 }}
//                     viewport={{ once: true }}
//                     className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="w-3 h-3"
//                     >
//                       <polyline points="20 6 9 17 4 12"></polyline>
//                     </svg>
//                   </motion.div>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-600">{feature.description}</p>

//                 <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-sm text-blue-600 font-medium">
//                     Learn more
//                   </span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-4 h-4 text-blue-600"
//                   >
//                     <path d="M5 12h14"></path>
//                     <path d="M12 5l7 7-7 7"></path>
//                   </svg>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
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

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block relative">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-6 left-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
            ></motion.span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Why Choose Us
            </h2>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"
            ></motion.span>
          </div>
          <p className="text-lg font-semibold text-gray-600 max-w-3xl mx-auto mt-8">
            Precision Engineering for Tomorrow's Manufacturing
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto text-xl text-gray-700 leading-relaxed mb-20 backdrop-blur-sm bg-white/30 p-6 rounded-2xl shadow-sm"
        >
          With over two decades of experience in laser technology, we've
          established ourselves as industry leaders through our commitment to
          innovation, quality, and customer satisfaction. Our cutting-edge laser
          machines are designed to transform your manufacturing processes with
          unparalleled precision and reliability.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden relative group border border-blue-50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -translate-y-2 group-hover:rotate-3 transition-all duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center group-hover:text-blue-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-12 border border-blue-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            Request a Consultation
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Add custom animation for the blob effect */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
