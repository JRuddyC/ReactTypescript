import React, { ChangeEvent } from "react";

export default interface IProps {
    id?: string
    children?: React.ReactNode
    placeholder?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onClick?: React.MouseEventHandler<HTMLDivElement>
}