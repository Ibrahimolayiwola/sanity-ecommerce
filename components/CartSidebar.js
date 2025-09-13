import React from "react";
import { useStateContext } from "../context/StateContext";
import { IoIosArrowBack } from "react-icons/io";
import { urlFor } from "../lib/client";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import Link from "next/link";

const CartSidebar = () => {
  const { showCart, setShowCart, totalQuantities, cartItems, removeFromCart } =
    useStateContext();
  const urlExtractor = (images) => images?.map((image) => urlFor(image).url());
  return (
    <div
      className={`fixed min-h-screen bg-white w-[25rem] transition-all duration-300 ease-out z-20 right-0 shadow-lg overflow-y-scroll ${showCart ? "translate-x-0" : "translate-x-[300%]"}`}
    >
      <div className="flex gap-4 items-center p-4">
        <button
          className="text-lg font-semibold"
          type="button"
          onClick={() => {
            setShowCart(false);
          }}
        >
          <IoIosArrowBack />
        </button>
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <p className="text-red-600 font-semibold">
          ({totalQuantities} {totalQuantities > 1 ? "items" : "item"})
        </p>
      </div>
      <div>
        {cartItems.length >= 1 ? (
          cartItems.map((item) => (
            <div key={item._id} className="flex justify-between p-4">
              <div className="flex-1 px-8">
                <div className="bg-gray-100 p-2 rounded-md">
                  <Image
                    width={80}
                    height={80}
                    src={urlExtractor(item.image)[0]}
                    alt={item.name}
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <div className="border border-gray-300 flex items-center justify-center w-[110px]">
                  <button className="flex-1 " onClick="">
                    -
                  </button>
                  <p className="flex-1 text-center border-x border-gray-300 text-xs">
                    1
                  </p>
                  <button className="flex-1" onClick="">
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center flex-1">
                <p className="text-red-600 font-semibold text-sm">{item.price}</p>
                <button type="button" onClick={() => removeFromCart(item)}>
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pt-6 gap-4">
            <div>
              <RiShoppingBag4Line size={200} />
            </div>
            <h3 className="text-xl font-semibold text-black text-center">
              Your shopping bag is empty
            </h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => {
                  setShowCart(false);
                }}
                className="text-white bg-red-600 font-semibold px-6 py-2 rounded-md hover:scale-105 transition-transform duration-200 ease-out"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
