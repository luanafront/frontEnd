import React from "react";
import ProductCard from "../productCard";
import "./index.css"

function ProductGrid ({data}) {
  return (
    <ul className="boxProductGrid">
       {data.map((item) => {
          return ( 
            <ProductCard key={item.id} {...item}/>
          )
        })}
    </ul>
  )
}

export default ProductGrid