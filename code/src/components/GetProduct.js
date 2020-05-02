import React from "react"
import {fetchProduct} from "reducers/product"
import {useDispatch} from "react-redux"
import { BarcodeScanner } from "components/BarcodeScanner"
import {ScanBarcodeBtn} from "components/ScanBarcodeBtn"
import styled from "styled-components"

export const GetProduct = (code) => {
  const dispatch = useDispatch()
  
  const onDetected = (code) => {
  console.log(`CodeLOG: ${code}`)
  dispatch(fetchProduct(code))
  }
  return (
    <Main>
      <Title>
        Make the right choice!
      </Title>
      <Text color="red" > Check your food here before eating</Text>
      <ScanBarcodeBtn/>  
    <Text>
    <label>
      {" "}
      Push button to scan your product with the camera or enter the barcode manually:{" "}
      (testercode:7311070347272 )
    <input type="text" onChange={(e) => onDetected(e.target.value) } ></input>
    </label>
    </Text>
    </Main>
  )
}

const Text = styled.h2`
font-size: 1rem;
color: ${(props) => props.color};
`;

const Title = styled.h1`
font-family: 'Lobster', cursive;
font-size: 2rem;
font-weight:bold;
color: red;
`


const Main = styled.div`
background: powderblue;
padding: 2rem;
height: 100vh;
display:flex;
flex-direction: column;
align-items:center;
`;