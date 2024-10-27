import React from "react";
import Banner from "../components/Banner.js";
import FooterBanner from "../components/FooterBanner.js";
import Product from "../components/Product.js";
import { client } from "../lib/client";

const Home = ({ products, banners }) => {
  const serializedProducts = products.map((product) => ({
    ...product,
    slug: product.slug?.current || "",
    image: product.image?.map((img) => img.asset?._ref || ""),
  }));

  const serializedBanners = banners.map((banner) => ({
    ...banner,
    image: banner.image.asset?._ref || "",
  }));

  return (
    <>
      <Banner heroBanner={serializedBanners.length && serializedBanners[0]} />
      <section className="my-16">
        {/* <h1 className="text-2xl font-bold text-red-600 text-center">
          Best Seller Products
        </h1>
        <p></p> */}
        {/* <ul className="flex gap-6 justify-center items-center flex-wrap w-[90%] mx-auto my-10">
          {serializedProducts?.map((product) => (
            <li key={product._id}>
              <Product product={product} />
            </li>
          ))}
        </ul> */}
        <ul className="flex gap-8 justify-center items-center flex-wrap">
          <li className="bg-gray-100 rounded-lg w-[270px] py-4">
            <h2 className="text-xl font-bold text-slate-800 text-center">
              Computer & PC
            </h2>
            <div className="inline-block overflow-hidden">
              <img
                src="/assets/productCategory/pc.png"
                alt="television"
                className="w-64 h-44 transition-transform hover:scale-110 duration-300 hover:shadow-lg "
              />
            </div>
            <p className="text-red-600 uppercase mt-3 font-bold text-right mr-4 text-sm">
              5 products
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg w-[270px] py-4">
            <h2 className="text-xl font-bold text-slate-800 text-center">
              Smart phones
            </h2>
            <div className="inline-block overflow-hidden">
              <img
                src="/assets/productCategory/smartphone_2.png"
                alt="television"
                className="w-64 h-44 transition-transform hover:scale-110 duration-300 hover:shadow-lg"
              />
            </div>
            <p className="text-red-600 uppercase mt-3 font-bold text-right mr-4 text-sm">
              10 products
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg w-[270px] py-4">
            <h2 className="text-xl font-bold text-slate-800 text-center">
              Tv & Monitors
            </h2>
            <div className="inline-block overflow-hidden">
              <img
                src="/assets/productCategory/smartTv.png"
                alt="television"
                className="w-64 h-44 transition-transform hover:scale-110 duration-300 hover:shadow-lg"
              />
            </div>
            <p className="text-red-600 uppercase mt-3 font-bold text-right mr-4 text-sm">
              15 products
            </p>
          </li>
          <li className="bg-gray-100 rounded-md w-[270px] py-4">
            <h2 className="text-xl font-bold text-slate-800 text-center">
              Wearable items
            </h2>
            <div className="inline-block overflow-hidden">
              <img
                src="/assets/productCategory/smartwatch.png"
                alt="television"
                className="w-64 h-44 transition-transform hover:scale-110 duration-300 hover:shadow-lg"
              />
            </div>
            <p className="text-red-600 uppercase mt-3 font-bold text-right mr-4 text-sm">
              7 products
            </p>
          </li>
        </ul>
      </section>
      <section>
        <div className="flex gap-16 px-10 flex-wrap max-md:flex-col items-center justify-center">
          <div className=" inline-block rounded-lg overflow-hidden flex-1">
            <img
              src="/assets/productCategory/satisfiedcustomer.jpg"
              alt="customer"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-slate-800 text-4xl font-mono font-bold">
              Experience Hassle-Free Shopping for the Latest Gadgets
            </h2>
            <div className="border-b-4 border-b-red-600 w-36 mt-4 mb-6"></div>
            <p className="text-slate-600">
              We prioritize your shopping experience. Enjoy a seamless journey
              as you explore our carefully curated selection of the latest
              gadgets and electronics. With fast shipping, easy returns, and
              dedicated customer support, we are here to ensure you find exactly
              what you need—all while feeling valued and satisfied.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};

export default Home;
