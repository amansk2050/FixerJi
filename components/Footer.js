import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className=" bg-black/40">
      <div className="flex sm:flex-col md:flex-row text-white justify-around items-center pt-32">
        <div className="flex sm:pr-2">
          <div className="sm:px-1 md:px-3">
            <FacebookIcon />
          </div>
          <div className="sm:px-1 md:px-3">
            <TwitterIcon />
          </div>
          <div className="sm:px-1 md:px-3">
            <LinkedInIcon />
          </div>
        </div>
        <div className="sm: pt-3 flex flex-col text-center font-semibold">
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
        </div>
        <div className="text-center flex flex-col font-semibold">
          <div>Email:</div>
          <div>mailfixerji@gmail.com</div>
        </div>
      </div>
      <div className="h-1  border-b pb-8"></div>
      <div className=" border-b pb-1"></div>
      <div className="h-10 flex justify-center items-center">
        <div className="text-white">
          Copyright © 2022 Fixerji. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
