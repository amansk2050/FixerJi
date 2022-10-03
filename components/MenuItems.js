import React from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? " translate-x-0 text-black flex flex-col items-end fixed  right-0 top-[-10px] backdrop-blur-sm bg-[#8CE605] justify-start p-8 md:hidden gap-4 z-10 h-80 w-56 transition-all duration-700 "
          : " flex flex-col opacity-0 translate-x-96 transition-all duration-700 absolute top-[10px] h-80 w-56 p-8 items-end gap-4 z-10  "
      }
    >
      <CloseIcon onClick={showMenu} className="cursor-pointer" />
      <li>
        <Link href="#">Home</Link>
      </li>
      <li>
        <Link href="#">What we do</Link>
      </li>
      <li>
        <Link href="#">Clientele</Link>
      </li>
      <li>
        <Link href="#">About</Link>
      </li>
      <li>
        <Link href="#">Contact</Link>
      </li>
    </ul>
  );
};

export default MenuItems;
