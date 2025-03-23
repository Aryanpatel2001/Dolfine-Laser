// import { notFound } from "next/navigation";
// import { products } from "@/hooks/products-data";
// import { ProductDetails } from "@/components/products/product-details";

// interface ProductPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const product = products.find((p) => p.slug === params.slug);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen">
//       <ProductDetails product={product} />
//     </main>
//   );
// }

// export async function generateStaticParams() {
//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/product-details";
import { products } from "@/hooks/products-data";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Ensure params is fully resolved
  const resolvedParams = await Promise.resolve(params);
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProductDetails product={product} />
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
