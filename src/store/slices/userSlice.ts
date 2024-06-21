import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface IUser {
    id: number | null
    username: string | null
    person_id: number | null
}

const initialState: IUser = {
    id: null,
    username: null,
    person_id: null
}


export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.person_id = action.payload.person_id
        },
        resetUser: (state) => {
            state.id = null
            state.username = null
            state.person_id = null
        }
    },
})

export const { setUser, resetUser } = userSlice.actions

export const selectUser = (state: RootState) => state.appReducer.userState
export default userSlice.reducer