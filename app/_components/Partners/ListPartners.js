import Link from "next/link";
import Image from 'next/image';
import partnerPhoto1 from "@/public/images/aboutUs/partners/image1.png";
import partnerPhoto2 from "@/public/images/aboutUs/partners/image2.png";
import partnerPhoto3 from "@/public/images/aboutUs/partners/image3.png";
import partnerPhoto4 from "@/public/images/aboutUs/partners/image4.png";
import partnerPhoto5 from "@/public/images/aboutUs/partners/image5.png";
import partnerPhoto6 from "@/public/images/aboutUs/partners/image6.png";


const partners = [
    {
        id: 1,
        imageSrc: partnerPhoto1,
        title: "Browiner",
        description: "Browiner is one of the leading suppliers of medical devices and solutions in the field of mobile digital radiography",
        link: "browiner"
    },
    {
        id: 2,
        imageSrc: partnerPhoto2,
        title: "United Imaging",
        description: "United Imaging is a leading global developer and manufacturer of advanced medical imaging and radiotherapy equipment",
        link: "imaging"
    },
    {
        id: 3,
        imageSrc: partnerPhoto3,
        title: "Zoncare Global",
        description: "Zoncare is a leading high-tech medical device manufacturer and supplier located in the Optical Valley of China",
        link: "zoncare"
    },
    {
        id: 4,
        imageSrc: partnerPhoto4,
        title: "Mindray",
        description: "Mindray is a global leader in the development and manufacture of medical devices and solutions",
        link: "mindray"
    },
    {
        id: 5,
        imageSrc: partnerPhoto5,
        title: "Hefei Shendeng Medical Equipment Co.",
        description: "Is a leading provider of medical equipment and solutions",
        link: "Shendeng"
    },
    {
        id: 6,
        imageSrc: partnerPhoto6,
        title: "lingen",
        description: "Lingen Precision Medical Products Co., Ltd. is a custom manufacturer specializing in medical products",
        link: "lingen"
    },

];

export default function ListPartners() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mt-7">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {partners.map(card => (
                    <div key={card.id} className="bg-white p-4 w-full rounded-2xl border-[1px] border-gray-200 mdx:p-0 mdl:p-5 slg:h-auto">
                        <div className="mdx:flex mdx:flex-row items-center justify-between ">
                            <div className="mdx:w-[50%] h-[70px] relative mt-3">
                                <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" />
                            </div>
                            <div className='mdx:mb-4 mdx:w-[50%]'>
                                <h2 className="text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]">{card.title}</h2>
                                <p className="mb-4 text-gray-600 xl:text-[18px]">{card.description}</p>
                                <Link href={`/partners/${card.link}`}>
                                    <span className="text-green-600 font-semibold mdx:text-[18px]">
                                        read more →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
