"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";
import Catalogitem from "../Catalog/Catalogitem";

export default function Similar({ product }) {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    async function fetchSimilarProducts() {
      try {
        const response = await axios.get(
          `https://mrjtrade.uz/product/v2/${product.slug}?similar=true`
        );
        setSimilarProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching similar products:", error);
      }
    }

    fetchSimilarProducts();
  }, [product.slug]);

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
      <h2 className="text-3xl max-mdx:text-2xl font-bold">SIMILAR PRODUCTS</h2>
      <div className="w-full">
        <div className="w-full px-4">
          {similarProducts.length > 0 ? (
            <Slider {...settings} className="h-auto flex">
              {similarProducts.map((item, index) => (
                <div key={index} className="p-2">
                  <Catalogitem
                    new={item.tag.includes("New")}
                    sale={item.discount ? `${item.discount}%` : null}
                    image={item.photo.url}
                    title={item.name}
                    description={item.shortDescription}
                    price={item.originalPrice ? `${item.originalPrice} y.e` : null}
                    slug={item.slug}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>No similar products available.</p>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Link
          href="/categories"
          className="border border-greenView rounded-xl px-12 py-3 hover:bg-greenCategory transition-all duration-200"
        >
          <GreenArrow title={"View all"} />
        </Link>
      </div>
    </section>
  );
}