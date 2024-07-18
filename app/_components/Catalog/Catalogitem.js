import Image from "next/image";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";
import fav from "@/public/svg/main/fav.svg"

export default function Catalogitem({ new: isNew, sale, image, title, description, price }) {
  return (
    <div className="h-[500px] w-full">
      <div className="border border-neutral-300 rounded-2xl p-4 pt-8 flex flex-col h-full relative">
        <div className="absolute top-2 left-2 flex gap-1">
          {isNew && (
            <div className="py-1 px-2 font-semibold rounded-full text-xs text-greenView bg-green-100">
              New
            </div>
          )}
          {sale && (
            <div className="py-1 px-2 font-semibold rounded-full text-xs text-red-500 bg-red-100">
              {sale}
            </div>
          )}
        </div>
        <button className="absolute top-4 right-4">
          <Image
            src={fav}
            width={100}
            height={100}
            alt="Favorite Icon"
            className="w-5 h-5 max-mdx:w-8 max-mdx:h-8"
          />
        </button>
        <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        </div>
        <h3 className="text-md font-semibold mt-3">{title}</h3>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
        <div className="flex w-full justify-between items-center flex-wrap mt-3">
          <Link href="/product/gg">
            <GreenArrow title={"more details"} />
          </Link>
          {price && (
            <div className="py-1 px-2 font-semibold rounded-full text-greenView">
              {price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
