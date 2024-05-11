"use client";
import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCount } from "@/redux/features/cartSlice";

const Cart = () => {
  const carts = useSelector(selectCount);
  console.log(carts);
  return (
    <div className="p-10 ">
      <div className="flex w-[84%] justify-between ml-5">
        <div>
          <h1 className="font-bold text-2xl">Shooping Cart</h1>
          <p>Deselect all items</p>
        </div>
        <h3>Price</h3>
      </div>

      <div className="shadow-lg border-solid width-2 border-slate-400 p-5">
        {carts.map((cart: any) => {
          return <CartItem cartitem={cart} key={cart.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
