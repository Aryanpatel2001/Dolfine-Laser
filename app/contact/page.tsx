"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
  Youtube,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BranchLocations from "./branch-locations";
import Link from "next/link";
import { QuoteForm } from "@/components/products/quote-form";

export default function page() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    setFormData({
      name: "",
      email: "",
      city: "",
      number: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen mt-[80px] bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Animated background elements */}
      <div className=" inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-100 opacity-30 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          INDIA&apos;S No. 1 Fastest Growing Laser Machine Manufacturer. We
          welcome your valuable inquiry for our product and services.
        </motion.p>
      </motion.section>

      {/* Main contact section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {/* Contact info */}
            <motion.div
              className="p-8 lg:col-span-2 bg-gradient-to-br from-blue-50 to-cyan-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">
                      Visit anytime
                    </h3>
                    <p className="mt-1 text-slate-600">
                      Plot No. 23-28, Akshar Estate, <br />
                      Behind Madhuban Estate, Bhavda Patiya, <br />
                      Indore Highway, Ahmedabad, <br />
                      Gujarat - 382433.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">
                      Have any question?
                    </h3>
                    <a
                      href="tel:+919998142609"
                      className="mt-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      +91 99 98 14 26 09
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">
                      Write email
                    </h3>
                    <a
                      href="mailto:inquiry@dolphinlasermachine.com"
                      className="mt-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      inquiry@dolphinlasermachine.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-slate-800 mb-4">
                  Connect with us
                </h3>
                <div className="flex space-x-4">
                  {/* Social media icons */}
                  {[
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/people/Dolphin-Laser/pfbid02AVwBtch3qQkwqbYnRtgGyyHUSVzBaDT2LBCdYwR7QKY3kZi9buudt47oBQxZNewxl/",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/dolphinlasermachine/",
                    },
                    {
                      icon: Linkedin,
                      href: "https://in.linkedin.com/company/dolphin-laser-technology",
                    },
                    {
                      icon: Youtube,
                      href: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-gray-100 transition-all hover:bg-blue-600 hover:text-white"
                      aria-label={`Visit our ${social.icon.name}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              className="p-8 lg:col-span-3 bg-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">
                  Send us a message
                </h2>
                <p className="text-slate-600 mt-1">
                  Feel free to reach out to us with any questions
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label
                      htmlFor="city"
                      className="text-sm font-medium text-slate-700"
                    >
                      City
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="number"
                      className="text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="number"
                      name="number"
                      type="tel"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Your Requirement
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Now
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Branches section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Our Branches</h2>
          <p className="mt-2 text-slate-600">Find us at a location near you</p>
        </div>

        <Tabs defaultValue="india" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="all">All Locations</TabsTrigger>
          </TabsList>
          <TabsContent value="india" className="mt-0">
            <BranchLocations filter="india" />
          </TabsContent>
          <TabsContent value="international" className="mt-0">
            <BranchLocations filter="international" />
          </TabsContent>
          <TabsContent value="all" className="mt-0">
            <BranchLocations filter="all" />
          </TabsContent>
        </Tabs>
      </motion.section>

      {/* Map section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4131.257447982243!2d70.8022945!3d22.217155899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbedfff01029%3A0x73884a81bae7a777!2sDOLPHIN%20Laser%20Machine%20Pvt%20Ltd%20-%20Rajkot!5e1!3m2!1sen!2sin!4v1736339704151!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
