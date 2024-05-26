import { RouteTypes, Routes } from "./routes/contants";

import { Link } from "react-router-dom";
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
  return (
    <Link className="flex justify-center items-center" to={Routes[routeKey]}>
      <h3>{NavbarTitles[routeKey]}</h3>
    </Link>
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
  return (
    <nav className="pt-6 pb-[100px] grid grid-cols-7">
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
