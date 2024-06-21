import React from 'react'
import './styles.scss'
import IProps from './type/IProps'

const Input: React.FC<IProps> = (props: IProps) => {
    const { id, type, placeholder, variant, onChange, rounded } = props
    return (
        <input
            name={id}
            id={id}
            className={`input ${variant ? 'input-' + variant : ''} ${rounded ? 'rounded' : ''}`}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            // pattern='.{6,}'
        />
    )
}

export default Input