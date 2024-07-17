import lingen from "@/public/images/aboutUs/partners/image28.png";
import united from "@/public/images/aboutUs/partners/image32.png";
import browiner from "@/public/images/aboutUs/partners/image41.png";
import mindray from "@/public/images/aboutUs/partners/image42.png";
import dollar from "@/public/images/aboutUs/partners/image3.png";
import zoncare from "@/public/images/aboutUs/partners/image27.png";

import Image from "next/image";

export default function Partners() {
  const logos = [
    { src: lingen, alt: "Lingen Logo" },
    { src: united, alt: "United Imaging Logo" },
    { src: browiner, alt: "Browiner Logo" },
    { src: mindray, alt: "Mindray Logo" },
    { src: dollar, alt: "Dollar Logo" },
    { src: zoncare, alt: "Zoncare Logo" },
  ];

  return (
    <div>
      <div className="text-[25px] mb-8 mdx:text-[35px]">Our partners</div>
      <div className="flex flex-wrap">
        {logos.map((logo, index) => {
          const isLastRow = index >= logos.length - (logos.length % 3 === 0 ? 3 : logos.length % 3); // Последний ряд для 3 колонок
          const isLastColumnLarge = (index + 1) % 3 === 0; // Последняя колонка для больших экранов
          const isLastColumnSmall = (index + 1) % 2 === 0; // Последняя колонка для маленьких экранов

          return (
            <div
              key={index}
              className={`flex justify-center items-center w-full sm:w-1/2 lg:w-1/3 h-24 p-12 border-gray-200 ${
                !isLastRow ? 'border-b-2' : ''
              } ${
                !isLastColumnLarge && 'lg:border-r-2'
              } ${
                !isLastColumnSmall && 'sm:border-r-2'
              }`}
            >
              <Image src={logo.src} alt={logo.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
