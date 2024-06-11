"use client";

import React, { useState } from "react";
import { RouteTypes, Routes } from "../constants";

import BurgerMenu from "./burgerMenu";
import Link from "next/link";
import { NavbarTitles } from "../navbar/navbar";
import clsx from "clsx";
import logo from "../../public/csculogo.png";
import { usePathname } from "next/navigation";

const MenuTitle = ({ routeKey }: { routeKey: RouteTypes }) => {
  const pathname = usePathname();

  return (
    <div className="my-1">
      <Link href={Routes[routeKey]}>
        <h3
          className={clsx(
            "hover:text-active dark:hover:text-activeDark",
            Routes[routeKey] === pathname &&
              "text-active font-bold dark:text-activeDark"
          )}
        >
          {NavbarTitles[routeKey]}
        </h3>
      </Link>
    </div>
  );
};

const MobileMenu = ({ showDropShadow }: { showDropShadow: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={clsx(
        "fixed w-full px-12 top-0 bg-white py-6 z-10 dark:bg-dark",
        (showDropShadow || isMenuOpen) && "drop-shadow-lg"
      )}
    >
      <div className="grid grid-cols-2">
        <div className="flex">
          <Link className="flex" href={"/"}>
            <img className="h-16" src={logo.src} />
          </Link>
        </div>
        <BurgerMenu
          isMenuOpen={isMenuOpen}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <div
        className={clsx(
          "pt-10 items-start drop-shadow-lg",
          !isMenuOpen && "hidden"
        )}
      >
        <MenuTitle routeKey={"ABOUT"} />
        <MenuTitle routeKey={"TEAM"} />
        <MenuTitle routeKey={"EVENTS"} />
        <MenuTitle routeKey={"CONTACT"} />
        <MenuTitle routeKey={"MEETING_MINUTES"} />
        <MenuTitle routeKey={"WIKI"} />
      </div>
    </div>
  );
};

export default MobileMenu;
