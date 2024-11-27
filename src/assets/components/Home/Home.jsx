import axios from "axios"
import { useEffect, useState } from "react";
import ProductItem from "../productItem/productItem";
import Loader from "../loader/loader";
 export function Home (){

    let [products,setProducts]= useState([])

    async function getProducts(){
      let {data}= await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProducts(data)
    }
    useEffect(()=>{
        getProducts()
    },[])
    return <div >
        <div className="row flex flex-wrap gap-x-4 p-5">
          {products.length > 0 ? products.map(product => <>
        <ProductItem product={product}/>
        </>) : <Loader/>}
        </div>
       
    </div>
}