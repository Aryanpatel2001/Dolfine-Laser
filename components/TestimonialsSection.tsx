// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Star, Quote } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";

// // Animation variants
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function TestimonialsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       name: "Rajesh Patel",
//       position: "CEO",
//       company: "Precision Engineering Ltd",
//       avatar: "/r-p.png",
//       rating: 5,
//       testimonial:
//         "The fiber laser cutting machine from Dolphin has revolutionized our production process. The precision and speed are unmatched, and the after-sales support has been exceptional.",
//     },
//     {
//       name: "Anita Sharma",
//       position: "Design Director",
//       company: "Creative Designs Inc",
//       avatar: "/p-2.jpeg",
//       rating: 5,
//       testimonial:
//         "We've been using Dolphin's laser engraving machine for over 2 years now. The quality of engraving and the reliability of the machine have exceeded our expectations.",
//     },
//     {
//       name: "Vikram Singh",
//       position: "Operations Manager",
//       company: "Modern Fabrications",
//       avatar: "/p-3.png",
//       rating: 5,
//       testimonial:
//         "The technical expertise of the Dolphin team is impressive. They helped us select the right laser welding solution for our specific needs, and the results have been outstanding.",
//     },
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 z-0" />
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
//       </div>

//       <div className="container relative z-10 px-4 mx-auto max-w-7xl">
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <Badge
//             variant="outline"
//             className="px-3.5 py-1.5 text-sm font-medium mb-3"
//           >
//             Testimonials
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
//             What Our <span className="text-primary">Clients</span> Say
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Hear from businesses that have transformed their operations with our
//             laser technology solutions.
//           </p>
//         </motion.div>

//         {/* Featured testimonial */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="mb-16"
//         >
//           <Card className="overflow-hidden border border-primary/10 bg-gradient-to-b from-background to-primary/5 shadow-lg">
//             <CardContent className="p-8 md:p-12">
//               <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
//                 <div>
//                   <div className="flex mb-6">
//                     <Quote className="text-primary h-12 w-12 opacity-80" />
//                   </div>
//                   <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-8 italic leading-relaxed">
//                     "{testimonials[activeIndex].testimonial}"
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <div className="flex gap-0.5 mb-2">
//                       {[...Array(testimonials[activeIndex].rating)].map(
//                         (_, i) => (
//                           <Star
//                             key={i}
//                             className="h-5 w-5 fill-primary text-primary"
//                           />
//                         )
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
//                       <Image
//                         src={
//                           testimonials[activeIndex].avatar || "/placeholder.svg"
//                         }
//                         alt={testimonials[activeIndex].name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">
//                         {testimonials[activeIndex].name}
//                       </h4>
//                       <p className="text-muted-foreground">
//                         {testimonials[activeIndex].position},{" "}
//                         {testimonials[activeIndex].company}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="hidden md:block relative h-64 w-64 rounded-full overflow-hidden border-4 border-primary/10">
//                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 " />
//                   <div className="absolute inset-3 rounded-full overflow-hidden">
//                     <Image
//                       src={
//                         testimonials[activeIndex].avatar || "/placeholder.svg"
//                       }
//                       alt={testimonials[activeIndex].name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Testimonial selection */}
//         <div className="flex justify-center gap-3 mb-12">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={cn(
//                 "w-3 h-3 rounded-full transition-all duration-300",
//                 index === activeIndex
//                   ? "bg-primary w-8"
//                   : "bg-primary/30 hover:bg-primary/50"
//               )}
//               aria-label={`View testimonial ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Testimonial grid */}
//         <motion.div
//           className="grid gap-6 md:grid-cols-3"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               variants={fadeIn}
//               className={cn(
//                 "transition-all duration-300 transform",
//                 activeIndex === index
//                   ? "scale-105 z-10"
//                   : "scale-100 opacity-80"
//               )}
//             >
//               <Card className="h-full overflow-hidden border border-primary/10 bg-gradient-to-b from-background to-muted shadow-md hover:shadow-lg transition-all duration-300">
//                 <CardContent className="flex h-full flex-col p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <Quote className="text-primary h-8 w-8 opacity-70" />
//                     <div className="flex gap-0.5">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="h-4 w-4 fill-primary text-primary"
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   <p className="mb-6 flex-grow text-muted-foreground">
//                     "{testimonial.testimonial}"
//                   </p>

//                   <div className="flex items-center gap-3 pt-4 border-t border-border">
//                     <div className="relative h-10 w-10 overflow-hidden rounded-full">
//                       <Image
//                         src={testimonial.avatar || "/placeholder.svg"}
//                         alt={testimonial.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <p className="font-medium">{testimonial.name}</p>
//                       <p className="text-xs text-muted-foreground">
//                         {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Patel",
      position: "CEO",
      company: "Precision Engineering Ltd",
      avatar: "/r-p.png",
      rating: 5,
      testimonial:
        "The fiber laser cutting machine from Dolphin has revolutionized our production process. The precision and speed are unmatched, and the after-sales support has been exceptional.",
    },
    {
      name: "Anita Sharma",
      position: "Design Director",
      company: "Creative Designs Inc",
      avatar: "/p-2.jpeg",
      rating: 5,
      testimonial:
        "We've been using Dolphin's laser engraving machine for over 2 years now. The quality of engraving and the reliability of the machine have exceeded our expectations.",
    },
    {
      name: "Vikram Singh",
      position: "Operations Manager",
      company: "Modern Fabrications",
      avatar: "/p-3.png",
      rating: 5,
      testimonial:
        "The technical expertise of the Dolphin team is impressive. They helped us select the right laser welding solution for our specific needs, and the results have been outstanding.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-3.5 py-1.5 text-sm font-medium mb-3"
          >
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with our
            laser technology solutions.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border border-primary/10 bg-gradient-to-b from-background to-primary/5 shadow-lg">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <div className="flex mb-6">
                    <Quote className="text-primary h-12 w-12 opacity-80" />
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 mb-6 md:mb-8 italic leading-relaxed">
                    "{testimonials[activeIndex].testimonial}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(testimonials[activeIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                      <Image
                        src={
                          testimonials[activeIndex].avatar || "/placeholder.svg"
                        }
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[activeIndex].position},{" "}
                        {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block relative h-64 w-64 rounded-full overflow-hidden border-4 border-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 " />
                  <div className="absolute inset-3 rounded-full overflow-hidden">
                    <Image
                      src={
                        testimonials[activeIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonial selection */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={cn(
                "transition-all duration-300 transform",
                activeIndex === index
                  ? "scale-105 z-10"
                  : "scale-100 opacity-80"
              )}
            >
              <Card className="h-full overflow-hidden border border-primary/10 bg-gradient-to-b from-background to-muted shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="text-primary h-8 w-8 opacity-70" />
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mb-6 flex-grow text-muted-foreground">
                    "{testimonial.testimonial}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
