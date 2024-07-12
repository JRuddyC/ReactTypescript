import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import IUserRole from "../interfaces/IUserRole"
import api from "../../services/axios"
import { RootState } from ".."

const initialState: IUserRole = {
    roles: [],
    status: 'idle'
}

export const fetchUserRole = createAsyncThunk(
    'userRoleSlice/fetchRolePermission',
    async ({ user_id }: { user_id: number | null }) => {
        const response = await api.get(`/assignRoleByUser/${user_id}`)
        return response.data.data
    }
)

export const userRoleSlice = createSlice({
    name: 'userRoleSlice',
    initialState,
    reducers: {
        resetUserRole: (state) => {
            state.roles = []
            state.status = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserRole.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUserRole.fulfilled, (state, action: PayloadAction<IUserRole>) => {
                state.roles = action.payload.roles
                state.status = 'succeeded'
            })
            .addCase(fetchUserRole.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { resetUserRole } = userRoleSlice.actions
export const selectUserRole = (state: RootState) => state.userRoleReducer
export default userRoleSlice.reducer