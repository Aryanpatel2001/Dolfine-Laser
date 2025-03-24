"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ImageModal from "./image-modal";

// Update the image data arrays to use online URLs

// Define image data for each category
const clientImages = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  src: `/clients/${i + 1}.webp`,
  alt: `Happy Client ${i + 1}`,
  category: "client",
})).concat([
  {
    id: 23,
    src: "/clients/aria.webp",
    alt: "Aira",
    category: "client",
  },
  {
    id: 24,
    src: "/clients/aplapollo.webp",
    alt: "Apla Apollo",
    category: "client",
  },
  {
    id: 25,
    src: "/clients/ashirvad-pipes.webp",
    alt: "Ashirvad Pipes",
    category: "client",
  },
  {
    id: 26,
    src: "/clients/atlas-pipe-support.webp",
    alt: "Atlas Pipe Support",
    category: "client",
  },
  {
    id: 27,
    src: "/clients/cg-power-solution.webp",
    alt: "CG Power Solution",
    category: "client",
  },
  {
    id: 28,
    src: "/clients/csir-india.webp",
    alt: "CSIR India",
    category: "client",
  },
  {
    id: 29,
    src: "/clients/de-neers.webp",
    alt: "De Neers",
    category: "client",
  },
  {
    id: 30,
    src: "/clients/desma.webp",
    alt: "Desma",
    category: "client",
  },
  {
    id: 31,
    src: "/clients/escorts.webp",
    alt: "Escorts",
    category: "client",
  },
  {
    id: 32,
    src: "/clients/flybird.webp",
    alt: "Flybird",
    category: "client",
  },
  {
    id: 33,
    src: "/clients/gm-engineering.webp",
    alt: "GM Engineering",
    category: "client",
  },
  {
    id: 34,
    src: "/clients/gm-pipes.webp",
    alt: "GM Pipes",
    category: "client",
  },
  {
    id: 35,
    src: "/clients/gm-switch-to-a-better-world.webp",
    alt: "GM Switch",
    category: "client",
  },
  {
    id: 36,
    src: "/clients/great-white-electrticals.webp",
    alt: "Great White Electricals",
    category: "client",
  },
  {
    id: 37,
    src: "/clients/lubi.webp",
    alt: "Lubi",
    category: "client",
  },
  {
    id: 38,
    src: "/clients/meril.webp",
    alt: "Meril",
    category: "client",
  },
  {
    id: 39,
    src: "/clients/mobase-electronics.webp",
    alt: "Mobase Electronics",
    category: "client",
  },
  {
    id: 40,
    src: "/clients/pbi.webp",
    alt: "PBI",
    category: "client",
  },
  {
    id: 41,
    src: "/clients/premier.webp",
    alt: "Premier",
    category: "client",
  },
  {
    id: 42,
    src: "/clients/rio-intl.webp",
    alt: "Rio Intl",
    category: "client",
  },
  {
    id: 43,
    src: "/clients/supreme.webp",
    alt: "Supreme",
    category: "client",
  },
  {
    id: 44,
    src: "/clients/suraj-limited.webp",
    alt: "Suraj Limited",
    category: "client",
  },
  {
    id: 45,
    src: "/clients/taparia.webp",
    alt: "Taparia",
    category: "client",
  },
  {
    id: 46,
    src: "/clients/unnati-submersible-pump.webp",
    alt: "Unnati Submersible Pump",
    category: "client",
  },
  {
    id: 47,
    src: "/clients/valeo.webp",
    alt: "Valeo",
    category: "client",
  },
]);

const machineImages = Array.from({ length: 56 }, (_, i) => ({
  id: i + 1,
  src: `/machine-photo/${i + 1}.webp`,
  alt: `Machine Installation ${i + 1}`,
  category: "machine",
}));

const awardImages = [
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/awards-achievements/${i + 1}.webp`,
    alt: `Award ${i + 1}`,
    category: "award",
  })),
  {
    id: 10,
    src: "/awards-achievements/be-vocal-about-local.webp",
    alt: "Be Vocal About Local",
    category: "award",
  },
  {
    id: 11,
    src: "/awards-achievements/best-machinery-award.webp",
    alt: "Best Machinery Award",
    category: "award",
  },
  {
    id: 12,
    src: "/awards-achievements/elevator-escalator-expo-2019.webp",
    alt: "Elevator Escalator Expo 2019",
    category: "award",
  },
  {
    id: 13,
    src: "/awards-achievements/engi-expo-2019-2.webp",
    alt: "Engi Expo 2019 2",
    category: "award",
  },
  {
    id: 14,
    src: "/awards-achievements/engi-expo-2019.webp",
    alt: "Engi Expo 2019",
    category: "award",
  },
  {
    id: 15,
    src: "/awards-achievements/engi-expo-2020.webp",
    alt: "Engi Expo 2020",
    category: "award",
  },
  {
    id: 16,
    src: "/awards-achievements/engimach-2019.webp",
    alt: "Engimach 2019",
    category: "award",
  },
  {
    id: 17,
    src: "/awards-achievements/hblf-show-2019.webp",
    alt: "HBLF Show 2019",
    category: "award",
  },
  {
    id: 18,
    src: "/awards-achievements/houseware-show-2019.webp",
    alt: "Houseware Show 2019",
    category: "award",
  },
  {
    id: 19,
    src: "/awards-achievements/imtex.webp",
    alt: "IMTEX",
    category: "award",
  },
  {
    id: 20,
    src: "/awards-achievements/indiamart-2018.webp",
    alt: "IndiaMART 2018",
    category: "award",
  },
  {
    id: 21,
    src: "/awards-achievements/jamnagar-tech-fest-2020.webp",
    alt: "Jamnagar Tech Fest 2020",
    category: "award",
  },
  {
    id: 22,
    src: "/awards-achievements/machauto-2020.webp",
    alt: "Machauto 2020",
    category: "award",
  },
  {
    id: 23,
    src: "/awards-achievements/sardardham-2020.webp",
    alt: "Sardardham 2020",
    category: "award",
  },
  {
    id: 24,
    src: "/awards-achievements/sgvp-gurukul-parivar.webp",
    alt: "SGVP Gurukul Parivar",
    category: "award",
  },
  {
    id: 25,
    src: "/awards-achievements/ss-houseware-show-2018.webp",
    alt: "SS Houseware Show 2018",
    category: "award",
  },
  {
    id: 26,
    src: "/awards-achievements/tabu-iso-9001-2015.webp",
    alt: "TABU ISO 9001 2015",
    category: "award",
  },
  {
    id: 27,
    src: "/awards-achievements/vibrant-india-2019.webp",
    alt: "Vibrant India 2019",
    category: "award",
  },
];

// Combine all images for search functionality
const allImages = [...clientImages, ...machineImages, ...awardImages];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("machine");
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState(allImages);
  const [isSearching, setIsSearching] = useState(false);

  // Filter images based on search term
  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
      const filtered = allImages.filter((img) =>
        img.alt.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    } else {
      setIsSearching(false);
      setFilteredImages(allImages);
    }
  }, [searchTerm]);

  // Get current images based on active tab or search
  const getCurrentImages = () => {
    if (isSearching) {
      return filteredImages;
    }

    switch (activeTab) {
      case "client":
        return clientImages;
      case "machine":
        return machineImages;
      case "award":
        return awardImages;
      default:
        return machineImages;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  // Handle image click to open modal
  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 pb-20 mt-10">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
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
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-100 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      {/* Header section */}
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
          Our Gallery
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore our happy clients, machine installations, and awards &
          exhibitions
        </motion.p>
      </motion.section>

      {/* Search bar */}
      <div className="max-w-md mx-auto mb-8 px-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search gallery..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10"
          />
          {searchTerm ? (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={() => setSearchTerm("")}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          ) : (
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </div>

      {/* Main gallery section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {!isSearching && (
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full mb-8"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="client">Happy Clients</TabsTrigger>
              <TabsTrigger value="machine">Machine Installation</TabsTrigger>
              <TabsTrigger value="award">Awards & Exhibition</TabsTrigger>
            </TabsList>
          </Tabs>
        )}

        {isSearching && (
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-slate-700">
              {filteredImages.length === 0
                ? "No results found"
                : `Found ${filteredImages.length} results for "${searchTerm}"`}
            </h2>
          </div>
        )}

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab + (isSearching ? searchTerm : "")}
        >
          {getCurrentImages().map((image) => (
            <motion.div
              key={`${image.category}-${image.id}`}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div
                className="overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized={image.src.startsWith("http")}
                  />
                </div>
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-3 text-sm font-medium">
                    {image.alt}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message if no images found */}
        {getCurrentImages().length === 0 && !isSearching && (
          <div className="text-center py-20">
            <p className="text-slate-500">
              No images available in this category.
            </p>
          </div>
        )}
      </motion.section>

      {/* Image modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
