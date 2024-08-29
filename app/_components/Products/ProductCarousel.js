"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const VerticalCarousel = ({ images, name }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setLoaded(true);
    }
  }, [images]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full max-w-[2100px] slg:px-20 mx-auto px-2">
      <div className="flex gap-4 lg:hidden">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <div className="py-2 px-5 font-bold rounded-full text-greenView bg-greenCategory">
          New
        </div>
      </div>
      {loaded && (
        <div className="w-full">
          <Carousel
            selectedItem={0}
            showThumbs={true}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            axis={isMobile ? "horizontal" : "vertical"}
            className="main-carousel"
            showArrows={false}
            renderThumbs={() =>
              images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image.url}
                    alt={`Thumbnail ${index}`}
                    className="object-contain h-full w-full"
                    width={100}
                    height={100}
                  />
                </div>
              ))
            }
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
      )}
      <style jsx global>{`
        .carousel .slide img {
          object-fit: contain;
          height: 500px;
          width: auto;
        }
        .carousel .thumb img {
          height: ${isMobile ? "80px" : "100px"};
          width: auto;
          object-fit: contain;
        }
        .carousel .thumbs-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default VerticalCarousel;
