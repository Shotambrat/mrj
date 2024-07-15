import searchIcon from "@/public/svg/tools/search-icon.svg";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import ToolItem from "./ToolItem";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg"

export default function Tools() {
  const data = [
    {
      icon: searchIcon,
    },
    {
      icon: heartIcon,
      slug: "favorites",
    },
    {
      icon: phoneIcon,
      tel: "+998900997755",
    },
  ];
  return (
    <div className="h-full items-center flex gap-3">
      {data.map((item, i) => {
        return <ToolItem key={i} url={item.icon} />;
      })}
      <button
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
    </div>
  );
}
