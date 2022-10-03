// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// const Hero = () => {
//   const [text] = useTypewriter({
//     words: ["Fix It Before It's Too Late"],
//   });
//   return (
//     <div className="relative flex justify-center items-center h-full">
//       <h1 className="absolute top-[150px] font-bold uppercase font-oswald md:text-5xl text-[#8CE605] tracking-widest">
//         <span className="motion-safe:animate-pulse">{text}</span>
//         <Cursor />
//       </h1>

//       <p className="font-Noto tracking-wide font-semibold md:text-lg sm:text-sm text-stone-200 pt-[50px] absolute top-[250px] z-0 ">
//         Because audits are way cheaper than hacks or bounties
//       </p>

//       <button className="absolute top-[450px] text-[#8CE605] border-2 border-[#8CE605] rounded-[38px] px-10 py-5 uppercase font-oswald hover:bg-[#8CE605] hover:text-black transition-all  hover:scale-110 hover:ease-in-out duration-1000">
//         Lets Talk
//       </button>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Fix It Before It's Too Late"],
  });
  return (
    <div className="h-full">
      <div className="relative flex justify-center items-center h-20">
        <h1 className="absolute sm:top-[150px]  md:top-[200px] font-bold uppercase font-oswald md:text-5xl lg:text-6xl text-[#8CE605] tracking-widest z-0">
          <span className="motion-safe:animate-pulse">{text}</span>
          <Cursor />
        </h1>
      </div>
      <div className="h-80 flex justify-center items-center">
        <p className="font-Noto text-center tracking-wide font-semibold sm:text-md lg:text-2xl md:text-lg  text-stone-200 sm:pt-[100px] lg:pt-28 absolute md:top-[240px] sm:top-[150px] z-0 sm:px-8  md:p-6 mx-auto ">
          Because audits are way cheaper than hacks or bounties
        </p>
      </div>
      <div className="flex md:flex-row sm:flex-col  justify-around items-center  md:mt-8 2xl:mt-32  md:w-full  lg:px-56 md:px-12  md:mx-auto">
        {/* <button className="absolute top-[450px] text-[#8CE605] border-2 border-[#8CE605] rounded-[38px] px-10 py-5 uppercase font-oswald hover:bg-[#8CE605] hover:text-black transition-all  hover:scale-110 hover:ease-in-out duration-1000">
          Lets Talk
        </button> */}
        <button className="text-[#8CE605] border-2 border-[#8CE605] rounded-[8px] sm:px-10 md:px-12  sm:py-5 sm:mb-5  md:py-5  uppercase font-oswald hover:bg-[#8CE605] hover:text-black transition-all  hover:scale-110 hover:ease-in-out duration-1000">
          Smart Contract Auditing
        </button>
        <button className="text-[#8CE605] border-2 border-[#8CE605] rounded-[8px] sm:px-10  md:px-12  sm:py-5 sm:mb-5 md:py-5   uppercase font-oswald hover:bg-[#8CE605] hover:text-black transition-all  hover:scale-110 hover:ease-in-out duration-1000">
          Web/Mobile Apps Auditing
        </button>
      </div>
    </div>
  );
};

export default Hero;
