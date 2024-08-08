"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Map from "@/app/_components/About/Map";
import Application from "@/app/_components/Main/Application";
import ProductInfo from "@/app/_components/Products/ProductInfo";
import Similar from "@/app/_components/Products/Similar";

export default function ProductPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slug = pathname.split("/").pop();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`https://mrjtrade.uz/product/v2/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full bg-white flex flex-col gap-56 pt-12">
      <ProductInfo product={product} />
      <Application />
      <Similar />
      <Map />
    </div>
  );
}