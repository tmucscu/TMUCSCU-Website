import { ReactNode, useEffect, useState } from "react";

import Navbar from "../navbar";

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
    <div className="h-screen">
      <Navbar showDropShadow={showScrollElements} />
      <div className="mx-[7%]">{children}</div>
    </div>
  );
};

export default Page;
