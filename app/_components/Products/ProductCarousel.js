"use client";

import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const VerticalCarousel = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  const galleryImages = images.map((image) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1440px] mx-auto px-2">
      <div className="flex gap-4 lg:hidden">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <div className="py-2 px-5 font-bold rounded-full text-greenView bg-greenCategory">
          New
        </div>
      </div>
      <div className="w-full">
        <ImageGallery
          items={galleryImages}
          showThumbnails={true}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={false}
          onSlide={(index) => setSelectedImage(index)}
          startIndex={selectedImage}
          thumbnailPosition={isMobile ? "bottom" : "left"}
          renderLeftNav={() => null}
          renderRightNav={() => null}
          renderFullscreenButton={() => null}
          renderPlayButton={() => null}
          additionalClass="custom-image-gallery"
        />
      </div>
      <style jsx global>{`
        .custom-image-gallery .image-gallery-slide img {
          object-fit: contain;
          height: 500px;
        }
        .custom-image-gallery .image-gallery-thumbnail img {
          height: ${isMobile ? "80px" : "100px"};
          object-fit: contain;
        }
        .image-gallery-thumbnails-wrapper {
          height: ${isMobile ? "auto" : "500px"};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-gallery-thumbnail {
          border: 2px solid transparent;
          transition: border 0.2s ease;
        }
        .image-gallery-thumbnail.active,
        .image-gallery-thumbnail:hover,
        .image-gallery-thumbnail:focus {
          border: 2px solid #34D399;
        }
      `}</style>
    </div>
  );
};

export default VerticalCarousel;