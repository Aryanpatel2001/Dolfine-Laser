// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Users, Award, Globe, Building } from "lucide-react";

// export default function ClientSatisfaction() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
//       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

//       {/* Decorative elements */}
//       <div className="absolute top-40 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//       <div className="absolute bottom-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           ref={containerRef}
//           style={{ opacity, scale }}
//           className="max-w-5xl mx-auto"
//         >
//           <div className="text-center mb-16">
//             <div className="inline-block mb-4">
//               <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
//                 <div className="w-10 h-10 text-blue-600">
//                   <Globe className="h-10 w-10" />
//                 </div>
//               </div>
//             </div>

//             <h2 className="text-4xl font-bold text-slate-900 mb-4">
//               Our Global Presence
//             </h2>

//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               transition={{ duration: 1, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"
//             />

//             <p className="max-w-3xl mx-auto text-slate-700 text-lg mb-12">
//               With a strong network of branches and a growing customer base,
//               we're proud to serve clients worldwide with our cutting-edge laser
//               technology solutions.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -5,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-50 text-center p-8 relative group"
//             >
//               <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
//               <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
//                 <Building className="h-10 w-10 text-blue-600" />
//               </div>
//               <h3 className="text-5xl font-bold text-blue-600 mb-2">25+</h3>
//               <p className="text-slate-700 text-lg">Branches across India</p>
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -5,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-50 text-center p-8 relative group"
//             >
//               <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
//               <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
//                 <Globe className="h-10 w-10 text-blue-600" />
//               </div>
//               <h3 className="text-5xl font-bold text-blue-600 mb-2">7+</h3>
//               <p className="text-slate-700 text-lg">International branches</p>
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -5,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-50 text-center p-8 relative group"
//             >
//               <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
//               <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
//                 <Users className="h-10 w-10 text-blue-600" />
//               </div>
//               <h3 className="text-5xl font-bold text-blue-600 mb-2">3500+</h3>
//               <p className="text-slate-700 text-lg">
//                 Satisfied customers worldwide
//               </p>
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//             </motion.div>
//           </div>

//           <div className="bg-white rounded-2xl p-10 shadow-xl border border-blue-50 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mt-20 -mr-20 opacity-70"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -mb-20 -ml-20 opacity-70"></div>

//             <div className="relative">
//               <div className="flex flex-col md:flex-row items-center justify-between">
//                 <div className="mb-8 md:mb-0 md:mr-12">
//                   <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6">
//                     <Award className="h-10 w-10 text-blue-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-4">
//                     Trusted by Industry Leaders
//                   </h3>
//                   <p className="text-slate-700 leading-relaxed mb-6">
//                     We take pride in serving renowned names such as Aditya
//                     Birla, Reliance, L&T, Tata Steel, and many more, reinforcing
//                     our commitment to excellence in the laser technology domain.
//                   </p>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium tracking-wide shadow-lg transition-all duration-300 flex items-center"
//                   >
//                     Contact Us Today
//                     <svg
//                       className="w-5 h-5 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                       ></path>
//                     </svg>
//                   </motion.button>
//                 </div>

//                 <div className="bg-blue-50 rounded-xl p-6 md:p-8 w-full md:w-auto">
//                   <h4 className="text-xl font-semibold text-blue-800 mb-4">
//                     Our Valued Clients
//                   </h4>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-white rounded-lg p-3 shadow-sm">
//                       <p className="font-medium text-blue-900">Aditya Birla</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-3 shadow-sm">
//                       <p className="font-medium text-blue-900">Reliance</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-3 shadow-sm">
//                       <p className="font-medium text-blue-900">L&T</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-3 shadow-sm">
//                       <p className="font-medium text-blue-900">Tata Steel</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-3 shadow-sm col-span-2">
//                       <p className="font-medium text-blue-900">
//                         And many more...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
