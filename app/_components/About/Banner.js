import Large from "@/public/images/aboutUs/Largeimage.png";
import Small from "@/public/images/aboutUs/Smallimage.png";
// import Office from "@/public/images/aboutUs/Office.png";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col max-w-[1440px] 2xl:flex-row 2xl:items-center">
      <div className="text-black text-[30px] mdx:text-[45px] font-medium mdx">
        <h1><span className="text-greentxt text-[38px] font-bold mdx:text-[45px]">MRJ Trade</span> — reliable distributor of medical equipment</h1>
        <div className="text-[16px] mt-[16px] text-blacklighttxt mdx:text-[20px]">The company provides solid range of medical diagnostic equipment for IVD, PMLS and MIS such as ultrasound devices, lab analyzers, X-rays, MRI, CT systems, dental units in the UAE</div>
      </div>
      <div className="w-full h-auto ">
        <div className="block mt-[60px] h-[280px] w-full md:h-[350px] mdx:h-[440px] ">
          <div className="absolute w-3/6 h-auto z-10 mt-20 ">
            <Image
              src={Small}
              alt="Office Small"
              className="rounded-2xl border-[4px] border-white mdx:w-[310px]  mdx:h-[330px]"
            />
          </div>
          <div className="absolute w-3/6 h-full z-0 left-[40%] ">
            <Image
              src={Large}
              alt="Office Large"
              className="rounded-2xl mdx:w-[310px]  mdx:h-[365px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
