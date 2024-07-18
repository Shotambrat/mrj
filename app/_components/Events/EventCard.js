import Image from "next/image";
import Link from "next/link";

export default function EventCard({ title, imageSrc, link }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg h-[300px]">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <Link href={link} className="bg-white text-black px-4 py-2 w-[140px] font-semibold rounded-lg hover:bg-gray-200 transition">
          More info
        </Link>
      </div>
    </div>
  );
}
