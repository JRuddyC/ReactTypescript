import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../index"
import api from "../../services/axios"
import IPerson from "../interfaces/IPerson";

const initialState: IPerson = {
    id: null,
    name: null,
    surname: null,
    ci: null,
    age: null,
    phone: null,
    status: 'idle',
}

export const fetchDetailedInfo = createAsyncThunk(
    'personSlice/fetchDetailedInfo',
    async ({ id }: { id: number | null }) => {
        const response = await api.get(`person/${id}`);
        return response.data.data;
    }
);

export const personSlice = createSlice({
    name: 'personSlice',
    initialState,
    reducers: {
        setPerson: (state, action: PayloadAction<IPerson>) => {
            state = action.payload
        }
        ,
        resetPerson: (state) => {
            state.id = null
            state.name = null
            state.surname = null
            state.ci = null
            state.age = null
            state.phone = null
            state.status = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailedInfo.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchDetailedInfo.fulfilled, (state, action: PayloadAction<IPerson>) => {
                state.id = action.payload.id
                state.name = action.payload.name
                state.surname = action.payload.surname
                state.ci = action.payload.ci
                state.age = action.payload.age
                state.phone = action.payload.phone
                state.status = 'succeeded'
            })
            .addCase(fetchDetailedInfo.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { setPerson, resetPerson } = personSlice.actions
export const selectPerson = (state: RootState) => state.personReducer
export default personSlice.reducer