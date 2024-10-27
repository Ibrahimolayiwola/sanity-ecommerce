"use client";
import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const product = ({ product: { image, name, slug, price, description } }) => {
  return (
    <div className=" rounded-md p-4 h-[350px] w-[250px] bg-gray-100 relative">
      <Link href={`/product/${slug}`}>
        <div className="group">
          <div>
            <img src={urlFor(image && image[0])} width={250} height={280} />
          </div>
          {/* <p>{name}</p> */}
          <p className="text-xs">{description}</p>
          <p className="text-sm text-left font-semibold ">#{price}</p>

          <button className="uppercase text-sm text-slate-100 font-medium mx-auto bg-red-600 py-2 rounded-md px-4 w-[90%] bottom-3 right-4 hidden group-hover:block absolute">
            add to cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default product;
