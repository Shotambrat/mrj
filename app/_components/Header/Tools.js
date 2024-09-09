"use client";
import { useState, useEffect } from "react";
import searchIcon from "@/public/svg/tools/search-icon.svg";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg";
import close from "@/public/svg/close-gray.svg";
import Menu from "../Menu";
import Link from "next/link";
import Search from "../Modal/Search";


export default function Tools({ navOptions }) {
  const [menu, setMenu] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (searchMenu) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [searchMenu]);

  return (
    <div className="h-full items-center flex gap-3">
      {searchMenu && <Search setSearchMenu={setSearchMenu} />}
      <button
        onClick={() => setSearchMenu((prev) => !prev)}
        className="border border-neutral-300 px-4 py-4 rounded-full max-mdx:px-3 max-mdx:py-3"
      >
        {searchMenu ? (
          <Image
            src={close}
            height={100}
            width={100}
            alt={`Tools Item SearchIcon`}
            className="w-6 h-6 max-mdx:w-3 max-mdx:h-3"
          />
        ) : (
          <Image
            src={searchIcon}
            height={100}
            width={100}
            alt={`Tools Item SearchIcon`}
            className="w-6 h-6 max-mdx:w-3 max-mdx:h-3"
          />
        )}
      </button>
      <Link href={"/favorites"}>
        <button className="border border-neutral-300 px-4 py-4 rounded-full max-mdx:px-3 max-mdx:py-3">
          <Image
            src={heartIcon}
            height={100}
            width={100}
            alt={`Tools Item HeartIcon : Favorites`}
            className="w-6 h-6 max-mdx:w-3 max-mdx:h-3"
          />
        </button>
      </Link>
      <a
        href="tel:+9710524979914"
        className="border border-neutral-300 px-4 py-4 rounded-full max-mdx:px-3 max-mdx:py-3"
      >
        <Image
          src={phoneIcon}
          height={100}
          width={100}
          alt={`Tools Item HeartIcon : Favorites`}
          className="w-6 h-6 max-mdx:w-3 max-mdx:h-3"
        />
      </a>
      <button
        onClick={handleOpenMenu}
        className="bg-green-800 max-mdx:px-3 max-mdx:py-3 px-5 py-5 rounded-full 2xl:hidden"
      >
        <Image
          src={burgerMenu}
          height={100}
          width={100}
          alt={`Tools Item Burger Menu`}
          className="w-4 h-4 max-mdx:w-3 max-mdx:h-3"
        />
      </button>
      {menu && (
        <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} />
      )}
    </div>
  );
}
