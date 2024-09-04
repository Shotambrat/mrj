"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnerPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [partner, setPartner] = useState(null);
  const [partnersSlider, setPartnersSlider] = useState([]);

  useEffect(() => {
    if (slug) {
      fetchPartnerDetails(slug);
      fetchPartnersSlider();
    }
  }, [slug]);

  const fetchPartnerDetails = async (slug) => {
    const response = await fetch(`https://mrjtrade.uz/partner/get/${slug}`);
    const data = await response.json();
    if (data.message === "Found") {
      setPartner(data.data);
    }
  };

  const fetchPartnersSlider = async () => {
    const response = await fetch("https://mrjtrade.uz/partner/get-all");
    const data = await response.json();
    setPartnersSlider(data.data);
  };

  const settings = {
    infinite: true,
    spaceBetween: 20,
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

  if (!partner) {
    return <div>Loading...</div>;
  }

  // Преобразование символов \n в <br /> для переноса строк
  const formattedDescription = partner.description.replace(/\\n/g, "<br />");

  return (
    <div className="w-full max-w-[2100px] slg:px-20 mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="w-[50%] h-[55%] max-w-[170px] max-h-[67px] mdx:max-w-[180px] mdx:max-h-[150px] mb-4 xl:mb-6">
          <Image
            src={partner.photo.url}
            alt={partner.title}
            className="h-full "
            width={170}
            height={67}
          />
        </div>
        <h1 className="text-[25px] font-semibold mdx:text-[35px] xl:text-[40px] mb-4 text-[#252324] uppercase">
          {partner.title}
        </h1>
        <p
          className="text-[#252324] text-[15px] mdx:text-[20px]"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
      </div>
      <h2 className="text-3xl font-semibold uppercase mt-16 mdx:mt-20 mb-8">
        OTHER PARTNERS
      </h2>
      <div className="xl:hidden grid grid-cols-1 gap-4 xl:grid-cols-2">
        {partnersSlider.map((card) => (
          <Link key={card.id} href={`/partners/${card.slug}`}>
            <div className="bg-white flex mdx:items-center p-4 rounded-2xl border-[1px] border-gray-200 mdx:p-0 mdl:p-5 mdx:py-[43px] flex-col mdx:flex-row">
              <div className="mdx:flex-1 h-[70px] relative w-full">
                <Image
                  src={card.photo.url}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="mdx:flex-1 ml-2">
                <h2 className="text-xl font-bold xl:text-[28px]">
                  {card.title}
                </h2>
                <p className="text-gray-600 xl:text-[18px]">
                  {card.description.slice(0, 200)}
                </p>
                <span className="text-green-600 font-semibold hover:underline mdx:text-[18px]">
                  read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="hidden xl:block">
        <Slider {...settings}>
          {partnersSlider.map((card) => (
            <Link key={card.id} href={`/partners/${card.slug}`}>
              <div className="px-3">
                <div className="bg-white p-4 rounded-2xl border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-[230px] flex items-center">
                  <div className="mdx:flex mdx:flex-row items-center justify-between w-full">
                    <div className="w-full max-w-[40%] h-[70px] relative mt-3 mr-4">
                      <Image
                        src={card.photo.url}
                        alt={card.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="mdx:mb-4">
                      <h2 className="text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]">
                        {card.title}
                      </h2>
                      <p className="mb-4 text-gray-600 xl:text-[18px]">
                        {card.description.slice(0, 100)}
                      </p>

                      <span className="text-green-600 font-semibold hover:underline mdx:text-[18px]">
                        read more →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
