import { ChangeEvent } from "react"

export default interface IProps {
    id?: string
    type?: "text" | "number" | "password"
    placeholder?: string
    variant?: null | 'primary' | 'secondary' | 'success' | 'danger'
    rounded?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}