"use client";
import { useSupabae } from "@/lib/supabase/hooks/useSupabase";
import Image from "next/image";
import React, { useEffect } from "react";
import CategoryWise from "./shared/CategoryWise";

const HomePage = () => {
  const { mensProduct, getMensProduct, womensProduct, getWomenProduct } =
    useSupabae();
  useEffect(() => {
    getMensProduct();
    getWomenProduct();
  }, []);
  return (
    <div>
      <div className="w-[80%] mx-auto relative">
        <div>
          <Image src={"/background.jpg"} height={400} width={1500} alt="" />
        </div>
        <div className="grid grid-cols-4 gap-x-8 ml-5 absolute bottom-0  h-[370px] ">
          {mensProduct.map((item: any) => {
            return <CategoryWise product={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="pt-[150px] w-[80%] mx-auto">
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 ml-5">
          {womensProduct.map((item: any) => {
            return <CategoryWise product={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
