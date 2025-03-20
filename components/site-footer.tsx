// import Link from "next/link"
// import Image from "next/image"
// import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

// export function SiteFooter() {
//   const branches = [
//     "Canada",
//     "Dubai",
//     "USA",
//     "Bangalore",
//     "Delhi",
//     "Chennai",
//     "Surat",
//     "Pune",
//     "Jaipur",
//     "Rajkot",
//     "Mumbai",
//     "Coimbatore",
//     "Hyderabad",
//     "Kolkata",
//     "Indore",
//   ]

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Company Info */}
//           <div>
//             <div className="mb-6 flex items-center gap-2">
//               <Image
//                 src="/dolphin-logo.svg"
//                 alt="Dolphin Laser Machine"
//                 width={50}
//                 height={50}
//                 className="h-12 w-auto"
//               />
//               <span className="text-xl font-bold text-white">Dolphin Laser</span>
//             </div>
//             <p className="mb-6">
//               Premier manufacturer and exporter of industrial laser machines since 2015. Committed to innovation,
//               quality, and customer satisfaction.
//             </p>
//             <div className="flex gap-4">
//               <Link href="#" className="text-gray-400 hover:text-white">
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white">
//                 <Twitter className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white">
//                 <Instagram className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white">
//                 <Linkedin className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white">
//                 <Youtube className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
//             <ul className="grid gap-3">
//               <li>
//                 <Link href="/" className="hover:text-primary">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-primary">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="hover:text-primary">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/quality" className="hover:text-primary">
//                   Quality
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/industries" className="hover:text-primary">
//                   Industries We Serve
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/blog" className="hover:text-primary">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/gallery" className="hover:text-primary">
//                   Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-primary">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Get In Touch */}
//           <div>
//             <h3 className="mb-6 text-lg font-bold text-white">Get In Touch</h3>
//             <ul className="grid gap-4">
//               <li className="flex gap-3">
//                 <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
//                 <span>
//                   Plot No. 23-28, Akshar Estate, Behind Madhuban Estate, Bhavda Patiya, Indore Highway, Ahmedabad,
//                   Gujarat - 382433
//                 </span>
//               </li>
//               <li className="flex gap-3">
//                 <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
//                 <span>+91 99 98 14 26 09</span>
//               </li>
//               <li className="flex gap-3">
//                 <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
//                 <span>inquiry@dolphinlasermachine.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* Our Branches */}
//           <div>
//             <h3 className="mb-6 text-lg font-bold text-white">Our Branches</h3>
//             <div className="grid grid-cols-2 gap-2">
//               {branches.map((branch, index) => (
//                 <div key={index} className="flex items-center gap-1">
//                   <MapPin className="h-3 w-3 text-primary" />
//                   <span className="text-sm">{branch}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
//           <p>&copy; {new Date().getFullYear()} Dolphin Laser Machine Pvt. Ltd. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export function SiteFooter() {
  const [emailInput, setEmailInput] = useState("");

  const branches = [
    "Canada",
    "Dubai",
    "USA",
    "Bangalore",
    "Delhi",
    "Chennai",
    "Surat",
    "Pune",
    "Jaipur",
    "Rajkot",
    "Mumbai",
    "Coimbatore",
    "Hyderabad",
    "Kolkata",
    "Indore",
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmailInput("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Top wave decoration */}
      {/* <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-16 text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div> */}

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2 backdrop-blur-sm">
                <Image
                  src="/dolphin-logo.svg"
                  alt="Dolphin Laser Machine"
                  width={50}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Dolphin Laser
              </span>
            </div>
            <p className="text-gray-400">
              Premier manufacturer and exporter of industrial laser machines
              since 2015. Committed to innovation, quality, and customer
              satisfaction.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-blue-600 hover:text-white"
                  aria-label={`Visit our ${social.icon.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-blue-600">
              Quick Links
            </h3>
            <ul className="grid gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Quality", href: "/quality" },
                { name: "Industries We Serve", href: "/industries" },
                { name: "Blog", href: "/blog" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-500"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-600 transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-blue-600">
              Get In Touch
            </h3>
            <ul className="grid gap-5">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-gray-400">
                  Plot No. 23-28, Akshar Estate, Behind Madhuban Estate, Bhavda
                  Patiya, Indore Highway, Ahmedabad, Gujarat - 382433
                </span>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-gray-400">+91 99 98 14 26 09</span>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-gray-400">
                  inquiry@dolphinlasermachine.com
                </span>
              </li>
            </ul>
          </div>

          {/* Our Branches */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-blue-600">
              Our Branches
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-500"
                >
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>{branch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and additional links */}
        <div className="mt-16 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Dolphin Laser Machine Pvt. Ltd.
              All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-500">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-blue-500">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
