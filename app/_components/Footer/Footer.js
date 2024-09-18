import logoBig from "@/public/images/footer/mrj-logo-big.png";
import telegram from "@/public/images/footer/telegram.png";
import facebook from "@/public/images/footer/facebook.png";
import instagram from "@/public/images/footer/instagram.png";
import youtube from "@/public/images/footer/youtube.png";
import arrowRight from "@/public/svg/arrow-right-green.svg";
import resultLogo from "@/public/images/footer/result-logo.png";
import Link from "next/link";

import Image from "next/image";

async function fetchCategories() {
  const res = await fetch("https://mrjtrade.uz/category");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  // Возвращаем только первые 4 активные категории
  return data.data.item.filter((category) => category.active).slice(0, 4);
}

export default async function Footer() {
  const categories = await fetchCategories();

  return (
    <div className="bg-snowy w-full px-2 pt-12">
      <div className="w-full max-w-[2100px] slg:px-20 flex flex-col gap-12 mx-auto">
        <div className="w-full flex justify-between max-lg:flex-col gap-12">
          <div className="flex lg:flex-col max-lg:justify-between max-mdl:flex-col gap-5">
            <div className="flex flex-col gap-5">
              <Link href="/">
                <Image
                  src={logoBig}
                  width={500}
                  height={500}
                  alt="Mrj Logo Big"
                  className="w-36 "
                />
              </Link>
              <p className="w-full max-w-72 font-semibold leading-5">
                Reliable partner in the field of medical equipment distribution
                in UAE
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://t.me/mrjtrade_ae" target="_blank">
                <Image
                  src={telegram}
                  width={100}
                  height={100}
                  alt="Telegram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.facebook.com/people/MRJ-Medical-Equipment-in-Dubai/61562385060429/"
                target="_blank"
              >
                <Image
                  src={facebook}
                  width={100}
                  height={100}
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.instagram.com/mrjtrade/" target="_blank">
                <Image
                  src={instagram}
                  width={100}
                  height={100}
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.youtube.com/@MRJ_Medical_Equipment_in_Dubai"
                target="_blank"
              >
                <Image
                  src={youtube}
                  width={100}
                  height={100}
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex max-mdx:gap-5">
            <div className="flex-1 flex flex-col text-sm gap-4 font-semibold">
              <h2 className="text-lg font-semibold text-green-700">
                CATEGORIES
              </h2>
              {categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.slug}`}>
                  <p>{category.title}</p>
                </Link>
              ))}
              <a
                href="/categories"
                className="flex gap-2 hover:gap-4 items-center transition-all duration-200"
              >
                <p className="text-green-700 ">View all</p>
                <Image
                  src={arrowRight}
                  width={100}
                  height={100}
                  alt="Arrow Right Icon Green"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="flex-1 flex flex-col text-sm gap-4 font-semibold">
              <h2 className="text-lg font-semibold text-green-700">COMPANY</h2>
              <a href="/about">About Us</a>
              <a href="/partners">Partners</a>
              <a href="/contacts">Contacts</a>
              <a href="/news">News</a>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <hr />
          <div className="my-6 w-full flex justify-between items-center">
            <p className="w-full max-mdx:max-w-[150px]">
              2024 © MRJ Trade. All rights reserved
            </p>
            <a href=" https://result-me.uz/api/redirect?from=bXJq" target="_blank">
              <Image
                src={resultLogo}
                width={500}
                height={500}
                alt="Result Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
