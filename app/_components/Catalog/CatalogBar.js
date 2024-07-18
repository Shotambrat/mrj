

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function CatalogList() {
  const data = [
    {
      id: 1,
      name: "Ultrasound Diagnostic Systems",
      slug: "1-ultrasound-diagnostic-systems",
      active: true,
      catalogList: [
        {
          id: 4,
          name: "Portable",
          slug: "4-portable",
          active: true,
        },
        {
          id: 2,
          name: "Stationary",
          slug: "2-stationary",
          active: true,
        },
      ],
    },
    {
      id: 2,
      name: "Laboratory Equipment",
      slug: "2-laboratory-equipment",
      active: true,
      catalogList: [
        {
          id: 3,
          name: "Portable",
          slug: "3-portable",
          active: true,
        },
      ],
    },
  ];

  return (
    <Accordion selectionMode="multiple">
      {data.map(
        (item, i) =>
          item.active && (
            <AccordionItem key={item.id} aria-label={item.name} title={item.name}>
              {item.catalogList &&
                item.catalogList.map(
                  (catalogItem) =>
                    catalogItem.active && <p key={catalogItem.id}>{catalogItem.name}</p>
                )}
            </AccordionItem>
          )
      )}
    </Accordion>
  );
}