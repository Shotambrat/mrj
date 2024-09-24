"use client"

import { useState } from "react";
import closeGray from "@/public/svg/close-gray.svg";
import Image from "next/image";

export default function Commercial({ product, closeModal }) {
  const [values, setValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    question: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (name, value) => {
    if (name === "fullName") {
      return value.length >= 3
        ? { isValid: true, message: "Correct" }
        : { isValid: false, message: "Enter full name" };
    } else if (name === "phoneNumber") {
      const phoneRegex =
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
      return phoneRegex.test(value)
        ? { isValid: true, message: "Correct" }
        : { isValid: false, message: "Enter valid phone number" };
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value)
        ? { isValid: true, message: "Correct" }
        : { isValid: false, message: "Enter valid email" };
    }
    return { isValid: true, message: "" };
  };

  const prepareProductLinks = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return storedFavorites.map((item) => ({
      name: item.title,
      link: `https://mrjtrade.ae/product/${item.slug}`
    }));
  };

  const handleSendClick = async () => {
    const productLinks = prepareProductLinks();
    
    const requestBody =  !product ? {
      name: values.fullName,
      phone: values.phoneNumber,
      mail: values.email,
      message: values.question,
      productLink: productLinks
    } : {
      name: values.fullName,
      phone: values.phoneNumber,
      mail: values.email,
      message: values.question,
      productLink: [
        {
          name: product.name,
          link: `https://mrjtrade.ae/product/${product.slug}`
        }
      ]
    }

    (requestBody)

    try {
      const response = await fetch('https://mrjtrade.uz/commercial-offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        setValues({
          fullName: "",
          phoneNumber: "",
          email: "",
          question: "",
        });
        closeModal(false);
      } else {
        console.error("Error sending commercial offer");
      }
    } catch (error) {
      console.error("Error sending commercial offer", error);
    }
  };

  return (
    <div className="fixed w-full top-0 left-0 h-screen justify-center flex bg-modalBg items-center z-[9999] p-2">
      <div className="w-full max-w-[320px] xl:max-w-[450px] rounded-3xl px-6 py-6 flex flex-col gap-6 relative bg-white">
        <button onClick={() => closeModal(false)} className="w-4 h-4 absolute top-8 right-6">
          <Image
            src={closeGray}
            width={100}
            height={100}
            alt="Close Icon Gray"
            className="w-full h-full"
          />
        </button>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">Send a commercial offer</h3>
          <p className="text-neutral-400">
            Managers will contact you as soon as possible
          </p>
        </div>
        <div className="z-10 flex-1 w-full flex justify-center">
          <div className="flex flex-col gap-6 w-full">
            {["fullName", "phoneNumber", "email", "question"].map((field) => (
              <div className="relative" key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={values[field]}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput(field)}
                  onBlur={() => setFocusedInput(null)}
                  className={`block w-full px-3 py-3 bg-white rounded-lg placeholder-transparent focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm border border-neutral-400 ${
                    focusedInput === field
                      ? validateInput(field, values[field]).isValid
                        ? "border-green-500"
                        : "border-red-500"
                      : "border-transparent"
                  }`}
                  placeholder={
                    field === "fullName"
                      ? "Full name"
                      : field === "phoneNumber"
                      ? "Phone number"
                      : field === "email"
                      ? "E-mail"
                      : "Your offer"
                  }
                />
                <label
                  htmlFor={field}
                  className={`absolute left-3 transition-all ${
                    focusedInput === field || values[field]
                      ? "-top-4 text-xs"
                      : "top-3 text-sm"
                  } ${
                    focusedInput === field
                      ? validateInput(field, values[field]).isValid
                        ? "text-green-500"
                        : "text-red-500"
                      : "text-gray-400"
                  } cursor-text`}
                  onClick={() => document.getElementsByName(field)[0].focus()}
                >
                  {focusedInput === field && values[field].length > 0
                    ? validateInput(field, values[field]).message
                    : field === "fullName"
                    ? <p>Full Name<span className="text-red-600 ml-2">*</span></p>
                    : field === "phoneNumber"
                    ? <p>Phone number<span className="text-red-600 ml-2">*</span></p>
                    : field === "email"
                    ? "E-mail"
                    : "Your offer"}
                </label>
              </div>
            ))}
            <button onClick={handleSendClick} className="w-full py-3 rounded-xl text-white font-semibold bg-greenView">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}