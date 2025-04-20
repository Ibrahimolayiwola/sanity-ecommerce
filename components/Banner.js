import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/client";
// import bannerImg from ""C:\Users\FRESH\Downloads\e-commerce_bg.jpg"";

const Banner = ({ heroBanner }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row-reverse max-md:flex-col items-center relative max-w-7xl mx-auto bg-gray-100 rounded-md -mt-1 justify-around gap-4 p-6">
        <div className="flex-1">
          <img
            className="w-auto h-auto"
            src={urlFor(heroBanner.image)}
            alt="iphone"
            width={900}
            height={650}
          />
        </div>
        <div className="flex-1 max-md:px-8">
          <p className="uppercase text-xl text-red-600 font-bold mb-4">
            {heroBanner.midText}
          </p>
          <h1 className="text-slate-800 text-large leading-[large]  font-extrabold mb-3 capitalize font-mono">
            {heroBanner.largeText}
          </h1>
          <p className="text-slate-600 mb-4 font-semibold">
            {heroBanner.smallText}
          </p>
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
