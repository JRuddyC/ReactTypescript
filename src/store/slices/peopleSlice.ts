import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import IPeople from "../interfaces/IPeople";
import IPerson from "../interfaces/IPerson";
import { fetchGetPeople, fetchGetPersonById } from "../thunks/peopleThunks";

const initialState: IPeople = {
    rows: [],
    status: 'idle',
    count: 0,
    personSelected: {
        id: 0,
        name: 'name',
        surname: 'surname',
        ci: 'xxxxxxxxxx-xx',
        age: 0,
        phone: '00 0000000',
        status: "idle"
    }
}

export const peopleSlice = createSlice({
    name: 'people/slice',
    initialState,
    reducers: {
        setOnePerson: (state, action: PayloadAction<{ id: number, person: IPerson }>) => {

            if (state.personSelected.id === action.payload.id) {
                state.personSelected = action.payload.person
            }

            state.rows = state.rows.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload.person;
                }
                return item;
            });
        },
        addPerson: (state, action: PayloadAction<IPerson>) => {
            if (state.rows.length < 10)
                state.rows = state.rows.concat(action.payload)
            state.count++
        },
        resetPeople: (state) => {
            state = initialState
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
            .addCase(fetchGetPersonById.pending, (state) => {
                state.personSelected.status = "loading"
            })
            .addCase(fetchGetPersonById.fulfilled, (state, action: PayloadAction<IPerson>) => {
                state.personSelected = action.payload
                state.personSelected.status = "succeeded"
            })
            .addCase(fetchGetPersonById.rejected, (state) => {
                state.personSelected.status = "failed"
            })
    }
})

export const { resetPeople, setOnePerson, addPerson } = peopleSlice.actions
export const selectPeople = (state: RootState) => state.peopleReducer
export default peopleSlice.reducer