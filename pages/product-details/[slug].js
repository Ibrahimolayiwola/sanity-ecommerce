import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import { HiStar } from "react-icons/hi";
import { useStateContext } from "../../context/StateContext";

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
    current
    }
 }`;
  let productSlug = [];
  try {
    productSlug = await client.fetch(query);
  } catch (error) {
    console.error(error); 
  }
  const paths = productSlug.map((product) => ({
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
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  let product = [];
  try {
    product = await client.fetch(query);
  } catch (error) {
    console.error(error);
  }

  return {
    props: { product },
  };
};


const ProductDetails = ({ product}) => {
  const {name, image, price, description} = product
  const {quantity, increaseQuantity, decreaseQuantity, addToCart} = useStateContext()
  const urlExtractor = (images) => images?.map((image) => image.asset ? urlFor(image).url(): null).filter(Boolean);
  const imageUrls = urlExtractor(image);
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  return (
    <div className="p-4 flex justify-center items-center min-h-[100vh]">
      <div className="flex justify-center gap-10 flex-wrap">
        <div className="space-y-6">
          <div className="bg-gray-100 rounded-md p-2">
            <Image
              src={currentImage}
              alt={name}
              priority
              width={300}
              height={300}
            />
          </div>
          <div className="flex items-center gap-4">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-red-200"
                onMouseOver={() => setCurrentImage(url)}
              >
                <Image src={url} alt={name} width={60} height={60} priority />
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[400px] space-y-4">
          <h2 className="font-bold text-black text-lg">{name}</h2>
          <div className="flex text-red-600 items-center">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <span className="text-black">(8 reviews)</span>
          </div>
          <p className="font-bold">Details:</p>
          <p className="!mt-2">{description}</p>
          <p className="font-bold text-lg text-red-600">#{price}</p>
          <div className="flex gap-6 items-center flex-wrap">
            <p>Quantity:</p>
            <div className="border border-gray-300 flex items-center flex-1 justify-center">
              <button
                className="flex-1 py-1"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <p className="flex-1 text-center border-x border-gray-300 py-1">
                {quantity}
              </p>
              <button
                className="flex-1 py-1"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <button className="uppercase text-black border border-gray-300 text-sm flex-1  py-2 font-semibold" onClick={() => {addToCart(product, quantity)}}>
              Add to cart
            </button>
            <button className="bg-red-600 text-white uppercase text-sm flex-1 py-2 font-semibold">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
