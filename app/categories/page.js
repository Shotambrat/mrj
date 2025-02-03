import Map from "../_components/About/Map";
import List from "../_components/Categories/List";
import Application from "../_components/Main/Application";

export const metadata = {
  title: "Equipment Categories – trade equipment, contact details, any question",
  description:
    "Explore our wide selection of trade equipment and medical solutions. Contact us for any question about modern technologies, and find out how we use them to improve your business processes.",
  keywords: [
    "trade equipment",
    "contact details",
    "we usage",
    "any question",
    "we are you",
    "improve you",
    "write a phone number",
    "company contact"
  ].join(", "),

  alternates: {
    canonical: "https://mrj-trade.com/categories",
  },

  openGraph: {
    title: "Equipment Categories – trade equipment, contact details, any question",
    description:
      "Explore our wide selection of trade equipment and medical solutions. Contact us for any question about modern technologies, and find out how we use them to improve your business processes.",
    url: "https://mrj-trade.com/categories",
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


export default function Home() {
  return (
    <div className="w-full bg-white flex flex-col gap-44 pt-24">
      <List />
      <Application />
      <Map />
    </div>
  );
}