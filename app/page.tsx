// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Products from "@/components/Product";

// export default function Home() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section with Video Background */}
//       <section className="relative h-screen w-full overflow-hidden">
//         <video
//           ref={videoRef}
//           className="absolute inset-0 h-full w-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source
//             src="https://www.dolphinlasermachine.com/video/1440X900-dolphin-laser-video.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black/50">
//           <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
//             <motion.h1
//               className="mb-4 text-4xl font-bold md:text-6xl"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Precision Engineering with Laser Technology
//             </motion.h1>
//             <motion.p
//               className="mb-8 max-w-3xl text-lg md:text-xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               Cutting-edge laser solutions for marking, cutting, engraving,
//               welding, and cleaning. Transforming industries with precision and
//               innovation since 2015.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <Button
//                 size="lg"
//                 className="bg-primary text-white hover:bg-primary/90"
//               >
//                 Explore Our Products
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <div>
//               <Image
//                 src="https://www.dolphinlasermachine.com/images/about-us/about-us.webp"
//                 alt="About Dolphin Laser Machine"
//                 width={600}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="mb-2 text-3xl font-bold text-primary md:text-4xl">
//                 India's Largest & Leading Manufacturing Company
//               </h2>
//               <p className="mb-4 text-xl font-semibold text-gray-700">
//                 Ahmedabad-Based Innovator Pioneering Precision in Laser
//                 Technology
//               </p>
//               <p className="mb-6 text-gray-600">
//                 In the heart of Ahmedabad, a trailblazing venture, DOLPHIN LASER
//                 MACHINE PVT. LTD. established in 2015, stands as a premier
//                 Manufacturer and Exporter of all types of Industrial Laser
//                 Machines like Marking, Cutting, Engraving, Welding, and
//                 Cleaning. With a dedicated in-house R&D team and rigorous
//                 quality control adhering to ISO & CE standards, Dolphin Laser
//                 excels in crafting advanced systems using state-of-the-art
//                 technologies.
//               </p>
//               <Button
//                 variant="outline"
//                 className="border-primary text-primary hover:bg-primary hover:text-white"
//               >
//                 Learn More About Us
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Products Section */}
//       {/* <section className="bg-gray-50 py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="mb-12 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
//               Our Premium Laser Solutions
//             </h2>
//             <p className="mx-auto max-w-3xl text-gray-600">
//               Explore our range of high-precision laser machines designed for
//               various industrial applications. Each product is engineered for
//               excellence and built to deliver outstanding performance.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {[
//               {
//                 name: "Fiber Laser Welding Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/fiber-laser-welding-machine.webp?ver=1742448191",
//               },
//               {
//                 name: "Online Laser Marking Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/online-laser-marking-machine.webp?ver=1742448191",
//               },
//               {
//                 name: "CO2 Laser Cutting & Engraving Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/co2-laser-cutting-engraving-machine.webp?ver=1742448191",
//               },
//               {
//                 name: "3D Laser Marking Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/3d-marking.webp?ver=1742448191",
//               },
//               {
//                 name: "UV Laser Marking Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/uv-laser-marking-machine.webp?ver=1742448191",
//               },
//               {
//                 name: "Jewelry Cutting Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/jewellery-cutting-machine.webp?ver=1742448191",
//               },
//               {
//                 name: "Jewelry Soldering Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/jewellery-soldering-machine.webp?ver=1742448191",
//               },
//               {
//                 name: "Fiber Laser Marking Machine",
//                 image:
//                   "https://www.dolphinlasermachine.com/images/home-products/fiber-laser-marking-machine.webp?ver=1742448191",
//               },
//             ].map((product, index) => (
//               <motion.div key={index} variants={fadeIn}>
//                 <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
//                   <div className="aspect-square overflow-hidden">
//                     <Image
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.name}
//                       width={400}
//                       height={400}
//                       className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                   <CardContent className="p-4">
//                     <h3 className="text-lg font-semibold">{product.name}</h3>
//                     <Link
//                       href="#"
//                       className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
//                     >
//                       View Details
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section> */}
//       <Products />

//       {/* Global Presence Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="mb-12 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
//               Global Presence
//             </h2>
//             <p className="mx-auto max-w-3xl text-gray-600">
//               With installations in over 20 countries and more than 4000
//               machines deployed worldwide, including for the Indian Government,
//               our reach continues to expand.
//             </p>
//           </motion.div>

//           <motion.div
//             className="mb-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative mx-auto max-w-4xl">
//               <Image
//                 src="https://www.dolphinlasermachine.com/images/map/global-presence.webp?ver=1742448659"
//                 alt="India Map with Presence"
//                 width={800}
//                 height={600}
//                 className="w-full"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Clients and Awards Section */}
//       <section className="bg-gray-50 py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-12 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <Image
//                 src="https://www.dolphinlasermachine.com/images/clients-and-news.webp?ver=1742448659"
//                 alt="Dolphin Laser Clients"
//                 width={600}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col justify-center"
//           >
//             <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
//               Awards & Achievements
//             </h2>
//             <div className="mb-6 flex items-start gap-6">
//               <Image
//                 src="https://www.dolphinlasermachine.com/images/awards-achievements/9.webp"
//                 alt="Growth of Gujarat Award"
//                 width={200}
//                 height={300}
//                 className="rounded-lg shadow-md"
//               />
//               <div>
//                 <p className="text-gray-600">
//                   Winning the "Growth of Gujarat Make in India" award from
//                   Gujarat Home Minister Mr. Harsh Sanghviji for Dolphin Laser
//                   Machine Pvt Ltd is a remarkable achievement! It highlights the
//                   outstanding contribution of Dolphin Laser to both the economic
//                   growth of Gujarat and the Make in India initiative.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="mb-12 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
//               What Our Clients Say
//             </h2>
//             <p className="mx-auto max-w-3xl text-gray-600">
//               Hear from businesses that have transformed their operations with
//               our laser technology solutions.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid gap-6 md:grid-cols-3"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {[
//               {
//                 name: "Rajesh Patel",
//                 company: "Precision Engineering Ltd",
//                 testimonial:
//                   "The fiber laser cutting machine from Dolphin has revolutionized our production process. The precision and speed are unmatched, and the after-sales support has been exceptional.",
//               },
//               {
//                 name: "Anita Sharma",
//                 company: "Creative Designs Inc",
//                 testimonial:
//                   "We've been using Dolphin's laser engraving machine for over 2 years now. The quality of engraving and the reliability of the machine have exceeded our expectations.",
//               },
//               {
//                 name: "Vikram Singh",
//                 company: "Modern Fabrications",
//                 testimonial:
//                   "The technical expertise of the Dolphin team is impressive. They helped us select the right laser welding solution for our specific needs, and the results have been outstanding.",
//               },
//             ].map((testimonial, index) => (
//               <motion.div key={index} variants={fadeIn}>
//                 <Card className="h-full">
//                   <CardContent className="flex h-full flex-col p-6">
//                     <div className="mb-4 text-4xl text-primary">"</div>
//                     <p className="mb-6 flex-grow text-gray-600">
//                       {testimonial.testimonial}
//                     </p>
//                     <div>
//                       <p className="font-semibold">{testimonial.name}</p>
//                       <p className="text-sm text-gray-500">
//                         {testimonial.company}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

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
        {/* <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.h1
              className="mb-4 text-4xl font-bold md:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Precision Engineering with Laser Technology
            </motion.h1>
            <motion.p
              className="mb-8 max-w-3xl text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Cutting-edge laser solutions for marking, cutting, engraving,
              welding, and cleaning. Transforming industries with precision and
              innovation since 2015.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#1a5f7a] hover:bg-[#2a8db8] text-white rounded-full px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Our Products
              </Button>
            </motion.div>
          </div>
        </div> */}
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
      {/* <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://www.dolphinlasermachine.com/images/clients-and-news.webp?ver=1742448659"
                alt="Dolphin Laser Clients"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
              Awards & Achievements
            </h2>
            <div className="mb-6 flex items-start gap-6">
              <Image
                src="https://www.dolphinlasermachine.com/images/awards-achievements/9.webp"
                alt="Growth of Gujarat Award"
                width={200}
                height={300}
                className="rounded-lg shadow-md"
              />
              <div>
                <p className="text-gray-600">
                  Winning the "Growth of Gujarat Make in India" award from
                  Gujarat Home Minister Mr. Harsh Sanghviji for Dolphin Laser
                  Machine Pvt Ltd is a remarkable achievement! It highlights the
                  outstanding contribution of Dolphin Laser to both the economic
                  growth of Gujarat and the Make in India initiative.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      <AwardsSection />

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold gradient-text md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Hear from businesses that have transformed their operations with
              our laser technology solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Rajesh Patel",
                company: "Precision Engineering Ltd",
                testimonial:
                  "The fiber laser cutting machine from Dolphin has revolutionized our production process. The precision and speed are unmatched, and the after-sales support has been exceptional.",
              },
              {
                name: "Anita Sharma",
                company: "Creative Designs Inc",
                testimonial:
                  "We've been using Dolphin's laser engraving machine for over 2 years now. The quality of engraving and the reliability of the machine have exceeded our expectations.",
              },
              {
                name: "Vikram Singh",
                company: "Modern Fabrications",
                testimonial:
                  "The technical expertise of the Dolphin team is impressive. They helped us select the right laser welding solution for our specific needs, and the results have been outstanding.",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full luxury-card">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 text-4xl text-[#c8a45c]">"</div>
                    <p className="mb-6 flex-grow text-gray-600">
                      {testimonial.testimonial}
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      <TestimonialsSection />
    </main>
  );
}
