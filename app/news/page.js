import Events from "@/app/_components/News/Events";
import NewsComp from "@/app/_components/News/NewsComp";
import Map from "../_components/About/Map";

export const metadata = {
  title: "Latest Medical Equipment News – distribution, hospital equipment, x ray systems",
  description:
    "Stay informed about the latest news in medical equipment distribution, hospital equipment, med systems, and more. Explore cutting-edge solutions for healthcare, including radiology equipment and diagnostic advances.",
  keywords: [
    "medical equipment",
    "med equip",
    "medi equip",
    "hospital equipment",
    "x ray systems",
    "radiology equipment",
    "medical equipment distribution",
    "medical implement",
    "medical supports",
    "doctor's equipment",
  ].join(", "),
  alternates: {
    canonical: "https://mrj-trade.com/news",
  },

  openGraph: {
    title: "Latest Medical Equipment News – distribution, hospital equipment, x ray systems",
    description:
      "Stay informed about the latest news in medical equipment distribution, hospital equipment, med systems, and more. Explore cutting-edge solutions for healthcare, including radiology equipment and diagnostic advances.",
    url: "https://mrj-trade.com/news",
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

export default function News() {
  return (
    <div className="pt-24">
      {/* <Events /> */}
      <NewsComp />
      <Map />
    </div>
  );
}