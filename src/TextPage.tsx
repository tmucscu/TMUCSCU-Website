import Page from "./components/page";
import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return <h1 className="pb-[21px]">{children}</h1>;
};

const Subheader = ({ children }: { children: ReactNode }) => {
  return <h2 className="pb-[21px] underline underline-offset-4">{children}</h2>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <p className="pb-[21px]">{children}</p>;
};

const TextPage = ({ children }: { children: ReactNode }) => {
  return (
    <Page>
      <div className="items-center grid grid-cols-5">
        <div className="col-span-3">{children}</div>
        <div className="col-span-2 flex justify-center h-full dark:text-white">
          Image carousel here lol
        </div>
      </div>
    </Page>
  );
};

TextPage.Header = Header;
TextPage.Subheader = Subheader;
TextPage.Body = Body;
export default TextPage;
