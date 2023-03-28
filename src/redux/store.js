import { configureStore, createReducer } from '@reduxjs/toolkit'
import { getInitialValues } from './initialValues'
import { cartReducer } from './slices/cart'
import { filterReducer } from './slices/filter'
import { userReducer } from './slices/user'

export const store = configureStore({
    preloadedState: getInitialValues(),
    reducer: {
        user: userReducer,
        filter: filterReducer,
        cart: cartReducer,
    }
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
}) 