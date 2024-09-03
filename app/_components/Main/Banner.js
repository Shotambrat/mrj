"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel() {
  const [slides, setSlides] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("https://mrjtrade.uz/banner/get");
        const data = await response.json();
        if (data.message === "Found" && data.data.banner && data.data.banner.data) {
          setSlides(data.data.banner.data.filter(slide => slide.active));
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanners();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    arrows: false,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <a href={slide.link} target="_blank" rel="noopener noreferrer" key={index} className="min-w-full h-[250px] lg:h-[350px] 2xl:h-[500px] flex justify-center">
            <Image
              src={slide.photo.url}
              alt={`Banner ${index + 1}`}
              width={1500}
              height={500}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </Slider>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-20 -translate-y-1/2 bg-gray-500 rounded-full p-2 opacity-70 hover:opacity-100 z-10 hidden lg:block"
      >
        <svg
          className="w-8 h-8 text-white"
          viewBox="-9 0 40 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2969 1.5625L1.85938 10L10.2969 18.4375M3.03125 10L20.1406 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-20 -translate-y-1/2 bg-gray-500 rounded-full p-2 opacity-70 hover:opacity-100 z-10 hidden lg:block"
      >
        <svg
          className="w-8 h-8 text-white"
          viewBox="-9 0 40 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7031 1.5625L20.1406 10L11.7031 18.4375M18.9687 10L1.85937 10"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}