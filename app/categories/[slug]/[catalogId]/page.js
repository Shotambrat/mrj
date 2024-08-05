"use client";
import List from '@/app/_components/Catalog/List';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const { slug, catalogId } = useParams();
  const router = useRouter();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the category details to get the category ID
    fetch(`https://mrjtrade.uz/category/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        const category = data.data;
        if (category) {
          setCategory(category);

          // Fetch products by catalog ID
          fetch(`https://mrjtrade.uz/product/v2/all?catalog-id=${catalogId}`)
            .then((response) => response.json())
            .then((data) => setProducts(data.data))
            .catch((error) => {
              console.error("Error fetching products:", error);
              router.push('/404'); // Redirect to 404 page on error
            });
        } else {
          router.push('/404'); // Redirect to 404 page if category not found
        }
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
        router.push('/404'); // Redirect to 404 page on error
      });
  }, [slug, catalogId, router]);

  if (!category) {
    return <div>Loading...</div>; // Show a loading state until the category is fetched
  }

  return (
    <div className='w-full bg-white flex flex-col py-24'>
      <List categoryId={category.id} category={category} products={products} setProducts={setProducts} />
    </div>
  );
}