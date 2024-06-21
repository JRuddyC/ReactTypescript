import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../store"
import { useEffect } from "react"
import { fetchDetailedInfo, selectPerson } from "../store/slices/personSlice"
import { selectUser } from "../store/slices/userSlice"
import { selectSessionToken } from "../store/slices/tokenSlice"

export const usePersonDetails = () => {
    const dispatch = useDispatch<AppDispatch>()
    const personInfo = useSelector(selectPerson)
    const user = useSelector(selectUser)
    const token = useSelector(selectSessionToken)


    useEffect(() => {
        if (personInfo.status === 'idle') {
            dispatch(fetchDetailedInfo({ id: user.person_id, token: token.accessToken }))
        }
    }, [])

    return { personInfo, user }
}