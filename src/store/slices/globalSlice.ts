import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."

const initialState = {
    currentPageTable: 1
}

export const globalSlice = createSlice({
    name: 'global/Slice',
    initialState,
    reducers: {
        increment: (state) => {
            state.currentPageTable -= 1
        },
        decrement: (state) => {
            state.currentPageTable += 1
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPageTable = action.payload
        }
    }
})

export const { increment, decrement, setCurrentPage } = globalSlice.actions
export const selectGlobal = (state: RootState) => state.appReducer.globalState
export default globalSlice.reducer