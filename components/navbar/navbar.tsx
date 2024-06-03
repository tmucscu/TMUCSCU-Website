import "../../styles/globals.css";

import { RouteTypes, Routes } from "../constants";

import Link from "next/link";
import WidthContext from "../../app/context/WidthContext";
import clsx from "clsx";
import logo from "../../public/csculogo.png";
import { useContext } from "react";
import { usePathname } from "next/navigation";

export const NavbarTitles = {
  ABOUT: "ABOUT",
  TEAM: "TEAM",
  EVENTS: "EVENTS",
  MEETING_MINUTES: "MEETING MINUTES",
  CONTACT: "CONTACT",
  WIKI: "WIKI",
};

const NavbarTitle = ({ routeKey }: { routeKey: RouteTypes }) => {
  const getNavbarTitle = (routeKey: RouteTypes) => {
    if (routeKey === "MEETING_MINUTES") {
      return width < 768 || width > 1040 ? NavbarTitles[routeKey] : "MEETINGS";
    }
    return NavbarTitles[routeKey];
  };

  const width = useContext(WidthContext);

  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center ">
      <Link href={Routes[routeKey]}>
        <h3
          className={clsx(
            "hover:text-active dark:hover:text-activeDark",
            Routes[routeKey] === pathname &&
              "text-active font-bold dark:text-activeDark"
          )}
        >
          {getNavbarTitle(routeKey)}
        </h3>
      </Link>
    </div>
  );
};

const NavbarLogo = () => {
  return (
    <Link className="flex justify-center items-center" href={"/"}>
      <img className="w-16" src={logo.src} />
    </Link>
  );
};

const Navbar = ({ showDropShadow = false }: { showDropShadow: boolean }) => {
  return (
    <nav
      className={clsx(
        "fixed w-full top-0 bg-white py-6 grid-cols-7 z-10 dark:bg-dark hidden md:grid",
        showDropShadow && "drop-shadow-lg"
      )}
    >
      <NavbarTitle routeKey={"ABOUT"} />
      <NavbarTitle routeKey={"TEAM"} />
      <NavbarTitle routeKey={"EVENTS"} />
      <NavbarLogo />
      <NavbarTitle routeKey={"CONTACT"} />
      <NavbarTitle routeKey={"MEETING_MINUTES"} />
      <NavbarTitle routeKey={"WIKI"} />
    </nav>
  );
};

export default Navbar;
