import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
    isCollapseDropdownMenu: false
}

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState,
    reducers: {
        setIsCollapseDropdownMenu: (state) => {
            state.isCollapseDropdownMenu = !state.isCollapseDropdownMenu
        }
    }
})

export const { setIsCollapseDropdownMenu } = uiSlice.actions
export const selectUI = (state: RootState) => state.uiReducer
export default uiSlice.reducer