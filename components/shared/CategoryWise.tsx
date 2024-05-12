import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const CategoryWise = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="h-[470px] w-[325px] bg-white rounded-md border-zinc-500 border-2 relative">
        <div className="pl-4">
          <h1 className="text-lg font-medium">{product?.category}</h1>
          <div className="p-3">
            <Image
              className="p-2 ml-4"
              src={product?.image}
              height={250}
              width={200}
              alt=""
            />
          </div>
          <div>
            <p className="text-sm">
              {product?.title.split(" ").slice(0, 10).join(" ")}
            </p>
          </div>
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className=" ml-4 w-[280px] h-[45px] bg-[#F7CA00] rounded-xl absolute bottom-3 "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CategoryWise;
