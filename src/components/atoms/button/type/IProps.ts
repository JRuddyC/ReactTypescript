import React, { MouseEventHandler } from "react";

export default interface IProps {
    name?: string
    type?: 'submit' | 'reset' | 'button'
    children?: React.ReactNode,
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'transparent'
    rounded?: boolean
    outline?: 'primary' | 'secondary' | 'success' | 'danger'
    onClick?: MouseEventHandler
}