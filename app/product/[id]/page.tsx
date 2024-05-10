"use client";
import SingleProduct from "@/components/SingleProduct";
import { useSupabae } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { id } = useParams();

  const { singleProduct, getSingleProduct } = useSupabae();
  useEffect(() => {
    getSingleProduct(Number(id));
  }, [id]);

  return (
    <div>
      <SingleProduct data={singleProduct} />
    </div>
  );
};

export default Page;
