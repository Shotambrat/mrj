// app/news/[slug]/page.jsx
import React from 'react';
import Map from "@/app/_components/About/Map";
import NewsTitle from "@/app/_components/NewsPages/NewsTitle";
import Share from "@/app/_components/NewsPages/Share";
import OtherNews from "@/app/_components/NewsPages/OtherNews";

/**
 *
 * @param {string} slug
 * @returns {Object|null}
 */
async function fetchNewsData(slug) {
  try {
    const response = await fetch(`https://mrjtrade.result-me.uz/news/get/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched data from API:', data); // Debugging
    return data.data;
  } catch (error) {
    console.error('Error fetching news detail:', error);
    return null;
  }
}

/**
 * Parses a date string in 'DD-MM-YYYY' format and returns a Date object.
 *
 * @param {string} dateString - The date string to parse.
 * @returns {Date|null} - The parsed Date object or null if invalid.
 */
function parseDateString(dateString) {
  const parts = dateString.split('-');
  if (parts.length !== 3) return null;

  const [day, month, year] = parts.map(part => parseInt(part, 10));

  // Validate the parsed numbers
  if (
    isNaN(day) || isNaN(month) || isNaN(year) ||
    day < 1 || day > 31 ||
    month < 1 || month > 12 ||
    year < 1000 || year > 9999
  ) {
    return null;
  }

  const date = new Date(year, month - 1, day);

  // Check if the date is valid
  return isNaN(date.getTime()) ? null : date;
}

/**
 * Generates metadata for the news detail page based on the fetched news data.
 *
 * @param {Object} params - Route parameters containing the slug.
 * @returns {Object} - Metadata object for the page.
 */
export async function generateMetadata({ params }) {
  const { slug } = params;
  const newsData = await fetchNewsData(slug);

  if (!newsData) {
    return {
      title: 'Новость не найдена',
      description: 'К сожалению, запрашиваемая новость не найдена.',
    };
  }

  const { head, newOptions, createDate } = newsData;
  const description = head.body.substring(0, 160); 
  const imageUrl = head.photo?.url || 'https://mrjtrade.uz/mrj-logo.png'; 

  // Парсим дату
  const parsedDate = parseDateString(createDate);
  const publishedTime = parsedDate ? parsedDate.toISOString() : null;

  return {
    title: head.title,
    description: description,
    openGraph: {
      title: head.title,
      description: description,
      url: `https://mrjtrade.uz/news/${newsData.slug}`,
      type: 'article',
      article: {
        publishedTime: publishedTime || new Date().toISOString(),
        tags: newOptions.map(option => option.heading),
      },
      images: [
        {
          url: imageUrl,
          alt: head.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: head.title,
      description: description,
      images: [imageUrl],
    },
    metadataBase: new URL('https://mrjtrade.uz'),
    alternates: {
      canonical: `https://mrjtrade.uz/news/${newsData.slug}`,
    },
  };
}

export default async function NewsDetailPage({ params }) {
  const { slug } = params;
  console.log('Current slug:', slug);

  const newsData = await fetchNewsData(slug);
  console.log('News data:', newsData);

  if (!newsData) {
    return <div>Новость не найдена.</div>;
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
