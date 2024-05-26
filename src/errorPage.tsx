import Navbar from "./navbar";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  type error = {
    status?: number;
    statusText?: string;
    message?: string;
  };
  const error = useRouteError() as error;
  console.error(error);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="mx-[7%] h-[50%] items-center grid grid-cols-5">
        <div className="col-span-3">
          <h1>Uh Oh!</h1>
          <h2 className="pb-3">
            Sorry, we can't find the page you're looking for
          </h2>
          <p>{`Error ${error.status}: ${error.statusText || error.message}`}</p>
        </div>
        <div className="col-span-2 flex justify-center">
          <h1 className="text-9xl">?</h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
