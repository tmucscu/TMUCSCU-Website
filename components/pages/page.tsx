"use client";

import { ReactNode, useEffect, useState } from "react";

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ScrollBackToTopButton from "../button/scrollBackToTopButton";

const Page = ({ children }: { children: ReactNode }) => {
  // shows navbar dropshadow and scroll back to top button
  const [showScrollElements, setShowScrollElements] = useState(false);

  const onUserScroll = () => {
    setShowScrollElements(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", onUserScroll);

    return () => window.removeEventListener("scroll", onUserScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col dark:bg-dark">
      <Navbar showDropShadow={showScrollElements} />
      <div className="px-[7%] pt-[220px] flex-grow animate-slide-in-fade-in dark:bg-dark">
        {children}
      </div>
      {showScrollElements ? <ScrollBackToTopButton /> : null}
      <Footer />
    </div>
  );
};

export default Page;
