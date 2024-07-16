import equipLab from "@/public/images/equipments/equip-lab.png";
import equipUzi from "@/public/images/equipments/equip-uzi.png";
import CategoryItem from "@/app/_components/Categories/CategoryItem";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";

export default function Equipments() {
  const data = [
    {
      title: "Ultrasound Diagnostic System",
      imageSrc: equipLab,
    },
    {
      title: "Laboratory Equipment",
      imageSrc: equipUzi,
    },
    {
      title: "Reagents and consumables",
      imageSrc: equipLab,
    },
    {
      title: "Radiology and X-ray systems",
      imageSrc: equipUzi,
    },
  ];
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-3xl max-mdl:text-2xl font-bold">
        EQUIPMENT CATEGORIES
      </h2>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.map((item, i) => (
          <CategoryItem key={i} title={item.title} imageSrc={item.imageSrc} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href={'/categories'} className="rounded-xl border border-neutral-300 px-12 py-3 hover:bg-green-100 hover:border-green-800 transition-all duration-200">
            <GreenArrow title={'All categories'} />
        </Link>
      </div>
    </div>
  );
}
