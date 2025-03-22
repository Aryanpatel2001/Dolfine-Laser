"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductShowcase } from "@/components/Product";
import AwardsSection from "@/components/AwardSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Badge } from "@/components/ui/badge";
import { ChatAssistant } from "@/components/chat/chat-assistant";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.dolphinlasermachine.com/video/1440X900-dolphin-laser-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <Image
                src="https://www.dolphinlasermachine.com/images/about-us/about-us.webp"
                alt="About Dolphin Laser Machine"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-bold text-[#1a5f7a] md:text-4xl">
                India's Largest & Leading Manufacturing Company
              </h2>
              <p className="mb-4 text-xl font-semibold text-gray-700">
                Ahmedabad-Based Innovator Pioneering Precision in Laser
                Technology
              </p>
              <p className="mb-6 text-gray-600">
                In the heart of Ahmedabad, a trailblazing venture, DOLPHIN LASER
                MACHINE PVT. LTD. established in 2015, stands as a premier
                Manufacturer and Exporter of all types of Industrial Laser
                Machines like Marking, Cutting, Engraving, Welding, and
                Cleaning. With a dedicated in-house R&D team and rigorous
                quality control adhering to ISO & CE standards, Dolphin Laser
                excels in crafting advanced systems using state-of-the-art
                technologies.
              </p>
              <Button
                variant="outline"
                className="border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#1a5f7a] hover:text-white rounded-full px-6"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ProductShowcase />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Global Presence
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              With installations in over 20 countries and more than 4000
              machines deployed worldwide, including for the Indian Government,
              our reach continues to expand.
            </p>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-4xl">
              <Image
                src="https://www.dolphinlasermachine.com/images/map/global-presence.webp?ver=1742448659"
                alt="India Map with Presence"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients and Awards Section */}

      {/* <AwardsSection /> */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="px-3.5 py-1.5 text-sm font-medium mb-3"
            >
              Recognition
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Awards & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating excellence and innovation in the industry with
              prestigious recognitions
            </p>
          </div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-muted">
              <CardContent className="p-2">
                <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://www.dolphinlasermachine.com/images/clients-and-news.webp?ver=1742448659"
                    alt="Dolphin Laser Clients"
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Award highlight */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Award Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 md:order-1"
            >
              <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-muted">
                <CardContent className="p-2">
                  <div className="relative w-full h-80 overflow-hidden rounded-lg">
                    {/* h-56 makes the image shorter */}
                    <Image
                      src="https://www.dolphinlasermachine.com/images/awards-achievements/9.webp"
                      alt="Growth of Gujarat Award"
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 668px) 100vw, 500px"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2"
            >
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                Prestigious Recognition
              </Badge>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Growth of Gujarat{" "}
                <span className="text-primary">Make in India</span> Award
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We're honored to receive the prestigious "Growth of Gujarat
                  Make in India" award from Gujarat Home Minister{" "}
                  <span className="font-medium text-foreground">
                    Mr. Harsh Sanghviji
                  </span>
                  , recognizing Dolphin Laser Machine's exceptional contribution
                  to the industry.
                </p>

                <p className="leading-relaxed">
                  This award highlights our commitment to innovation, quality,
                  and the
                  <span className="font-medium text-primary">
                    {" "}
                    Make in India initiative
                  </span>
                  , reinforcing our position as industry leaders in laser
                  technology.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background"
                    >
                      <span className="text-xs font-medium">🏆</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Plus many more industry recognitions
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <TestimonialsSection />

      {/* AI Chat Assistant */}
      <ChatAssistant />
    </main>
  );
}
