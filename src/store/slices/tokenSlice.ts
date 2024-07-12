import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."


interface IToken {
    accessToken: string | null
    refreshToken: string | null
}

const initialState: IToken = {
    accessToken: null,
    refreshToken: null
}



export const tokenSlice = createSlice({
    name: 'tokenSlice',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<IToken>) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        setAuthToken: (state, action: PayloadAction<IToken>) => {
            state.accessToken = action.payload.accessToken
        },
        resetToken: (state) => {
            state.accessToken = null
            state.refreshToken = null
        }
    },
})

export const { setToken, resetToken, setAuthToken } = tokenSlice.actions
export const selectSessionToken = (state: RootState) => state.appReducer.tokenState
export default tokenSlice.reducer