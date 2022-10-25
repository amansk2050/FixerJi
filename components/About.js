import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  const changeColor1 = () => {
    setIsHover1(!isHover1);
  };
  const changeColor2 = () => {
    setIsHover2(!isHover2);
  };
  return (
    <div id="about">
      <div className="flex justify-center md:pt-[150px] sm:pt-[100px] pt-10 items-center">
        <div className="text-[#8CE605] mb-8 font-poppins font-bold sm:text-2xl md:text-4xl uppercase  tracking-wider">
          About Us
        </div>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex sm:flex-col md:flex-row justify-evenly md:pt-[50px] sm:pt-5 items-center md:px-6 lg:px-24"
      >
        <div
          onMouseEnter={changeColor1}
          onMouseLeave={changeColor1}
          className={`md:w-96 border-2 border-[#8CE605] sm:px-4 md:px-10 py-10 sm:mb-4 rounded-lg ${
            isHover1 ? "bg-[#8ce605]/90" : ""
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="w-[50px] h-[50px] border border-[#ffffff] rounded-full mb-6">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-face-skincare-flaticons-lineal-color-flat-icons.png"
                alt="what"
              />
            </div>
            <div
              className={`text-[#ffffff] md:mb-8 font-poppins font-bold text-sm ${
                isHover1 ? "text-black" : "text-white"
              }`}
            >
              I just hate when my transaction does not go through even when the
              internet is working, I hate limitations and control. That’s how I
              got into Web 3.0 where there is no central authority and no one
              can stop you whether you are sending $1 or $10 million or at 3PM
              or 3AM. But this isn’t just about money this is about Freedom from
              Censorship.
            </div>

            <div
              className={`text-[#8CE605] mt-8 font-Noto font-bold text-xl ${
                isHover1 ? "text-black" : "text-[#8CE605]"
              }`}
            >
              Smart Contracts Auditor
            </div>
            <div
              className={`text-[#8CE605] font-Noto font-bold text-xl ${
                isHover1 ? "text-black" : "text-[#8CE605]"
              }`}
            >
              Alice
            </div>
          </div>
        </div>
        <div
          onMouseEnter={changeColor2}
          onMouseLeave={changeColor2}
          className={`md:w-96 border-2 border-[#8CE605] sm:px-4 md:px-10 py-9 sm:mb-4 rounded-lg ${
            isHover2 ? "bg-[#8ce605]/90" : ""
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="w-[50px] h-[50px] border border-[#ffffff] rounded-full  mb-6">
              <img
                src="https://img.icons8.com/external-flat-icons-maxicons/344/external-face-human-body-flat-flat-icons-maxicons-2.png"
                alt="what"
              />
            </div>
            <div
              className={`text-[#ffffff] md:mb-20 font-poppins font-bold text-sm ${
                isHover2 ? "text-black" : "text-white"
              }`}
            >
              I was fascinated by Web 3.0 because of crypto prices in 2021, I
              would have even sold my house to invest in crypto if I had one.
              However I didn’t so I loaned the money and went all in and since
              then I don’t ever see myself going back.
            </div>
            <div
              className={`text-[#8CE605] mt-8 font-Noto font-bold text-xl ${
                isHover2 ? "text-black" : "text-[#8CE605]"
              }`}
            >
              Smart Contracts Auditor
            </div>
            <div
              className={`text-[#8CE605] font-Noto font-bold text-xl ${
                isHover2 ? "text-black" : "text-[#8CE605]"
              }`}
            >
              Bob
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
