import React from "react"

export default interface IProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'transparent'
    rounded?: boolean
    outlined?: boolean
    text: string
    children: React.ReactNode
    right?: boolean
}