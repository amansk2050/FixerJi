import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Fix It Before It's Too Late"],
  });
  return (
    <div className="h-full" id="hero">
      <div className="relative flex justify-center items-center h-20">
        <h1 className="absolute sm:top-[150px] text-center md:top-[200px] font-bold uppercase font-oswald sm:text-3xl md:text-5xl lg:text-6xl text-[#8CE605] tracking-widest z-0">
          <span className="motion-safe:animate-pulse">{text}</span>
          <Cursor />
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-80 flex justify-center items-center"
      >
        <p className="font-Noto text-center tracking-wide font-semibold sm:text-md lg:text-2xl md:text-lg  text-stone-200 sm:pt-[100px] lg:pt-28 absolute md:top-[240px] sm:top-[150px] z-0 sm:px-8  md:p-6 mx-auto ">
          Because audits are way cheaper than hacks or bounties
        </p>
      </motion.div>
      <div className="flex md:flex-row sm:flex-col  justify-around items-center  md:mt-8 2xl:mt-32  md:w-full  lg:px-56 md:px-12  md:mx-auto">
        {/* <button className="absolute top-[450px] text-[#8CE605] border-2 border-[#8CE605] rounded-[38px] px-10 py-5 uppercase font-oswald hover:bg-[#8CE605] hover:text-black transition-all  hover:scale-110 hover:ease-in-out duration-1000">
          Lets Talk
        </button> */}
        <div className="relative group">
          <div className="absolute -inset-0.5 opacity-75 blur rounded-[8px]  sm:px-10  md:px-12  sm:py-5 sm:mb-5 md:py-5 bg-[#8CE605] group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "></div>
          <button className=" relative text-black] bg-[#8CE605]/80  rounded-[8px] sm:px-10  md:px-12  sm:py-5 sm:mb-5 md:py-5   uppercase font-oswald transition-all  hover:scale-110 hover:ease-in-out duration-700">
            Smart Contract Auditing
          </button>
        </div>

        <button className="text-[#8CE605] border-2 border-[#8CE605] rounded-[8px] sm:px-10 md:px-12  sm:py-5 sm:mb-5  md:py-5  uppercase font-oswald transition-all  hover:scale-105 hover:ease-in-out duration-700">
          Web/Mobile Apps Auditing
        </button>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// const Hero = () => {
//   const [text] = useTypewriter({
//     words: ["Fix It Before"],
//   });
//   const [text1] = useTypewriter({
//     words: ["It's Too Late"],
//   });
//   return (
//     <div className="h-full">
//       <div className="relative flex justify-center items-center h-20">
//         <h1 className="absolute sm:top-[150px]  md:top-[200px] font-bold uppercase font-oswald md:text-5xl lg:text-6xl text-[#8CE605] tracking-widest z-0">
//           <div className="motion-safe:animate-pulse transition-all duration-200">
//             {text}
//           </div>
//           <Cursor />
//         </h1>
//         <br />
//         <h2>
//           <div className="motion-safe:animate-pulse transition-all duration-1000">
//             {text1}
//           </div>
//           <Cursor />
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Hero;
