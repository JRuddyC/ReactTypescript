import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../store"
import { fetchGetPeople, selectPeople } from "../store/slices/peopleSlice"
import { useEffect } from "react"
import { selectSessionToken } from "../store/slices/tokenSlice"

interface IPage {
    page: number,
    limit: number
}

export const useGetPeople = (pagination: IPage) => {
    const dispatch = useDispatch<AppDispatch>()
    const peopleList = useSelector(selectPeople)
    const { accessToken } = useSelector(selectSessionToken)

    useEffect(() => {
        dispatch(fetchGetPeople({ pagination }))
    }, [accessToken])

    return { peopleList }
}