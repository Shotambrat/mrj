import lingen from "@/public/images/aboutUs/partners/image28.png";
import united from "@/public/images/aboutUs/partners/image32.png";
import browiner from "@/public/images/aboutUs/partners/image41.png";
import dollar from "@/public/images/aboutUs/partners/image42.png";
import mindray from "@/public/images/aboutUs/partners/image3.png";
import zoncare from "@/public/images/aboutUs/partners/image27.png";

import Image from 'next/image';

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
    <div className="max-w-[1440px] mx-auto">
      <div className="text-[25px] mb-8 mdx:text-[35px] px-2">Our partners</div>
      <div className="relative ">
        <div className="relative absolute  border-[1px] border-white z-10"></div>
        <div className=" grid grid-cols-2 m-[-1px] xl:grid-cols-3 border border-white">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full h-24 p-12 border border-gray-200 "
            >
              <Image src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
        <div className="relative absolute  border-[1px] border-white z-10 m-[-3px] h-full"></div>
      </div>
    </div>
  );
}
