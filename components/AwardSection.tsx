"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AwardsSection() {
  return (
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
                We're honored to receive the prestigious "Growth of Gujarat Make
                in India" award from Gujarat Home Minister{" "}
                <span className="font-medium text-foreground">
                  Mr. Harsh Sanghviji
                </span>
                , recognizing Dolphin Laser Machine's exceptional contribution
                to the industry.
              </p>

              <p className="leading-relaxed">
                This award highlights our commitment to innovation, quality, and
                the
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
  );
}
