// import React, { useState } from "react";
// import Link from "next/link";
// import MenuItems from "./MenuItems";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   const [active, setActive] = useState(false);

//   const showMenu = () => {
//     setActive(!active);
//   };

//   return (
//     <div className="sm:fixed md:absolute z-50 bg-black w-full text-white flex justify-around p-4 items-center">
//       <div className="text-2xl font-bold text-center">
//         <h1>
//           <span>Fixerji</span>
//         </h1>
//       </div>

//       <nav>
//         <div className="sm:absolute right-6 md:hidden top-4 scale-100">
//           <MenuIcon onClick={showMenu} className=" cursor-pointer" />
//         </div>
//         <ul className="hidden md:flex gap-8 p-6 uppercase">
//           <li className="border-b-2 border-black hover:border-white">
//             <Link href="#">Home</Link>
//           </li>
//           <li className="border-b-2 hover:border-b-[#000000]">
//             <Link href="#">What we do</Link>
//           </li>
//           <li>
//             <Link href="#">Clientele</Link>
//           </li>
//           <li>
//             <Link href="#">About</Link>
//           </li>
//           <li>
//             <Link href="#">Contact</Link>
//           </li>
//         </ul>
//         <MenuItems showMenu={showMenu} active={active} />
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Link from "next/link";
import MenuItems from "./MenuItems";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isHover, setIsHover] = useState(true);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="sm:fixed md:absolute z-50 bg-black w-full text-white flex justify-around p-4 items-center">
      <div className="text-2xl font-bold text-center">
        <h1>
          <span>Fixerji</span>
        </h1>
      </div>

      <nav>
        <div className="sm:absolute right-6 md:hidden top-4 scale-100">
          <MenuIcon onClick={showMenu} className=" cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase">
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link href="#">Home</Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link href="#">What we do</Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link href="#">Clientele</Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff]">
            <Link href="#">About</Link>
          </li>
          <li className="border-b-2 border-black hover:border-b-[#ffffff] z-50">
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
