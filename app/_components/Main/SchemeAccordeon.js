"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import upGreen from "@/public/svg/arrow-up-green.svg";
import downGray from "@/public/svg/arrow-down-gray.svg";
import schemeImage from "@/public/images/main/scheme-image.png";

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-t border-b border-solid border-neutral-200">
      <summary
        onClick={onClick}
        className={`flex gap-5 py-7 ${
          isOpen ? "text-greenView" : "text-neutral-400"
        } font-bold text-2xl max-md:flex-wrap max-md:max-w-full cursor-pointer`}
      >
        <span className="">{title}</span>
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

export default function Instuction() {
  const [openSection, setOpenSection] = useState("general");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col w-full xl:hidden">
        <AccordionItem
          title="Equipment Selection"
          isOpen={openSection === "general"}
          onClick={() => toggleSection("general")}
        >
          <div className="flex flex-col text-xl text-neutral-900 max-md:max-w-full">
            <AccordionContent>
              <div className="flex flex-col gap-5 text-lg font-semibold text-neutral-900 w-full">
                <div className="flex gap-3 max-md:flex-wrap">
                  <p className="max-md:max-w-full">
                    Consult with our experts to find equipment that perfectly
                    meets your needs
                  </p>
                </div>
                <Image
                  src={schemeImage}
                  width={1000}
                  height={1000}
                  alt="Scheme Image"
                  className="w-full h-auto"
                />
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem
          title="Order Processing"
          isOpen={openSection === "blood"}
          onClick={() => toggleSection("blood")}
        >
          <AccordionContent>
            {/* Add your content for blood analysis here */}
            <div className="flex flex-col gap-5 text-lg font-semibold text-neutral-900 w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <p className="max-md:max-w-full">
                  Consult with our experts to find equipment that perfectly
                  meets your needs
                </p>
              </div>
              <Image
                src={schemeImage}
                width={1000}
                height={1000}
                alt="Scheme Image"
                className="w-full h-auto"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Customized Ordering and Installation"
          isOpen={openSection === "urine"}
          onClick={() => toggleSection("urine")}
        >
          <AccordionContent>
            {/* Add your content for urine analysis here */}
            <div className="flex flex-col gap-5 text-lg font-semibold text-neutral-900 w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <p className="max-md:max-w-full">
                  Consult with our experts to find equipment that perfectly
                  meets your needs
                </p>
              </div>
              <Image
                src={schemeImage}
                width={1000}
                height={1000}
                alt="Scheme Image"
                className="w-full h-auto"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Training and Support"
          isOpen={openSection === "feces"}
          onClick={() => toggleSection("feces")}
        >
          <AccordionContent>
            {/* Add your content for feces analysis here */}
            <div className="flex flex-col gap-5 text-lg font-semibold text-neutral-900 w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <p className="max-md:max-w-full">
                  Consult with our experts to find equipment that perfectly
                  meets your needs
                </p>
              </div>
              <Image
                src={schemeImage}
                width={1000}
                height={1000}
                alt="Scheme Image"
                className="w-full h-auto"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </div>
      <div className="w-full flex">
        <div className="flex-1 flex-col flex justify-between">
          <button className="border-t border-b border-r-8 border-r-green-400 h-full py-8 flex items-center justify-start">
            <p>Equipment Selection</p>
          </button>
          <button className="border-t border-b border-r h-full py-8 flex items-center justify-start">
            <p>Equipment Selection</p>
          </button>
          <button className="border-t border-b border-r h-full py-8 flex items-center justify-start">
            <p>Equipment Selection</p>
          </button>
          <button className="border-t border-b border-r h-full py-8 flex items-center justify-start">
            <p>Equipment Selection</p>
          </button>
        </div>
        <div className="flex-1 h-full flex-col justify-between border-b ">
          <Image
            src={schemeImage}
            width={1000}
            height={1000}
            alt="Scheme Image"
            className="w-full h-auto"
          />
          <div className="px-4 py-4">
          Consult with our experts to find equipment that perfectly meets your needs
          </div>
        </div>
      </div>
    </section>
  );
}
