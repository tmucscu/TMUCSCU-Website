import { Link, useLocation } from "react-router-dom";
import { RouteTypes, Routes } from "./routes/contants";
import { useEffect, useState } from "react";

import clsx from "clsx";
import logo from "./assets/csculogo.png";

const NavbarTitles = {
  ABOUT: "ABOUT",
  TEAM: "TEAM",
  EVENTS: "EVENTS",
  MEETING_MINUTES: "MEETING MINUTES",
  CONTACT: "CONTACT",
  WIKI: "WIKI",
};

const NavbarTitle = ({ routeKey }: { routeKey: RouteTypes }) => {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center">
      <Link
        className={clsx(
          "hover:text-active",
          Routes[routeKey] === location.pathname && "text-active font-bold"
        )}
        to={Routes[routeKey]}
      >
        <h3>{NavbarTitles[routeKey]}</h3>
      </Link>
    </div>
  );
};

const NavbarLogo = () => {
  return (
    <Link className="flex justify-center items-center" to={"/"}>
      <img className="w-16" src={logo} />
    </Link>
  );
};

const Navbar = () => {
  const [showDropShadow, setShowDropShadow] = useState(false);

  const changeNavbar = () => {
    setShowDropShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 bg-white py-6 mb-[100px] grid grid-cols-7",
        showDropShadow && "drop-shadow-lg"
      )}
    >
      <NavbarTitle routeKey={"ABOUT"} />
      <NavbarTitle routeKey={"TEAM"} />
      <NavbarTitle routeKey={"EVENTS"} />
      <NavbarLogo />
      <NavbarTitle routeKey={"MEETING_MINUTES"} />
      <NavbarTitle routeKey={"CONTACT"} />
      <NavbarTitle routeKey={"WIKI"} />
    </nav>
  );
};

export default Navbar;