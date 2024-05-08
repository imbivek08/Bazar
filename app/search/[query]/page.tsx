"use client";
import { useSupabae } from "@/lib/supabase/hooks/useSupabase";
import { log } from "console";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { query } = useParams();
  const { products, getData } = useSupabae();
  useEffect(() => {
    getData();
  }, []);
  //console.log(products);

  return <div>{query}</div>;
};

export default Page;
