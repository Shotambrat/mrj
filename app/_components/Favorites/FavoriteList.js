"use client";

import { useState, useEffect } from "react";
import Catalogitem from "@/app/_components/Catalog/Catalogitem";
import Commercial from "@/app/_components/Modal/Commercial";

export default function FavoriteList( ) {
  const [favorites, setFavorites] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  (favorites)

  return (
    <div className="w-full max-w-[2100px] slg:px-20 px-2 flex flex-col gap-12 mx-auto">
      {modal && <Commercial closeModal={setModal} />}
      <div className="w-full flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-3xl max-mdx:text-2xl font-semibold">FAVORITES</h1>
        <button
          onClick={() => setModal(true)}
          className="px-4 py-3 text-sm rounded-xl bg-greenView text-white"
        >
          Send a commercial offer
        </button>
      </div>
      <div className="grid grid-cols-1 mdl:grid-cols-2 2xl:grid-cols-4 gap-4">
        {favorites.map((item, index) => (
          <Catalogitem
            key={index}
            brand={item.brand}
            sale={item.sale}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
}
