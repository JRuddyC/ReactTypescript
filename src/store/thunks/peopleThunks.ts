import { createAsyncThunk } from "@reduxjs/toolkit"
import IPage from "../interfaces/IPage"
import api from "../../services/axios"

export const fetchGetPeople = createAsyncThunk(
    'peopleSlice/fetchGetPeople',
    async ({ pagination }: { pagination: IPage }) => {
        const { page, limit } = pagination
        const response = await api.get('person', { params: { page, limit } })
        return response.data.data
    }
)

export const fetchGetPersonById = createAsyncThunk(
    'peopleSlice/fetchGetPerson',
    async ({ id }: { id: number | null }) => {
        const response = await api.get('person/' + id)
        return response.data.data
    }
)