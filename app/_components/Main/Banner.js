"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const slideInterval = useRef(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("http://213.230.91.55:8110/banner/get");
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

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(slideInterval.current);
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
      <div
        className="relative flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <a href={slide.link} target="_blank" rel="noopener noreferrer" key={index} className="min-w-full">
            <Image
              src={slide.photo.url}
              alt={`Banner ${index + 1}`}
              width={1500}
              height={500}
              className="w-full h-full rounded-2xl"
            />
          </a>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 rounded-full p-2 opacity-70 hover:opacity-100 z-10"
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
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 rounded-full p-2 opacity-70 hover:opacity-100 z-10"
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