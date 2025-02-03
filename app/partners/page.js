import Title from "@/app/_components/Partners/Title.js";
import ListPartners from "@/app/_components/Partners/ListPartners.js";
import Map from "@/app/_components/About/Map";

export const metadata = {
  title: "Our Partners – medical equipment manufacturers, hospital equipment, x ray equipment",
  description:
    "Discover our trusted partners in medical equipment manufacturing and distribution. From hospital equipment to radiology and x ray systems, we connect with top industry leaders to deliver the best solutions worldwide.",
  keywords: [
    "medical equipment",
    "med equip",
    "hospital equipment",
    "x ray equipment",
    "medical equipment company",
    "medical equipment trade",
    "medical equipment manufacturers",
    "medical implement"
  ].join(", "),
  alternates: {
    canonical: "https://mrj-trade.com/partners",
  },

  openGraph: {
    title: "Our Partners – medical equipment manufacturers, hospital equipment, x ray equipment",
    description:
      "Discover our trusted partners in medical equipment manufacturing and distribution. From hospital equipment to radiology and x ray systems, we connect with top industry leaders to deliver the best solutions worldwide.",
    url: "https://mrj-trade.com/partners",
    siteName: "MRJ Trade",
    images: [
      {
        url: "https://mrj-trade.com/mrj-logo.png",
        width: 1200,
        height: 630,
        alt: "MRJ Trade - Medical Equipment Cover",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="w-full bg-white flex flex-col gap-23 ">
      <Title />
      <ListPartners />
      <Map />
    </div>
  );
}