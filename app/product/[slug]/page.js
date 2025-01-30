// app/product/[slug]/page.js

import Map from "@/app/_components/About/Map";
import Application from "@/app/_components/Main/Application";
import ProductInfo from "@/app/_components/Products/ProductInfo";
import Similar from "@/app/_components/Products/Similar";
import { notFound } from 'next/navigation';

// Функция для генерации метаданных
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    // Запрос данных о продукте
    const res = await fetch(`https://mrjtrade.result-me.uz/product/v2/${slug}`, {
      next: { revalidate: 60 }, // Кэширование на 60 секунд
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await res.json();

    const product = data.data;

    if (!product) {
      return {
        title: 'Товар не доступен',
        description: 'Страница не найдена.',
        alternates: {
          canonical: 'https://mrj-trade.com/product/',
        },
      };
    }

    // Используем только первую фотографию для Open Graph и Twitter
    const firstImage = product.gallery?.[0]?.url || '/default-image.jpg';

    return {
      title: product.name,
      description: product.shortDescription || product.description || '',
      keywords: product.characteristics
        .map((i) => `${i?.parameterName}, ${i?.description}`)
        .join(', '),
      alternates: {
        canonical: `https://mrj-trade.com/product/${slug}`,
      },
      openGraph: {
        title: product.name,
        description: product.shortDescription || product.description || '',
        url: `https://mrj-trade.com/product/${slug}`,
        siteName: 'Medical equipment in Dubai',
        images: [
          {
            url: firstImage,
            alt: product.name,
            width: 1200, // Рекомендуемые размеры для OG изображений
            height: 630,
          }
        ],
        type: 'website', // Изменено с 'product' на 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description: product.shortDescription || product.description || '',
        image: firstImage,
      },
      // Добавление структурированных данных JSON-LD
      additionalMetaTags: [
        {
          name: 'description',
          content: product.shortDescription || product.description || '',
        },
      ],
      // Включаем JSON-LD скрипт для структурированных данных
      structuredData: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": product.gallery?.map(img => img.url) || [firstImage],
        "description": product.shortDescription || product.description || '',
        "brand": {
          "@type": "Brand",
          "name": product.brand.title,
          "logo": product.brand.photo?.url || '',
          "description": product.brand.description,
        },
        "offers": {
          "@type": "Offer",
          "url": `https://mrj-trade.com/product/${slug}`,
          "priceCurrency": "USD", // Укажите актуальную валюту
          "price": product.originalPrice || "0",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "MRJ Trade",
          },
        },
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      title: 'Товар не доступен',
      description: 'Страница не найдена.',
      alternates: {
        canonical: 'https://mrj-trade.com/product/',
      },
    };
  }
}

export default async function ProductPage({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`https://mrjtrade.result-me.uz/product/v2/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await res.json();

    const product = data.data;

    if (!product) {
      notFound(); // Используем встроенную функцию Next.js для 404
    }

    return (
      <div className="w-full bg-white flex flex-col gap-56 pt-12">
        <ProductInfo product={product} />
        <Application />
        <Similar product={product} />
        <Map />
      </div>
    );
  } catch (error) {
    console.error("Error loading product page:", error);
    return <div>Товар не найден</div>;
  }
}
