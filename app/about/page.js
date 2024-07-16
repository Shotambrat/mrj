import WhyChooseUs from "@/app/_components/About/WhyChooseUs"
import WhatWeDo from "@/app/_components/About/WhatWeDo"
import Partners from "@/app/_components/About/Partners"
import Banner from "@/app/_components/About/Banner";
// import Map from "@/app/_components/About/Map";

export default function Home() {
  return (
    <main className="w-full bg-white flex flex-col gap-32 px-2 mx-auto">
      <div className="mt-[40px] "><Banner /></div>
      <div className="mt-[40px] xl:px-[100px] 3xl:x-[200px]"><WhatWeDo /></div>
      <div className="mt-[40px] xl:px-[100px] 3xl:x-[200px]"><Partners /></div>
      <div className="mt-[40px] "><WhyChooseUs /></div>
      {/* <div className="mt-[40px] "><Map /></div> */}
    </main>
  );
}
