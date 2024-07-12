import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../store"
import { selectUser } from "../store/slices/userSlice"
import { selectSessionToken } from "../store/slices/tokenSlice"
import { useEffect } from "react"
import { fetchUserRole, selectUserRole } from "../store/slices/userRoleSlice"

export const useUserRoleDetails = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { status, roles } = useSelector(selectUserRole)
    const { id } = useSelector(selectUser)
    const { accessToken } = useSelector(selectSessionToken)

    useEffect(() => {
        if (status !== 'succeeded') {
            dispatch(fetchUserRole({ user_id: id }))
        }
    }, [accessToken])
    return { id, roles }
}