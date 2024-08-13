"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };
  return (
    <div className="relative inline-block text-left">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="inline-flex justify-center items-center w-56 px-4 py-2 font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent">
            {activeFilter == 'all' ? 'All equipment' : activeFilter == 'new' ? 'New items' : 'Promotions'}
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
                  All equipment
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    activeFilter === "new"
                      ? "bg-gray-100 text-greenView"
                      : "text-gray-900"
                  } group flex items-center px-4 py-2 text-sm`}
                  onClick={() => handleFilterClick("new")}
                >
                  New items
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    activeFilter === "promotion"
                      ? "bg-gray-100 text-greenView"
                      : "text-gray-900"
                  } group flex items-center px-4 py-2 text-sm`}
                  onClick={() => handleFilterClick("promotion")}
                >
                  Promotions
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
