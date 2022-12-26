import React from "react";
import Logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { MdExitToApp } from "react-icons/md";
import { FiLink } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="mt-16 ">
      <hr />
      <div className="ml-10">
        <div className="grid grid-cols-4 ">
          <div className="flex items-center gap-4 -mt-10">
            <img className="w-10 h-10" src={Logo} alt=""/>
            <span className="font-semibold">Beauty Care</span>
          </div>

          <div className="">
            <span className="text-lg">Contact Us</span>
            <span className="flex items-center space-x-2 text-lg mt-3">
              <HiLocationMarker size={25} />
              <span> 36, East of Kailash</span>
            </span>

            <span className="flex items-center space-x-2 text-lg">
              <BiPhoneCall size={25} />
              <a href="tel:352-306-4415">365-306-4415</a>
            </span>
          </div>

            <div className="">
              <span className="text-lg">Account</span>
              <span className="flex items-center space-x-2 text-lg mt-5">
                <MdExitToApp  size={25}  />
                <a href="">Login</a>

              </span>
            </div>


            <div className="">
              <span className="text-lg">Resources</span>
              <span className="flex items-center space-x-2 text-lg mt-5">
                <FiLink size={25} className="" />
                <p>Safety and Privacy Terms</p>
              </span>
            </div>

        </div>

        <div className="mt-10 mb-8 w-full text-center text-sm">
          <span>Copyright @ 2022 by Beauty Care, Inc.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
