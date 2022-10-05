import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center md:pt-[150px] sm:pt-[120px]  items-center">
        <div className="text-[#8CE605] mb-8 font-poppins font-bold sm:text-xl md:text-4xl uppercase  tracking-wider">
          Contact
        </div>
      </div>
      <div className="flex w-full justify-center items-center text-[#ffffff]  mx-auto lg:py-6 rounded-lg">
        <form action="#">
          <div className="flex md:flex-row sm:flex-col items-center md:justify-around ">
            <div className=" bg-neutral-900 md:pr-20 sm:pr-32 lg:pr-40 md:pl-4 py-4  sm:mx-6 md:mx-3 sm:my-2 rounded-lg">
              <label htmlFor="name"></label>
              <input
                className="bg-transparent ml-2 outline-0 "
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className=" bg-neutral-900 md:pr-20  sm:pr-32 lg:pr-40 md:pl-4 py-4 mx-3  rounded-lg">
              <label htmlFor="email"></label>
              <input
                className="bg-transparent ml-2 outline-0"
                id="name"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="flex  md:flex-row  sm:flex-col items-center justify-around mt-3">
            <div className=" bg-neutral-900 md:pr-20  sm:pr-32 lg:pr-40 md:pl-4 py-4 mx-3 sm:my-2 rounded-lg">
              <label htmlFor="phone"></label>
              <input
                className="bg-transparent ml-2 outline-0 "
                id="name"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className=" bg-neutral-900 md:pr-20  sm:pr-32 lg:pr-40 md:pl-4 py-4 mx-3 rounded-lg">
              <label htmlFor="subject"></label>
              <input
                className="bg-transparent ml-2 outline-0"
                id="name"
                type="text"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around mt-3">
            <div className=" bg-neutral-900 md:pr-[384px]  sm:pr-[120px] sm:pl-3 lg:pr-[545px] md:pl-[28px]   md:pb-36 md:pt-6 mx-3 sm:pt-4 sm:pb-28  rounded-lg">
              <label htmlFor="message"></label>
              <input
                className="bg-transparent outline-0"
                id="name"
                type="text"
                placeholder="Write Message"
              />
            </div>
            <div className="mt-6">
              <button className="w-60 mb-5  text-black font-semibold bg-[#f3de2c] border border-[#8CE605] rounded-lg uppercase py-3 hover:bg-[#000000]/10 hover:text-white transition-colors duration-500">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
        {/* <div>
          <Image
            alt="Next.js logo"
            src="/static/contact.gif"
            width={900}
            height={600}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
