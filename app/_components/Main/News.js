"use client"
import { useEffect, useState } from "react";
import newsPhoto from "@/public/images/news/news-photo.png";
import NewCard from "../News/NewCard";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";

export default function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://mrjtrade.uz/news/get-all?size=4');
      const result = await response.json();
      setData(result.data);
    };
    
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold">NEWS</h2>
      <div className="w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto">
        {data.map((item, i) => (
          <Link key={i} href={`/news/${item.slug}`}>
            <NewCard
              key={i}
              title={item.title}
              date={formatDate(item.date)}
              imageSrc={item.photo ? item.photo.url : newsPhoto}
            />
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Link
          href="/news"
          className="border py-3 px-12 hover:bg-green-200 hover:border-greenView transition-all duration-200 rounded-xl"
        >
          <GreenArrow title={"View all"} />
        </Link>
      </div>
    </div>
  );
}