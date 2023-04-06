import { createSlice } from '@reduxjs/toolkit'
import { initialFilterState } from '../initialValues'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.search = action.payload
      return state
    },
    changeSortingValue: (state, action) => {
      state.sorting = action.payload
    }
  }
})

export const { changeSearchValue, changeSortingValue } = filterSlice.actions

export const filterReducer = filterSlice.reducer