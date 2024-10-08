"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import upGreen from "@/public/svg/arrow-up-green.svg";
import downGray from "@/public/svg/arrow-down-gray.svg";
import schemeImage from "@/public/images/main/scheme-image.png";
import schemeTwo from "@/public/images/main/scheme/order-processing.jpg"
import schemeThree from "@/public/images/main/scheme/customized.jpg"
import schemeFour from "@/public/images/main/scheme/training.jpg"

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-t border-b border-solid border-neutral-200">
      <summary
        onClick={onClick}
        className={`flex gap-5 py-7 ${
          isOpen ? "text-greenView" : "text-neutral-400"
        } font-bold text-2xl max-md:flex-wrap max-md:max-w-full cursor-pointer`}
      >
        <span className="flex-auto">{title}</span>
        {isOpen ? (
          <Image
            src={upGreen}
            className=""
            alt={`Up icon red`}
            priority
            width={30}
            height={30}
            quality={100}
          />
        ) : (
          <Image
            src={downGray}
            className=""
            alt={`Down icon black`}
            priority
            width={30}
            height={30}
            quality={100}
          />
        )}
      </summary>
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-screen opacity-100"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="max-h-screen opacity-100"
        leaveTo="max-h-0 opacity-0"
      >
        <div className="overflow-hidden">{children}</div>
      </Transition>
    </div>
  );
};

const AccordionContent = ({ children }) => {
  return <div className="pb-5 px-4">{children}</div>;
};

const data = [
  {
    key: "general",
    title: "Equipment Selection",
    description: "Consult with our experts to find equipment that perfectly meets your needs",
    image: schemeImage
  },
  {
    key: "blood",
    title: "Order Processing",
    description: "Our streamlined order processing ensures a smooth and efficient transition from selection to delivery, maintaining accuracy and timeliness throughout the entire process.",
    image: schemeTwo
  },
  {
    key: "urine",
    title: "Customized Ordering and Installation",
    description: "Tailor your equipment order and installation to fit your specific requirements. Our team handles everything from start to finish, ensuring seamless integration into your facility.",
    image: schemeThree
  },
  {
    key: "feces",
    title: "Training and Support",
    description: "Receive comprehensive training and ongoing support to maximize the usage and longevity of your equipment. Our experts are available to assist you at every step, ensuring optimal performance.",
    image: schemeFour
  }
];

export default function Instruction() {
  const [openSection, setOpenSection] = useState("general");
  const [openSectionAccordeon, setOpenSectionAccordeon] = useState("general");
  const [filteredData, setFilteredData] = useState(data[0]);

  const toggleSection = (section) => {
    setOpenSection(section);
    const result = data.find((item) => item.key === section);
    setFilteredData(result);
  };

  const toggleSectionAccordeon = (section) => {
    if (openSectionAccordeon ==  section) {
      setOpenSectionAccordeon("");
    } else {
      setOpenSectionAccordeon(section);
    }
    const result = data.find((item) => item.key === section);
    setFilteredData(result);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col w-full xl:hidden">
        {data.map(({ key, title, description, image }) => (
          <AccordionItem
            key={key}
            title={title}
            isOpen={openSectionAccordeon === key}
            onClick={() => toggleSectionAccordeon(key)}
          >
            <AccordionContent>
              <div className="flex flex-col gap-5 text-lg font-semibold text-neutral-900 w-full">
                <div className="flex gap-3 max-md:flex-wrap">
                  <p className="max-md:max-w-full">{description}</p>
                </div>
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="Scheme Image"
                  className="w-full h-auto"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
      <div className="w-full flex max-xl:hidden">
        <div className="flex-1 flex-col flex justify-between">
          {data.map((item, i) => (
            <button
              key={i}
              className={`border-t border-b h-full py-8 flex items-center justify-start ${
                openSection === item.key ? "text-greenView  border-r-4 border-r-green-800" : "text-neutral-400 border-r"
              }`}
              onClick={() => toggleSection(item.key)}
            >
              <p className="text-2xl font-semibold">{item.title}</p>
            </button>
          ))}
        </div>
        <div className="flex-1 flex-col justify-between border-b ">
          <Image
            src={filteredData.image}
            width={1000}
            height={1000}
            quality={100}
            alt="Scheme Image"
            className="w-full h-auto max-h-[400px] object-cover"
          />
          <div className="px-4 py-4">
            {filteredData.description}
          </div>
        </div>
      </div>
    </section>
  );
}