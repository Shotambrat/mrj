"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cookieIcon from "@/public/images/cookie/cookie-icon.png";
import cookieMed from "@/public/images/cookie/cookie-med.png";
import cookieFunMed from "@/public/images/cookie/cookie-fun-med.png";

export default function CookieModal() {
  const [showModal, setShowModal] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setCookieConsent(true);
    } else {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    localStorage.setItem("cookieConsent", "true");
    setShowModal(false);
  };

  const handleReject = () => {
    setShowModal(false);
  };

  if (cookieConsent) return null;

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: showModal ? 0 :'100%' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed left-0 w-full bg-gray-800 text-white p-8 z-50 bottom-0 overflow-hidden"
      style={{
        backgroundImage: `
          url(${cookieIcon.src}), url(${cookieIcon.src}), url(${cookieIcon.src}),
          url(${cookieMed.src}), url(${cookieMed.src}),
          url(${cookieFunMed.src}), url(${cookieFunMed.src}), url(${cookieFunMed.src})
        `,
        backgroundPosition: `
          10% 20%, 30% 70%, 50% 30%,
          70% 50%, 20% 80%,
          60% 10%, 80% 60%, 90% 40%
        `, // Random positions
        backgroundSize: `
          50px, 75px, 100px,
          60px, 80px,
          50px, 70px, 90px
        `, // Different sizes
        backgroundRepeat: "no-repeat",
        transform: `
          rotate(10deg), rotate(-20deg), rotate(30deg),
          rotate(-10deg), rotate(20deg),
          rotate(15deg), rotate(-25deg), rotate(5deg)
        `, // Random rotations
      }}
    >
      <div className="container mx-auto flex max-lg:flex-col gap-4 justify-between items-center">
        <p className="text-xl text-center">We use cookies to improve your experience on our site. By accepting, you agree to our use of cookies.</p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-green-500 px-4 py-2 rounded mr-2"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Reject
          </button>
        </div>
      </div>
    </motion.div>
  );
}
