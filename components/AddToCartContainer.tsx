import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";

const AddToCartContainer = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="w-[400px] h-[600px] shadow-xl border-solid border-slate-200 border-2 rounded-lg">
      <div className="p-5 flex flex-col gap-5">
        <h1 className="text-2xl">{`$${product?.price}`}</h1>
        <p>
          <span className="text-[#007185]">FREE delivery</span>{" "}
          <span className="font-bold">Thursday, 16 May.</span>{" "}
          <span>Order within</span>{" "}
          <span className="text-[#007600]">18 hrs 44 mins.</span>
          <span className="text-[#007185]"> Details</span>
        </p>
        <div className="pr-10">
          <h1 className="text-[#007600] text-sm">In Stock</h1>
          <div className="flex justify-between">
            <div>
              <p>Delivered by</p>
              <p>Sold by</p>
            </div>
            <div>
              <h3>Amazon</h3>
              <h3>American Cart</h3>
            </div>
          </div>
        </div>
        <form className="flex gap-2 items-center">
          <label>Quantity:</label>
          <select
            name="number"
            className="h-[40px] w-[55px] rounded-md bg-[#EFEFEF]  text-center"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </form>

        <button
          className=" ml-5 w-[300px] h-[45px] bg-[#F7CA00] rounded-2xl"
          onClick={() => {
            dispatch(addToCart(product));
            router.push("/cart");
          }}
        >
          Add to Cart
        </button>
        <button className=" ml-5 w-[300px] h-[45px] bg-[#FFA41C] rounded-2xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AddToCartContainer;
