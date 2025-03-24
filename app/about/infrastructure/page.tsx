"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Factory,
  Users,
  Cpu,
  Award,
  Zap,
  Layers,
  CheckCircle,
} from "lucide-react";

type Props = {};

// Infrastructure stats counter
const Counter = ({
  value,
  title,
  icon: Icon,
}: {
  value: number;
  title: string;
  icon: React.ElementType;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setCount(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
        <Icon size={32} />
      </div>
      <h3 className="mb-1 text-4xl font-bold text-gray-900 dark:text-white">
        {count}
      </h3>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        {title}
      </p>
    </motion.div>
  );
};

// Image gallery with animation
const ImageGallery = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute h-full w-full"
        >
          <Image
            src={images[currentIndex].url || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h3 className="text-xl font-bold text-white">
              {images[currentIndex].alt}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white  transition-all hover:bg-white/40"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white  transition-all hover:bg-white/40"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Page = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const infrastructureImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-1-sJ1xMBanh3L2ZoOHzPHjG0Ifo3y8lR.webp",
      alt: "Advanced Laser Machine Production Facility",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-7-dMakqNG6JPwXc3hBlR6KHle8DpbuX0.webp",
      alt: "Precision Laser Equipment Manufacturing",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-6-s4xjMd76UfGpnplqeWzsrYWBmROocU.webp",
      alt: "Quality Testing and Calibration Process",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-3-hyY30D1NZaEIr2ikjEMT4HDB2Fbwe5.webp",
      alt: "Large-Scale Production Capacity",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-2-HO4FDdoP5IyduwazRaL6hyDigtfb6X.webp",
      alt: "Next-Generation Laser Technology",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-5-jIsxtYNw99Tge0duZu7qxxbkyHCKXQ.webp",
      alt: "Skilled Technicians Operating Laser Machines",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-8-VbAcV3bXKhvJLpXNgnO8uK4dZioRyu.webp",
      alt: "Our Dedicated Team of Professionals",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infra-4-eobR1LIVh8jnMUFneNxnIlDDZEHUnA.webp",
      alt: "Manufacturing Excellence in Action",
    },
  ];

  const departments = [
    {
      title: "Research & Development",
      description:
        "Our R&D team continuously innovates to develop cutting-edge laser technologies that set industry standards.",
      icon: Cpu,
    },
    {
      title: "Manufacturing",
      description:
        "State-of-the-art production lines with precision assembly processes ensure consistent quality in every machine.",
      icon: Factory,
    },
    {
      title: "Quality Control",
      description:
        "Rigorous testing protocols and quality checks at every stage guarantee reliable performance of our products.",
      icon: CheckCircle,
    },
    {
      title: "Technical Support",
      description:
        "Expert technicians provide comprehensive support and training for optimal machine operation and maintenance.",
      icon: Users,
    },
  ];
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20 dark:from-gray-900 dark:to-gray-950 mt-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="absolute inset-0 opacity-30">
          <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-blue-600/10 blur-2xl"
          ></motion.div>

          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/3 h-40 w-40 rounded-full bg-indigo-600/10 blur-2xl"
          ></motion.div>
        </motion.div>

        {/* Circuit board pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
            >
              State-of-the-Art Facility
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
            >
              Our Manufacturing Infrastructure
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-400"
            >
              Powering innovation through advanced technology and precision
              engineering
            </motion.p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageGallery images={infrastructureImages} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Excellence in Manufacturing
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  "To meet our customers' needs and provide them with excellent
                  products, we have a well-equipped infrastructural unit that is
                  divided into various divisions, each of which is responsible
                  for its departmental operations. We have the latest technology
                  equipment that we needed to effectively achieve our job tasks.
                  Our team has been able to enjoy ease and comfort during
                  operating hours since the whole operation has been kept
                  coordinated and organised."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Our Technological Edge
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  At Dolphin Laser Machine, we've invested in cutting-edge
                  manufacturing technology to produce laser machines that
                  deliver unmatched precision, reliability, and performance. Our
                  50,000 sq. ft. production facility houses advanced CNC
                  machinery, automated assembly lines, and specialized testing
                  equipment.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Every machine undergoes rigorous quality control checks at
                  multiple stages of production, ensuring that each product
                  meets our exacting standards before reaching our customers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      High Precision
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ±0.01mm accuracy
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Capacity
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      500+ units monthly
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Award size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      ISO Certified
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quality management
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Users size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Expert Team
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      150+ specialists
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">
              Our Specialized Departments
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <dept.icon size={24} />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {dept.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {dept.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">
              Infrastructure by the Numbers
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Counter
                value={50000}
                title="Sq. Ft. Production Area"
                icon={Factory}
              />
              <Counter value={150} title="Skilled Professionals" icon={Users} />
              <Counter value={25} title="Laser Machine Models" icon={Cpu} />
              <Counter value={30} title="Countries Served" icon={Award} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
