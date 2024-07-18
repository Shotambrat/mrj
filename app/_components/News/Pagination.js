"use client"

import React, { useState, useEffect } from 'react';
// import { fetchNews } from '@/app/lib/api';
import News from "@/app/_components/News/NewCard"


export default function Pagination() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // useEffect(() => { 
    //     const getNews = async () => {
    //         const data = await fetchNews(currentPage);
    //         console.log(data)
    //         setNews(data.data.content);
    //         setTotalPages(Math.ceil(30 / 12)); 
    //     };
    //     getNews();
    // }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="grid grid-cols-1 mdx:grid-cols-2 xl:grid-cols-4 gap-6">
                {news.map((news) => (
                    <div key={news.id}>
                        <News title={news.title} excerpt={news.description} slug={`news/${news.slug}`} imageSrc={news.photoUrl} />
                    </div>
                ))}
            </div>
            <div className="mt-6 flex">
                <ul className="flex list-none">
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 rounded-3xl mx-1 ${currentPage === index + 1 ? 'bg-greentxt text-white' : 'bg-white text-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
