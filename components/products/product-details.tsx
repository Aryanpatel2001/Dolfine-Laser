"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Mail,
  Check,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Product } from "@/hooks/products-data";

import { QuoteForm } from "./quote-form";
import { ScheduleDemo } from "./schedule-demo";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleDownloadCatalogue = () => {
    // In a real application, this would be a link to an actual PDF file
    // For this example, we'll simulate a download with a toast notification
    toast.success("Catalogue download started", {
      description: `The ${product.name} catalogue is being downloaded.`,
    });

    // Create a fake download by creating a temporary anchor element
    const link = document.createElement("a");
    link.href = "/dolphin-catalague.pdf"; // This would be a real PDF URL in production
    link.download = `${product.slug}-catalogue.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>

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
            className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-blue-600/5 blur-2xl"
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
            className="absolute bottom-1/4 right-1/3 h-40 w-40 rounded-full bg-indigo-600/5 blur-2xl"
          ></motion.div>
        </motion.div>

        {/* Circuit board pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.02]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] overflow-hidden rounded-xl bg-white shadow-lg sm:h-[500px]">
              <Image
                src={
                  product.images[currentImageIndex].url || "/placeholder.svg"
                }
                alt={product.images[currentImageIndex].alt}
                fill
                className="object-contain p-4"
              />

              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition-all hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition-all hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 ${
                    index === currentImageIndex
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{product.description}</p>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Compatible Materials
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.materials &&
                  product.materials.map((material, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                    >
                      {material}
                    </span>
                  ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
                onClick={() => setQuoteDialogOpen(true)}
              >
                <Mail className="h-5 w-5" />
                Request a Quote
              </Button>
              <Button
                variant="outline"
                className="flex-1 gap-2 border-blue-200 hover:bg-blue-50"
                onClick={handleDownloadCatalogue}
              >
                <Download className="h-5 w-5" />
                Download Catalogue
              </Button>
            </div>

            <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Need more information?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Our team is ready to assist you with technical
                    specifications, customization options, and pricing details.
                  </p>
                  <Button
                    variant="link"
                    className="mt-2 h-auto p-0 text-blue-600"
                  >
                    Contact our experts
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications and Applications Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 gap-4 sm:w-auto sm:flex">
              <TabsTrigger
                value="specifications"
                className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="applications"
                className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Applications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-0">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Technical Specifications
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-100 bg-gray-50 p-4"
                    >
                      <h3 className="text-sm font-medium text-gray-500">
                        {spec.label}
                      </h3>
                      <div className="mt-1 text-base font-semibold text-gray-900">
                        {Array.isArray(spec.value) ? (
                          <ul className="list-inside list-disc">
                            {spec.value.map((val, i) => (
                              <li key={i} className="text-sm">
                                {val}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          spec.value
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-0">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Key Features
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-0">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Application Examples
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {product.applicationImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-sm text-gray-700">{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl font-bold">
            Ready to enhance your production capabilities?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Contact our team today to discuss how the {product.name} can
            transform your manufacturing process.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => setQuoteDialogOpen(true)}
            >
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => setDemoDialogOpen(true)}
            >
              <Clock className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Quote Request Form Dialog */}
      <QuoteForm
        open={quoteDialogOpen}
        onOpenChange={setQuoteDialogOpen}
        productName={product.name}
      />

      {/* Schedule Demo Dialog */}
      <ScheduleDemo
        open={demoDialogOpen}
        onOpenChange={setDemoDialogOpen}
        productName={product.name}
      />
    </div>
  );
}
