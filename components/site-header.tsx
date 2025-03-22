"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Properly handle scroll event with useEffect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-gray-100 backdrop-blur-md shadow-md py-2"
          : "bg-gray-100 py-3"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-12 group">
          <div className="relative overflow-hidden rounded-full">
            <motion.div
              initial={false}
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
          </div>

          <div className="flex flex-col">
            <motion.span
              initial={false}
              animate={{
                color: "rgb(0, 0, 0)", // Set text color to black
              }}
              transition={{ duration: 0.3 }}
              className="text-xl font-bold leading-tight"
            >
              Dolphin Laser
            </motion.span>
            <motion.span
              initial={false}
              animate={{
                color: "rgb(0, 0, 0)", // Set text color to black
              }}
              transition={{ duration: 0.3 }}
              className="text-xs font-medium"
            >
              Precision Engineering Solutions
            </motion.span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isDropdown = item.dropdown;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => isDropdown && setAboutDropdownOpen(true)}
                  onMouseLeave={(e) => {
                    const target = e.relatedTarget as Node | null;
                    if (!e.currentTarget.contains(target)) {
                      setAboutDropdownOpen(false);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                    {isDropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {isDropdown && aboutDropdownOpen && (
                    <AnimatePresence>
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                        onMouseEnter={() => setAboutDropdownOpen(true)}
                        onMouseLeave={() => setAboutDropdownOpen(false)}
                      >
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className="block px-6 py-3 text-sm hover:bg-gray-200"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={isScrolled ? "outline" : "secondary"}
              size="icon"
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <div className="flex flex-col h-full">
              <div className="border-b p-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="/dolphin-logo.svg"
                    alt="Dolphin Laser Machine"
                    width={40}
                    height={40}
                    className="h-auto w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight text-primary">
                    Dolphin Laser
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Precision Engineering Solutions
                  </span>
                </div>
              </div>

              <nav className="flex-1 overflow-auto py-6 px-6">
                <div className="mb-4 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                  Navigation
                </div>
                <ul className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between py-3 px-4 rounded-md text-base font-medium transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted"
                          )}
                        >
                          {item.name}
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground"
                            )}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t p-6">
                <Button className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Contact Us</span>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
