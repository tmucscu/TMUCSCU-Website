"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";

import { doesWindowExist } from "../utils";

const WidthContext = createContext<number>(
  doesWindowExist ? window.innerWidth : 1920
);

const WidthProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(
    doesWindowExist ? window.innerWidth : 1920
  );
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

  return (
    <WidthContext.Provider value={width}>{children}</WidthContext.Provider>
  );
};

export { WidthProvider, WidthContext };
