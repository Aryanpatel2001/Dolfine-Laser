// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// export function SiteHeader() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     })
//   }

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Quality", href: "/quality" },
//     { name: "Industries We Serve", href: "/industries" },
//     { name: "Blog", href: "/blog" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <header
//       className={`fixed top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex h-20 items-center justify-between px-4">
//         <Link href="/" className="flex items-center gap-2">
//           <Image src="/dolphin-logo.svg" alt="Dolphin Laser Machine" width={50} height={50} className="h-12 w-auto" />
//           <span className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
//             Dolphin Laser Machine
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex">
//           <ul className="flex items-center gap-6">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   href={item.href}
//                   className={`text-sm font-medium transition-colors hover:text-primary ${
//                     isScrolled ? "text-gray-700" : "text-white"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Mobile Navigation */}
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="ghost" size="icon" className="lg:hidden">
//               <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//             <nav className="flex flex-col gap-6 pt-16">
//               {navItems.map((item, index) => (
//                 <Link key={index} href={item.href} className="text-lg font-medium transition-colors hover:text-primary">
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
    { name: "About Us", href: "/about" },
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
          : "bg-white py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full">
            <motion.div
              initial={false}
              animate={{
                scale: isScrolled ? 1 : 1.05,
                y: isScrolled ? 0 : 2,
              }}
              transition={{ duration: 0.3 }}
              className="relative h-12 w-12 flex items-center justify-center"
            >
              <Image
                src="/logo.webp"
                alt="Dolphin Laser Machine"
                width={60}
                height={60}
                className="h-auto w-auto object-contain"
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

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors relative block",
                      isActive
                        ? "text-primary"
                        : isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover indicator */}
                    {hoveredItem === item.href && !isActive && (
                      <motion.span
                        layoutId="hoverIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-8 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <Button size="sm" className="gap-2 rounded-full">
            <Phone className="h-4 w-4" />
            <span>Contact Us</span>
          </Button>
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
