import ProductCharacteristics from "./ProductCharacteristics";
import ProductPreview from "./ProductPreview";

export default function ProductInfo({ product }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-16 px-2">
      <ProductPreview product={product} />
      <ProductCharacteristics product={product} />
    </div>
  );
}