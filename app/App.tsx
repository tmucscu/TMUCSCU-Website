"use client";

import "../styles/globals.css";

import Page from "../components/pages/page";
import logo from "../public/csculogo.png";

const Home = () => {
  return (
    <Page>
      <div className="h-[50%] items-center md:grid md:grid-cols-5">
        <div className="col-span-3">
          <h2>Toronto Metropolitan University's</h2>
          <h1>Computer Science Course Union</h1>
          <p className="pt-2">
            For over 20 years, the CSCU has been the organization representing
            all the undergraduate Computer Science students at TMU.
          </p>
        </div>
        <div className="hidden md:flex col-span-2 justify-center">
          <img className="w-[250px]" src={logo.src} />
        </div>
      </div>
    </Page>
  );
};

export default Home;
