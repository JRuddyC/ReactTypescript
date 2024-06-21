import React from 'react'
import IProps from './type/IProps'
import './styles.scss'
const Subtitle: React.FC<IProps> = (props: IProps) => {
    const { text, align } = props
    return (
        <h2 className={align}>{text}</h2>
    )
}

export default Subtitle