import ProductCharacteristics from "./ProductCharacteristics";
import ProductPreview from "./ProductPreview";

export default function ProductInfo({ product }) {
  return (
    <div className="w-full max-w-[2100px] slg:px-20 mx-auto flex flex-col gap-16 px-2">
      <ProductPreview product={product} />
      <ProductCharacteristics product={product} />
    </div>
  );
}