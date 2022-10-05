import React from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? " text-black flex flex-col items-end fixed  right-0 top-[-10px] backdrop-blur-sm bg-[#ffffff]/20 justify-start p-8 md:hidden gap-4 z-10 h-screen w-full transition-all duration-1000"
          : " flex flex-col opacity-0 translate-x-96 transition-all duration-700 absolute top-[10px] h-80 w-56 p-8 items-end gap-4 z-10  "
      }
    >
      <div className="translate-x-0 flex flex-col items-end fixed right-[-15px] top-[-2px] justify-start pt-8 pb-24 pl-28 pr-10 md:hidden gap-4 font-semibold  z-30  bg-[#8CE605]  transition-all duration-200 ">
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
      </div>
    </ul>
  );
};

export default MenuItems;
