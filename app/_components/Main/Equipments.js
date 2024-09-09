"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryItem from "@/app/_components/Categories/CategoryItem";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";

export default function Equipments() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Функция для получения категорий с API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://213.230.91.55:8110/category');
        const allCategories = response.data.data.item;
        // Фильтруем активные категории и берем только первые 4
        const activeCategories = allCategories.filter(category => category.active).slice(0, 4);
        setCategories(activeCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full max-w-[2100px] slg:px-20 mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-3xl max-mdl:text-2xl font-bold">
        EQUIPMENT CATEGORIES
      </h2>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4">
        {categories.map((category, i) => (
          <CategoryItem 
            key={i} 
            title={category.title} 
            imageSrc={category.photo.url} 
            slug={category.slug} 
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href={'/categories'} className="rounded-xl border border-neutral-300 px-12 py-3 hover:bg-green-100 hover:border-green-800 transition-all duration-200">
            <GreenArrow title={'All categories'} />
        </Link>
      </div>
    </div>
  );
}
