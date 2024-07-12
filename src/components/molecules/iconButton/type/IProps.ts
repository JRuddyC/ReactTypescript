import React from "react";

export default interface IProps {
    name?: string
    children?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'transparent'
    rounded?: boolean
    outline?: boolean
    type?: 'submit' | 'reset' | 'button'
    text?: string
    right?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}