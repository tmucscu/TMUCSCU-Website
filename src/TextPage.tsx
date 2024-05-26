import Navbar from "./navbar";
import { ReactNode } from "react";

const TextPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mx-[7%] items-center grid grid-cols-5">
        <div className="col-span-3">{children}</div>
        <div className="col-span-2 flex justify-center h-full">
          Image carousel here lol
        </div>
      </div>
    </div>
  );
};

export default TextPage;
