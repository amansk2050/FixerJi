import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex  justify-center  md:pt-[50px] sm:pt-[100px] pt-10 items-center">
        <div className="text-[#8CE605] mb-8 font-poppins font-bold text-4xl">
          Contact Us
        </div>
      </div>
      <div className="flex justify-center items-center text-[#ffffff]  border-2 border-[#8CE605] mx-auto py-10 rounded-lg">
        <div>
          <form className="w-full">
            <div>
              <div>
                <label className="mr-5" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-transparent border-b-2"
                  type="text"
                  id="name"
                  placeholder="Name"
                />

                <label className="mr-5 pl-5" htmlFor="name">
                  Email
                </label>
                <input
                  className="bg-transparent border-b-2"
                  type="text"
                  id="name"
                  placeholder="email"
                />
              </div>
              <div className="mt-5">
                <label className="mr-5" htmlFor="name">
                  Phone
                </label>
                <input
                  className="bg-transparent border-b-2"
                  type="text"
                  id="name"
                  placeholder="How can we help you "
                />
              </div>
              <div className="mt-12">
                <input
                  className="bg-transparent border-b-2 w-full"
                  type="text"
                  id="name"
                  placeholder="How can we help you "
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
