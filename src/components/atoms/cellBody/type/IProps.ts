import React from "react"

export default interface IProps {
    children?: React.ReactNode
    variant?: "default" | 'primary' | 'secondary' | "dark" | "light"
    onClick?: any
}