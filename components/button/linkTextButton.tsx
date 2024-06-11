import Link from "next/link";
import { LinkTextButtonType } from "./types";

const LinkTextButton = ({ text, link }: LinkTextButtonType) => {
  return (
    <Link className="underline text-active dark:text-activeDark" href={link}>
      {text}
    </Link>
  );
};

export default LinkTextButton;
