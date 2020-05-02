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
font-size: 1.2rem;
`


const Main = styled.div`
background: powderblue;
padding: 1rem;
display:flex;
flex-direction: column;
align-items:center;
`;