import React from "react"

export default interface IProps {
    scope?: "row" | "col"
    children?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'dark' | 'light' 
}