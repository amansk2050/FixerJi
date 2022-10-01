import React from "react";

const About = () => {
  return (
    <>
      <div className="flex  justify-center  md:pt-[50px] sm:pt-[100px] pt-10 items-center">
        <div className="text-[#8CE605] mb-8 font-poppins font-bold text-4xl">
          About
        </div>
      </div>
      <div className="flex justify-evenly md:pt-[50px] sm:pt-[100px] pt-10 items-center">
        <div className="w-96 border-2 border-[#8CE605] px-10 py-10 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[50px] h-[50px] border border-[#ffffff]  rounded-full mb-6">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-face-skincare-flaticons-lineal-color-flat-icons.png"
                alt="what"
              />
            </div>
            <div className="text-[#ffffff] mb-8 font-poppins font-bold text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </div>
            <div className="text-[#8CE605] mt-8 font-Noto font-bold text-xl">
              Designer
            </div>
            <div className="text-[#8CE605] font-Noto font-bold text-xl">
              David Milan
            </div>
          </div>
        </div>
        <div className="w-96 border-2 border-[#8CE605] px-10 py-10 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[50px] h-[50px] border border-[#ffffff] rounded-full  mb-6">
              <img
                src="https://img.icons8.com/external-flat-icons-maxicons/344/external-face-human-body-flat-flat-icons-maxicons-2.png"
                alt="what"
              />
            </div>
            <div className="text-[#ffffff] mb-8 font-poppins font-bold text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </div>
            <div className="text-[#8CE605] mt-8 font-Noto font-bold text-xl">
              Designer
            </div>
            <div className="text-[#8CE605] font-Noto font-bold text-xl">
              David Milan
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
