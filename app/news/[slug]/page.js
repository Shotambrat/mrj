// app/news/[slug]/page.jsx

import React from 'react';
import Map from "@/app/_components/About/Map";
import NewsTitle from "@/app/_components/NewsPages/NewsTitle";
import Share from "@/app/_components/NewsPages/Share";
import OtherNews from "@/app/_components/NewsPages/OtherNews";

/**
 * Fetches news data from the API based on the provided slug.
 *
 * @param {string} slug - The slug identifier for the news article.
 * @returns {Object|null} - Returns the news data object or null if an error occurs.
 */
async function fetchNewsData(slug) {
  try {
    const response = await fetch(`https://mrjtrade.result-me.uz/news/get/${slug}`, {
      // Cache the response for 60 seconds
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching news detail:', error);
    return null;
  }
}

/**
 * Generates dynamic metadata for the News Detail Page.
 *
 * @param {Object} params - The route parameters.
 * @param {string} params.slug - The slug identifier for the news article.
 * @returns {Object} - An object containing metadata properties.
 */
export async function generateMetadata({ params }) {
  const { slug } = params;
  const newsData = await fetchNewsData(slug);

  if (!newsData) {
    // Fallback metadata if data fetching fails
    return {
      title: "News Detail",
      description: "Detailed information about the news.",
      openGraph: {
        title: "News Detail",
        description: "Detailed information about the news.",
        url: `https://mrj-trade.com/news/${slug}`,
        siteName: "MRJ Trade",
        images: [
          {
            url: "/images/mrj-logo.png", // Ensure this image exists in your public directory
            width: 800,
            height: 600,
            alt: "Default Image",
          },
        ],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "News Detail",
        description: "Detailed information about the news.",
        images: ["/images/mrj-logo.png"],
      },
      additionalLinkTags: [
        {
          rel: "canonical",
          href: `https://mrj-trade.com/news/${slug}`,
        },
      ],
    };
  }

  // Extract relevant information for SEO
  const title = newsData.heading || "News Detail";
  const description = newsData.text
    ? newsData.text.replace(/<[^>]+>/g, "").substring(0, 160)
    : "Detailed information about the news.";

  // Extract image URL based on your data structure
  // Adjust the path based on the actual structure of newsData.photo
  const image =
    newsData.photo && Array.isArray(newsData.photo) && newsData.photo.length > 0
      ? newsData.photo[0].url // Replace with the correct path to the image URL
      : "/default-og-image.jpg"; // Fallback image

  // Ensure the createDate is in ISO format for structured data
  const datePublished = new Date(newsData.createDate).toISOString();

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: description,
    image: [image],
    datePublished: datePublished,
    author: {
      "@type": "Organization",
      name: "MRJ Trade",
      url: "https://mrj-trade.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MRJ Trade",
      logo: {
        "@type": "ImageObject",
        url: "/images/mrj-logo.png", // Replace with the path to your logo
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mrj-trade.com/news/${slug}`,
    },
  };

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://mrj-trade.com/news/${slug}`,
      siteName: "MRJ Trade",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [image],
    },
    additionalLinkTags: [
      {
        rel: "canonical",
        href: `https://mrj-trade.com/news/${slug}`,
      },
    ],
    structuredData: JSON.stringify(structuredData),
  };
}

/**
 * The main component for the News Detail Page.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.slug - The slug identifier for the news article.
 * @returns {JSX.Element} - The rendered News Detail Page.
 */
export default async function NewsDetailPage({ params }) {
  const { slug } = params;
  const newsData = await fetchNewsData(slug);

  if (!newsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-36">
      <NewsTitle data={newsData} />
      <Share data={newsData} />
      <OtherNews currentSlug={slug} />
      <Map />
    </div>
  );
}

