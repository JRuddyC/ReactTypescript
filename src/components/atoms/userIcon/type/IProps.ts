import React from "react"

export default interface IProps {
    src: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
    size: 'small' | 'medium' | 'large'
}