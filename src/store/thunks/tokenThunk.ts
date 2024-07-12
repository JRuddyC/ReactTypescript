import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services/axios"
import { RootState } from ".."

export const refreshAuthToken = createAsyncThunk(
    'tokenSlice/refreshAuthToken',
    async (_, { getState }) => {
        const state = getState() as RootState;
        const refreshToken = state.appReducer.tokenState.refreshToken
        const newAuthToken = await api.post('refresh', {}, { headers: { 'r-token': refreshToken } })
        return newAuthToken.data
    }
)