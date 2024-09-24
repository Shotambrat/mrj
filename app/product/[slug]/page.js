import Map from "@/app/_components/About/Map";
import Application from "@/app/_components/Main/Application";
import ProductInfo from "@/app/_components/Products/ProductInfo";
import Similar from "@/app/_components/Products/Similar";

// Функция для генерации метаданных
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Запрос данных о продукте
  const res = await fetch(`https://mrjtrade.uz/product/v2/${slug}`);
  const data = await res.json();
  const product = data.data;

  if (!product) {
    return {
      title: 'Product not available',
      description: '404',
    };
  }

  // Форматирование изображений для Open Graph
  const images = product.gallery.map((image) => ({
    url: image.url,
    alt: product.name,
  }));

  return {
    title: product.name,
    description: product.shortDescription || product.description || '',
    keywords: product.characteristics
      .map((i) => `${i?.parameterName}, ${i?.description}`)
      .join(', '),
    openGraph: {
      title: product.name,
      description: product.shortDescription || product.description || '',
      url: `https://imed.uz/product/${slug}`,
      siteName: 'Medical equipment in Dubai',
      images: images.length ? images : undefined,
      locale: 'en-US',
      type: 'article', // Изменено с 'product' на 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.shortDescription || product.description || '',
      image: images.length ? images[0].url : '/default-image.jpg', // Изменено с 'images' на 'image'
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = params;

  // Запрос данных о продукте
  const res = await fetch(`https://mrjtrade.uz/product/v2/${slug}`);
  const data = await res.json();
  const product = data.data;

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="w-full bg-white flex flex-col gap-56 pt-12">
      <ProductInfo product={product} />
      <Application />
      <Similar product={product} />
      <Map />
    </div>
  );
}