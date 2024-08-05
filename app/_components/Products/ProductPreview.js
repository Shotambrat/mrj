import Image from "next/image";
import VerticalCarousel from "./ProductCarousel";
import heartIcon from "@/public/svg/tools/heart-icon.svg";

export default function ProductPreview({ product }) {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="flex-1 w-full">
        <VerticalCarousel images={product.gallery} name={product.name} />
      </div>
      <div className="w-full flex-1 flex flex-col gap-5">
        <div className="flex gap-4 max-lg:hidden">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          {product.tag.includes("New") && (
            <div className="py-2 px-5 font-bold rounded-full text-greenView bg-greenCategory">
              New
            </div>
          )}
        </div>
        <p className="text-neutral-400 leading-5">{product.description}</p>
        <hr />
        <div className="w-full flex justify-between items-center">
          <p className="w-full max-w-[200px] leading-4">{product.conditions}</p>
          <Image
            src={product.brand.photo.url}
            width={300}
            height={300}
            alt={product.brand.title}
            className="w-32 h-10"
          />
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-3 text-sm font-semibold text-white rounded-xl bg-greenView">
            Send a commercial offer
          </button>
          <div className="px-3 py-3 border rounded-xl flex items-center justify-center">
            <Image
              src={heartIcon}
              width={100}
              height={100}
              alt="Heart Icon"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}