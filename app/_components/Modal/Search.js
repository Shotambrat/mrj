"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Search({ setSearchMenu, searchModalRef, searchButtonRef }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    try {
      if (!query.trim()) return; // Не отправляем запрос, если поле пустое

      setLoading(true);
      const response = await axios.get(`https://mrjtrade.uz/search?query=${query}`);
      setResults(response.data.data);
      setNoResults(response.data.data.length === 0); // Проверяем, есть ли результаты
      setLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setLoading(false);
      setNoResults(true); // Обработка ошибки как отсутствие результатов
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setSearchMenu(false); // Закрыть по клавише Escape
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);

    // Если таймер уже был запущен, очищаем его
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Устанавливаем новый таймер, который выполнит поиск через 500 мс
    const newTimeoutId = setTimeout(() => {
      if (e.target.value.trim()) {
        handleSearch();
      }
    }, 500); // 500 мс (можно изменить)

    setTimeoutId(newTimeoutId);
  };

  const handleClickOutside = (e) => {
    // Если клик был за пределами модального окна и кнопки открытия/закрытия
    if (
      searchModalRef.current &&
      !searchModalRef.current.contains(e.target) &&
      !searchButtonRef.current.contains(e.target) // Игнорируем клики на кнопке
    ) {
      setSearchMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLink = (item) => {
    let url = '';
    switch (item.dtoName) {
      case 'Product':
        url = `/product/${item.slug}`;
        break;
      case 'Category':
        url = `/categories/${item.slug}`;
        break;
      case 'Catalog':
        url = `/categories/`;
        break;
      case 'New':
        url = `/news/${item.slug}`;
        break;
      case 'Partner':
        url = `/partners/${item.slug}`;
        break;
      case 'Event':
        url = `/events/${item.slug}`;
        break;
      default:
        url = '#';
        break;
    }
    return url;
  };

  const getTypeLabel = (dtoName) => {
    switch (dtoName) {
      case 'Product':
        return 'Product';
      case 'New':
        return 'News';
      case 'Partner':
        return 'Partner';
      case 'Catalog':
        return 'Catalog';
      default:
        return '';
    }
  };

  return (
    <div className="fixed h-screen w-full bg-modalBg left-0 top-[90px] z-[9999]">
      <div ref={searchModalRef} className="h-[70%] w-full bg-white pt-8">
        <div className="h-[95%] w-full max-w-[2100px] slg:px-20 mx-auto flex flex-col gap-8 overflow-y-scroll no-scrollbar">
          <div className="flex items-center bg-snowy rounded-lg p-4 w-full shadow-sm">
            <input
              type="text"
              placeholder="Enter the name of the product, page, etc..."
              className="bg-transparent outline-none flex-1 text-gray-600 placeholder-gray-400"
              value={query}
              onChange={handleInputChange} // Обработчик изменения ввода
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>
              <svg
                className="w-8 h-8 text-greenView"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>

          {loading && <p>Loading...</p>}

          <div className="flex flex-col gap-4">
            {noResults && <p>No results found.</p>}
            {!loading && results.map((item) => (
              <a
                key={item.id}
                href={getLink(item)}
                className="p-4 bg-white shadow-md flex gap-4 w-full rounded-md cursor-pointer"
              >
                {item.photo && item.photo.url && (
                  <Image
                    src={item.photo.url}
                    alt={item.name || item.title}
                    width={500}
                    height={500}
                    className="w-40 h-40 object-cover rounded-md mb-2"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{item.name || item.title}</h3>
                  {item.categoryName && (
                    <p className="text-sm text-gray-400">Category: {item.categoryName}</p>
                  )}
                  <p className="text-sm text-gray-400">{getTypeLabel(item.dtoName)}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}