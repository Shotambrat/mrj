"use client";
import { useState } from "react";

export default function ProductCharacteristics({ product }) {
  const data = [
    {
      category: "description",
      title: "Description",
      desc: true,
      data: product.description, // Это описание, где могут быть символы \n
    },
    {
      category: "characteristics",
      title: "Characteristics",
      desc: false,
      data: product.characteristics.map((char) => ({
        title: char.parameterName,
        data: [char.description],
      })),
    },
  ];

  const [active, setActive] = useState(data[0].category);
  const [filtered, setFiltered] = useState(data[0]);

  const handleFilter = (catname) => {
    setActive(catname);
    const filteredArr = data.find((item) => item.category === catname);
    setFiltered(filteredArr);
  };

  // Функция для разбиения текста по символам \n и отображения каждой строки отдельно
  const formatTextWithParagraphs = (text) => {
    if (text) {
      return text.split("\n").map((line, index) => (
        <p key={index} className="mb-2">
          {line}
        </p>
      ));
    }
    return text;
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col relative">
        <div className="w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto">
          {data.map((item, index) => (
            <button
              onClick={() => handleFilter(item.category)}
              key={index}
              className={`z-10 w-auto text-lg transition-text font-medium ${
                active === item.category
                  ? "text-greenView border-b-2 border-b-greenView"
                  : "text-neutral-400"
              }`}
            >
              <h3 className="my-2 whitespace-nowrap">{item.title}</h3>
            </button>
          ))}
        </div>
        <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
      </div>
      <div>
        {filtered.desc ? (
          // Используем функцию formatTextWithParagraphs для рендеринга с переносами строк
          <div className="text-lg leading-5">
            {formatTextWithParagraphs(filtered.data)}
          </div>
        ) : (
          <div className="flex flex-col gap-6 w-full">
            {filtered.data.map((item, i) => (
              <div key={i} className="w-full flex gap-3">
                <p className="w-full text-neutral-400 max-w-[100px] md:max-w-[150px] mdx:max-w-[200px] lg:max-w-[400px]">
                  {item.title}
                </p>
                <div className="flex w-full flex-col">
                  {item.data.map((subitem, j) => (
                    // Применяем formatTextWithParagraphs для каждой строки subitem
                    <div key={j} className="text-lg leading-5">
                      {formatTextWithParagraphs(subitem)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
