"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
// import defaultImage from "@/public/images/aboutUs/partners/default.png"; 

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://mrjtrade.uz/partner/get-all');
      const result = await response.json();
      setPartners(result.data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-2">
      <div className="text-2xl mb-8 mdx:text-3xl font-semibold">OUR PARTNERS</div>
      <div className="relative grid grid-cols-2 xl:grid-cols-3">
        <div className="absolute h-[98%] w-[99%] border-2 top-1 left-1 border-white shadow-custom-heavy z-10"></div>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full p-12 h-[150px] mdl:h-[250px] border border-gray-200"
          >
            <Image src={partner.photo ? partner.photo.url : null} alt={partner.title} width={200} height={150} />
          </div>
        ))}
      </div>
    </div>
  );
}