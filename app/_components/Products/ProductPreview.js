"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import VerticalCarousel from "./ProductCarousel";
import heartIcon from "@/public/svg/main/fav.svg";
import heartIconFilled from "@/public/svg/main/fav-filled.svg"; // Добавьте иконку заполненного сердца
import Commercial from "@/app/_components/Modal/Commercial";

export default function ProductPreview({ product }) {
  const [modal, setModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(item => item.slug === product.slug));
  }, [product.slug]);

  const handleFavoriteToggle = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter(item => item.slug !== product.slug);
    } else {
      favorites.push({
        title: product.name,
        description: product.shortDescription,
        image: product.gallery[0] ? product.gallery[0].url : null,
        price: product.originalPrice ? `${product.originalPrice} y.e` : null,
        slug: product.slug
      });
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  console.log(product);

  return (
    <div className="w-full flex flex-col lg:flex-row">
      {modal && <Commercial product={product} closeModal={setModal} />}
      <div className="flex-1 w-full">
        <VerticalCarousel images={product.gallery} name={product.name} />
      </div>
      <div className="w-full flex-1 flex flex-col gap-5">
        <div className="flex gap-4 max-lg:hidden">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          {product.tag.includes("New") && (
            <div className="py-2 px-5 font-bold rounded-full text-greenView bg-greenCategory">
              New
            </div>
          )}
        </div>
        <p className="text-neutral-400 leading-5 max-mdl:hidden">{product.shortDescription}</p>
        <hr />
        <div className="w-full flex max-mdx:flex-col max-mdx:items-start max-mdx:gap-8 justify-between items-center">
          <p className="w-full max-w-[200px] leading-4">{product.conditions}</p>
          <Image
            src={product.brand.photo.url}
            width={300}
            height={300}
            alt={product.brand.title}
            className="w-32"
          />
        </div>
        <div className="flex gap-4">
          <button onClick={() => setModal(true)} className="px-4 py-3 text-sm font-semibold text-white rounded-xl bg-greenView">
            Send a commercial offer
          </button>
          <div className="px-3 py-3 border rounded-xl flex items-center justify-center" onClick={handleFavoriteToggle}>
            <Image
              src={isFavorite ? heartIconFilled : heartIcon}
              width={100}
              height={100}
              alt="Heart Icon"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}