"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eventImage1 from "@/public/images/equipments/uzi.png"; // Replace with your image paths
import eventImage2 from "@/public/images/equipments/lab-equip.png"; // Replace with your image paths
import GreenArrow from "@/app/_components/Buttons/GreenArrow";
import EventCard from "@/app/_components/Events/EventCard"; // Adjust the import path as necessary

export default function Events() {
  const data = [
    {
      title: "International Medical Equipment Exhibition in Dubai - 2024",
      imageSrc: eventImage1,
      link: "#",
    },
    {
      title: "Innovation in Medicine: Presentation of the Latest Technologies in Abu Dhabi - 2024",
      imageSrc: eventImage2,
      link: "#",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-1 px-2">
      <h2 className="text-3xl max-mdx:text-2xl font-bold flex items-center text-greentxt mt-[40px]">
        EVENTS
        <GreenArrow />
      </h2>
      <div className="w-full">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <EventCard title={item.title} imageSrc={item.imageSrc} link={item.link} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
