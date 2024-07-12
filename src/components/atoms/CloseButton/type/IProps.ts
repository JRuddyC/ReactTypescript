import React, { MouseEventHandler } from "react";

export default interface IProps {
    children?: React.ReactNode
    rounded?: boolean
    onClick?: MouseEventHandler
}