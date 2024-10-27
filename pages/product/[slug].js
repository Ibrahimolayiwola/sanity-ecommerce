import React from "react";
import { client, urlFor } from "../../lib/client";

const ProductDetails = ({ products, product }) => {
  console.log(product);
  return (
    <>
      <div>
        {/* <img src={urlFor()} /> */}
        {product.name}
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == 'product'] {
  slug {
     current
   }
  }`;

  const products = await client.fetch(query);
  console.log("hello world");
  // console.log(products);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]`;
  const productQuery = `*[_type == 'product']`;

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
