// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { RootState } from ".."
// import api from "../../services/axios"

// interface IToken {
//     accessToken: string | null
//     refreshToken: string | null
// }

// const initialState: IToken = {
//     accessToken: null,
//     refreshToken: null
// }



// export const tokenSlice = createSlice({
//     name: 'tokenSlice',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<IToken>) => {
//             state.accessToken = action.payload.accessToken
//             state.refreshToken = action.payload.refreshToken
//         },
//         setAuthToken: (state, action: PayloadAction<IToken>) => {
//             state.accessToken = action.payload.accessToken
//         },
//         resetToken: (state) => {
//             state.accessToken = null
//             state.refreshToken = null
//         }
//     }
// })

// export const refreshAuthToken = createAsyncThunk(
//     'tokenSlice/refreshAuthToken',
//     async (_, { getState }) => {
//         const state: any = getState()
//         const refreshToken = state.appReducer.tokenState.refreshToken
//         const newAuthToken = await api.post('refresh', _, { headers: { 'r-token': refreshToken } })
//         return newAuthToken.data
//     }
// )

// export const { setToken, resetToken, setAuthToken } = tokenSlice.actions
// export const selectSessionToken = (state: RootState) => state.appReducer.tokenState
// export default tokenSlice.reducer