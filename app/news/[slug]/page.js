import Map from "@/app/_components/About/Map";
import NewsTitle from "@/app/_components/NewsPages/NewsTitle";
import Share from "@/app/_components/NewsPages/Share";
import OtherNews from "@/app/_components/NewsPages/OtherNews";

async function fetchNewsData(slug) {
  try {
    const response = await fetch(`https://mrjtrade.uz/news/get/${slug}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching news detail:', error);
    return null;
  }
}

export default async function NewsDetailPage({ params }) {
  const { slug } = params;
  const newsData = await fetchNewsData(slug);

  if (!newsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-36 ">
      <NewsTitle data={newsData} />
      <Share data={newsData} />
      <OtherNews />
      <Map />
    </div>
  );
}