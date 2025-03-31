// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Bot, Phone, Mail, ArrowRight } from "lucide-react";
// import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
// import { EmailButton } from "@/components/email/email-button";
// import { ChatAssistant } from "./chat/chat";

// export function FloatingContactButtons() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeButton, setActiveButton] = useState<string | null>(null);

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   // Contact options data
//   const contactOptions = [
//     {
//       id: "ai",
//       label: "AI Assistant",
//       description: "Chat with our AI for instant help",
//       icon: Bot,
//       color: "from-cyan-600 to-blue-700",
//       component: ChatAssistant,
//     },
//     {
//       id: "whatsapp",
//       label: "WhatsApp",
//       description: "Message us on WhatsApp",
//       icon: Phone,
//       color: "from-green-500 to-green-600",
//       component: WhatsAppButton,
//     },
//     {
//       id: "email",
//       label: "Email Us",
//       description: "Send us an email inquiry",
//       icon: Mail,
//       color: "from-blue-500 to-indigo-600",
//       component: EmailButton,
//     },
//   ];

//   return (
//     <>
//       {/* Main floating menu button with pulse effect */}
//       <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
//         <motion.button
//           className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#1a5f7a] to-[#154d63] text-white shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Contact options"
//         >
//           {/* Pulse animation */}
//           {!isMenuOpen && (
//             <motion.div
//               className="absolute inset-0 rounded-full bg-[#1a5f7a]"
//               initial={{ opacity: 0.3, scale: 1 }}
//               animate={{
//                 opacity: [0.3, 0.4, 0],
//                 scale: [1, 1.2, 1.4],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "loop",
//               }}
//             />
//           )}

//           <motion.div
//             animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {isMenuOpen ? <X size={30} /> : <MessageCircle size={30} />}
//           </motion.div>
//         </motion.button>

//         {/* "Contact Us" label */}
//         {!isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute bottom-5 right-20 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-medium text-[#1a5f7a] shadow-md"
//           >
//             Contact Us
//             <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 transform bg-white" />
//           </motion.div>
//         )}
//       </div>

//       {/* Floating menu items */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop for mobile */}
//             {isMobile && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-40 bg-black/20 "
//                 onClick={() => setIsMenuOpen(false)}
//               />
//             )}

//             {/* Contact options */}
//             <motion.div
//               className="fixed bottom-24 right-6 z-40 flex flex-col items-end space-y-6 md:bottom-28 md:right-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {contactOptions.map((option, index) => {
//                 const Component = option.component;
//                 const isActive = activeButton === option.id;

//                 return (
//                   <motion.div
//                     key={option.id}
//                     className="group flex items-center gap-4"
//                     initial={{ opacity: 0, y: 20, x: 20 }}
//                     animate={{ opacity: 1, y: 0, x: 0 }}
//                     exit={{ opacity: 0, y: 20, x: 20 }}
//                     transition={{ delay: index * 0.1 }}
//                     onHoverStart={() => setActiveButton(option.id)}
//                     onHoverEnd={() => setActiveButton(null)}
//                   >
//                     {/* Card with label and description */}
//                     <motion.div
//                       className="rounded-xl bg-white p-3 shadow-lg"
//                       initial={{ width: "auto" }}
//                       animate={{
//                         width:
//                           isActive || (!isMobile && activeButton === null)
//                             ? "auto"
//                             : "auto",
//                         x: isActive ? 0 : 0,
//                       }}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div
//                           className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${option.color} text-white shadow-md`}
//                         >
//                           <option.icon size={20} />
//                         </div>

//                         <div>
//                           <h3 className="font-medium text-gray-900">
//                             {option.label}
//                           </h3>
//                           <p className="text-xs text-gray-500">
//                             {option.description}
//                           </p>
//                         </div>

//                         <motion.div
//                           className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500"
//                           whileHover={{
//                             backgroundColor: "#f3f4f6",
//                             color: "#1a5f7a",
//                           }}
//                         >
//                           <ArrowRight size={14} />
//                         </motion.div>
//                       </div>
//                     </motion.div>

//                     {/* The actual component button */}
//                     <div className="relative">
//                       <Component />
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Bot, Phone, Mail, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { EmailButton } from "@/components/email/email-button";
import { ChatAssistant } from "./chat/chat";

export function FloatingContactButtons() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Contact options data
  const contactOptions = [
    {
      id: "ai",
      label: "AI Assistant",
      description: "Chat with our AI for instant help",
      icon: Bot,
      color: "from-cyan-600 to-blue-700",
      component: ChatAssistant,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      description: "Message us on WhatsApp",
      icon: Phone,
      color: "from-green-500 to-green-600",
      component: WhatsAppButton,
    },
    {
      id: "email",
      label: "Email Us",
      description: "Send us an email inquiry",
      icon: Mail,
      color: "from-blue-500 to-indigo-600",
      component: EmailButton,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {/* {isMenuOpen && ( */}
        <>
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40  "
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          <motion.div
            ref={menuRef}
            className="fixed bottom-24 right-6  z-40 flex flex-col items-end space-y-6 md:bottom-1 md:right-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {contactOptions.map((option, index) => {
              const Component = option.component;
              const isActive = activeButton === option.id;

              return (
                <motion.div
                  key={option.id}
                  className="group flex items-center gap-4 "
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: 20, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setActiveButton(option.id)}
                  onHoverEnd={() => setActiveButton(null)}
                >
                  {/* The actual component button */}
                  <div className="relative">
                    <Component />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </>
        {/* )} */}
      </AnimatePresence>
    </>
  );
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Bot, Phone, Mail } from "lucide-react";
// import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
// import { EmailButton } from "@/components/email/email-button";
// import { ChatAssistant } from "./chat/chat";

// export function FloatingContactButtons() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeButton, setActiveButton] = useState<string | null>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   // Handle click outside to close menu
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         isMenuOpen &&
//         menuRef.current &&
//         buttonRef.current &&
//         !menuRef.current.contains(event.target as Node) &&
//         !buttonRef.current.contains(event.target as Node)
//       ) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   // Contact options data
//   const contactOptions = [
//     {
//       id: "ai",
//       label: "AI Assistant",
//       description: "Chat with our AI for instant help",
//       icon: Bot,
//       color: "from-cyan-600 to-blue-700",
//       component: ChatAssistant,
//     },
//     {
//       id: "whatsapp",
//       label: "WhatsApp",
//       description: "Message us on WhatsApp",
//       icon: Phone,
//       color: "from-green-500 to-green-600",
//       component: WhatsAppButton,
//     },
//     {
//       id: "email",
//       label: "Email Us",
//       description: "Send us an email inquiry",
//       icon: Mail,
//       color: "from-blue-500 to-indigo-600",
//       component: EmailButton,
//     },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 24,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       transition: { duration: 0.2 },
//     },
//   };

//   const pulseAnimation = {
//     initial: { scale: 1 },
//     pulse: {
//       scale: [1, 1.05, 1],
//       transition: {
//         duration: 1.5,
//         repeat: Number.POSITIVE_INFINITY,
//         repeatType: "loop" as const,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         className="fixed left-6 top-1/2 z-40 -translate-y-1/2"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {isMobile && isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-40 bg-black/20 "
//             onClick={() => setIsMenuOpen(false)}
//           />
//         )}

//         <motion.div
//           ref={menuRef}
//           className="flex flex-col items-start space-y-6"
//         >
//           {contactOptions.map((option, index) => {
//             const Component = option.component;
//             const isActive = activeButton === option.id;

//             return (
//               <motion.div
//                 key={option.id}
//                 className="group relative flex items-center gap-3"
//                 variants={itemVariants}
//                 whileHover="hover"
//                 animate={isHovering ? "pulse" : "initial"}
//                 custom={index}
//                 onHoverStart={() => setActiveButton(option.id)}
//                 onHoverEnd={() => setActiveButton(null)}
//               >
//                 {/* Label that appears on hover */}
//                 <AnimatePresence>
//                   {(isActive || isHovering) && (
//                     <motion.div
//                       className="absolute left-14 z-10 rounded-lg bg-white px-3 py-2 shadow-lg dark:bg-gray-800"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="flex flex-col">
//                         <span className="font-medium text-gray-900 dark:text-white">
//                           {option.label}
//                         </span>
//                         <span className="text-xs text-gray-500 dark:text-gray-400">
//                           {option.description}
//                         </span>
//                       </div>
//                       <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-white dark:bg-gray-800"></div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* The actual component button with pulse animation */}
//                 <motion.div className="relative" variants={pulseAnimation}>
//                   <Component />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }
