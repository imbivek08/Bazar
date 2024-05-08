import { useState } from "react"
import { supabase } from "../products";

export const useSupabae = ()=>{
    const [products,setProducts] = useState<any>([]);
    const getData = async()=>{
        let {data,error} = await supabase.from('Products').select('*');
        if(data){
            setProducts(data);
            console.log(data)
        }
        if(error){
            console.log(error);
        }

        
    }
    return {products,getData}
}