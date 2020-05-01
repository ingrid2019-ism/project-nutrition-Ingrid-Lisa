import React from "react"
import {fetchProduct} from "reducers/product"
import {useDispatch} from "react-redux"
import { BarcodeScanner } from "components/BarcodeScanner"

export const GetProduct = (code) => {
  const dispatch = useDispatch()
  
  const onDetected = (code) => {
  console.log(`CodeLOG: ${code}`)
  dispatch(fetchProduct(code))
  }
  return (
      <>
    <label>
        {" "}
        Manual barcode goes here:{" "}
        (testercode:Type 7311070347272 )
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
    </label>
    <p>
        {" "}
    </p>
    <BarcodeScanner onDetected={code}></BarcodeScanner>
    </>
  )
}