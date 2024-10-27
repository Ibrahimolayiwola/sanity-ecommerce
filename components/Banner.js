import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/client";
// import bannerImg from ""C:\Users\FRESH\Downloads\e-commerce_bg.jpg"";

const Banner = ({ heroBanner }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row-reverse max-sm:flex-col items-center  relative w-[95%] mx-auto bg-gray-100 rounded-md -mt-1 justify-center py-6">
        <div className="">
          <img
            className="w-auto h-auto"
            src={urlFor(heroBanner.image)}
            alt="iphone"
            width={900}
            height={650}
          />
        </div>
        <div className="pl-12 flex-1">
          <p className="uppercase text-xl text-red-600 font-bold mb-4">
            {heroBanner.midText}
          </p>
          <h1 className="text-slate-800 text-large leading-[57px]  font-extrabold mb-3 capitalize font-mono">
            {heroBanner.largeText} 
          </h1>
          <p className="text-slate-600 mb-4 font-semibold">{heroBanner.smallText}</p>
          <button className="bg-red-600 text-slate-100 uppercase font-medium px-6 py-3 my-2 rounded-md">
            {heroBanner.buttonText}
          </button>
        </div>
        {/* <div>
          <h3>Best Solo Air</h3>
          <h2 className="text-6xl text-slate-800 font-bold ">Summer Sale</h2>
          <h1 className="text-[140px] font-extrabold text-white uppercase">
            Fine
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
