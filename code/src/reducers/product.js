import { createSlice } from '@reduxjs/toolkit'


export const products = createSlice({
    name: 'products',
    initialState: {
      product: {}
    },
    reducers: {
      setProduct: (state, action) => {
        state.product = action.payload
      }
    }
  })


  export const loader = createSlice({
    name: "loader",
    initialState:{
      isLoading: false
    },
    reducers: {
      setLoading: (state, action) => {
        state.product = action.payload
      }
    }
  })
  
  export const fetchProduct = code => {
    return dispatch => {
      dispatch(loader.actions.setLoading(true)) 
      fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
        .then((res) => res.json())
        .then((json )=> {
          console.log(json)
          dispatch(products.actions.setProduct(json))
          dispatch(loader.actions.setLoading(false)) 
        })
    }
  }