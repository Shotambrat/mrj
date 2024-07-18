import newsPhoto from "@/public/images/news/news-photo.png";
import NewCard from "@/app/_components/News/NewCard";
import Pagination from "@/app/_components/News/Pagination";
import Link from "next/link";

export default function NewsComp() {
  const data = [
    {
      title: "The Future of Telemedicine and Remote Patient Monitoring",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title: "The Impact of Portable Medical Devices on Healthcare Accessibility",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "medical-devices",
    },
    {
      title: "The Future of Telemedicine and Remote Patient Monitoring",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title: "Children's health: Vaccination and prevention of infectious diseases",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "children",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 my-[120px] mdx:my-[200px] 2xl:my-[250px]">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold">NEWS</h2>
      <div className="w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto">
        {data.map((item, i) => (
          <Link key={i} href={`/news/${item.slug}`}>
            <NewCard
              key={i}
              title={item.title}
              date={item.date}
              imageSrc={item.imageSrc}
            />
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Pagination />
      </div>
    </div>
  );
}
