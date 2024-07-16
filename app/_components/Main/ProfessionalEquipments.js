"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mindrayDC60 from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения
import mindraySV300 from "@/public/images/equipments/equip-uzi.png"; // Пример изображения, замените на ваши изображения
import cl900i from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения
import mindrayUniBase from "@/public/images/equipments/equip-uzi.png"; // Пример изображения, замените на ваши изображения
import mindrayBeneHeart from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";
import fav from "@/public/svg/main/fav.svg"

const equipmentData = [
  {
    title: "MINDRAY DC 60 X-insight",
    description: "A high-end ultrasound scanner that allows for high-quality diagnostics",
    image: mindrayDC60,
    new: false,
    promotions: true,
    price: '2500000 y.e',
    sale: '-35%',
  },
  {
    title: "MINDRAY SV300",
    description: "Advanced solution for mechanical ventilation in clinical settings",
    image: mindraySV300,
    new: true,
    promotions: false,
  },
  {
    title: "CL-900i",
    description: "One of the smallest fully automated chemiluminescent immunoassay analyzers",
    image: cl900i,
    new: true,
    promotions: false,
    sale: '-5%',
  },
  {
    title: "MINDRAY UniBase 30",
    description: "Reliable and durable operating table at an affordable price",
    image: mindrayUniBase,
    new: true,
    promotions: false,
  },
  {
    title: "MINDRAY BeneHeart",
    description: "Mindray’s new solution for non-invasive electrocardiography",
    image: mindrayBeneHeart,
    new: false,
    promotions: true,
    price: '2500 y.e',
    sale: '-5%',
  },
  {
    title: "MINDRAY DC 60 X-insight",
    description: "A high-end ultrasound scanner that allows for high-quality diagnostics",
    image: mindrayDC60,
    new: false,
    promotions: true,
    price: '2500 y.e',
    sale: '-55%',
  },
  {
    title: "MINDRAY SV300",
    description: "Advanced solution for mechanical ventilation in clinical settings",
    image: mindraySV300,
    new: true,
    promotions: false,
  },
  {
    title: "CL-900i",
    description: "One of the smallest fully automated chemiluminescent immunoassay analyzers",
    image: cl900i,
    new: true,
    promotions: false,
  },
  {
    title: "MINDRAY UniBase 30",
    description: "Reliable and durable operating table at an affordable price",
    image: mindrayUniBase,
    new: true,
    promotions: false,
  },
  {
    title: "MINDRAY BeneHeart",
    description: "Mindray’s new solution for non-invasive electrocardiography",
    image: mindrayBeneHeart,
    new: false,
    promotions: true,
    price: '2500 y.e',
    sale: '-25%',
  },
];

const categories = [
  {
    title: "All Equipment",
    slug: "all",
  },
  {
    title: "New Items",
    slug: "new",
  },
  {
    title: "Promotions",
    slug: "promotions",
  },
];

const EquipmentCarousel = () => {
  const [filteredData, setFilteredData] = useState(equipmentData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredData(equipmentData);
    } else if (category === "new") {
      setFilteredData(equipmentData.filter((item) => item.new));
    } else if (category === "promotions") {
      setFilteredData(equipmentData.filter((item) => item.promotions));
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
    <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-8 px-2">
      <h2 className="text-3xl max-mdx:text-2xl font-bold">PROFESSIONAL MEDICAL EQUIPMENT</h2>
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

        <Slider {...settings} className="h-auto">
          {filteredData.map((item, index) => (
            <div key={index} className="p-4 h-[500px]">
              <div className="border border-neutral-300 rounded-2xl p-4 pt-8 flex flex-col h-full relative">
                <div className="absolute top-2 left-2 flex gap-1">
                {item.new && (
                    <div className="py-1 px-2 font-semibold rounded-full text-xs text-greenView bg-green-100">
                      New
                    </div>
                  )}
                  {item.sale && (
                    <div className="py-1 px-2 font-semibold rounded-full text-xs text-red-500 bg-red-100">
                      {item.sale}
                    </div>
                  )}
                </div>
                <button className="absolute top-4 right-4">
                <Image 
                src={fav}
                width={100}
                height={100}
                alt="Favorite Icon"
                className="w-5 h-5 max-mdx:w-8 max-mdx:h-8"
                />
                </button>
                <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
                  <Image src={item.image} alt={item.title} width={200} height={200} className="object-contain w-full h-full" />
                </div>
                <h3 className="text-md font-semibold mt-3">{item.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                <div className="flex w-full justify-between items-center flex-wrap mt-3">
                <Link href="/categories">
                  <GreenArrow title={"more details"} />
                </Link>
                {item.price && (
                    <div className="py-1 px-2 font-semibold rounded-full text-greenView">
                      {item.price}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Link href="/categories" className="border border-greenView rounded-xl px-12 py-3">
          <GreenArrow title={"All products"} />
        </Link>
      </div>
    </section>
  );
};

export default EquipmentCarousel;