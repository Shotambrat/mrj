import Image from "next/image"
import newsPhoto from "@/public/images/news/news-photo.png";
import Link from "next/link";

export default function NewsTitle() {
    return (
        <div className="max-w-[1440px] mx-[15px]  mdl:mx-auto bg-slate-100 rounded-3xl">
            <div className=" rounded-3xl mdl:flex mdl:flex-row-reverse mdl:items-center mdl:justify-between   relative ">
                <div className="mdl:items-center mdl:flex mdl:my-3 flex justify-center content-center">
                    <Image
                        src={newsPhoto}
                        width={500}
                        height={500}
                        alt={`News Image`}
                        className=" w-[92%] h-auto max-w-[560px] max-h-[308px] mdl:w-full rounded-3xl mdl:max-h-[383px] mdl:max-w-[383px] mdl:mr-5"
                    />
                </div>
                <div className="flex flex-col uppercase text-greentxt  mdl:flex-1 ">
                    <h2 className="z-20 mt-4 ml-3 font-semibold text-[27px] mdl:text-[30px] xl:text-[40px] xl:mb-3 xl:ml-9">
                        Share this news<br /> with a friend!
                    </h2>
                    <p className="text-gray-500 text-[15px] normal-case mdl:w-[320px] xl:text-[20px] xl:w-[503px] z-20 xl:ml-9 ml-3">
                        Learn more about the latest advances in medical imaging! Share this news with friends and colleagues who may be interested
                    </p>
                    <div className="semicircle h-[283px] w-full xl:h-full mdl:h-full mdl:w-[50%] xl:w-[50%] rounded-b-2xl rounded-t-[20px] mdl:rounded-r-[140px] "></div>
                    <Link href="/news">
                        <button className="ml-3 px-[76px] w-[220px] py-4 mt-[20px] mb-[20px] rounded-2xl bg-greentxt text-white font-semibold xl:mt-[25px] xl:ml-9 z-50 relative">
                            Share
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
