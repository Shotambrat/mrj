"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";
import fav from "@/public/svg/main/fav.svg";
import favFilled from "@/public/svg/main/fav-filled.svg";

export default function Catalogitem({
  brand,
  sale,
  image,
  title,
  description,
  price,
  slug,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((item) => item.slug === slug));
  }, [slug]);

  const handleFavoriteToggle = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((item) => item.slug !== slug);
    } else {
      favorites.push({ title, description, image, price, slug });
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const truncateDescription = (desc, wordLimit) => {
    if (!desc) return ""; // Если описание отсутствует, вернуть пустую строку
    // Replace newline characters with spaces
    const cleanDesc = desc.replace(/\n/g, " ");
    const words = cleanDesc.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return cleanDesc;
  };

  return (
    <div className="h-[450px] w-full">
      <div className="border border-neutral-300 rounded-2xl p-4 pt-6 flex flex-col h-full relative">
        <div className="absolute top-2 left-2 flex gap-1 justify-start">
          <Image
          src={brand}
          width={300}
          height={300}
          alt="Brand Logo"
          className="h-8 max-w-[100px] w-auto object-contain "
          />
          {sale && (
            <div className="py-1 px-2 font-semibold rounded-full text-xs text-red-500 bg-red-100">
              {sale}
            </div>
          )}
        </div>
        <div onClick={handleFavoriteToggle} className="absolute top-4 right-4">
          <Image
            src={isFavorite ? favFilled : fav}
            width={100}
            height={100}
            alt="Favorite Icon"
            className="w-5 h-5 max-mdx:w-8 max-mdx:h-8"
          />
        </div>
          <Link href={`/product/${slug}`} className="w-full h-[300px] flex items-center justify-center overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                quality={100 }
                className="object-contain w-full h-full"
              />
            ) : (
              <div className="object-contain w-full h-full bg-gray-200 flex items-center justify-center">
                No Image Available
              </div>
            )}
          </Link>
        <Link href={`/product/${slug}`}>
        <h3 className="text-md font-semibold mt-3">{title}</h3>
        
        </Link>
        <Link href={`/product/${slug}`}>
        <p className="text-xs text-gray-600 mt-1">
          {truncateDescription(description, 14)}
        </p>
        
        </Link>
        <div className="flex w-full justify-between items-center flex-wrap mt-3">
          <Link href={`/product/${slug}`}>
            <GreenArrow title={"more details"} />
          </Link>
          {price && (
            <div className="py-1 px-2 font-semibold rounded-full text-greenView">
              {price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
