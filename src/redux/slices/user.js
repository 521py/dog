import { createSlice } from '@reduxjs/toolkit'
import { initialUserState } from '../initialValues'

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => {
            state = action.payload
            return state
        },
        removeUser: (state) => {

            return initialUserState
        },
    }
})

export const { setUser, removeUser } = userSlice.actions

export const userReducer = userSlice.reducer