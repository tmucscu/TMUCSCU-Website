import { LinkTextButtonType } from "./types";

const LinkTextButton = ({
  text,
  link,
  external = false,
}: LinkTextButtonType) => {
  return (
    <a
      className="underline text-active dark:text-activeDark"
      target={external ? "_blank" : ""}
      href={link}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default LinkTextButton;
