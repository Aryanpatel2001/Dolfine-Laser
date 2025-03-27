// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, Bot, Phone, Mail, ArrowRight } from "lucide-react";
// import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
// import { EmailButton } from "@/components/email/email-button";
// import { ChatAssistant } from "./chat/chat";

// export function FloatingContactButtons() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeButton, setActiveButton] = useState<string | null>(null);
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

//   return (
//     <>
//       <AnimatePresence>
//         {/* {isMenuOpen && ( */}
//         <>
//           {isMobile && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-40 bg-black/20 "
//               onClick={() => setIsMenuOpen(false)}
//             />
//           )}

//           <motion.div
//             ref={menuRef}
//             className="fixed bottom-24 right-6  z-40 flex flex-col items-end space-y-6 md:bottom-1 md:right-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {contactOptions.map((option, index) => {
//               const Component = option.component;
//               const isActive = activeButton === option.id;

//               return (
//                 <motion.div
//                   key={option.id}
//                   className="group flex items-center gap-4 "
//                   initial={{ opacity: 0, y: 20, x: 20 }}
//                   animate={{ opacity: 1, y: 0, x: 0 }}
//                   exit={{ opacity: 0, y: 20, x: 20 }}
//                   transition={{ delay: index * 0.1 }}
//                   onHoverStart={() => setActiveButton(option.id)}
//                   onHoverEnd={() => setActiveButton(null)}
//                 >
//                   {/* The actual component button */}
//                   <div className="relative">
//                     <Component />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </>
//         {/* )} */}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Phone, Mail } from "lucide-react";
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
              className="fixed inset-0 z-40 bg-black/20 "
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
