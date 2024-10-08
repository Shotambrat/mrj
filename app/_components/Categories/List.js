"use client";
import { useState, useEffect } from "react";
import CategoryItem from "@/app/_components/Categories/CategoryItem";

export default function List() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories
    fetch("https://mrjtrade.uz/category")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.item))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="w-full max-w-[2100px] slg:px-20 mx-auto px-2 flex flex-col gap-8">
      <h1 className="text-3xl max-mdx:text-2xl font-semibold">
        EQUIPMENT CATEGORIES
      </h1>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4">
        {categories.map((category, i) => {
          if (!category.active) {
            return null;
          }
          return (
            <CategoryItem
              key={i}
              title={category.title}
              imageSrc={category.photo.url}
              slug={category.slug}
              hasCatalog={category.catalog.length > 0}
            />
          );
        })}
      </div>
    </div>
  );
}
