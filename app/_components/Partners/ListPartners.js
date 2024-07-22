import Link from "next/link";
import Image from 'next/image';
import partnerPhoto from "@/public/images/aboutUs/partners/image3.png";

const partners = [
    {
        id: 1,
        imageSrc: partnerPhoto,
        title: "Lingen",
        description: "Lingen Precision Medical Products Co., Ltd. is a unique manufacturer specializing in medical products",
        link: "lingen"
    },
    {
        id: 2,
        imageSrc: partnerPhoto,
        title: "assdsd",
        description: "fdgfdghfdhdgh",
        link: "fgfdgdf"
    },
    {
        id: 3,
        imageSrc: partnerPhoto,
        title: "assdsd",
        description: "fdgfdghfdhdgh",
        link: "fgfdgdf"
    },
    {
        id: 4,
        imageSrc: partnerPhoto,
        title: "assdsd",
        description: "fdgfdghfdhdgh",
        link: "fgfdgdf"
    },
    
];

export default function ListPartners() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mt-7">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {partners.map(card => (
                    <div key={card.id} className="bg-white p-4 rounded-2xl border-[1px] border-gray-200 mdx:p-0 mdl:p-5 slg:h-[230px]">
                        <div className="mdx:flex mdx:flex-row items-center justify-between">
                            <div className="w-full h-[70px] relative mt-3">
                                <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" />
                            </div>
                            <div className='mdx:mb-4'>
                                <h2 className="text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]">{card.title}</h2>
                                <p className="mb-4 text-gray-600 xl:text-[18px]">{card.description}</p>
                                <Link href={`/partners/${card.link}`}>
                                    <span className="text-green-600 font-semibold hover:underline mdx:text-[18px]">
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
