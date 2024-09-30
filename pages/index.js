import React from "react";
import Banner from "../components/Banner.js";
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
  console.log(banners);

  console.log(serializedBanners);

  return (
    <div className="w-full">
      <Banner heroBanner={serializedBanners.length && serializedBanners[0]} />
      <ul className="flex gap-6 justify-center items-center flex-wrap w-[90%] mx-auto mt-10">
        {serializedProducts?.map((product) => (
          <li key={product._id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
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
