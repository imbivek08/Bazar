"use client";
import Image from "next/image";
import React from "react";
import Ratings from "./shared/Ratings";
import AddToCartContainer from "./AddToCartContainer";

const SingleProduct = ({ data }: { data: any }) => {
  const product = data[0];
  console.log(product);
  return (
    <div className="ml-10 pt-10 flex gap-10">
      <div className="flex items-center justify-center bg-gray-100 h-[800px] w-[600px] rounded-md overflow-hidden">
        <Image
          src={product?.image}
          width={500}
          height={700}
          alt=""
          className="mix-blend-darken p-8"
        />
      </div>
      <div className="w-[600px] flex flex-col gap-[15px]">
        <h1 className="text-2xl">{product?.title}</h1>
        {/* <Ratings ratings={product?.rating} /> */}
        <p>{product?.description}</p>
        <h1 className=" text-lg font-bold">{`$${product?.price}`}</h1>
      </div>
      <div>
        <AddToCartContainer price={product?.price} />
      </div>
    </div>
  );
};

export default SingleProduct;
