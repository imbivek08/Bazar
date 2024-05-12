import { useState } from "react";
import { supabase } from "../products";

export const useSupabae = () => {
  const [products, setProducts] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [singleProduct ,setSingleProduct] = useState<any>([])
  const [mensProduct,setMensProduct] = useState<any>([]);
  const [womensProduct,setWomensProduct] = useState<any>([]); 
  const getData = async () => {
    let { data, error } = await supabase.from("Products").select("*");
    if (data) {
      setProducts(data);
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getFilteredData = async (query: string) => {
    let { data, error } = await supabase
      .from("Products")
      .select("*")
      .or(
        `title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`
      ); // cloth
    if (data) {
      setFilterData(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getSingleProduct = async (id: number) => {
    let { data, error } = await supabase.from("Products").select("*").eq("id", `${id}`);
    if(data){
        setSingleProduct(data)
    }
    if (error){
        console.log(error)
    }
  };
  const getMensProduct = async()=>{
      let {data,error} = await supabase.from("Products").select("*").like('category',"men's clothing")
      if(data){
        setMensProduct(data)
      }
  }
  const getWomenProduct = async()=>{
    let {data,error} = await supabase.from("Products").select("*").like('category',"women's clothing")
    if(data){
      setWomensProduct(data)
    }
}
  return { products, getData,
     filterData, getFilteredData,
     singleProduct,getSingleProduct,
     mensProduct,getMensProduct,
     womensProduct,getWomenProduct };
};
