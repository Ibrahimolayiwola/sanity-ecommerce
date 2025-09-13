"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Product = ({ product }) => {
  const { image, name, slug, price, description } = product;
  const { addToCart } = useStateContext();
  return (
    <div className=" rounded-lg bg-gray-100 h-[400px] w-[290px] border border-slate-200 shadow-lg relative">
      <Link href={`/product-details/${slug.current}`}>
        <div className="group">
          <div className="w-full">
            <Image
              src={urlFor(image.length && image[0]).url()}
              alt={name}
              width={280}
              height={280}
              className="aspect-square w-auto h-auto object-cover"
              priority
            />
          </div>
          <div className="w-full px-4">
            <p>{name}</p>
            <p className="text-xs">{description}</p>
            <p className="t  font-bold text-red-600 text-lg">#{price}</p>
          </div>
        </div>
      </Link>
      <button
        className="uppercase text-sm text-slate-100  mx-auto bg-red-600 py-2 rounded-md px-4 w-[90%] bottom-3 right-4 absolute"
        onClick={() => addToCart(product, 1)}
      >
        add to cart
      </button>
    </div>
  );
};

export default Product;
