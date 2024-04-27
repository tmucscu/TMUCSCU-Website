import { ReactNode, useEffect, useState } from "react";

import Footer from "./footer";
import Navbar from "../navbar";
import ScrollBackToTopButton from "./button/scrollBackToTopButton";

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
    <div className="h-screen flex flex-col">
      <Navbar showDropShadow={showScrollElements} />
      <div className="mx-[7%] mt-[220px] flex-grow animate-slide-in-fade-in">
        {children}
      </div>
      {showScrollElements ? <ScrollBackToTopButton /> : null}
      <Footer />
    </div>
  );
};

export default Page;
