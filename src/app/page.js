import React from "react";
import Banner from "./components/banner";
import "../../styles/global.css";
import Header from "./components/header";
import Product from "./components/product";
import { client } from "../../lib/client";
const Home = ({ products }) => (
  <div>
    <Header />
    <Banner />
    <h1>Welcome to the Home Page!</h1>
    <div>
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  </div>
);
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
