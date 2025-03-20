// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { ArrowRight, Star } from "lucide-react";

// const products = [
//   {
//     name: "Fiber Laser Welding Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/fiber-laser-welding-machine.webp?ver=1742448191",
//     description: "High-precision welding for industrial applications",
//     features: ["Precision Control", "High Speed", "Energy Efficient"],
//   },
//   {
//     name: "Online Laser Marking Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/online-laser-marking-machine.webp?ver=1742448191",
//     description: "Automated marking solutions for production lines",
//     features: ["Automated Process", "High Accuracy", "Fast Production"],
//   },
//   {
//     name: "CO2 Laser Cutting & Engraving Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/co2-laser-cutting-engraving-machine.webp?ver=1742448191",
//     description: "Versatile cutting and engraving capabilities",
//     features: ["Multi-material", "Precise Cutting", "Deep Engraving"],
//   },
//   {
//     name: "3D Marking Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/3d-marking.webp?ver=1742448191",
//     description: "Advanced 3D marking technology",
//     features: ["3D Capability", "Complex Designs", "Surface Adaptation"],
//   },
//   {
//     name: "UV Laser Marking Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/uv-laser-marking-machine.webp?ver=1742448191",
//     description: "Precise UV marking for specialized materials",
//     features: ["UV Technology", "Cold Processing", "Fine Detail"],
//   },
//   {
//     name: "Jewellery Cutting Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/jewellery-cutting-machine.webp?ver=1742448191",
//     description: "Specialized cutting for precious materials",
//     features: ["Precision Cuts", "Minimal Waste", "Perfect Edges"],
//   },
//   {
//     name: "Jewellery Soldering Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/jewellery-soldering-machine.webp?ver=1742448191",
//     description: "Precision soldering for fine jewelry",
//     features: ["Controlled Heat", "Fine Detail", "Clean Joints"],
//   },
//   {
//     name: "Fiber Laser Marking Machine",
//     image:
//       "https://www.dolphinlasermachine.com/images/home-products/fiber-laser-marking-machine.webp?ver=1742448191",
//     description: "High-speed marking for various materials",
//     features: ["Fast Processing", "Multiple Materials", "Permanent Marking"],
//   },
// ];

// const Products = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section ref={ref} className="section-padding bg-luxury-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
//             Premium Laser Solutions
//           </h2>
//           <p className="text-luxury-600 text-lg max-w-3xl mx-auto">
//             Experience the pinnacle of laser technology with our
//             state-of-the-art machines, engineered for unparalleled precision and
//             performance.
//           </p>
//         </motion.div>

//         <div className="product-grid">
//           {products.map((product, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="product-card"
//             >
//               <div className="product-image-container">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="product-overlay flex items-end p-6">
//                   <div className="text-white">
//                     <h4 className="text-lg font-semibold">{product.name}</h4>
//                     <p className="text-sm opacity-90">{product.description}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 bg-white">
//                 <div className="space-y-4">
//                   <div className="flex flex-wrap gap-2">
//                     {product.features.map((feature, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 text-xs font-medium text-primary-light bg-primary-light/10 rounded-full"
//                       >
//                         <Star className="w-3 h-3 inline-block mr-1" />
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                   <motion.button
//                     whileHover={{ x: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center text-primary hover:text-primary-light transition-colors duration-300 font-medium"
//                   >
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Fiber Laser Welding Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/fiber-laser-welding-machine.webp?ver=1742448191",
    description: "High-precision welding for industrial applications",
    features: ["Precision Control", "High Speed", "Energy Efficient"],
  },
  {
    name: "Online Laser Marking Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/online-laser-marking-machine.webp?ver=1742448191",
    description: "Automated marking solutions for production lines",
    features: ["Automated Process", "High Accuracy", "Fast Production"],
  },
  {
    name: "CO2 Laser Cutting & Engraving Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/co2-laser-cutting-engraving-machine.webp?ver=1742448191",
    description: "Versatile cutting and engraving capabilities",
    features: ["Multi-material", "Precise Cutting", "Deep Engraving"],
  },
  {
    name: "3D Marking Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/3d-marking.webp?ver=1742448191",
    description: "Advanced 3D marking technology",
    features: ["3D Capability", "Complex Designs", "Surface Adaptation"],
  },
  {
    name: "UV Laser Marking Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/uv-laser-marking-machine.webp?ver=1742448191",
    description: "Precise UV marking for specialized materials",
    features: ["UV Technology", "Cold Processing", "Fine Detail"],
  },
  {
    name: "Jewellery Cutting Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/jewellery-cutting-machine.webp?ver=1742448191",
    description: "Specialized cutting for precious materials",
    features: ["Precision Cuts", "Minimal Waste", "Perfect Edges"],
  },
  {
    name: "Jewellery Soldering Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/jewellery-soldering-machine.webp?ver=1742448191",
    description: "Precision soldering for fine jewelry",
    features: ["Controlled Heat", "Fine Detail", "Clean Joints"],
  },
  {
    name: "Fiber Laser Marking Machine",
    image:
      "https://www.dolphinlasermachine.com/images/home-products/fiber-laser-marking-machine.webp?ver=1742448191",
    description: "High-speed marking for various materials",
    features: ["Fast Processing", "Multiple Materials", "Permanent Marking"],
  },
];

export function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = React.useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [scrollDirection, setScrollDirection] = React.useState<
    "forward" | "reverse"
  >("forward");

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      if (carouselRef.current && !isDragging && autoScrollEnabled) {
        // carouselRef.current.scrollLeft += 1;

        // // If reaching the cloned elements, reset to the beginning smoothly
        // if (
        //   carouselRef.current.scrollLeft >=
        //   carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 1
        // ) {
        //   carouselRef.current.scrollLeft = 0; // Instant reset for seamless scrolling
        // }

        if (scrollDirection === "forward") {
          carouselRef.current.scrollLeft += 2;
        } else {
          carouselRef.current.scrollLeft -= 2;
        }

        // Check if we reached the last product and reverse the scroll direction
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 1
        ) {
          setScrollDirection("reverse");
        }

        // Check if we reached the first product and switch back to forward scroll
        if (carouselRef.current.scrollLeft <= 0) {
          setScrollDirection("forward");
        }
      }
    }, 20);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isDragging, autoScrollEnabled, scrollDirection]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    setAutoScrollEnabled(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 3000); // Resume auto-scroll after 3 seconds of inactivity
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    setAutoScrollEnabled(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 3000);
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 400;
      setAutoScrollEnabled(false);
      setTimeout(() => {
        setAutoScrollEnabled(true);
      }, 3000);
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 400;
      setAutoScrollEnabled(false);
      setTimeout(() => {
        setAutoScrollEnabled(true);
      }, 3000);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-[#f8f9fa]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Premium Laser Solutions
          </h2>
          <p className="text-[#1a5f7a]/80 text-lg max-w-3xl mx-auto">
            Experience the pinnacle of laser technology with our
            state-of-the-art machines, engineered for unparalleled precision and
            performance.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              onClick={scrollPrev}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white shadow-lg hover:bg-[#1a5f7a] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              onClick={scrollNext}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white shadow-lg hover:bg-[#1a5f7a] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div
            ref={carouselRef}
            className="product-carousel overflow-x-auto hide-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="inline-flex gap-6 px-10 py-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="product-card flex-none w-[300px] md:w-[350px]"
                  style={{ cursor: isDragging ? "grabbing" : "grab" }}
                >
                  <div className="product-image-container">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="product-overlay flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-lg font-semibold">
                          {product.name}
                        </h4>
                        <p className="text-sm opacity-90">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium text-[#1a5f7a] bg-[#1a5f7a]/10 rounded-full"
                          >
                            <Star className="w-3 h-3 inline-block mr-1" />
                            {feature}
                          </span>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-[#1a5f7a] hover:text-[#2a8db8] transition-colors duration-300 font-medium"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#1a5f7a] hover:bg-[#2a8db8] text-white px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
