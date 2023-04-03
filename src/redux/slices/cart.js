import { createSlice } from '@reduxjs/toolkit'
import { initialCartState } from '../initialValues'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.find(el => el.id === action.payload)
      if (productInCart) {
        productInCart.count++
        return state
      }

      state.push({
        id: action.payload,
        count: 1,
        isChecked: false,
      })
    },
    clearCart: () => {
      return initialCartState
    },
    incrementProduct: (state, action) => {
      const productInCart = state.find(el => el.id === action.payload)
      if (productInCart) {
        productInCart.count++
        return state
      }
    },
    decrementProduct: (state, action) => {
      const productInCart = state.find(el => el.id === action.payload)
      if (productInCart) {
        if (productInCart.count === 1) {
          return state.filter(el => el.id !== action.payload)
        }
        productInCart.count--

        return state
      }
    },
    removeFromCart: (state, action) => {
      // state = action.payload
      // return state
      return state.filter(el => el.id !== action.payload)
    },
    removeAllProductsFromCart: () => {
      return initialCartState
    },
    changeCheckStatus: (state, action) => {
      const productInCart = state.find(el => el.id === action.payload._id)

      if (productInCart) {
        productInCart.isChecked = action.payload.isChecked
        return state
      }

      return state
    }
  }
})

export const { addToCart,
  clearCart,
  removeFromCart,
  removeAllProductsFromCart,
  incrementProduct,
  decrementProduct,
  changeCheckStatus } = cartSlice.actions

export const cartReducer = cartSlice.reducer