import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./HomeProducts.css"

function HomeProducts() {
    const [products,setProducts] = useState([]);
    useEffect(async()=>{
        const data = await fetch(process.env.REACT_APP_PROXY+'/products',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "accept": "application/json"
            }
        })
        const response = await data.json();
        setProducts(response.data);
    },[])   
    return (
        <div className="products-container">
            
            {products.map((v,i)=>{
              return  (
                  <ProductCard image={v.image} name={v.name} price={v.price}/>
                  )
            })}
        </div>
    )
}

export default HomeProducts
