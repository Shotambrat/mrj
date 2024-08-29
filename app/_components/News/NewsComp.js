"use client"

import NewCard from "@/app/_components/News/NewCard";
import Pagination from "@/app/_components/News/Pagination";
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewsComp() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of news per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://mrjtrade.uz/news/get-all?page=${currentPage}`);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [currentPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="w-full max-w-[2100px] slg:px-20 mx-auto px-2 flex flex-col gap-8 py-[120px] mdx:py-[200px] 2xl:py-[250px]">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold">NEWS</h2>
      <div className="w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto">
        {data.map((item, i) => (
          <Link key={i} href={`/news/${item.slug}`}>
            <NewCard
              key={i}
              title={item.title}
              date={new Date(item.date).toLocaleDateString()}
              imageSrc={item.photo ? item.photo.url : '/default-image.png'}
            />
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}
