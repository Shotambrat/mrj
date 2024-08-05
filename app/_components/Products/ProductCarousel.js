"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const VerticalCarousel = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1440px] mx-auto px-2">
      <div className="flex gap-4 lg:hidden">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <div className="py-2 px-5 font-bold rounded-full text-greenView bg-greenCategory">
          New
        </div>
      </div>
      <div className="w-full">
        <Carousel
          selectedItem={selectedImage}
          onChange={(index) => setSelectedImage(index)}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          className="main-carousel"
          showArrows={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.url}
                alt={`Slide ${index}`}
                className="object-contain h-96 w-full"
                width={500}
                height={500}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-full max-w-[550px] mt-4 flex justify-center h-[200px]">
        <Carousel
          selectedItem={selectedImage}
          onChange={(index) => setSelectedImage(index)}
          axis="horizontal"
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          className="thumbnail-carousel"
          centerMode={true}
          centerSlidePercentage={20}
          swipeable={false}
          emulateTouch={true}
          showArrows={false}
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer ml-2 h-[60%] rounded-xl ${
                selectedImage === index ? "border-2 border-greenView" : "border"
              }`}
            >
              <Image
                src={image.url}
                alt={`Thumbnail ${index}`}
                className="object-contain h-full rounded-xl w-full"
                width={100}
                height={100}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VerticalCarousel;