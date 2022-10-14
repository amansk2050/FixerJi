import React, { useState } from "react";

import MenuItems from "./MenuItems";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState(false);
  // const [isHover, setIsHover] = useState(true);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="sm:fixed h-16 z-50 bg-black w-full text-white flex justify-around p-4 items-center">
      <div className="text-2xl font-bold text-center md:relative sm:absolute sm:top-0.5 sm:left-2">
        <Image
          alt="Next.js logo"
          src="/static/fixerji.png"
          width={165}
          height={56}
        />
      </div>

      <nav>
        <div className="sm:absolute right-8 md:hidden top-4 scale-100">
          <MenuIcon onClick={showMenu} className=" cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase">
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              What we do
            </Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link
              activeClass="active"
              to="client"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Clientele
            </Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff] z-50">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
