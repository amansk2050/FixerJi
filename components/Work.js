import React, { useState } from "react";
import Image from "next/image";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { motion } from "framer-motion";

const Work = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [isShow1, setIsShow1] = useState(true);

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

  const showDiv = () => {
    setIsShow(!isShow);
  };
  const showDiv1 = () => {
    setIsShow1(!isShow1);
  };

  return (
    <div
      className="flex flex-col justify-center md:pt-[150px] sm:pt-[120px] items-center"
      id="work"
    >
      <div className="text-[#8CE605] mb-8 font-poppins font-bold sm:text-2xl md:text-4xl uppercase tracking-wider">
        What We Do
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.div
          onClick={showDiv}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.25 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          onMouseEnter={changeColor1}
          onMouseLeave={changeColorToWhite1}
          className="border-2  bg-black/40 border-[#8CE605] sm:px-5 md:px-10 md:py-10 sm:py-5 rounded-lg mb-6 hover:bg-[#8CE605]/50 transition duration-700"
        >
          <div className="flex md:flex-row sm:flex-col sm:justify-center md:justify-self-auto sm:items-center   md:items-start lg:w-[900px] md:w-[600px] sm:w-[300px]">
            <div className="md:w-[700px] sm:w-[100px] sm:pb-2  md:pr-4 ">
              <Image
                alt="Next.js logo"
                src="/static/asset1.png"
                width={120}
                height={120}
              />
            </div>
            <div className="flex justify-center items-center ">
              <div
                className={`sm:text-sm md:text-md font-Noto font-semibold ${
                  isHover1 ? "text-white" : "text-white"
                }`}
              >
                <h1 className="text-xl">Smart Contract Auditing</h1>
                {isShow ? (
                  <>
                    <span>
                      A smart contract is a computer program or a transaction
                      protocol that is intended to automatically execute,
                      control, or document legally relevant events and actions
                      according to the terms of a contract or an agreement. We
                      are a team of Blockchain developers and auditors who are
                      building the future with web3 and also auditing it to
                      minimise risk to funds, keep attackers away and save on
                      gas fees with optimised code.
                    </span>
                  </>
                ) : (
                  <div>
                    A smart contract is a computer program or a transaction
                    protocol that is intended to automatically execute, control,
                    or document legally relevant events and actions according to
                    the terms of a contract or an agreement. We are a team of
                    Blockchain developers and auditors who are building the
                    future with web3 and also auditing it to minimise risk to
                    funds, keep attackers away and save on gas fees with
                    optimised code.
                    <div>
                      <br />
                      <h1 className="text-xl">Iteration 1 - Automated Tools</h1>
                      <li className="text-md">
                        We check your contracts through various automated tools
                        to point out some obvious and common vulnerabilities.
                        The tools we use include Slither, MythX and some not so
                        common tools. Based on the bugs we find, we not only
                        mention those but also suggest you a solution.
                      </li>
                      <br />
                      <h1 className="text-xl">Iteration 2 - Manual checks</h1>
                      <p className="text-md">
                        We check these following common vulnerabilities in your
                        contract, because these are very common, most of the
                        people miss them and it is very easy to exploit such
                        contracts.
                      </p>
                      <br />
                      <li className="text-md">1.Re-entrancy possibility.</li>
                      <li className="text-md">
                        2.Check – effects – interaction pattern should be
                        followed.
                      </li>
                      <li className="text-md">
                        3.Interface signature is matching with external
                        contract.
                      </li>
                      <li className="text-md">4.Naming conventions.</li>
                      <li className="text-md">
                        5.Access control for admin functions.
                      </li>
                      <li className="text-md">
                        6.Access specifiers are properly used.
                      </li>
                      <li className="text-md">7.Re-usability of code.</li>
                      <li className="text-md">8.Use of arrays vs mappings.</li>
                      <li className="text-md">9.Uninitialized variables.</li>
                      <li className="text-md">10.Uninitialized contracts.</li>
                      <li className="text-md">
                        11.No unused code and variables.
                      </li>
                      <li className="text-md">12.Frontrunning.</li>
                      <li className="text-md">13.DOS attack.</li>
                      <li className="text-md">14.Insecure randomness.</li>
                      <li className="text-md">
                        15.Solidity compiler version issues.
                      </li>
                      <li className="text-md">16.Use of private variables.</li>
                      <li className="text-md">17.Security of on-chain data.</li>
                      <li className="text-md">
                        18.Compilation, deployment and optimisation issues.
                      </li>
                      <li className="text-md">
                        19.Saving on gas wherever possible.
                      </li>
                      <li className="text-md">
                        20.Transaction out of gas / Block gas limits check.
                      </li>
                      <li className="text-md">
                        21.Require statements with meaningful error messages.
                      </li>
                      <li className="text-md">
                        22.Transfer vs call vs send transactions.
                      </li>
                      <li className="text-md">23.No locked fund.</li>
                      <li className="text-md">24.Signature replay.</li>
                      <li className="text-md">
                        25.Block timestamp manipulation.
                      </li>
                      <br />
                      <h1 className="text-xl">
                        Iteration 3 - Intention vs action
                      </h1>
                      <li className="text-md">
                        In this iteration, we read your contracts line by line
                        and understand each what the contract does, how it does
                        so that we know the meaning of each and every
                        instruction, statement, variable and function. After
                        going through the contract we study the purpose of the
                        project and check whether both of these are aligned or
                        not. If we find an architectural level issue or a
                        suggestion which can make your codebase better, we will
                        include that suggestion as well in the report.
                      </li>
                      <br />
                      <h1 className="text-xl">
                        Iteration 4 - Localnet deployment and testing with
                        automated test scripts
                      </h1>
                      <li className="text-md">
                        Although we understand that the code will do what is
                        written but still it might perform differently after
                        deployment, hence we write test scripts to test every
                        branch and statement.
                      </li>
                      <br />
                      <h1 className="text-xl">
                        Iteration 5 - Public network deployment and user testing
                      </h1>
                      <li className="text-md">
                        The last and the final step is to deploy the contracts
                        on the public network (mainnet or testnet) and test each
                        and every functionality before the final sign off. At
                        the end, we will give you a detailed report with issues
                        and possible solutions (we do not and will not release
                        that report publicly without your consent). You may fix
                        them and release the code or have another round of
                        auditing with us.
                      </li>
                    </div>
                  </div>
                )}
              </div>
              <div className="z-40 ml-3 text-white w-10 h-10 scale-150">
                {isShow ? (
                  <div>
                    <ExpandCircleDownIcon />
                  </div>
                ) : (
                  <div onClick={changeColor1} className="rotate-180">
                    <ExpandCircleDownIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          onClick={showDiv1}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.25 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          onMouseEnter={changeColor2}
          onMouseLeave={changeColorToWhite2}
          className="border-2  bg-black/40 border-[#8CE605] sm:px-5 md:px-10 md:py-10 sm:py-5 rounded-lg mb-6 hover:bg-[#8CE605]/50 transition duration-700"
        >
          <div className="flex md:flex-row sm:flex-col sm:justify-center md:justify-self-auto sm:items-center   md:items-start lg:w-[900px] md:w-[600px] sm:w-[300px]">
            <div className="md:w-[500px] sm:w-[100px] sm:pb-2  md:pr-4 ">
              <Image
                alt="Next.js logo"
                src="/static/asset2.png"
                width={120}
                height={120}
              />
            </div>
            <div className="flex justify-center items-center ">
              <div
                className={`sm:text-sm md:text-md font-Noto font-semibold ${
                  isHover2 ? "text-white" : "text-white"
                }`}
              >
                <h1 className="text-xl">Web/Mobile Apps Auditing</h1>
                {isShow1 ? (
                  <>
                    <span>
                      We will thoroughly audit your application for
                      vulnerabilities in code, UI/UX issues, API auditing,
                      Stress,and performance auditing. We have a team of
                      experienced Users,Developers, and Auditors who can audit
                      your whole business process not just apps to find areas of
                      improvement so you can grow like never before.
                    </span>
                  </>
                ) : (
                  <div>
                    We will thoroughly audit your application for
                    vulnerabilities in code, UI/UX issues, API auditing,
                    Stress,and performance auditing. We have a team of
                    experienced Users,Developers, and Auditors who can audit
                    your whole business process not just apps to find areas of
                    improvement so you can grow like never before.
                    <div>
                      <br />

                      <li className="text-md">UI/UX auditing</li>
                      <li className="text-md">API auditing</li>
                      <li className="text-md">Stress audit</li>
                      <li className="text-md">Load audit</li>
                      <li className="text-md">DOS attacks</li>
                      <li className="text-md">SQL injection</li>
                      <li className="text-md">App compatibility</li>
                      <li className="text-md">Cloud comparisons</li>
                      <li className="text-md">Feature auditing</li>
                    </div>
                  </div>
                )}
              </div>
              <div className="z-40 ml-3 text-white w-10 h-10 scale-150">
                {isShow1 ? (
                  <div>
                    <ExpandCircleDownIcon />
                  </div>
                ) : (
                  <div onClick={changeColor2} className="rotate-180">
                    <ExpandCircleDownIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;

// import React, { useState } from "react";
// import Image from "next/image";
// import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
// import { motion } from "framer-motion";

// const Work = () => {
//   const [isHover1, setIsHover1] = useState(false);
//   const [isHover2, setIsHover2] = useState(false);
//   const [isShow, setIsShow] = useState(true);
//   const [isShow1, setIsShow1] = useState(true);

//   const changeColor1 = () => {
//     setIsHover1(true);
//   };
//   const changeColorToWhite1 = () => {
//     setIsHover1(false);
//   };
//   const changeColor2 = () => {
//     setIsHover2(true);
//   };
//   const changeColorToWhite2 = () => {
//     setIsHover2(false);
//   };

//   const showDiv = () => {
//     setIsShow(!isShow);
//   };
//   const showDiv1 = () => {
//     setIsShow1(!isShow1);
//   };

//   return (
//     <div
//       className="flex flex-col justify-center md:pt-[150px] sm:pt-[120px] items-center"
//       id="work"
//     >
//       <div className="text-[#8CE605] mb-8 font-poppins font-bold sm:text-2xl md:text-4xl uppercase tracking-wider">
//         What We Do
//       </div>
//       <div className="flex flex-col justify-center items-center">
//         <motion.div
//           onClick={showDiv}
//           initial={{ y: 200, opacity: 0 }}
//           transition={{ duration: 0.25 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           onMouseEnter={changeColor1}
//           onMouseLeave={changeColorToWhite1}
//           className="border-2  bg-black/40 border-[#8CE605] sm:px-5 md:px-10 md:py-10 sm:py-5 rounded-lg mb-6 hover:bg-[#8CE605]/50 transition duration-700"
//         >
//           <div className="flex md:flex-row sm:flex-col sm:justify-center md:justify-self-auto sm:items-center   md:items-start lg:w-[900px] md:w-[600px] sm:w-[300px]">
//             <div className="md:w-[700px] sm:w-[100px] sm:pb-2  md:pr-4 ">
//               <Image
//                 alt="Next.js logo"
//                 src="/static/asset2.png"
//                 width={600}
//                 height={600}
//               />
//             </div>
//             <div className="flex justify-center items-center ">
//               <div
//                 className={`sm:text-sm md:text-md font-Noto font-semibold ${
//                   isHover1 ? "text-white" : "text-white"
//                 }`}
//               >
//                 <h1 className="text-xl">Smart Contract Auditing</h1>
//                 {isShow ? (
//                   <>
//                     <span>
//                       A smart contract is a computer program or a transaction
//                       protocol that is intended to automatically execute,
//                       control, or document legally relevant events and actions
//                       according to the terms of a contract or an agreement. We
//                       are a team of Blockchain developers and auditors who are
//                       building the future with web3 and also auditing it to
//                       minimise risk to funds, keep attackers away and save on
//                       gas fees with optimised code.
//                     </span>
//                   </>
//                 ) : (
//                   <div>
//                     A smart contract is a computer program or a transaction
//                     protocol that is intended to automatically execute, control,
//                     or document legally relevant events and actions according to
//                     the terms of a contract or an agreement. We are a team of
//                     Blockchain developers and auditors who are building the
//                     future with web3 and also auditing it to minimise risk to
//                     funds, keep attackers away and save on gas fees with
//                     optimised code.
//                     <div>
//                       <br />
//                       <h1 className="text-xl">Iteration 1 - Automated Tools</h1>
//                       <li className="text-md">
//                         We check your contracts through various automated tools
//                         to point out some obvious and common vulnerabilities.
//                         The tools we use include Slither, MythX and some not so
//                         common tools. Based on the bugs we find, we not only
//                         mention those but also suggest you a solution.
//                       </li>
//                       <br />
//                       <h1 className="text-xl">Iteration 2 - Manual checks</h1>
//                       <p className="text-md">
//                         We check these following common vulnerabilities in your
//                         contract, because these are very common, most of the
//                         people miss them and it is very easy to exploit such
//                         contracts.
//                       </p>
//                       <br />
//                       <li className="text-md">1.Re-entrancy possibility.</li>
//                       <li className="text-md">
//                         2.Check – effects – interaction pattern should be
//                         followed.
//                       </li>
//                       <li className="text-md">
//                         3.Interface signature is matching with external
//                         contract.
//                       </li>
//                       <li className="text-md">4.Naming conventions.</li>
//                       <li className="text-md">
//                         5.Access control for admin functions.
//                       </li>
//                       <li className="text-md">
//                         6.Access specifiers are properly used.
//                       </li>
//                       <li className="text-md">7.Re-usability of code.</li>
//                       <li className="text-md">8.Use of arrays vs mappings.</li>
//                       <li className="text-md">9.Uninitialized variables.</li>
//                       <li className="text-md">10.Uninitialized contracts.</li>
//                       <li className="text-md">
//                         11.No unused code and variables.
//                       </li>
//                       <li className="text-md">12.Frontrunning.</li>
//                       <li className="text-md">13.DOS attack.</li>
//                       <li className="text-md">14.Insecure randomness.</li>
//                       <li className="text-md">
//                         15.Solidity compiler version issues.
//                       </li>
//                       <li className="text-md">16.Use of private variables.</li>
//                       <li className="text-md">17.Security of on-chain data.</li>
//                       <li className="text-md">
//                         18.Compilation, deployment and optimisation issues.
//                       </li>
//                       <li className="text-md">
//                         19.Saving on gas wherever possible.
//                       </li>
//                       <li className="text-md">
//                         20.Transaction out of gas / Block gas limits check.
//                       </li>
//                       <li className="text-md">
//                         21.Require statements with meaningful error messages.
//                       </li>
//                       <li className="text-md">
//                         22.Transfer vs call vs send transactions.
//                       </li>
//                       <li className="text-md">23.No locked fund.</li>
//                       <li className="text-md">24.Signature replay.</li>
//                       <li className="text-md">
//                         25.Block timestamp manipulation.
//                       </li>
//                       <br />
//                       <h1 className="text-xl">
//                         Iteration 3 - Intention vs action
//                       </h1>
//                       <li className="text-md">
//                         In this iteration, we read your contracts line by line
//                         and understand each what the contract does, how it does
//                         so that we know the meaning of each and every
//                         instruction, statement, variable and function. After
//                         going through the contract we study the purpose of the
//                         project and check whether both of these are aligned or
//                         not. If we find an architectural level issue or a
//                         suggestion which can make your codebase better, we will
//                         include that suggestion as well in the report.
//                       </li>
//                       <br />
//                       <h1 className="text-xl">
//                         Iteration 4 - Localnet deployment and testing with
//                         automated test scripts
//                       </h1>
//                       <li className="text-md">
//                         Although we understand that the code will do what is
//                         written but still it might perform differently after
//                         deployment, hence we write test scripts to test every
//                         branch and statement.
//                       </li>
//                       <br />
//                       <h1 className="text-xl">
//                         Iteration 5 - Public network deployment and user testing
//                       </h1>
//                       <li className="text-md">
//                         The last and the final step is to deploy the contracts
//                         on the public network (mainnet or testnet) and test each
//                         and every functionality before the final sign off. At
//                         the end, we will give you a detailed report with issues
//                         and possible solutions (we do not and will not release
//                         that report publicly without your consent). You may fix
//                         them and release the code or have another round of
//                         auditing with us.
//                       </li>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="z-40 ml-3 text-white w-10 h-10 scale-150">
//                 {isShow ? (
//                   <div>
//                     <ExpandCircleDownIcon />
//                   </div>
//                 ) : (
//                   <div onClick={changeColor1} className="rotate-180">
//                     <ExpandCircleDownIcon />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           onClick={showDiv1}
//           initial={{ y: 200, opacity: 0 }}
//           transition={{ duration: 0.25 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           onMouseEnter={changeColor2}
//           onMouseLeave={changeColorToWhite2}
//           className="border-2  bg-black/40 border-[#8CE605] sm:px-5 md:px-10 md:py-10 sm:py-5 rounded-lg mb-6 hover:bg-[#8CE605]/50 transition duration-700"
//         >
//           <div className="flex md:flex-row sm:flex-col sm:justify-center md:justify-self-auto sm:items-center   md:items-start lg:w-[900px] md:w-[600px] sm:w-[300px]">
//             <div className="md:w-[500px] sm:w-[100px] sm:pb-2  md:pr-4 ">
//               <Image
//                 alt="Next.js logo"
//                 src="/static/asset2.png"
//                 width={600}
//                 height={600}
//               />
//             </div>
//             <div className="flex justify-center items-center ">
//               <div
//                 className={`sm:text-sm md:text-md font-Noto font-semibold ${
//                   isHover2 ? "text-white" : "text-white"
//                 }`}
//               >
//                 <h1 className="text-xl">Web/Mobile Apps Auditing</h1>
//                 {isShow1 ? (
//                   <>
//                     <span>
//                       We will thoroughly audit your application for
//                       vulnerabilities in code, UI/UX issues, API auditing,
//                       Stress,and performance auditing. We have a team of
//                       experienced Users,Developers, and Auditors who can audit
//                       your whole business process not just apps to find areas of
//                       improvement so you can grow like never before.
//                     </span>
//                   </>
//                 ) : (
//                   <div>
//                     We will thoroughly audit your application for
//                     vulnerabilities in code, UI/UX issues, API auditing,
//                     Stress,and performance auditing. We have a team of
//                     experienced Users,Developers, and Auditors who can audit
//                     your whole business process not just apps to find areas of
//                     improvement so you can grow like never before.
//                     <div>
//                       <br />

//                       <li className="text-md">UI/UX auditing</li>
//                       <li className="text-md">API auditing</li>
//                       <li className="text-md">Stress audit</li>
//                       <li className="text-md">Load audit</li>
//                       <li className="text-md">DOS attacks</li>
//                       <li className="text-md">SQL injection</li>
//                       <li className="text-md">App compatibility</li>
//                       <li className="text-md">Cloud comparisons</li>
//                       <li className="text-md">Feature auditing</li>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="z-40 ml-3 text-white w-10 h-10 scale-150">
//                 {isShow1 ? (
//                   <div>
//                     <ExpandCircleDownIcon />
//                   </div>
//                 ) : (
//                   <div onClick={changeColor2} className="rotate-180">
//                     <ExpandCircleDownIcon />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Work;
