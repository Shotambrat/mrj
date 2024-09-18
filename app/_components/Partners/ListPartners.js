"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ListPartners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const response = await fetch("https://mrjtrade.uz/partner/get-all");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.data) {
          setPartners(data.data);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    }

    fetchPartners();
  }, []);

  return (
    <div className="w-full max-w-[2100px] slg:px-20 mx-auto px-2 flex flex-col gap-8 mt-7">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {partners.map((card) => (
          <Link key={card.id} href={`/partners/${card.slug}`} className="bg-white p-4 w-full rounded-2xl border border-gray-200 mdx:p-0 mdl:p-5 slg:h-auto">
              <div className="mdx:flex mdx:flex-row items-center justify-between">
                <div className="mdx:w-[50%] h-full max-mdx:h-[80px] relative max-mdx:px-12 max-mdx:mb-6 flex justify-center">
                  <Image
                    src={card.photo.url}
                    alt={card.title}
                    height={500}
                    width={500}
                    className="mdx:max-h-[150px] mdx:w-[70%] h-full w-auto object-contain"
                  />
                </div>
                <div className="mdx:mb-4 mdx:w-[50%]">
                  <h2 className="text-xl font-bold max-mdx:hidden right mt-4 mdx:mb-2 xl:text-[28px]">
                    {card.title}
                  </h2>
                  <p className="mb-4 text-gray-600 xl:text-[18px]">
                    {card.main_description}
                  </p>

                  <span className="text-green-600 font-semibold hover:underline mdx:text-[18px]">
                    read more →
                  </span>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
