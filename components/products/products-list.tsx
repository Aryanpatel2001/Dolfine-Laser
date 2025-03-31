"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Product, productCategories } from "@/hooks/products-data";

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState(products);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setVisibleProducts(products);
    } else {
      setVisibleProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 mt-8 sm:mt-16">
      <div className="mb-8 sm:mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
        >
          Our Laser Machine Products
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-3 sm:mt-4 h-1 w-20 sm:w-24 rounded-full bg-blue-600"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-gray-600 px-4"
        >
          Discover our comprehensive range of industrial laser machines designed
          for precision, reliability, and performance
        </motion.p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="mb-6 sm:mb-8 flex flex-col items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Filter by:
            </span>
          </div>
          <TabsList className="flex flex-wrap justify-center gap-1.5 sm:gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {productCategories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className="rounded-full border border-gray-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={selectedCategory} className="mt-0">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={product.mainImage || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.popular && (
                      <div className="absolute right-3 sm:right-4 top-3 sm:top-4 rounded-full bg-blue-600 px-2 sm:px-3 py-1 text-xs font-medium text-white">
                        Popular
                      </div>
                    )}
                  </div>
                  <CardContent className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600">
                        {product.shortDescription}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="mb-3 sm:mb-4">
                        <h4 className="mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-gray-700">
                          Compatible Materials:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.materials &&
                            product.materials
                              .slice(0, 4)
                              .map((material, index) => (
                                <span
                                  key={index}
                                  className="rounded-full bg-blue-100 px-2 py-0.5 sm:py-1 text-xs font-medium text-blue-800"
                                >
                                  {material}
                                </span>
                              ))}
                          {product.materials &&
                            product.materials.length > 4 && (
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 sm:py-1 text-xs font-medium text-gray-800">
                                +{product.materials.length - 4} more
                              </span>
                            )}
                        </div>
                      </div>
                      <Link href={`/products/${product.slug}`}>
                        <Button className="w-full gap-1.5 sm:gap-2 text-sm sm:text-base">
                          View Details
                          <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
