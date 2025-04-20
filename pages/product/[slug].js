import React from "react";
import { client, urlFor } from "../../lib/client";
import Product from "../../components/Product";
import Banner from "../../components/Banner";

const ProductDetails = ({ products, banners }) => {
  return (
    <>
      <Banner heroBanner={banners.length && banners[0]} />
      <div className="p-4">
        <ul className="flex gap-8 justify-center items-center flex-wrap">
          {products.length &&
            products.map((product, index) => (
              <li key={index}>
                <Product product={product} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == 'category'] {
  slug {
     current
   }
  }`;

  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'product' && category->slug.current == '${slug}']`;
  const products = await client.fetch(query);
  const bannerQuery = `*[_type == 'banner']`;
  const banners = await client.fetch(bannerQuery);
  return {
    props: { products, banners },
  };
};

export default ProductDetails;
