import { createSlice } from '@reduxjs/toolkit'
import { initialFilterState, initialUserState } from '../initialValues'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        changeSearchValue: (state, action) => {
            state.search = action.payload
            return state
        },
    }
})

export const { changeSearchValue } = filterSlice.actions

export const filterReducer = filterSlice.reducer