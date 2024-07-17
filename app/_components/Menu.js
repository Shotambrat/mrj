import RightIcon from "@/app/_components/Icons/RightIcon";
import Image from "next/image";
import Link from "next/link";
import ToolItem from "./Header/ToolItem";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import close from "@/public/svg/close.svg";

const Menu = ({ menu, closeMenu, navOptions }) => {
  const data = [
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
    <div
      className={`fixed z-[9999] top-0 right-0 w-full max-w-[300px] bg-white h-full shadow-md ${
        menu ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div className="border-b py-4 flex">
        <div className="w-full flex justify-end mx-4">
          <div className="flex justify-between items-center gap-3">
            {data.map((item, i) => {
              return <ToolItem key={i} url={item.icon} />;
            })}
            <button
              onClick={closeMenu}
              className="bg-green-800 max-mdx:px-3 max-mdx:py-3 px-5 py-5 rounded-full"
            >
              <Image
                src={close}
                height={100}
                width={100}
                alt={`Tools Item Burger Menu`}
                className="w-4 h-4 max-mdx:w-3 max-mdx:h-3"
              />
            </button>
          </div>
        </div>
      </div>
      <nav className="flex flex-col font-semibold">
      <Link
            onClick={closeMenu}
            href={`/`}
            className="py-4"
          >
            <div className="flex justify-between mx-4">
              <p>Home</p>
              <RightIcon />
            </div>
          </Link>
        {navOptions.map((item, index) => (
          <Link
            onClick={closeMenu}
            href={`/${item.slug}`}
            key={index}
            className="py-4"
          >
            <div className="flex justify-between mx-4">
              <p>{item.title}</p>
              <RightIcon />
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
