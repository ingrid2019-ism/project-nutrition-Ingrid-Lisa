import React from 'react'
import { useSelector } from 'react-redux'
import { products } from "reducers/product"
import styled from "styled-components"


export const ShowInfo = () => {
  const productInfo = useSelector(state => state.products.product)
  console.log("prodInfo",productInfo)
  
  return(
    <>
    
    {productInfo.product && productInfo.status === 1 && (
      <Main>
       <h1> Choose to be healthy - Is   {productInfo.status === 1 && productInfo.product.product_name} good for you?
       </h1>
       <Content>
       <Image src = {productInfo.status === 1 && productInfo.product.image_front_small_url}/>
       <Text>
       The whole thing weighs:{productInfo.status === 1 && productInfo.product.product_quantity}
       <br></br>
       100g contains: {productInfo.status === 1 && productInfo.product.nutriments.sugars}g sugar and
       {productInfo.status === 1 && productInfo.product.nutriments.fat}g fat
       </Text>
       </Content>
       <h2>
         Make the right choice!
       </h2>
      </Main>
      )}
       {productInfo.status === 0 && <h1>OUPS! CANT FIND</h1>}
      </>
  )
}

const Main = styled.div`
background: powderblue;
padding: 0.7rem;
display:flex;
flex-direction: column;
align-items:center;
`;

const Image = styled.img`
  width:300px;
  height: auto;
`;
const Content = styled.div`
display:flex;
flex-direction:column;
@media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Text = styled.p`
font-size: 1rem;
`;