// "use client";
// import React, { useState, useEffect } from "react";
// import { Menu, Phone, ChevronRight, ChevronDown, Globe } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { QuoteForm } from "./products/quote-form";

// export function SiteHeader() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
//     null
//   );
//   const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleMouseEnter = (itemName: string) => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//     }
//     setHoveredItem(itemName);
//   };

//   const handleMouseLeave = () => {
//     const timeout = setTimeout(() => {
//       setHoveredItem(null);
//     }, 200);
//     setDropdownTimeout(timeout);
//   };

//   const navItems = [
//     { name: "Home", href: "/" },
//     {
//       name: "About Us",
//       href: "#",
//       dropdown: [
//         { name: "Company Profile", href: "/about/company-profile" },
//         { name: "Director Message", href: "/about/director-message" },
//         { name: "Infrastructure", href: "/about/infrastructure" },
//       ],
//     },
//     { name: "Products", href: "/products" },
//     { name: "Quality", href: "/quality" },
//     { name: "Industries We Serve", href: "/industries" },
//     { name: "Blog", href: "/blog" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const headerVariants = {
//     initial: {
//       backgroundColor: "rgb(235, 234, 232)", // Transparent
//       height: "5rem",
//     },
//   };

//   const logoVariants = {
//     initial: { scale: 1 },
//     hover: { scale: 1.05, transition: { type: "spring", stiffness: 400 } },
//   };

//   const navItemVariants = {
//     initial: { y: 0, opacity: 1 },
//     hover: { y: -2, opacity: 1 },
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         type: "spring",
//         stiffness: 400,
//         damping: 25,
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       transition: { duration: 0.2 },
//     },
//   };

//   return (
//     <div className=" bg-gradient-to-b from-blue-50 via-white to-blue-50">
//       <motion.header
//         initial="initial"
//         animate={isScrolled ? "scrolled" : "initial"}
//         variants={headerVariants}
//         transition={{ duration: 0.4 }}
//         className="fixed top-0 z-50 w-full "
//       >
//         <div className="container mx-auto flex items-center justify-between px-4 h-full">
//           {/* Logo Section */}
//           <motion.div
//             className="flex items-center gap-4 cursor-pointer"
//             variants={logoVariants}
//             whileHover="hover"
//           >
//             <motion.div
//               animate={{
//                 scale: isScrolled ? 1 : 1.05,
//                 y: isScrolled ? 0 : 2,
//               }}
//               transition={{ duration: 0.3 }}
//               className="relative h-13 w-13 flex items-center justify-center"
//             >
//               <Image
//                 src="/logo.webp"
//                 alt="Dolphin Laser Machine"
//                 width={80}
//                 height={80}
//                 className="h-[80px] w-[80px] object-contain"
//               />
//             </motion.div>
//             <div className="flex flex-col">
//               <motion.span
//                 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-slate-600"
//                 animate={{
//                   fontSize: isScrolled ? "1.1rem" : "1.25rem",
//                 }}
//               >
//                 Dolphin Laser
//               </motion.span>
//               <motion.span
//                 className="text-sm text-gray-600"
//                 animate={{
//                   opacity: isScrolled ? 0.8 : 1,
//                 }}
//               >
//                 Precision Engineering
//               </motion.span>
//             </div>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <motion.div
//                 key={item.name}
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter(item.name)}
//                 onMouseLeave={handleMouseLeave}
//                 variants={navItemVariants}
//                 whileHover="hover"
//               >
//                 <motion.a
//                   href={item.href}
//                   className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                 >
//                   {item.name}
//                   {item.dropdown && (
//                     <motion.div
//                       animate={{
//                         rotate: hoveredItem === item.name ? 180 : 0,
//                       }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   )}
//                 </motion.a>

//                 {/* Enhanced Dropdown Menu */}
//                 <AnimatePresence>
//                   {item.dropdown && hoveredItem === item.name && (
//                     <motion.div
//                       variants={dropdownVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
//                       onMouseEnter={() => handleMouseEnter(item.name)}
//                       onMouseLeave={handleMouseLeave}
//                     >
//                       {item.dropdown.map((subItem, index) => (
//                         <motion.a
//                           key={subItem.name}
//                           href={subItem.href}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                           whileHover={{ x: 5 }}
//                         >
//                           {subItem.name}
//                         </motion.a>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}

//             {/* Contact Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-400 via-indigo-300 to-pink-300 text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
//               onClick={() => setQuoteDialogOpen(true)}
//             >
//               <Phone className="h-4 w-4" />
//               <span className="text-sm font-medium">Contact Us</span>
//             </motion.button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <Menu className="h-6 w-6 text-gray-700" />
//           </motion.button>
//         </div>
//       </motion.header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ type: "spring", damping: 20 }}
//             className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 lg:hidden"
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-8">
//                 <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
//                   Menu
//                 </span>
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="p-2"
//                 >
//                   <ChevronRight className="h-6 w-6" />
//                 </motion.button>
//               </div>
//               <nav className="space-y-1">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="mb-2"
//                   >
//                     <a
//                       href={item.href}
//                       className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
//                     >
//                       {item.name}
//                     </a>
//                   </motion.div>
//                 ))}
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Quote Request Form Dialog */}
//       <QuoteForm open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Menu, Phone, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { QuoteForm } from "./products/quote-form";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "#",
      dropdown: [
        { name: "Company Profile", href: "/about/company-profile" },
        { name: "Director Message", href: "/about/director-message" },
        { name: "Infrastructure", href: "/about/infrastructure" },
      ],
    },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Industries We Serve", href: "/industries" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const headerVariants = {
    initial: {
      backgroundColor: "rgb(235, 234, 232)", // Transparent
      height: "5rem",
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400 } },
  };

  const navItemVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -2, opacity: 1 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className=" bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <motion.header
        initial="initial"
        animate={isScrolled ? "scrolled" : "initial"}
        variants={headerVariants}
        transition={{ duration: 0.4 }}
        className="fixed top-0 z-50 w-full "
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-4 cursor-pointer"
            variants={logoVariants}
            whileHover="hover"
          >
            <motion.div
              animate={{
                scale: isScrolled ? 1 : 1.05,
                y: isScrolled ? 0 : 2,
              }}
              transition={{ duration: 0.3 }}
              className="relative h-13 w-13 flex items-center justify-center"
            >
              <Image
                src="/logo.webp"
                alt="Dolphin Laser Machine"
                width={80}
                height={80}
                className="h-[80px] w-[80px] object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-slate-600"
                animate={{
                  fontSize: isScrolled ? "1.1rem" : "1.25rem",
                }}
              >
                Dolphin Laser
              </motion.span>
              <motion.span
                className="text-sm text-gray-600"
                animate={{
                  opacity: isScrolled ? 0.8 : 1,
                }}
              >
                Precision Engineering
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                variants={navItemVariants}
                whileHover="hover"
              >
                <motion.a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                  {item.dropdown && (
                    <motion.div
                      animate={{
                        rotate: hoveredItem === item.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.a>

                {/* Enhanced Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && hoveredItem === item.name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdown.map((subItem, index) => (
                        <motion.a
                          key={subItem.name}
                          href={subItem.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                          whileHover={{ x: 5 }}
                        >
                          {subItem.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-400 via-indigo-300 to-pink-300 text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setQuoteDialogOpen(true)}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Contact Us</span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2"
                  >
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Request Form Dialog */}
      <QuoteForm open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </div>
  );
}
