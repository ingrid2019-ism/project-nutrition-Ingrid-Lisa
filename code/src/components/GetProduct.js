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
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
    </label>
    <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
    </p>
    <BarcodeScanner onDetected={code}></BarcodeScanner>
    </>
  )
}