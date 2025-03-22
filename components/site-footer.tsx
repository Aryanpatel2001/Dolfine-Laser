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
