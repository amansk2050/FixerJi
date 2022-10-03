// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import Image from "next/image";

// const Work = () => {
//   return (
//     <div className="flex flex-col justify-center pt-10 items-center">
//       <div className="text-[#8CE605] mb-8 font-poppins font-bold text-4xl">
//         What We Do
//       </div>
//       <div className="border-2 border-[#8CE605] px-10 py-10 rounded-lg mb-6 hover:bg-[#8CE605] transition duration-700">
//         <div className="flex">
//           <div className="md:w-[700px] pr-4 ">
//             <img
//               src="http://fixerji.theuptraining.com/wp-content/uploads/2022/06/smart-contracts-1.png"
//               alt="hello"
//             />
//           </div>
//           <div className="flex justify-center items-center ">
//             <div className="text-slate-500 font-Noto font-semibold hover:text-black">
//               A smart contract is a computer program or a transaction protocol
//               that is intended to automatically execute, control, or document
//               legally relevant events and actions according to the terms of a
//               contract or an agreement. We are a team of Blockchain developers
//               and auditors who are building the future with web3 and also
//               auditing it to minimise risk to funds, keep attackers away and
//               save on gas fees with optimised code.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="border-2 border-[#8CE605] px-10 py-10 rounded-lg mb-6 hover:bg-[#8CE605] transition duration-700">
//         <div className="flex">
//           <div className="md:w-[700px] pr-4 ">
//             <img
//               src="http://fixerji.theuptraining.com/wp-content/uploads/2022/06/smart-contracts-1.png"
//               alt="hello"
//             />
//           </div>
//           <div className="flex justify-center items-center ">
//             <div className="text-slate-500 font-Noto font-semibold hover:text-black">
//               A smart contract is a computer program or a transaction protocol
//               that is intended to automatically execute, control, or document
//               legally relevant events and actions according to the terms of a
//               contract or an agreement. We are a team of Blockchain developers
//               and auditors who are building the future with web3 and also
//               auditing it to minimise risk to funds, keep attackers away and
//               save on gas fees with optimised code.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";

const Work = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  const changeColor1 = () => {
    setIsHover1(true);
  };
  const changeColorToWhite1 = () => {
    setIsHover1(false);
  };
  const changeColor2 = () => {
    setIsHover2(true);
  };
  const changeColorToWhite2 = () => {
    setIsHover2(false);
  };

  return (
    <div className="flex flex-col justify-center pt-10 items-center">
      <div className="text-[#8CE605] mb-8 font-poppins font-bold sm:text-2xl md:text-4xl uppercase tracking-wider">
        What We Do
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          onMouseEnter={changeColor1}
          onMouseLeave={changeColorToWhite1}
          className={`border-2 border-[#8CE605] sm:px-5 md:px-10 md:py-10 sm:py-5 rounded-lg mb-6 hover:bg-[#8CE605]/80 transition duration-700 `}
        >
          <div className="flex md:flex-row sm:flex-col sm:justify-center md:justify-self-auto sm:items-center lg:w-[900px] md:w-[600px] sm:w-[300px]">
            <div className="md:w-[600px] sm:w-[100px] sm:pb-2 md:pr-4 ">
              <img
                src="http://fixerji.theuptraining.com/wp-content/uploads/2022/06/smart-contracts-1.png"
                alt="hello"
              />
            </div>
            <div className="flex justify-center items-center ">
              <div
                className={`sm:text-sm md:text-md font-Noto font-semibold ${
                  isHover1 ? "text-black" : "text-white"
                }`}
              >
                A smart contract is a computer program or a transaction protocol
                that is intended to automatically execute, control, or document
                legally relevant events and actions according to the terms of a
                contract or an agreement. We are a team of Blockchain developers
                and auditors who are building the future with web3 and also
                auditing it to minimise risk to funds, keep attackers away and
                save on gas fees with optimised code.
              </div>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={changeColor2}
          onMouseLeave={changeColorToWhite2}
          className="border-2 border-[#8CE605] sm:px-5 md:px-10 md:py-10 sm:py-5 rounded-lg mb-6 hover:bg-[#8CE605]/80 transition duration-700"
        >
          <div className="flex md:flex-row sm:flex-col sm:justify-center md:justify-self-auto sm:items-center lg:w-[900px] md:w-[600px] sm:w-[300px]">
            <div className="md:w-[500px] sm:w-[100px] sm:pb-2  md:pr-4 ">
              <img
                src="http://fixerji.theuptraining.com/wp-content/uploads/2022/06/application-1.png"
                alt="hello"
              />
            </div>
            <div className="flex justify-center items-center ">
              <div
                className={`sm:text-sm md:text-md font-Noto font-semibold ${
                  isHover2 ? "text-black" : "text-white"
                }`}
              >
                We will thoroughly audit your application for vulnerabilities in
                code, UI/UX issues, API auditing, Stress, and performance
                auditing. We have a team of experienced Users, Developers, and
                Auditors who can audit your whole business process not just apps
                to find areas of improvement so you can grow like never before.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
