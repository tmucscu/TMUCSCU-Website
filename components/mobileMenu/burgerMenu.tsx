"use client";

import React, { MouseEventHandler } from "react";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const BurgerMenu = ({
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="flex justify-end items-center dark:text-white">
      <div onClick={onClick} className="hover:cursor-pointer">
        {isMenuOpen ? (
          <CloseRoundedIcon style={{ fontSize: 45 }} />
        ) : (
          <MenuRoundedIcon style={{ fontSize: 45 }} />
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
