import Page from "./components/page";
import { ReactNode } from "react";

const TextPage = ({ children }: { children: ReactNode }) => {
  return (
    <Page>
      <div className="items-center grid grid-cols-5">
        <div className="col-span-3">{children}</div>
        <div className="col-span-2 flex justify-center h-full">
          Image carousel here lol
        </div>
      </div>
    </Page>
  );
};

export default TextPage;
