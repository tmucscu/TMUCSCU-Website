"use client";

import { ReactNode, useContext, useEffect, useState } from "react";

import Footer from "../footer/footer";
import MobileMenu from "../mobileMenu/mobileMenu";
import Navbar from "../navbar/navbar";
import ScrollBackToTopButton from "../button/scrollBackToTopButton";
import { WidthContext } from "../../app/context/WidthContext.tsx";

const Page = ({ children }: { children: ReactNode }) => {
  const width = useContext(WidthContext);
  const [showNavBar, setShowNavBar] = useState(width > 768);
  // shows navbar dropshadow and scroll back to top button
  const [showScrollElements, setShowScrollElements] = useState(false);

  useEffect(() => {
    const onUserScroll = () => {
      setShowScrollElements(window.scrollY > 20);
    };

    window.addEventListener("scroll", onUserScroll);
    return () => window.removeEventListener("scroll", onUserScroll);
  }, []);

  useEffect(() => {
    setShowNavBar(width > 768);
  }, [width]);

  return (
    <div className="h-screen flex flex-col dark:bg-dark">
      {showNavBar ? (
        <Navbar showDropShadow={showScrollElements} />
      ) : (
        <MobileMenu showDropShadow={showScrollElements} />
      )}

      <div className="px-[7%] pt-[150px] lg:pt-[220px] flex-grow animate-slide-in-fade-in dark:bg-dark">
        {children}
      </div>
      {showScrollElements ? <ScrollBackToTopButton /> : null}
      <div className="dark:bg-dark">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
