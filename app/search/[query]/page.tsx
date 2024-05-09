"use client";
import SearchResult from "@/components/SearchResult";
import { useSupabae } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { query } = useParams();
  const { products, getData, getFilteredData, filterData } = useSupabae();
  useEffect(() => {
    getFilteredData(query.toString());
  }, []);

  return (
    <div>
      <SearchResult data={filterData} />
    </div>
  );
};

export default Page;
