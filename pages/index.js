import React from "react";
import Banner from "../components/Banner.js";
import FooterBanner from "../components/FooterBanner.js";
import Product from "../components/Product.js";
import { client, urlFor } from "../lib/client";
import Slider from "../components/Slider.js";
import Link from "next/link.js";

const Home = ({  banners, categories }) => {

  return (
    <>
      <Banner heroBanner={banners.length && banners[0]} />
      <section className="my-16">
        <ul className="flex gap-8 justify-center items-center flex-wrap">
          {categories && categories.map(({ image, name, amount, slug }, index) => (
            <li key={index} className="bg-gray-100 rounded-lg w-[270px] py-4">
              <Link href={`/product/${slug.current}`}>
                <div className="cursor-pointer">
                  <h2 className="text-xl font-bold text-slate-800 text-center text-medium">
                    {name}
                  </h2>
                  <div className="inline-block overflow-hidden">
                    <img
                      src={urlFor(image)}
                      alt={name}
                      className="w-64 h-44 transition-transform hover:scale-110 duration-300 hover:shadow-lg "
                    />
                  </div>
                  <p className="text-red-600 uppercase mt-3 font-bold text-right mr-4 text-sm">
                    {amount} products
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <div className="flex gap-16 px-10 flex-wrap max-md:flex-col items-center justify-center max-md:px-12">
          <div className=" inline-block rounded-lg overflow-hidden flex-1">
            <img
              src="/assets/productCategory/satisfiedcustomer.jpg"
              alt="customer"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-slate-800 font-mono font-bold text-large">
              Experience Hassle-Free Shopping for the Latest Gadgets
            </h2>
            <div className="border-b-4 border-b-red-600 w-36 mt-4 mb-6"></div>
            <p className="text-slate-400 font-semibold ">
              We prioritize your shopping experience. Enjoy a seamless journey
              as you explore our carefully curated selection of the latest
              gadgets and electronics. With fast shipping, easy returns, and
              dedicated customer support, we are here to ensure you find exactly
              what you need—all while feeling valued and satisfied.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div>
          <h2 className="text-red-600 text-large font-mono font-bold text-center">
            Trending items
          </h2>
        </div>
      </section>
      <section>
        <div className="flex bg-gray-100 w-[97%] mx-auto rounded-md py-4 space-y-8 space-x-10 max-lg:flex-col">
          <div className="px-20">
            <h3 className="uppercase font-mono text-slate-600">
              Client's testimonial
            </h3>
            <h2 className="text-slate-800 font-mono font-bold text-large">
              Our customers Love Us <br /> Lets Look Reviews
            </h2>
            <div className="border-b-4 border-b-red-600 w-36 mt-4 mb-6"></div>
            <p className="text-slate-400 font-semibold ">
              See why our gadgets are making waves. From seamless functionality
              to exceptional customer service, our customers share their thought.
            </p>
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => {

  const categoryQuery = '*[_type == "category"]';
  let categories = [];
  const bannerQuery = `*[_type == "banner"]`
  let banners = []
  try {
    categories = await client.fetch(categoryQuery);
    banners = await client.fetch(bannerQuery)
  } catch (error) {
    console.error('Error fetching data:',error);
  }

  return {
    props: { banners, categories },
  };
};

export default Home;
