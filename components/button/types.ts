import { MouseEventHandler } from "react";

export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
  
export type LinkTextButtonType = {
  text: string;
  link: string;
  external?: boolean;
};