"use client";

import "../styles/globals.css";

import Page from "../components/pages/page";

const Error = () => {
  type error = {
    status?: number;
    statusText?: string;
    message?: string;
  };

  return (
    <Page>
      <div className="h-[50%] items-center grid grid-cols-5">
        <div className="col-span-3">
          <h1>Uh Oh!</h1>
          <h2 className="pb-3">
            Sorry, we can't find the page you're looking for
          </h2>
          <p>Error 404</p>
        </div>
        <div className="col-span-2 flex justify-center">
          <h1 className="text-9xl">?</h1>
        </div>
      </div>
    </Page>
  );
};

export default Error;
