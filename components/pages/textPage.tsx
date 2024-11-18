"use client";

import { ReactNode, useContext, useEffect, useRef, useState } from "react";

import ImageCarousel from "../carousel/imageCarousel";
import Page from "./page";
import { WidthContext } from "../../app/context/WidthContext.tsx";

const Header = ({ children }: { children: ReactNode }) => {
  return <h1 className="pb-[21px]">{children}</h1>;
};

const Subheader = ({ children }: { children: ReactNode }) => {
  return <h2 className="pb-[21px] underline underline-offset-4">{children}</h2>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <p className="pb-[21px]">{children}</p>;
};

const TextPage = ({ children }: { children: ReactNode }) => {
  const width = useContext(WidthContext);
  const childrenContainerRef = useRef<HTMLDivElement>(null);
  const [childrenHeight, setChildrenHeight] = useState(0);

  // Gets height of left side ref to know how many images to render
  useEffect(() => {
    if (childrenContainerRef.current) {
      setChildrenHeight(childrenContainerRef.current.clientHeight);
    }
  }, [children, width]);

  const numSlides = Math.max(Math.floor(childrenHeight / 350), 1);
  return (
    <Page>
      <div className="grid grid-cols-5">
        <div
          ref={childrenContainerRef}
          className="col-span-5 xl:col-span-3 h-fit"
        >
          {children}
        </div>
        <div className="xl:col-span-2 flex justify-end">
          <ImageCarousel numSlides={numSlides} />
        </div>
      </div>
    </Page>
  );
};

TextPage.Header = Header;
TextPage.Subheader = Subheader;
TextPage.Body = Body;
export default TextPage;
