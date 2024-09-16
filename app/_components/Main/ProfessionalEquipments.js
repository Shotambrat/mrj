"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";
import Catalogitem from "../Catalog/Catalogitem";

const categories = [
  {
    title: "All Equipment",
    slug: "all",
  },
  {
    title: "New Items",
    slug: "new",
  }
];

const EquipmentCarousel = () => {
  const [equipmentData, setEquipmentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://mrjtrade.uz/product/v2/all?proffetional=true');
      const result = await response.json();
      setEquipmentData(result.data.slice(0, 20)); // Получаем первые 20 товаров
      setFilteredData(result.data.slice(0, 20)); // Устанавливаем отфильтрованные данные
    };
    fetchData();
  }, []);
  
  console.log("FilteredData",filteredData)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredData(equipmentData);
    } else if (category === "new") {
      setFilteredData(equipmentData.filter((item) => item.tag.includes("New")));
    } else if (category === "promotions") {
      setFilteredData(equipmentData.filter((item) => item.tag.includes("Promotion")));
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[2100px] slg:px-20 mx-auto flex flex-col gap-8 px-2">
      <h2 className="text-3xl max-mdx:text-2xl font-bold">
        PROFESSIONAL MEDICAL EQUIPMENT
      </h2>
      <div className="w-full flex flex-col gap-2">
        <div className="flex gap-2 overflow-x-scroll no-scrollbar">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category.slug)}
              className={`text-sm font-semibold px-4 py-2 whitespace-nowrap transition-all duration-200 rounded-full ${
                selectedCategory === category.slug
                  ? "bg-greenView text-white"
                  : "text-gray-600 bg-slate-100 hover:bg-greenView hover:text-white"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="w-full px-4">
          <Slider {...settings} className="h-auto flex">
            {filteredData.map((item, index) => (
              <div key={index} className="p-2">
                <Catalogitem
                  brand={item.brand.photo?.url}
                  sale={item.discount ? `-${item.discount}%` : null}
                  image={item.photo ? item.photo.url : null}
                  title={item.name}
                  description={item.shortDescription}
                  price={item.originalPrice ? `${item.originalPrice} y.e` : null}
                  slug={item.slug}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Link
          href="/categories"
          className="border border-greenView rounded-xl px-12 py-3"
        >
          <GreenArrow title={"All products"} />
        </Link>
      </div>
    </section>
  );
};

export default EquipmentCarousel;