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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );

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

  const handleMobileDropdownToggle = (itemName: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
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
            className="fixed inset-y-0 right-0 w-[85%] sm:w-72 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2"
                  >
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => handleMobileDropdownToggle(item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              mobileDropdownOpen === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileDropdownOpen === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4"
                            >
                              {item.dropdown.map((subItem) => (
                                <motion.a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 border-l-2 border-gray-100 hover:border-blue-500 transition-all duration-200"
                                  onClick={() => {
                                    setMobileDropdownOpen(null);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Contact Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-400 via-indigo-300 to-pink-300 text-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => {
                    setQuoteDialogOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">Contact Us</span>
                </motion.button>

                {/* Company Contact Information */}
                <div className="mt-8 space-y-6 border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-3 px-4">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Call Us
                      </p>
                      <a
                        href="tel:+919998142609"
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        +91 9998142609
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 px-4">
                    <a
                      href="https://www.google.com/maps/place/Dolphin+Laser+Machine+PVT+LTD/@23.0024365,72.761886,17z/data=!3m1!4b1!4m6!3m5!1s0x395e86e5d86d8e93:0xcdb75697eea3c4a4!8m2!3d23.0024316!4d72.7644609!16s%2Fg%2F11c0qgzxfz?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </a>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Address
                      </p>
                      <a
                        href="https://www.google.com/maps/place/Dolphin+Laser+Machine+PVT+LTD/@23.0024365,72.761886,17z/data=!3m1!4b1!4m6!3m5!1s0x395e86e5d86d8e93:0xcdb75697eea3c4a4!8m2!3d23.0024316!4d72.7644609!16s%2Fg%2F11c0qgzxfz?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        Plot No. 23-28, Akshar Estate,
                        <br />
                        Behind Madhuban Estate, Bhavda Patiya,
                        <br />
                        Indore Highway, Ahmedabad,
                        <br />
                        Gujarat - 382433.
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:inquiry@dolphinlasermachine.com"
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        inquiry@dolphinlasermachine.com
                      </a>
                    </div>
                  </div>
                </div>
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
