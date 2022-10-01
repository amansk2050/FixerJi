// import React from "react";
// import styles from "../styles/Client.module.css";
// import Image from "next/image";

// const Client = () => {
//   return (
//     <div>
//       <div className="flex flex-col justify-center md:pt-[100px] sm:pt-[100px] items-center">
//         <div className="text-[#8CE605] my-12 font-poppins font-bold text-4xl">
//           Client
//         </div>

//         <div>
//           <div className={styles.container}>
//             <div className={styles.card}>
//               <h3 className={styles.title}>
//                 I am text block. Click edit button to change this text. Lorem
//                 ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//                 tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//               </h3>
//               <div5 className={styles.bar}>
//                 <div className={styles.emptybar}></div>
//                 <div className={styles.filledbar}></div>
//               </div5>
//               <div className={styles.circle}>
//                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
//                   <circle className={styles.stroke} cx="60" cy="60" r="50" />
//                 </svg>
//               </div>
//             </div>

//             <div className={styles.card}>
//               <h3 className={styles.title}>Card 2</h3>
//               <div className={styles.bar}>
//                 <div className={styles.emptybar}></div>
//                 <div className={styles.filledbar}></div>
//               </div>
//               <div className={styles.circle}>
//                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
//                   <circle className={styles.stroke} cx="60" cy="60" r="50" />
//                 </svg>
//               </div>
//             </div>
//             <div className={styles.card}>
//               <h3 className={styles.title}>Card 3</h3>
//               <div className={styles.bar}>
//                 <div className={styles.emptybar}></div>
//                 <div className={styles.filledbar}></div>
//               </div>
//               <div className={styles.circle}>
//                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
//                   <circle className={styles.stroke} cx="60" cy="60" r="50" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Client;

import React from "react";
import styles from "../styles/Client.module.css";
import Image from "next/image";

const Client = () => {
  return (
    <div>
      <div className="flex flex-col justify-center md:pt-[100px] sm:pt-[100px] sm:w-10/12 mx-auto items-center">
        <div className="text-[#8CE605] my-12 font-poppins font-bold text-4xl">
          Client
        </div>

        <div>
          <div className=" flex md:h-[500px] md:w-[900px] ">
            <div
              className={`flex md:h-[380px] sm:h-[300px] md:w-[700px] sm:w-[300px] bg-[#17141d] rounded-lg relative left-0 ${styles.card}`}
            >
              <h3 className={styles.title}>
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </h3>
              <div5 className={styles.bar}>
                <div className={styles.emptybar}></div>
                <div className={styles.filledbar}></div>
              </div5>
              <div className={styles.circle}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className={styles.stroke} cx="60" cy="60" r="50" />
                </svg>
              </div>
            </div>

            <div
              // className={`flex md:h-[380px] md:w-[700px] bg-[#17141d] rounded-lg relative left-0 ${styles.card}`}
              className={`flex md:h-[380px] sm:h-[300px] md:w-[700px] sm:w-[300px] bg-[#17141d] rounded-lg relative left-0 ${styles.card}`}
            >
              <h3 className={styles.title}>Card 2</h3>
              <div className={styles.bar}>
                <div className={styles.emptybar}></div>
                <div className={styles.filledbar}></div>
              </div>
              <div className={styles.circle}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className={styles.stroke} cx="60" cy="60" r="50" />
                </svg>
              </div>
            </div>
            <div
              className={`flex md:h-[380px] sm:h-[300px] md:w-[700px] sm:w-[300px] bg-[#17141d] rounded-lg relative left-0 ${styles.card}`}
            >
              <h3 className={styles.title}>Card 3</h3>
              <div className={styles.bar}>
                <div className={styles.emptybar}></div>
                <div className={styles.filledbar}></div>
              </div>
              <div className={styles.circle}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className={styles.stroke} cx="60" cy="60" r="50" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
