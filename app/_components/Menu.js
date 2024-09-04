import { motion } from "framer-motion"; // Импортируем motion для анимаций
import RightIcon from "@/app/_components/Icons/RightIcon";
import Image from "next/image";
import Link from "next/link";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import close from "@/public/svg/close.svg";

const Menu = ({ menu, closeMenu, navOptions }) => {

  console.log("navOptions", navOptions);
  return (
    <motion.div
      initial={{ x: "100%" }} // Начальная позиция (вне экрана справа)
      animate={{ x: menu ? 0 : "100%" }} // Плавный переход от 100% до 0% (видимый/скрытый)
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }} // Управление переходом
      className="fixed z-[9999] top-0 right-0 w-full max-w-[300px] bg-white h-full shadow-md"
    >
      <div className="border-b py-4 flex">
        <div className="w-full flex justify-end mx-4">
          <div className="flex justify-between items-center gap-3">
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
              href="tel:+998990909095"
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
      <nav className="flex flex-col font-semibold gap-2 pt-4 w-full ">
        <Link onClick={closeMenu} href={`/`} className="py-4 w-full">
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
            className="py-4 hovr"
            
          >
            <div className="flex justify-between mx-4">
              <p>{item.title}</p>
              <RightIcon />
            </div>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default Menu;