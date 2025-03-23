import React from "react";
import { products } from "@/hooks/products-data";
import { ProductsList } from "@/components/products/products-list";

const page = () => {
  return (
    <main className="min-h-screen">
      <ProductsList products={products} />
    </main>
  );
};

export default page;
