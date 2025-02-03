import Map from "@/app/_components/Contacts/Map";
import Representatives from "@/app/_components/Contacts/Representatives";
import Application from "../_components/Main/Application";

export const metadata = {
    title: "Contact Us – Phone Number, International Number, Customer Service",
    description:
        "Get in touch by phone number, tollfree number, or international number. Trade in phone services, find US phone numbers, and contact us for more information about our global support.",
    keywords: [
        "phon e",
        "phone number",
        "telephone number",
        "contact us",
        "us phone number",
        "any us phone number",
        "international number",
        "tollfree number",
    ].join(", "),
    alternates: {
        canonical: "https://mrj-trade.com/contacts",
      },
    
      openGraph: {
        title: "Contact Us – Phone Number, International Number, Customer Service",
        description:
          "Get in touch by phone number, tollfree number, or international number. Trade in phone services, find US phone numbers, and contact us for more information about our global support.",
        url: "https://mrj-trade.com/contacts",
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

export default function page() {
    return (
        <div className="w-full bg-white flex flex-col gap-23 pb-24 ">
            <Map />
            <Representatives />
            <Application />
        </div>
    );
}