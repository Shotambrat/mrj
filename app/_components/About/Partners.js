"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://mrjtrade.uz/partner/get-all");
      const result = await response.json();
      setPartners(result.data);
    };

    fetchData();
  }, []);

  console.log("Partners", partners);

  return (
    <div className="max-w-[2100px] slg:px-20 w-full mx-auto px-2">
      <div className="text-2xl mb-8 mdx:text-3xl font-semibold">
        OUR PARTNERS
      </div>
      <div className="relative grid grid-cols-2 xl:grid-cols-3">
        <div className="absolute h-[98%] w-[99%] border-2 top-1 left-1 border-white shadow-custom-heavy z-10 pointer-events-none"></div>
        {partners.map((partner, index) => (
          <Link
            key={index}
            href={`/partners/${partner.slug}`}
            className="flex justify-center items-center w-full p-12 h-[150px] mdl:h-[250px] border border-gray-200"
          >
            <Image
              src={partner.photo ? partner.photo.url : null}
              alt={partner.title}
              width={200}
              height={150}
              className="h-full object-contain"
              quality={100}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
