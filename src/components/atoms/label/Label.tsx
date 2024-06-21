import React from 'react'
import IProps from './type/IProps'
import './styles.scss'
const Label: React.FC<IProps> = (props: IProps) => {
    const { text, variant, htmlFor } = props
    return (
        <label className={`label ${variant ? 'label-' + variant : ''}`} htmlFor={htmlFor}>{text}</label>
    )
}

export default Label