/* 
- Show Info printar ut info ifrån fetch
- reducer product gör fetch och setProduct till store

Hur sparar vi till store och hur funcar setProduct? 
Fyll på om vi kommer på med fler trådar:)

testa använda [0] för att plocka ut ett första object */


import React from "react";

import { products} from "reducers/product"
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
       <ShowInfo/>
      <GetProduct/>
     
    </Provider>
  )}