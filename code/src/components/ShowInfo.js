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
       <img src = {productInfo.status === 1 && productInfo.product.image_front_small_url}/>
       {/* {productInfo.code} {productInfo.status} */}
       </h1>
      </div>
      </>
  )
}
