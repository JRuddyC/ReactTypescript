import React from 'react'
import IProps from './type/IProps'
import './styles.scss'
const Title: React.FC<IProps> = (props: IProps) => {
    const { text, align } = props
    return (
        <h1 className={align}>{text}</h1>
    )
}

export default Title