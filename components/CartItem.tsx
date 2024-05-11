"use client";
import Image from "next/image";
import React from "react";

const CartItem = ({ cartitem }: { cartitem: any }) => {
  return (
    <div className="flex mt-5">
      <div className="h-[150px] w-[200px]">
        <Image
          className="object-fill h-[150px] w-[150px] "
          src={cartitem?.image}
          height={100}
          width={150}
          alt=""
        />
      </div>
      <div className="w-[70%]">
        <h1 className="text-lg">{cartitem?.title}</h1>
        <p className="text-[#007600]">In Stock</p>
        <div className="flex gap-3 ">
          <input type="checkbox" name="" id="" />
          <p>
            This will be Gift{" "}
            <span className="text-[#007185] cursor-pointer">Learn more</span>
          </p>
        </div>
        <h1 className="text-[#CC0C39] cursor-pointer ">REMOVE</h1>
      </div>
      <div className="">
        <h3 className="font-bold">{`$${cartitem?.price}`}</h3>
      </div>
    </div>
  );
};

export default CartItem;
