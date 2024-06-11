import { MouseEventHandler } from "react";

export type ButtonType = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
  };
  
  export type LinkTextButtonType = {
    text: string;
    link: string;
  };