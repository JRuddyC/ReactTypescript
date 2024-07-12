import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import api from "../../services/axios";
import IPeople from "../interfaces/IPeople";
import IPerson from "../interfaces/IPerson";



const initialState: IPeople = {
    rows: [],
    status: 'idle',
    count: 0
}

interface IPage {
    page: number
    limit: number
}

export const fetchGetPeople = createAsyncThunk(
    'peopleSlice/fetchGetPeople',
    async ({ pagination }: { pagination: IPage }) => {
        const { page, limit } = pagination
        const response = await api.get('person', { params: { page, limit } })
        return response.data.data
    }
)

export const peopleSlice = createSlice({
    name: 'people/slice',
    initialState,
    reducers: {
        setPeople: (state, action: PayloadAction<IPeople>) => {
            state.rows = action.payload.rows
            state.status = "succeeded"
        },
        setOnePerson: (state, action: PayloadAction<{ id: number, person: IPerson }>) => {
            state.rows = state.rows.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload.person;
                }
                return item;
            });
        },
        addPerson: (state, action: PayloadAction<IPerson>) => {
            state.rows = state.rows.concat(action.payload)
        },
        resetPeople: (state) => {
            state.rows = []
            state.status = "idle"
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchGetPeople.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchGetPeople.fulfilled, (state, action: PayloadAction<any>) => {
                state.count = action.payload.count
                state.rows = action.payload.rows
                state.status = "succeeded"
            })
            .addCase(fetchGetPeople.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export const { setPeople, resetPeople, setOnePerson, addPerson } = peopleSlice.actions
export const selectPeople = (state: RootState) => state.peopleReducer
export default peopleSlice.reducer