"use client";
import { useSupabae } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const parms = useParams();
  console.log(parms.id);
  const { singleProduct, getSingleProduct } = useSupabae();
  useEffect(() => {
    getSingleProduct(Number(parms.id));
  }, []);
  console.log(singleProduct);
  return <div>k{singleProduct[0]?.title}</div>;
};

export default Page;
