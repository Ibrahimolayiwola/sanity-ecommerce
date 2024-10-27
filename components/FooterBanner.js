import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/client";
// import bannerImg from "public/assets/banner/banner_3.jpg";

const Banner = ({ heroBanner }) => {
  return (
    <div className="relative bg-red-600">
      <div className="flex flex-row-reverse items-center justify-around">
        <div>
          <img
            src={urlFor(heroBanner.image)}
            alt="iphone"
            width={450}
            height={350}
          />
        </div>
        <div>
          <p className="uppercase text-red-600 text-xl font-bold mb-2">
            {heroBanner.midText}
          </p>
          <h1 className="text-slate-800 text-4xl font-bold mb-1 capitalize">
            {heroBanner.largeText}
          </h1>
          <p className="text-slate-600 mb-2">{heroBanner.smallText}</p>
          <button className="bg-red-600 text-slate-100 uppercase font-medium px-6 py-3 my-2">
            {heroBanner.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
