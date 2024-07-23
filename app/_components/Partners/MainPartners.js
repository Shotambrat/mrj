"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import partnerPhoto from "@/public/images/aboutUs/partners/image3.png";

export default function PartnerPage() {
    const partners = [
        {
            id: 1,
            imageSrc: partnerPhoto,
            title: "Lingen",
            description: "Lingen Precision Medical Products (Shanghai) Co., Ltd. is a custom manufacturer specializing in medical products. Established in Shanghai, China, the company has a strong presence in the medical device industry, particularly in the development and production of specimen collection systems, human-assisted reproductive products, and various medical instruments and equipment.",
            link: "lingen"
        },
    ];
    const partnersSlider = [
        {
            id: 1,
            imageSrc: partnerPhoto,
            title: "assdsd",
            description: "fdgfdghfdhdg2sdasfsadfsad fa fdasfd fasdf dsaffsafsdf dafsdsfsdf dsfdasf ah",
            link: "fgfdgdf"
        },
        {
            id: 2,
            imageSrc: partnerPhoto,
            title: "Lingen",
            description: "Lingen dgaa gad;jgaiosgjasi agpofjk'gao asfg'okafsgo dsfasfdsfa dsfas",
            link: "lingen"
        },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
                    slidesToShow: 1,
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
        <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
            {partners.map((card) => (
                <div key={card.id} className="mb-8">
                    <div className="w-[50%] h-[55%] max-w-[170px] max-h-[67px] mdx:max-w-[180px] mdx:max-h-[71px] mb-4 xl:mb-6">
                        <Image src={card.imageSrc} alt={card.title} objectFit="contain" />
                    </div>
                    <h1 className="text-[25px] font-semibold mdx:text-[35px] xl:text-[40px] mb-4 text-[#252324] uppercase">{card.title}</h1>
                    <p className="text-[#252324] text-[15px] mdx:text-[20px]">{card.description}</p>
                </div>
            ))}
            <h2 className="text-3xl font-semibold uppercase mt-16 mdx:mt-20 mb-8">OTHER PARTNERS</h2>
            <div className="xl:hidden grid grid-cols-1 gap-4 xl:grid-cols-2">
                {partnersSlider.map(card => (
                    <div key={card.id} className="bg-white flex mdx:items-center p-4 rounded-2xl border-[1px] border-gray-200 mdx:p-0 mdl:p-5 mdx:py-[43px] flex-col mdx:flex-row ">
                        <div className="mdx:flex-1 h-[70px] relative w-full">
                            <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" />
                        </div>
                        <div className=" mdx:flex-1 ml-2 ">
                            <h2 className="text-xl font-bold xl:text-[28px]">{card.title}</h2>
                            <p className="text-gray-600 xl:text-[18px]">{card.description}</p>
                            <Link href={`/partners/${card.link}`}>
                                <span className="text-green-600 font-semibold hover:underline mdx:text-[18px]">
                                    read more →
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden xl:block ">
                <Slider {...settings} >
                    {partnersSlider.map(card => (
                        <div key={card.id} className="bg-white p-4 rounded-2xl border-[1px] border-gray-200 mdx:p-0 xl:p-5 ">
                            <div className="mdx:flex mdx:flex-row items-center justify-between">
                                <div className="w-[50%] h-[70px] relative mt-3 mr-4">
                                    <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" />
                                </div>
                                <div className='mdx:mb-4 '>
                                    <h2 className="text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px] ">{card.title}</h2>
                                    <p className="mb-4 text-gray-600 xl:text-[18px]">{card.description}</p>
                                    <Link href={`/partners/${card.link}`}>
                                        <span className="text-green-600 font-semibold hover:underline mdx:text-[18px]">
                                            read more →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}