import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import styled from "styled-components"


export const ScanBarcodeBtn = () => {
  const [showScanner, setShowScanner] = useState(false)

  return (
    <>
      {!showScanner && (
        
         
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
       
      )}

      {showScanner && (
        <>
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
        }} />
       
        </>
      )}
      
    </>
  )
}
const Button = styled.button`
padding: 15px;
color: red;
border: solid 1px red;
`
