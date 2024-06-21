import React from "react";

export default interface IProps {
    name?: string
    children?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'transparent'
    rounded?: boolean
    outline?: 'primary' | 'secondary' | 'success' | 'danger'
    type?: 'submit' | 'reset' | 'button'
    text?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}