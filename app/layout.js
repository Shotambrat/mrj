import "@/app/_styles/globals.css";
import dynamic from "next/dynamic";
import Footer from "@/app/_components/Footer/Footer";
import CookieModal from "@/app/_components/CookieModal";

const Header = dynamic(() => import("@/app/_components/Header/Header"), { ssr: true });


export const metadata = {
  title: "Medical Equipment & Diagnostic Devices – MRJ Trade",
  description:
    "MRJ Trade is your trusted source for medical equipment, Mindray ultrasound systems, diagnostic tools, and hospital supplies in the UAE. Discover top-quality products that meet global standards.",
  alternates: {
    canonical: "https://mrj-trade.com",
  },

  openGraph: {
    title: "Medical Equipment & Diagnostic Devices – MRJ Trade",
    description:
      "Find top medical equipment, Mindray ultrasound machines, diagnostic devices, and hospital equipment in the UAE at MRJ Trade. Your one-stop solution for high-quality medical technology.",
    url: "https://mrj-trade.com",
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

  keywords: [
    "medical equipment",
    "medical products",
    "mindray ultrasound",
    "diagnostic equipment",
    "hospital equipment",
    "medical devices",
    "medical imaging devices",
    "medical equipment dubai",
    "medical equipment distributor",
  ],
};

export default function RootLayout({ children }) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MRJ Trade",
    url: "https://mrj-trade.com",
    logo: "https://mrj-trade.com/mrj-logo.png",
    sameAs: [
      "https://t.me/mrjtrade_ae",
      "https://www.facebook.com/people/MRJ-Medical-Equipment-in-Dubai/61562385060429/",
      "https://www.instagram.com/mrjtrade/",
      "https://www.youtube.com/@MRJ_Medical_Equipment_in_Dubai",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971562487700", 
        contactType: "Customer Service",
        areaServed: "AE",
        availableLanguage: ["en"],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11414753579"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11414753579');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main className="w-full bg-white relative">{children}</main>
        <Footer />
        <CookieModal />
      </body>
    </html>
  );
}