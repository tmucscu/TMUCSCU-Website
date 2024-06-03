"use client";

import { ReactNode, useContext, useEffect, useState } from "react";

import Footer from "../footer/footer";
import MobileMenu from "../mobileMenu/mobileMenu";
import Navbar from "../navbar/navbar";
import ScrollBackToTopButton from "../button/scrollBackToTopButton";
import WidthContext from "../../app/context/WidthContext";

const Page = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(useContext(WidthContext));
  // shows navbar dropshadow and scroll back to top button
  const [showScrollElements, setShowScrollElements] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setWidth(window.innerWidth);
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const onUserScroll = () => {
      setShowScrollElements(window.scrollY > 20);
    };

    window.addEventListener("scroll", onUserScroll);
    return () => window.removeEventListener("scroll", onUserScroll);
  }, []);

  const showNavbar = width > 768;
  return (
    <WidthContext.Provider value={width}>
      <div className="h-screen flex flex-col dark:bg-dark">
        {showNavbar ? (
          <Navbar showDropShadow={showScrollElements} />
        ) : (
          <MobileMenu showDropShadow={showScrollElements} />
        )}

        <div className="px-[7%] pt-[150px] lg:pt-[220px] flex-grow animate-slide-in-fade-in dark:bg-dark">
          {children}
        </div>
        {showScrollElements ? <ScrollBackToTopButton /> : null}
        <Footer />
      </div>
    </WidthContext.Provider>
  );
};

export default Page;
