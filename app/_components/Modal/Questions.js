"use client";

import { useState } from "react";
import closeGray from "@/public/svg/close-gray.svg";
import Image from "next/image";
import axios from "axios";

export default function Commercial({ closeModal }) {
  const [values, setValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    question: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (name, value) => {
    if (name === "fullName") {
      return value.length >= 3
        ? { isValid: true, message: "Правильно" }
        : { isValid: false, message: "Введите полное имя" };
    } else if (name === "phoneNumber") {
      const phoneRegex =
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
      return phoneRegex.test(value)
        ? { isValid: true, message: "Правильно" }
        : { isValid: false, message: "Введите правильный номер" };
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value)
        ? { isValid: true, message: "Правильно" }
        : { isValid: false, message: "Введите правильный email" };
    }
    return { isValid: true, message: "" };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://mrjtrade.uz/application/create", values);
      if (response.status === 200) {
        closeModal(false);
      } else {
        setError("Error submitting form, please try again.");
      }
    } catch (error) {
      setError("Error submitting form, please try again.");
    } finally {
      setLoading(false);
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
        <h3 className="text-xl font-semibold ">Ask question</h3>
        <div className="z-10 flex-1 w-full flex justify-center">
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
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
                      : "Your question"
                  }
                />
                <label
                  htmlFor={field}
                  className={`absolute left-3  transition-all ${
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
                  {focusedInput === field && values[field].length > 0 ? (
                    validateInput(field, values[field]).message
                  ) : field === "fullName" ? (
                    <p>
                      Full Name
                      <span className="text-red-600 ml-2">*</span>
                    </p>
                  ) : field === "phoneNumber" ? (
                    <p>
                      Phone number
                      <span className="text-red-600 ml-2">*</span>
                    </p>
                  ) : field === "email" ? (
                    "E-mail"
                  ) : (
                    "Your question"
                  )}
                </label>
              </div>
            ))}
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold bg-greenView"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}