import React from 'react'
import { useSelector } from 'react-redux'
import {products} from "reducers/product"

export const ShowInfo = () => {
  const productInfo = useSelector(state => state.products.product)
  console.log("prodInfo",productInfo)
  /* if( !products === true) */ 
  return(
      <div>
       <h1> {productInfo.product.product_name} </h1>
      </div>
  )
}