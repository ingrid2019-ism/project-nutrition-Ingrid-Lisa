/* Need to finish styling */

import React from "react";
import { products, loader} from "reducers/product"
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {GetProduct} from "components/GetProduct"
import {ShowInfo} from "components/ShowInfo"



const reducer = combineReducers({
  loader: loader.reducer,
  products: products.reducer
})


const store = configureStore({ reducer })



export const App = () => {
  
  return (
    <Provider store={store}>
      <loader/>
      <ShowInfo/>
      <GetProduct/>
    </Provider>
  )}

/*   Not pushing? */