"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, ExternalLink, Filter } from "lucide-react";
import { QuoteForm } from "@/components/products/quote-form";

// Industry data with online image links
const industries = [
  {
    name: "2D 3D Die",
    image:
      "https://www.dolphinlasermachine.com/images/industries/2d-3d-die.webp",
    videoUrl: "https://www.youtube.com/shorts/px6FN_J65zo",
    category: "manufacturing",
  },
  {
    name: "Advertising",
    image:
      "https://www.dolphinlasermachine.com/images/industries/advertising.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "marketing",
  },
  {
    name: "Automobile",
    image:
      "https://www.dolphinlasermachine.com/images/industries/automobile.webp",
    videoUrl:
      "https://www.youtube.com/watch?v=TUE83amHGkg&list=PLH_AkvsyIoJtdfsWTCs5IvKvpnI-T6cTx&index=45",
    category: "automotive",
  },
  {
    name: "Bearing",
    image: "https://www.dolphinlasermachine.com/images/industries/bearing.webp",
    videoUrl: "https://www.youtube.com/watch?v=-rO-bu_0N94",
    category: "manufacturing",
  },
  {
    name: "Brass Parts",
    image:
      "https://www.dolphinlasermachine.com/images/industries/brass-parts.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "manufacturing",
  },
  {
    name: "Cable & Wire",
    image:
      "https://www.dolphinlasermachine.com/images/industries/cable&wire.webp",
    videoUrl: "https://www.youtube.com/watch?v=Rk_e3SkAvgg",
    category: "electronics",
  },
  {
    name: "Copper Parts",
    image:
      "https://www.dolphinlasermachine.com/images/industries/copper-parts.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "manufacturing",
  },
  {
    name: "Cosmetics",
    image:
      "https://www.dolphinlasermachine.com/images/industries/cosmetics.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "consumer",
  },
  {
    name: "Cutting Tools",
    image:
      "https://www.dolphinlasermachine.com/images/industries/cutting-tools.webp",
    videoUrl: "https://www.youtube.com/shorts/IH_F1MEu1kM",
    category: "manufacturing",
  },
  {
    name: "Electronics",
    image:
      "https://www.dolphinlasermachine.com/images/industries/electronics.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "electronics",
  },
  {
    name: "Elevators",
    image:
      "https://www.dolphinlasermachine.com/images/industries/elevators.webp",
    videoUrl: "https://www.youtube.com/shorts/ojtebLgXAVk",
    category: "construction",
  },
  {
    name: "Engineering",
    image:
      "https://www.dolphinlasermachine.com/images/industries/engineering.webp",
    videoUrl: "https://www.youtube.com/shorts/bY_FGfrXCjo",
    category: "engineering",
  },
  {
    name: "Fabrics & Jeans",
    image: "https://www.dolphinlasermachine.com/images/industries/fabric.webp",
    videoUrl: "https://www.youtube.com/watch?v=285gUp9XRao",
    category: "textile",
  },
  {
    name: "Fabrication",
    image:
      "https://www.dolphinlasermachine.com/images/industries/fabrication.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "manufacturing",
  },
  {
    name: "FMCG",
    image: "https://www.dolphinlasermachine.com/images/industries/fmcg.webp",
    videoUrl: "https://youtube.com/watch?v=njrr5PxOL54",
    category: "consumer",
  },
  {
    name: "Gift & Article",
    image:
      "https://www.dolphinlasermachine.com/images/industries/gift&article.webp",
    videoUrl: "https://www.youtube.com/shorts/MT_0bNa-Vf8",
    category: "consumer",
  },
  {
    name: "Hardware",
    image:
      "https://www.dolphinlasermachine.com/images/industries/hardware.webp",
    videoUrl: "https://www.youtube.com/shorts/DsX6JOG7gsM",
    category: "manufacturing",
  },
  {
    name: "Jewellery",
    image:
      "https://www.dolphinlasermachine.com/images/industries/jewellery.webp",
    videoUrl: "https://youtube.com/shorts/gEPk4XZivWA",
    category: "luxury",
  },
  {
    name: "Kitchenware",
    image:
      "https://www.dolphinlasermachine.com/images/industries/kiitchenware.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "consumer",
  },
  {
    name: "LED",
    image: "https://www.dolphinlasermachine.com/images/industries/led.webp",
    videoUrl: "https://www.youtube.com/shorts/KnG7Jk05gC8",
    category: "electronics",
  },
  {
    name: "Manufacturing",
    image:
      "https://www.dolphinlasermachine.com/images/industries/manufacturing.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "manufacturing",
  },
  {
    name: "Mobile Accessories",
    image:
      "https://www.dolphinlasermachine.com/images/industries/mobile-accessories.webp",
    videoUrl: "https://www.youtube.com/shorts/dlfVTLVD_qI",
    category: "electronics",
  },
  {
    name: "Optical",
    image: "https://www.dolphinlasermachine.com/images/industries/optical.webp",
    videoUrl: "https://www.youtube.com/shorts/2SxzP-0S-6M",
    category: "healthcare",
  },
  {
    name: "Pet Bottles",
    image:
      "https://www.dolphinlasermachine.com/images/industries/pet-bottles.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "packaging",
  },
  {
    name: "Pharma",
    image: "https://www.dolphinlasermachine.com/images/industries/pharma.webp",
    videoUrl: "https://www.youtube.com/watch?v=XLAZS2k8p5U",
    category: "healthcare",
  },
  {
    name: "Pipe Fittings",
    image:
      "https://www.dolphinlasermachine.com/images/industries/pipe-fittings.webp",
    videoUrl: "https://www.youtube.com/watch?v=RNlafmkXN0E",
    category: "construction",
  },
  {
    name: "Pipe",
    image: "https://www.dolphinlasermachine.com/images/industries/pipe.webp",
    videoUrl: "https://www.youtube.com/watch?v=k0SDesPMrw0",
    category: "construction",
  },
  {
    name: "Pump",
    image: "https://www.dolphinlasermachine.com/images/industries/pump.webp",
    videoUrl:
      "https://www.youtube.com/watch?v=sUTkATcfJic&list=PLH_AkvsyIoJtdfsWTCs5IvKvpnI-T6cTx&index=20",
    category: "engineering",
  },
  {
    name: "RO Water",
    image:
      "https://www.dolphinlasermachine.com/images/industries/ro-water.webp",
    videoUrl: "https://www.youtube.com/channel/UCvWJLFU0YQhmFfo_F2QRB9w",
    category: "consumer",
  },
  {
    name: "Sheet Metal",
    image:
      "https://www.dolphinlasermachine.com/images/industries/sheet-metal.webp",
    videoUrl: "https://www.youtube.com/shorts/ARIbEU-hEJs",
    category: "manufacturing",
  },
  {
    name: "Solar",
    image: "https://www.dolphinlasermachine.com/images/industries/solar.webp",
    videoUrl: "https://www.youtube.com/watch?v=XLAZS2k8p5U",
    category: "energy",
  },
  {
    name: "Surgical Instrument",
    image:
      "https://www.dolphinlasermachine.com/images/industries/surgical-instrument.webp",
    videoUrl:
      "https://www.youtube.com/watch?v=F5zYTO493tY&list=PLH_AkvsyIoJtdfsWTCs5IvKvpnI-T6cTx&index=6",
    category: "healthcare",
  },
  {
    name: "Tool & Toolings",
    image:
      "https://www.dolphinlasermachine.com/images/industries/tool&toolings.webp",
    videoUrl: "https://www.youtube.com/shorts/iFzyy42g8Ws",
    category: "manufacturing",
  },
  {
    name: "Utensils",
    image:
      "https://www.dolphinlasermachine.com/images/industries/utensils.webp",
    videoUrl: "https://www.youtube.com/shorts/lFBmauGFXvU",
    category: "consumer",
  },
  {
    name: "Valve",
    image: "https://www.dolphinlasermachine.com/images/industries/valve.webp",
    videoUrl:
      "https://www.youtube.com/watch?v=chG5Ih8Ymv8&list=PLH_AkvsyIoJtdfsWTCs5IvKvpnI-T6cTx&index=14",
    category: "engineering",
  },
  {
    name: "Watch & Optics",
    image:
      "https://www.dolphinlasermachine.com/images/industries/watch&optics.webp",
    videoUrl: "https://www.youtube.com/watch?v=XLAZS2k8p5U",
    category: "luxury",
  },
];

// Get unique categories
const categories = [
  "all",
  ...new Set(industries.map((industry) => industry.category)),
];

export default function IndustriesWeServe() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [100, 0, 0, 100]);

  // Filter industries based on search term and category
  const filteredIndustries = industries.filter((industry) => {
    const matchesSearch = industry.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || industry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Hero Banner */}
      <div className="relative h-[40vh] mb-16 overflow-hidden">
        <Image
          src="https://www.dolphinlasermachine.com/images/breadcums/industries.webp"
          alt="Industries We Serve"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
        />

        {/* Overlay with animated laser effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-transparent">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 2] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"
          ></motion.div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              Our laser technology solutions power innovation across diverse
              industries
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 -z-10"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTJoMXYxaC0xdi0xem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bS0yIDJ2LTFoLTF2MWgxem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bS0yIDJ2LTFoLTF2MWgxem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ opacity, y }} className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Powering Innovation Across Industries
            </h2>
            <p className="max-w-3xl mx-auto text-slate-700">
              Our laser machines are used in over 35 different industries,
              providing precision cutting, marking, and engraving solutions for
              diverse applications.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search industries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-blue-100 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            </div>

            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors duration-200 w-full md:w-auto justify-center"
              >
                <Filter className="w-4 h-4" />
                Filter by Category
              </button>

              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-blue-100 z-20"
                >
                  <div className="p-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 rounded-md ${
                          selectedCategory === category
                            ? "bg-blue-100 text-blue-700"
                            : "hover:bg-blue-50 text-slate-700"
                        } capitalize transition-colors duration-200`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Display selected category */}
          {selectedCategory !== "all" && (
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700">
                <span className="capitalize">{selectedCategory}</span>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="w-5 h-5 rounded-full bg-blue-200 hover:bg-blue-300 flex items-center justify-center text-blue-700 transition-colors duration-200"
                >
                  ×
                </button>
              </div>
            </div>
          )}

          {/* Industries Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredIndustries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={industry.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full text-blue-700 hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-6 h-6" />
                      <span className="sr-only">
                        Watch video about {industry.name}
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-slate-500 capitalize">
                    {industry.category}
                  </p>
                </div>

                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No results message */}
          {filteredIndustries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                No industries found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTJoMXYxaC0xdi0xem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bS0yIDJ2LTFoLTF2MWgxem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bS0yIDJ2LTFoLTF2MWgxem0tMiAyaC0xdjFoMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"
            ></motion.div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Laser Solution for Your Industry?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Our experts can help you find the perfect laser machine for your
              specific industry requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setQuoteDialogOpen(true)}
              className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium tracking-wide shadow-lg transition-all duration-300 hover:shadow-white/20 hover:shadow-xl"
            >
              Request a Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
      {/* Quote Request Form Dialog */}
      <QuoteForm open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </section>
  );
}
