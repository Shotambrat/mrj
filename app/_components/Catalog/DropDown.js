"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ brands, onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const handleFilterClick = (brandTitle) => {
    setActiveFilter(brandTitle);
    onFilterChange(brandTitle);
  };

  return (
    <div className="relative inline-block text-left">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="inline-flex justify-center items-center max-mdx:w-full max-mdx:px-8 w-56 px-4 py-3 font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent">
            {activeFilter === "all" ? "All Brands" : activeFilter}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    activeFilter === "all"
                      ? "bg-gray-100 text-greenView"
                      : "text-gray-900"
                  } group flex items-center px-4 py-2 text-sm`}
                  onClick={() => handleFilterClick("all")}
                >
                  All Brands
                </a>
              )}
            </Menu.Item>

            {brands.map((brand) => (
              <Menu.Item key={brand.id}>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      activeFilter === brand.title
                        ? "bg-gray-100 text-greenView"
                        : "text-gray-900"
                    } group flex items-center px-4 py-2 text-sm`}
                    onClick={() => handleFilterClick(brand.title)}
                  >
                    {brand.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
