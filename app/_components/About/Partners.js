import lingen from "@/public/images/aboutUs/partners/image28.png";
import united from "@/public/images/aboutUs/partners/image32.png";
import browiner from "@/public/images/aboutUs/partners/image41.png";
import mindray from "@/public/images/aboutUs/partners/image42.png";
import dollar from "@/public/images/aboutUs/partners/image3.png";
import zoncare from "@/public/images/aboutUs/partners/image27.png";

import Image from "next/image";

export default function Partners() {
    const logos = [
        { src: lingen, alt: 'Lingen Logo' },
        { src: united, alt: 'United Imaging Logo' },
        { src: browiner, alt: 'Browiner Logo' },
        { src: mindray, alt: 'Mindray Logo' },
        { src: dollar, alt: 'Dollar Logo' },
        { src: zoncare, alt: 'Zoncare Logo' },
    ];

    return (
        <div>
            <div className="text-[25px] mb-8 mdx:text-[35px]">Our partners</div>
            <div className="grid grid-cols-2 xl:grid-cols-3">
                {logos.map((logo, index) => {
                    // Determine the border classes based on the index
                    let borderClasses = "border-gray-300";

                    // Apply bottom border to all except the last row
                    if (index < logos.length - 2) {
                        borderClasses += " border-b";
                    }

                    
                    // Apply right border to all except the last column in each row
                    if (index % 2 === 0 && index !== logos.length - 3) {
                        borderClasses += " border-r";
                    }

                    // For xl screen size, apply specific conditions
                    if (index < 3) {
                        borderClasses += " xl:border-b";
                    }
                    if (index % 3 !== 2 && index !== 2) {
                        borderClasses += " xl:border-r";
                    }

                    // Remove bottom border for the Dollar logo
                    if (index === 4) {
                        borderClasses = borderClasses.replace(" border-b", "");
                    }

                    // Remove right border for the Mindray logo
                    if (index === 2) {
                        borderClasses = borderClasses.replace(" border-r", "");
                    }
                    if (index === 3 || index === 4) {
                        borderClasses += " border-l";
                    }
                    if (index === 3 || index === 4) {
                        borderClasses += " border-l xl:border-l-0";
                    }
                    // Add a middle border in xl layout
                    if (index === 1 || index === 4) {
                        borderClasses += " xl:border-l";
                    }

                    return (
                        <div
                            key={index}
                            className={`flex justify-center items-center h-[130px] p-4 mdx:p-12 ${borderClasses}`}
                        >
                            <Image src={logo.src} alt={logo.alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
