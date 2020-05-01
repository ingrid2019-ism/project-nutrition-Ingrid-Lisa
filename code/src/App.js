/* Buggen i Quagga är fixad.
- GetProduct läser in code från kamera eller manuellt och dispatchar fetchProduct funktionen
- Show Info printar ut info ifrån fetch
- reducer product gör fetch och setProduct till store

Just nu kan den läsa Code, men ej fetcha..
Hur hänger alla "product / products" ihop, och hur kopplar vi ihop alla functioner?!
Hur sparar vi till store och hur funcar setProduct? 
Fyll på om vi kommer på med fler trådar:)*/


import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import {fetchProduct, products} from "reducers/product"
import {useDispatch} from "react-redux"
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {GetProduct} from "components/GetProduct"
import {ShowInfo} from "components/ShowInfo"

const reducer = combineReducers({
  /* ui: ui.reducer, */
  products: products.reducer
})


const store = configureStore({ reducer })



export const App = () => {
  
  return (
    <Provider store={store}>
      <GetProduct/>
      <ShowInfo/>
    </Provider>
  )}