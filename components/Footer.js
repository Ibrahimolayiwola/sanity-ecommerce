import React from "react";
import Image from "next/image";
import { PiVan } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { BiLogoMastercard } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-neutral-800 mt-10 p-10">
      <div className="flex items-center justify-center gap-8 flex-wrap min-[1160px]:justify-between ">
        <div className="flex items-end gap-4 justify-center text-neutral-400">
          <div className="">
            <span className="text-2xl">
              <PiVan size={50} className="" />
            </span>
          </div>
          <div>
            <p className="text-slate-100 font-semibold">
              Free Shipping Order $60
            </p>
            <p className="">Delivery moves so quickly</p>
          </div>
        </div>
        <div className="flex items-end gap-4 justify-center text-neutral-400">
          <div>
            <BsBoxSeam size={50} />
          </div>
          <div>
            <p className="text-slate-100 font-semibold">
              Easy and fast returns
            </p>
            <p>30 Days free return policy</p>
          </div>
        </div>
        <div className="flex items-end gap-4 justify-center text-neutral-400">
          <div>
            <MdOutlineSupportAgent size={50} />
          </div>
          <div>
            <p className="text-slate-100 font-semibold">
              24/7 customer supports
            </p>
            <p>Online help by our agents</p>
          </div>
        </div>
        <div className="flex items-end gap-4 justify-center text-neutral-400">
          <div>
            <CiCreditCard1 size={50} />
          </div>
          <div>
            <p className="text-slate-100 font-semibold">100% secure payments</p>
            <p>Paypal/Mastercard/Visa</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-24 border-y  border-y-neutral-700 py-16 my-4 flex-wrap lg:flex-row lg:justify-between ">
        <div className="flex items-center justify-center gap-16 flex-1 max-sm:flex-wrap lg:justify-start">
          <div className="space-y-2 text-neutral-100">
            <h2 className="text-neutral-400 uppercase font-semibold cursor-pointer">
              Company
            </h2>
            <p className="cursor-pointer hover:text-red-600">About Us</p>
            <p className="cursor-pointer hover:text-red-600">Careers</p>
            <p className="cursor-pointer hover:text-red-600">Affiliate</p>
            <p className="cursor-pointer hover:text-red-600">Blogs</p>
          </div>
          <div className="text-neutral-100 space-y-2">
            <h2 className="text-neutral-400 uppercase font-semibold cursor-pointer">
              Shop
            </h2>
            <p className="cursor-pointer hover:text-red-600">Appliances</p>
            <p className="cursor-pointer hover:text-red-600">Gadgets</p>
            <p className="cursor-pointer hover:text-red-600">Wearables</p>
            <p className="cursor-pointer hover:text-red-600">Shop All</p>
          </div>
          <div className="text-neutral-100 space-y-2">
            <h2 className="text-neutral-400 uppercase font-semibold cursor-pointer">
              Support
            </h2>
            <p className="cursor-pointer hover:text-red-600">Contact Us</p>
            <p className="cursor-pointer hover:text-red-600">Returns</p>
            <p className="cursor-pointer hover:text-red-600">
              Frequently Asked Questions
            </p>
            <p className="cursor-pointer hover:text-red-600">Privacy</p>
          </div>
        </div>
        <div className="border-r h-[180px] border-r-neutral-700 max-xl:hidden "></div>
        <div className="space-y-4">
          <h2 className="text-neutral-400 font-semibold uppercase">
            Subscribe
          </h2>
          <p className="text-neutral-100 font-semibold">
            Enter your email address to get
            <span className="underline">20% off your first order</span>
          </p>
          <div className="flex w-full items-center justify-center">
            <input
              type="email"
              placeholder="Your E-mail Address"
              className="h-10 px-4 flex-1 border border-slate-400 focus:outline-0"
            />
            <button className="uppercase font-semibold text-neutral-100 bg-red-500 h-10 px-2 text-sm">
              Send
            </button>
          </div>
          <div className="flex space-x-4 text-neutral-400  items-center">
            <RiFacebookFill className="hover:text-red-600" />
            <FaXTwitter className="hover:text-red-600" />
            <BsInstagram className="hover:text-red-600" />
            <BsYoutube className="hover:text-red-600" />
            <BsInstagram className="hover:text-red-600" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16 items-center flex-wrap min-[1088px]:justify-between">
        <div className="flex items-center gap-6 justify-center max-sm:flex-wrap">
          <div>
            <Image
              className=""
              src="/assets/logo/logo_2.png"
              width={150}
              height={60}
              alt="logo"
            />
          </div>
          <div className="text-neutral-400">
            <p>
              <span className="text-neutral-100 font-bold">Phone:</span>{" "}
              +2348183674222 Email: Gadgetnest050@gmail.com
            </p>
            <p>
              <span className="text-neutral-100 font-semibold">Hours:</span>{" "}
              Monday - Friday 8:30AM - 4:45PM EST
            </p>
            <p>
              Copyright @2024 Gadgetnest. Created by{" "}
              <span className="text-neutral-100 font-semibold">
                Highbee_Codes
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-14 h-8 p-2 bg-white flex items-center justify-center">
            <p className="font-bold text-green-400 lowercase font-serif">
              Sage
            </p>
          </div>
          <div className="w-14 h-8 p-2 bg-white flex items-center justify-center">
            <RiVisaLine className="text-blue-600 bg-white" size={30} />
          </div>
          <div className="w-14 h-8 p-2 bg-white flex items-center justify-center">
            <BiLogoMastercard className="text-red-600 bg-white" size={30} />
          </div>
          <div className="w-14 h-8 p-2 bg-white flex items-center justify-center">
            <SiAmazonpay className="text-blue-600 bg-white" size={30} />
          </div>
          <div className="w-14 h-8 p-2 bg-white flex items-center justify-center">
            <p className="font-bold text-purple-700 lowercase font-mono">
              Skrill
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
