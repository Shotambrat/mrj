import Map from "@/app/_components/About/Map";
import NewsTitle from "@/app/_components/NewsPages/NewsTitle";
import Share from "@/app/_components/NewsPages/Share";
import OtherNews from "@/app/_components/NewsPages/OtherNews";

async function fetchNewsData(slug) {
  try {
    const response = await fetch(`http://213.230.91.55:8110/news/get/${slug}`);
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