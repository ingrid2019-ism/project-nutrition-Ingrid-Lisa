import React from 'react'
import { useSelector } from 'react-redux'
import { products } from "reducers/product"


export const ShowInfo = () => {
  const productInfo = useSelector(state => state.products.product)
  console.log("prodInfo",productInfo)
  /* if( !products === true) */ 
  return(
    <>
      <div>
       <h1> PRODUCT INFO: {productInfo.status === 1 && productInfo.product.product_name}
       </h1>
       <p>
       <img src = {productInfo.status === 1 && productInfo.product.image_front_small_url}/>
       The whole thing weighs:{productInfo.status === 1 && productInfo.product.product_quantity}
       <br></br>
       100g contains: {productInfo.status === 1 && productInfo.product.nutriments.sugars}g sugar and
       {productInfo.status === 1 && productInfo.product.nutriments.fat}g fat
       </p>
       <h2>
         Choose to be healthy - Is this food good for you?
       </h2>
       
       
      </div>
      </>
  )
}
