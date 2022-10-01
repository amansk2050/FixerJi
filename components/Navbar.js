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
//     <div className="fixed  bg-white/10 w-full text-white flex justify-around p-4 items-center">
//       <div className="text-2xl font-bold text-center">
//         <h1>
//           <span>Fixerji</span>
//         </h1>
//       </div>

//       <nav>
//         <div className="absolute right-6 md:hidden top-4 scale-100">
//           <MenuIcon onClick={showMenu} className=" cursor-pointer" />
//         </div>
//         <ul className="hidden md:flex gap-8 p-6 uppercase">
//           <li>
//             <Link href="#">Home</Link>
//           </li>
//           <li>
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

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed z-101 bg-black w-full text-white flex justify-around p-4 items-center">
      <div className="text-2xl font-bold text-center">
        <h1>
          <span>Fixerji</span>
        </h1>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-4 scale-100">
          <MenuIcon onClick={showMenu} className=" cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase">
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
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
